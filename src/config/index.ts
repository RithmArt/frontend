import { env } from "environment";
import membershipABI from "abi/membership.json";
import abominableSasquatchABI from "abi/abominable_sasquatch_workshop.json";
import { AbominableSasquatchWorkshop } from "abi/abi-types/AbominableSasquatchWorkshop";
import { Membership } from "abi/abi-types/Membership";
import abominable from "../assets/abominable.png";

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
        "The 1st collection of Rithm Art Curatorship NFTs are The Abominable Sasquatch's debut on-chain generative art collection, 1st Strokes. 1st Strokes is a representation of the beginning of a journey. It is designed to provide a minimalist expression that bridges the natural depth and technical beauty of calligraphy and programming.",
      inspiration:
        "1st Strokes takes a lot of its inspiration from ink painting and calligraphy brushes.    What often stands out in calligraphy is bold lines that vary in their depth. Depending on the ink there could be bleeding on the canvas. The path is a substantial part of a paint stroke.",
    },
    creatorInfo: {
      image: abominable,
      name: "The Abominable Sasquatch",
      descriptions:
        "The Abominable Sasquatch is an experimental algorithmic artist working. Abominable Sasquatch began as a co-founder of Snowball, one of the first DAOs on Avalanche. Abominable is Sasquatch in Snow Country",
    },

    strokes: 1,
  },
  abominablesasquatch: {
    address: "0x46C7D3AD69d82360047BdC4204891483610365cC",
    abi: abominableSasquatchABI,
    info: {
      name: "The Workshop",
      inspiration:
        "This collection is inspired by Jared Tarbell's 'Substrate.' The composition is meant to resemble city blueprints from satellite views, combining the beauty of generative art with the intrigue of emergent urban landscapes.",
      descriptions:
        "The Workshop are a series of iterative algorithmic art collections meant to evoke the beauty of algorithmic art and the intrigure of emergent urban landscapes.",
    },
    creatorInfo: {
      image: abominable,
      name: "Abominable Sasquatch",
      descriptions:
        "The Abominable Sasquatch is an experimental algorithmic artist working. Abominable Sasquatch began as a co-founder of Snowball, one of the first DAOs on Avalanche. Abominable is Sasquatch in Snow Country",
    },
    strokes: 2,
  },
};
export type Workshops = keyof typeof WORKSHOPS;
export type WorkshopContract = Membership | AbominableSasquatchWorkshop;
export { IS_MAINNET, WORKSHOPS, MAX_RETRIES, MAX_NFTS_TO_FETCH_ON_START };
export const campfireApiEndpoint = `https://campfire.exchange/api/accounts`;
export const treasuryAddress = "0x60104a2cdbb0207f4337036bcab90716b2925c69";
export const treasuryGalleryInfo = {
  title: "Treasury Gallery",
  descriptions: "Recent Acquisitions",
};
