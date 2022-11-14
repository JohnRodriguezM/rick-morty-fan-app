//!librerias

import React, { useState, FC } from "react";
import { Button } from "@nextui-org/react";
//!components

import { EthContributions } from "./EthContributions/EthContributions";
import { PaypalContributions } from "./PaypalContributions/PaypalContributions";

/*import Button from "@mui/material/Button";*/

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros
//!types

const buttonStyle = {
  margin: "10px auto",
  padding: "1.6rem",
  borderRadius: "0.5rem",
  background:
    "linear-gradient(rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1))",
};

export const Contributions: FC = ({ ...props }) => {
  const [donationView, setDonationView] = useState(false);

  return (
    <div
      className="my-5 mx-auto text-center
        grid grid-cols-1  max-w-5xl
      "
    >
      <div className="my-0 mx-auto text-center ">
        <h1 className="text-2xl font-bold">Donations</h1>
        <p className="my-2 text-sm w-11/12 mx-auto max-w-xl">
          If you like my work and want to support me, you can make a donation
          through the following platforms:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-5 mx-auto text-center">
          <Button
            shadow
            size = "md"
            color="secondary"
            style={buttonStyle}
            onClick={() => setDonationView(true)}
          >
            Ethereum
          </Button>
          <Button
            shadow
            size = "md"
            color="secondary"
            style={buttonStyle}
            onClick={() => setDonationView(false)}
          >
            Paypal
          </Button>
        </div>
      </div>
      <div className="my-0 mx-auto text-center ">
        {donationView ? <EthContributions /> : <PaypalContributions />}
      </div>
    </div>
  );
};
