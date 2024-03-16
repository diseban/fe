import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  23011913: {
    GeoCab: {
      address: "0xdaE60a2aaB4fa82Eda90f370E42b1734B8EDc494",
      // blockCreated: 1120835,
      "abi": [
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "int128",
                  "name": "lat",
                  "type": "int128"
                },
                {
                  "internalType": "int128",
                  "name": "lon",
                  "type": "int128"
                }
              ],
              "internalType": "struct IGeocab.Location",
              "name": "origin",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "int128",
                  "name": "lat",
                  "type": "int128"
                },
                {
                  "internalType": "int128",
                  "name": "lon",
                  "type": "int128"
                }
              ],
              "internalType": "struct IGeocab.Location",
              "name": "destination",
              "type": "tuple"
            }
          ],
          "name": "bookTrip",
          "outputs": [],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "geohash",
              "type": "string"
            }
          ],
          "name": "driverAtGeohash",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "increment",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "number",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "driver",
                  "type": "address"
                },
                {
                  "internalType": "int128",
                  "name": "lat",
                  "type": "int128"
                },
                {
                  "internalType": "int128",
                  "name": "lon",
                  "type": "int128"
                }
              ],
              "internalType": "struct IGeocab.DriverLocation[]",
              "name": "drivers",
              "type": "tuple[]"
            }
          ],
          "name": "publishDriverLocations",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "new_number",
              "type": "uint256"
            }
          ],
          "name": "setNumber",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      inheritedFunctions: {},
    },
  }
} as const;


export default externalContracts satisfies GenericContractsDeclaration;
