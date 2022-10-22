import React, { useState, useEffect, FC } from "react";

import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export const EthContributions = () => {
  const myAccount = "0x5A813e8C551377d1487a0EaA2544642f6f56120e";

  const [error, setError] = useState<any>();
  const [transaction, setTransaction] = useState<any>([]);

  const startPayment = async ({ amount, address }: any) => {
    try {
      const provider = await detectEthereumProvider();

      if (!provider) throw new Error("ethereum wallet required");

      await window.ethereum.send("eth_requestAccounts");
      const providerEthers = new ethers.providers.Web3Provider(window.ethereum);
      const signer = providerEthers.getSigner();
      ethers.utils.getAddress(address);
      const tx = await signer.sendTransaction({
        to: address,
        value: ethers.utils.parseEther(amount),
      });

      setTransaction([tx]);
    } catch (err: any) {
      let mistake = err.message.substring(0, 25);
      setError(mistake);
    }
  };

  const handleSubmitSendEth = (e: any) => {
    const { target } = e;
    e.preventDefault();
    const data = new FormData(target);
    startPayment({
      address: data.get("address"),
      amount: data.get("amount"),
    });
    setError("");
    setTransaction("");
  };

  return (
    <div>
    <div className="my-0 mx-auto text-center max-w-4xl">
      <Typography>Donations on ethereum network</Typography> <br />
      <section className="my-0 mx-auto">
        <form
          onSubmit={handleSubmitSendEth}
          className="my-0 mx-auto text-black w-80   max-w-4xl"
        >
          <div className="my-0 mx-auto max-w-4xl">
            <input
              className="input input-bordered w-full  focus:ring  focus:outline-none p-1"
              type="text"
              name="address"
              id="address"
              placeholder="address"
              value={myAccount}
            />
          </div>{" "}
          <br />
          <div>
            <input
              className="input input-bordered w-full  focus:ring  focus:outline-none p-1"
              type="text"
              name="amount"
              id="amout"
              placeholder="amount"
            />
          </div>
          <br />
          <div>
            <Button type="submit" variant="contained" color="secondary">
              Send donation
            </Button>
          </div>
        </form>

        {error && (
          <div className="bg-white text-black p-4 flex flex-col  rounded-2xl my-7 max-w-md mx-auto">
            <p>{error}</p>
          </div>
        )}
        {transaction &&
          transaction.map((el: any) => {
            return (
              <div
                key={el.to}
                className="bg-white text-black p-4 flex flex-col  rounded-2xl my-7 max-w-md mx-auto"
              >
                <h6 className="font-medium">succesful transaction</h6>
                To:
                <p className="break-words font-semibold"> {el.to}</p>
                From:
                <p className="break-words font-semibold">{el.from}</p>
              </div>
            );
          })}
      </section>
    </div>
    </div>
  );
};
