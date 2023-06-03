import { BigNumber } from "@ethersproject/bignumber";
import { Erc20 } from "abi/abi-types/Erc20";

export default async function checkTokenApprovalStatus(
  srcTokenContract: Erc20,
  swapAddress: string,
  spenderAddress: string,
  spendingValue: BigNumber
) {
  if (srcTokenContract == null) return false;
  if (spendingValue.eq(0)) return false;
  const tokenName = await srcTokenContract.name();
  const existingAllowance = await srcTokenContract.allowance(
    spenderAddress,
    swapAddress
  );

  console.debug(
    `Existing ${tokenName} Allowance: ${existingAllowance.toString()}`
  );
  if (existingAllowance.gte(spendingValue)) return true;

  return false;
}
