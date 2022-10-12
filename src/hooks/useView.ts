import { useState } from "react";

export function useView(initialState: boolean = false) :any {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleModal = () => setIsOpen(!isOpen);

  return [isOpen, toggleModal];
}
