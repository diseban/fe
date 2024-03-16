"use client";

// import { Wrapper } from "@googlemaps/react-wrapper"
import { Wallet } from "ethers";
// import { useState } from "react";
// import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldContract, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const MULT = 2 ** 64;

function getRandomInt(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function calculateDriversLocation() {
  // wagmi.publishDriversLocation();
  // array of 3 elements
  const locations: any = [];

  for (let i = 0; i < 10; i++) {
    // London boundig box
    // 51.60626753931472, -0.27914068790075364
    // 51.37505908567797, 0.18703222847858303
    const wallet = Wallet.createRandom();

    const lat = getRandomInt(51.37505908567797, 51.60626753931472);
    const lon = getRandomInt(-0.27914068790075364, 0.18703222847858303);
    // locations.push({
    //   lat: lat * MULT,
    //   lon: lon * MULT,
    //   address: wallet.address,
    // });
    locations.push([wallet.address, lat * MULT, lon * MULT]);

    // console.log(`lat: ${lat}, lon: ${lon}, address: ${wallet.address}`);
  }

  console.log(locations);
  // get contract

  return locations;
}

const publishDriversLocation = calculateDriversLocation();

export default function Page() {
  const { address: connectedAddress } = useAccount();

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "GeoCab",
    functionName: "publishDriverLocations",
    args: [publishDriversLocation],
    value: 0,
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  // console.log(yourContract);

  return (
    <h1>
      Hello, Seb Page!
      <Address address={connectedAddress} />
      {/* <button onClick={publishDriversLocationTwo}>Click me</button> */}
      {/* <button className="btn btn-primary" onClick={() => writeAsync()} disabled={isLoading}>
        {isLoading ? <span className="loading loading-spinner loading-sm"></span> : <>Send</>}
      </button> */}
      <button className="btn btn-primary" onClick={() => writeAsync()}>
        Send TX
      </button>
    </h1>
  );
}
