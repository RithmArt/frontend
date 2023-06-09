import ERC_20 from "abi/erc20.json";
import { Multicall } from "ethereum-multicall";
import { ethers } from "ethers";

interface ReturnValues {
  [index: string]: any;
}

class MethodBase {
  reference: string;
  methodName: string;
  methodParameters: any[];

  constructor(reference: string, methodName: string, methodParameters: any[]) {
    this.reference = reference;
    this.methodName = methodName;
    this.methodParameters = methodParameters;
  }
}

class ContractCall {
  contractAddress: string;
  reference: string;
  abi: any[];
  calls: MethodBase[] = [];

  constructor(
    address: string,
    abi: any[],
    reference?: string,
    calls?: MethodBase[]
  ) {
    this.reference = reference ?? address;
    this.contractAddress = address;
    this.abi = abi;

    if (calls) {
      this.calls = calls;
    }
  }

  setCall(methodName: string, methodParams: any[], methodId = ""): void {
    const call = new MethodBase(
      `${methodName}${methodId}`,
      methodName,
      methodParams
    );

    this.calls.push(call);
  }
}

//contract array should be provided with
// [ {reference: string, contractCalls: [ {reference: string, methodName: string, methodParameters: any}, ... ], abi: []}, ... ]
async function getMultiContractData(
  provider: ethers.providers.BaseProvider,
  contractArray: ContractCall[],
  keys?: string[]
): Promise<ReturnValues> {
  const multicall = new Multicall({ ethersProvider: provider });
  console.log({ contractArray });
  const call = await multicall.call(contractArray);
  console.log({ call });
  const resultSet = {} as ReturnValues;

  const contractNames = Object.keys(call.results);
  contractNames.forEach((name, idx) => {
    const result = {} as ReturnValues;
    call.results[name].callsReturnContext.forEach((values) => {
      //I don`t want an array when the result is not an array
      if (values.returnValues.length > 1) {
        result[values.reference] = convertMBNtoEthersBN(values.returnValues);
      } else if (values.returnValues.length === 1) {
        result[values.reference] = convertMBNtoEthersBN(values.returnValues)[0];
      } else {
        throw new Error("Return not found!");
      }
    });
    resultSet[keys ? keys[idx] : name] = result;
  });

  //result is [contractName: [ result1,... ],...]
  //result1 = { call: [return] }
  return resultSet;
}

//convert Multicall BN to Ethers BN
function convertMBNtoEthersBN(retArray: ReturnValues) {
  return retArray.map((ret: any) => {
    if (ret.type === "BigNumber") {
      return ethers.BigNumber.from(ret);
    }
    return ret;
  });
}

function getUserBalance(account: string, tokenAddress: string): ContractCall {
  const contractCall = new ContractCall(tokenAddress, ERC_20);
  contractCall.setCall("balanceOf", [account]);

  return contractCall;
}

export { ContractCall, getMultiContractData, getUserBalance };
