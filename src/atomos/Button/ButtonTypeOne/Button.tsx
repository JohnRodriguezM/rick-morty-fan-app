import { FC } from "react";

import { ButtonProps } from "./type";

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      aria-expanded="false"
    >
      {text || props.children}
    </button>
  );
};
