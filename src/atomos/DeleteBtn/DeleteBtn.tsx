import React,{FC} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import {DeleteButtonInterface} from './type'

export const DeleteBtn: FC<DeleteButtonInterface> = ({
  className,
  ...props
}) => {
  return (
      <FontAwesomeIcon
        icon={faTrashCan}
        size="lg"
        className={className}
      />
  );
};
