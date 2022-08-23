import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { fetchData } from "../../helpers/fetchData";

export const ViewSpecificCharacter = (props: any) => {
  const { dataSpecifCharacter } = props;

  const params = useParams();
  console.log(params);

  return (
    <div>
      <ul>
        <li>{dataSpecifCharacter.name}</li>
        <li>{dataSpecifCharacter.status}</li>
        <li>{dataSpecifCharacter.species}</li>
        <li>{dataSpecifCharacter.id}</li>
      </ul>
    </div>
  );
};
