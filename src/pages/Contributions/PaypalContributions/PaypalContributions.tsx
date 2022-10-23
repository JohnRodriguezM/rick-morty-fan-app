import * as React from "react";
import { useState, useEffect } from "react";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { Typography } from "@mui/material";

export const PaypalContributions = () => {
  const [paid, setPaid] = useState("");

  const handleChangePaid = ({ target }: any) => {
    setPaid(target.value);
  };

  const id =
    "AT8kKgHXlwfsgcV_c9XtYaT901EKeajjlyrlUp-kmzfwcQ-JZA7Y09d2y8mX2uLpUix-HO0qrvK6S01U";
  const product = {
    price: String(paid),
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      alert("Transaction completed by " + details.payer.name.given_name);
    });
  };

  const onClick = (data: any, actions: any) => {
    const hasAlreadyPaid = false;
    if (hasAlreadyPaid) {
      alert("ya hiciste una donación, muchas gracias");
      return actions.reject();
    }

    return actions.resolve();
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: product.price,
          },
        },
      ],
    });
  };

  return (
    <div>
      <Typography>Donations on Paypal</Typography>
      <input
        className="input input-bordered w-full max-w-md focus:ring  focus:outline-none p-1 my-5 text-black"
        type="number"
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
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onClick={(data, actions) => onClick(data, actions)}
            onCancel={(data: any) => {
              setPaid("");
              alert(`Transaction cancelled.`);
            }}
            onError={(err: any) => alert(`error: ${err}`)}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};
