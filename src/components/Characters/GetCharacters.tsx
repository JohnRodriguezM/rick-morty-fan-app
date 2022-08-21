import { useState, useEffect } from "react";

import { fetchData } from "../../helpers/fetchData";

export const GetCharacters = (): any => {
/*  const datos = [
    { name: "john", id: 1 },
    { name: "pepe", id: 2 },
    { name: "pae", id: 3 },
  ];*/
  const [data, setData] = useState<any>([]);
  //* manejo de data provisional, manejando de manera visual momentanea
  /*  const [dataUI, setDataUI] = useState<any>(null); */
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character", setData);
  }, []);

  const dataFilter = (id: string | number) => {
    console.log(id);
    const dataFilter = data.filter((el: any) =>  el.id !== id);
    /*console.log("hola");*/
    console.log(dataFilter)
    setData(dataFilter);
  };

  return (
    <div>
      <>
        {data.length > 0 && data.map((el: any) => {
          const { id } = el;
          return (
            <div key={el.name}>
              <li>{el.name}</li>
              <button onClick={() => dataFilter(id)}>X</button>
            </div>
          );
        })}
      </>
    </div>
  );
};
