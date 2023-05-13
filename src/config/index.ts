import { env } from "environment";
import membershipABI from "abi/membership.json";
import abominableSasquatchABI from "abi/abominable_sasquatch_workshop.json";
import { AbominableSasquatchWorkshop } from "abi/abi-types/AbominableSasquatchWorkshop";
import { Membership } from "abi/abi-types/Membership";
import louis from "../assets/louis.png";

const IS_MAINNET = env.NETWORK === "mainnet";

const MAX_RETRIES = 5;

const MAX_NFTS_TO_FETCH_ON_START = 50;

const WORKSHOPS = {
  membership: {
    address: "0xe0290c183e9F63A6f28938051443D9Ed47710073",
    abi: membershipABI,
    info: {
      name: "RITHM.ART Curatorship",
      descriptions:
        "RITHM is a collective focused on the the support, development and expansion Algorithmic Art culture. The 1st collection of memberships is The Abominable Sasquatch's debut collection, 1st Strokes. 1st Strokes is an on-chain generative art collection. 1st Strokes is a representation of the beginning of an artistic journey and culture. It is designed to provide a minimalist expression that bridges the natural depth and technical beauty of calligraphy and programming.",
      inspiration:
        "The collection captures an iterative sequence of apocalyptic scenarios which drift through the void of obliviousness. A future for which we won't be here, conformed by a present engulfed by sediments of time. A time that will shift what was once below with what was once above ( earth-civilization ), asserting fate's victory.",
    },
    creatorInfo: {
      image: louis,
      name: "creaTOR NAME",
      descriptions:
        "a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs ",
    },
    strokes: 1,
  },
  abominablesasquatch: {
    address: "0x46C7D3AD69d82360047BdC4204891483610365cC",
    abi: abominableSasquatchABI,
    info: {
      name: "The Workshop",
      inspiration:
        "The collection captures an iterative sequence of apocalyptic scenarios which drift through the void of obliviousness. A future for which we won't be here, conformed by a present engulfed by sediments of time. A time that will shift what was once below with what was once above ( earth-civilization ), asserting fate's victory.",
      descriptions:
        "The Workshop is a collection of iterative algorithmic pieces based on historically significant generative art pieces. The workshop is an on-chain generative art collection. The foundational skils represented provide insight into what is possible with algorithmic art. The workshop is supported by the RITHM for off chain rendering. Through the use of Workshop Batch 1 as a training set for the textual inversion, Abominable Sasquatch has created a bridge between verifiable on-chain training sources and Artificial Intelligence (A.I.) using Stable Diffusion. This collection builds upon the imagery of an emergent city, within the generative art pieces in Batch 1, with a prompt to create watercolor city blueprints.",
    },
    creatorInfo: {
      image: louis,
      name: "creaTOR NAME",
      descriptions:
        "a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs a lot of needed descs ",
    },
    strokes: 2,
  },
};
export type Workshops = keyof typeof WORKSHOPS;
export type WorkshopContract = Membership | AbominableSasquatchWorkshop;
export { IS_MAINNET, WORKSHOPS, MAX_RETRIES, MAX_NFTS_TO_FETCH_ON_START };
