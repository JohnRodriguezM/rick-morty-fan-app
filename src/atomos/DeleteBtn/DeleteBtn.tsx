import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

//*css
import '../../css/defaultCss/DeleteBtn.css'

export const DeleteBtn = () => {
  return (
    <>
    {/*tener en cuenta que se pueden agregar difrentes propiedades  al componete y además de esto es posible agregar un class name, por ende se procede a agregar un efecto hover y click usando tailwind css*/}
      <FontAwesomeIcon icon={faTrashCan} size="lg" inverse
      className = "hover:shadow-lg"
      />
      {/*no se ha aplicado por el stop propagation*/}
    </>
  );
};
