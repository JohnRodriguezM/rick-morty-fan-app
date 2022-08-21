import { useState, useEffect,FC, ReactComponentElement } from "react";



//!funciones
import { fetchData } from "../../helpers/fetchData";


//!interfaces
import { GetCharacterIn } from "../../types/GetCharacterAll.services";



export const GetCharacters: FC<GetCharacterIn> = ({
  dataCharacter,
  setDataCharacter,
  dataBackUpCharacter,
  setDataBackUpCharacter,
  deleteCharacter,
}) => {
/*  const datos = [
    { name: "john", id: 1 },
    { name: "pepe", id: 2 },
    { name: "pae", id: 3 },
  ];*/
  
  //* manejo de data provisional, manejando de manera visual momentanea
  /*  const [dataUI, setDataUI] = useState<any>(null); */
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character", setDataCharacter, setDataBackUpCharacter);
  }, []);



  return (
    <div>
      <>
        {dataCharacter.length > 0 && dataCharacter.map((el: any) => {
          const { id } = el;
          return (
            <div key={el.name}>
              <li>{el.name}</li>
              <button onClick={() => deleteCharacter(id)}>X</button>
            </div>
          );
        })}
      </>
    </div>
  );
};
