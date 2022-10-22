//!librerias

import React, { useState, FC } from "react";

//!components

import { EthContributions } from "./EthContributions/EthContributions";
import { PaypalContributions } from "./PaypalContributions/PaypalContributions";

import Button from "@mui/material/Button";

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros
//!types

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
        <div className="my-5 mx-auto text-center">
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "1rem" }}
            onClick={() => setDonationView(true)}
          >
            Ethereum
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "1rem" }}
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
