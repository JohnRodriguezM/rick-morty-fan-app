import { useState } from "react";

export function useView(initialState: boolean = false) :any {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleModal = () => setIsOpen(!isOpen);
  /*const closeModal = () => setIsOpen(false);*/

  return [isOpen, toggleModal];
}
