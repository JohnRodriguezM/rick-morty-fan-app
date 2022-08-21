import { useState, useEffect } from "react";

import { fetchData } from "../../helpers/fetchData";

export const GetCharacters = (): any => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character",setData);
  }, []);

  return (
    <div>
      <>
      {data?.results.map((el:any)=> {
        return (
          <li key = {el.id}>{el.name}</li>
        )
      })}
      </>
    </div>
  );
};
