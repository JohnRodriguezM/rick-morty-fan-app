//!librerias

import React, { useState, FC } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//!components

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros
//!types

export const Contributions: FC = ({ ...props }) => {
  //*definir luego el prodiucto por parte de las props

  const [error, setError] = useState<any>();
  const [transaction, setTransaction] = useState<any>([]);

  const [paid, setPaid] = useState("");

  const myAccount = "0x5A813e8C551377d1487a0EaA2544642f6f56120e";

  const handleChangePaid = ({ target }: any) => {
    setPaid(target.value);
  };

  const id =
    "AT8kKgHXlwfsgcV_c9XtYaT901EKeajjlyrlUp-kmzfwcQ-JZA7Y09d2y8mX2uLpUix-HO0qrvK6S01U";
  const product = {
    price: String(paid),
  };

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
    <>
      <br />
      <div>
        <div className="my-0 mx-auto text-center">
          <Typography>Donations on ethereum network</Typography> <br />
          <section className="my-0 mx-auto">
            <form
              onSubmit={handleSubmitSendEth}
              className="my-0 mx-auto text-black"
            >
              <div className="my-0 mx-auto">
                <input
                  className="input input-bordered w-full max-w-md focus:ring  focus:outline-none p-1"
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
                  className="input input-bordered w-full max-w-md focus:ring  focus:outline-none p-1"
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

        <br />
        <hr />
        <br />
        <Typography>Donations on Paypal </Typography>
        <input
          className="input input-bordered w-full max-w-md focus:ring  focus:outline-none p-1 my-5 text-black"
          type="number"
          name=""
          id=""
          min="1"
          max="9"
          onChange={handleChangePaid}
          value={paid}
        />
        <p>El aporte que estás dando es de {paid || 0.001} USD</p>

        {paid && (
          <PayPalScriptProvider options={{ "client-id": id }}>
            <PayPalButtons
              style={{ layout: "vertical", color: "white", shape: "pill" }}
              createOrder={(_data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: product.price,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data: any, actions: any) => {
                return actions?.order
                  ?.capture()
                  .then(function (details: any): any {
                    alert(
                      "Transaction completed by " +
                        details?.payer?.name?.given_name
                    );
                  });
              }}
              onClick={(data, actions) => {
                const hasAlreadyPaid = false;
                if (hasAlreadyPaid) {
                  alert("ya hiciste una donación, muchas gracias");
                  return actions.reject();
                }

                return actions.resolve();
              }}
              onCancel={(data: any) => {
                alert("Transaction cancelled");
              }}
              onError={(err: any) => {
                alert(`aghhhhhhhhhhhhh ${err}`);
                console.log(err);
              }}
            />
          </PayPalScriptProvider>
        )}
      </div>
      <br />
      <hr />
      <br />
      <div>
        <Typography>Donations on Stripe</Typography>
      </div>
    </>
  );
};
