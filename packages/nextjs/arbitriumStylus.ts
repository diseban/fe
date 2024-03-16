// from https://docs.arbitrum.io/stylus/reference/testnet-information

import { defineChain } from "viem";

export const arbitriumStylus = /*#__PURE__*/ defineChain({
    id: 23_011_913,
    name: "Arbitrum Stylus",
    network: "arbitrum-stylus",
    nativeCurrency: {
        name: "Arbitrum Stylus Ether",
        symbol: "ARB",
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ["https://stylus-testnet.arbitrum.io/rpc"],
        },
        public: {
            http: ["https://stylus-testnet.arbitrum.io/rpc"],
        },
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://stylus-testnet-explorer.arbitrum.io/",
        },
    },
    // contracts: {
    //     // multicall3: {
    //     //     address: "0xca11bde05977b3631167028862be2a173976ca11",
    //     //     blockCreated: 81930,
    //     // },
    //     // https://stylus-testnet-explorer.arbitrum.io/address/0xa63076D8b4eBD456a6a888E2F854aCf3eAA942c1
    //     geocab: {
    //         address: "0xa63076D8b4eBD456a6a888E2F854aCf3eAA942c1",
    //         blockCreated: 1120835,
    //     }
    // },
    testnet: true,
});
