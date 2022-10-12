

import React from "react";
import { HeaderWithAuth } from "../../atomos/Header/HeaderWithAuth";


export const Home = (props: any) => {
  return (
    <div>
     {/* <CryptoDonate
        cryptoDomain="<insert-domain>.crypto"
        infuraApi="<insert-infura-api>"
        colors={{
          primary: "#2096f3",
          secondary: "#fde199",
          button: "#1a78c2",
          buttonSecondary: "#fab601",
          text: "#ffffff",
        }}
        text={{
          title: "Donate",
          thanks: "Thank you for donating, see the below link for transaction",
          copied: "Address copied, please donate via wallet",
        }}
      />*/}

      {props.children}
    </div>
  );
};
