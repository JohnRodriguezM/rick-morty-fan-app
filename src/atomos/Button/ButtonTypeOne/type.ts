export enum buttonTypeOneType {
  primary = 'button',
  secondary = 'submit',
  success = 'reset',
}


export interface ButtonProps {
  text?: string;
  children?: any;
  onClick?: () => void;
  type: buttonTypeOneType;
  className?: string;
}
