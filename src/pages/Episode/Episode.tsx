import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

export const Episode = () => {
  const { Id } = useParams();
  const [datos, setData] = useState<any>([]);
  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
    const getData = async (url: string) => {
      setCharacters([]);
      setData([]);
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setData(json);

        json.characters.map((el: any, index: number) => {
          fetch(el)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setCharacters((characters: any) => {
                const unicos = characters.filter(
                  (el: any) => el.id !== data.id
                );
                return [...unicos, data];
              });
            });
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData(`https://rickandmortyapi.com/api/episode/${Id}`);
  }, [Id]);

  return (
    <div>
      <div key={datos.id}>
        <h1>{datos.name}</h1>
        <h2>{datos.air_date}</h2>
        <h3>{datos.episode}</h3>
      </div>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(
            auto-fit,
            minmax(150px, 1fr)
          )`,
          gridGap: "1rem",
          listStyle: "none",
        }}
      >
        {characters.map((el: any, index: number) => (
          <li key={index} style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: '0 auto'}}>
            <p>{index}</p>
            <img src={el.image} alt={el.name} width="100" height="100" />
            <h4>{el.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
