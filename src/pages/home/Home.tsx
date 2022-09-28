import React from "react";
import { HeaderWithAuth } from "../../atomos/Header/HeaderWithAuth";
import { GetCharacters } from "../../components/Characters/GetCharacters";
import { AuthView } from "../AuthView";

export const Home = (props: any) => {
  return (
    <div>
      {
        props.children
      }
    </div>
  );
};
