import React, { useState } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { faHourglassEmpty } from "@fortawesome/free-solid-svg-icons";

export const PaypalCheckoutButton = (props: any): any => {
  //*definir luego el prodiucto por parte de las props
  /*const { product } = props;*/

  const [paid, setPaid] = useState("");
  const handleChangePaid = (e: any) => {
    setPaid(e.target.value);
  };
  const id =
    "AT8kKgHXlwfsgcV_c9XtYaT901EKeajjlyrlUp-kmzfwcQ-JZA7Y09d2y8mX2uLpUix-HO0qrvK6S01U";
  const product = {
    price: String(paid),
  };

  return (
    <>
      <br />
      <br /><br /><br /><br />
      <div>
        <input
        style = {{color:"red"}}
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
    </>
  );
};
