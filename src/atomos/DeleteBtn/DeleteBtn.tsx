//!librerias
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

//!componentes
//!hooks
//!firebase
//!funciones
//! variables u otros
//! archivos css

//! types importados o internos

import { DeleteButtonInterface } from "./type";

export const DeleteBtn: FC<DeleteButtonInterface> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      onClick={onClick}
      icon={faTrashCan}
      size="lg"
      className={className}
    />
  );
};
