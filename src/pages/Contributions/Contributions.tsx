import React, { useState } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

import Button from "@mui/material/Button";

export const Contributions = (props: any): any => {
  //*definir luego el prodiucto por parte de las props
  /*const { product } = props;*/
  const [error, setError] = useState<any>();
  const [transaction, setTransaction] = useState<any>([]);

  /*useEffect(() => {
    setError("");
    setTransaction("");
  }, []);*/

  const [paid, setPaid] = useState("");

  const [myAccount, setMyAccount] = useState('0x5A813e8C551377d1487a0EaA2544642f6f56120e')


  const handleChangePaid = (e: any) => {
    setPaid(e.target.value);
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
      let errr = err.message.substring(0, 25);

      setError(errr);
    }
  };

  const handleSubmitSendEth = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);

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
      <br />
      <br />
      <br />
      <br />
      <div>
        <div style={{ margin: " 0 auto", textAlign: "center" }}>
          <h2>donations on ethereum network</h2> <br />
          <section style={{ margin: "0 auto" }}>
            <form
              className=""
              onSubmit={handleSubmitSendEth}
              style={{ color: "#000", margin: "0 auto" }}
            >
              <div style={{ margin: "0 auto" }}>
                <input
                  className="input input-bordered w-96 focus:ring  focus:outline-none p-1"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="address"
                  value = {myAccount}
                />
              </div>{" "}
              <br />
              <div>
                <input
                  className="input input-bordered w-96 focus:ring  focus:outline-none p-1"
                  type="text"
                  name="amount"
                  id="amout"
                  placeholder="amount"
                />
              </div>{" "}
              <br />
              <div>
                <Button type="submit" variant="contained" color = "secondary">
                  Send donation
                </Button>
              </div>
            </form>

            {error && (
              <div className="bg-white text-black">
                <p>{error}</p>
              </div>
            )}
            {transaction &&
              transaction.map((el: any) => {
                return (
                  <div style={{ color: "#000", backgroundColor: " white" }}>
                    <h6>succesful transaction</h6>
                    <p>To: {el.to}</p>
                    <p>From: {el.from}</p>
                  </div>
                );
              })}
          </section>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        {/*<input
          style={{ color: "red" }}
          type="number"
          name=""
          id=""
          min="1"
          max="9"
          onChange={handleChangePaid}
          value={paid}
        />*/}

       {/* <p>El aporte que estás dando es de {paid || 0.001} USD</p>

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
        )}*/}
      </div>

      <br />
    </>
  );
};
