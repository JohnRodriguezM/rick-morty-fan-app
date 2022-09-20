export interface ButtonProps {
  text?: string;
  children?: any;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
  className?: string;
}
