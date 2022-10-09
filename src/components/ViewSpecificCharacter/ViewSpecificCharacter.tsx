import React, { useState, useEffect } from "react";



import { useParams } from "react-router-dom";


import { CardCharacter } from "../CardCharacter/CardCharacter";

export const ViewSpecificCharacter = ({
  deleteCharacter,
  dataCharacter,
  liked,
  setLiked,
}: any) => {
  /* const { dataSpecifCharacter } = props;*/

  const { Id } = useParams();
  /* console.log(params);*/

  const [infoCharacter, setInfoCharacter] = useState<any>([]);
  const [cap, setCap] = useState<any>([]);

  const handleLikeCharacter = (id: string | number) => {
    const dataFilter = liked.filter((el: any) => el.id !== id);
    setLiked([...dataFilter, infoCharacter]);

    window.localStorage.setItem(
      "likedCharacters",
      JSON.stringify([...dataFilter, infoCharacter])
    );
  };

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const res = await fetch(url);
        const json: any = await res.json();
        console.log(json);
        setInfoCharacter(json);

        json.episode.map((el: any, index: number) => {
          fetch(el)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setCap((characters: any) => {
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
    getData(`https://rickandmortyapi.com/api/character/${Id}`);
  }, [Id]);
  return (
    <div
      className="md:grid md:grid-cols-2 gap-1 md:gap-5 
    md:place-items-center md:place-content-center"
    >
      <section>
        <CardCharacter
          {...infoCharacter}
          cap={cap}
          handleLikeCharacter={handleLikeCharacter}
          tammanio={325}
          liked={liked}
          setLiked={setLiked}
        />
      </section>
      <div >
        <iframe
          /*width="560"
          height="315"*/
          style={{ margin: "0 auto" }}
          className=" w-96 h-96  md:w-96 md:h-96"
          src="https://www.youtube.com/embed/Tm7dFM_v57A"
          title="YouTube video player"
          /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /*allowfullscreen*/
        ></iframe>
      </div>
      {/*<video src="https://youtu.be/Tm7dFM_v57A" controls></video>*/}
    </div>
  );
};
