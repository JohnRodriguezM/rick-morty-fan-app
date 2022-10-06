import React, { useEffect } from "react";

import { CardCharacter } from "../../components/CardCharacter/CardCharacter";

export const LikedCharacters = ({ liked, setLiked, ...props }: any) => {
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("likedCharacters")!);
    console.log(data);
    setLiked(data);
  }, [liked, setLiked]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "1rem",
        padding: "1rem",
      }}

    >

      {liked.map((el: any) => {
        return (
          <CardCharacter
            tammanio={150}
            key={el.id}
            name={el.name}
            image={el.image}
            species={el.species}
            status={el.status}
          />
        );
      })}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
