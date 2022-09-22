import React from "react";
import { HeaderWithAuth } from "../../atomos/Header/HeaderWithAuth";
import { GetCharacters } from "../../components/Characters/GetCharacters";
import { AuthView } from "../AuthView";

export const Home = (props: any) => {
  return (
    <div>
      <HeaderWithAuth dataCharacter={props.dataCharacter} />
      <AuthView
        google={props.google}
        setGoogle={props.setGoogle}
        getOutApp={props.getOutApp}
        ghAuth={props.ghAuth}
        
      />
      <GetCharacters
        setLocalStorage={props.setLocalStorage}
        dataCharacter={props.dataCharacter}
        setDataCharacter={props.setDataCharacter}
        dataBackUpCharacter={props.dataBackUpCharacter}
        setDataBackUpCharacter={props.setDataBackUpCharacter}
        deleteCharacter={props.deleteCharacter}
        findCharacter={props.findCharacter}
      />
    </div>
  );
};
