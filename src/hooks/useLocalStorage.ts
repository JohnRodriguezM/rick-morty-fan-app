import { useState } from "react";


//*realizar esta función para almacenar los elemntos en el local storage, se deja esta de manera provisional
export const useLocalStorage = (  ) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem("todos");
    return item ? JSON.parse(item) : [];
  });

  const setLocalStorage = (value: any) => {
    setValue(value);
    window.localStorage.setItem("todos", JSON.stringify(value));
  };

  return [value, setLocalStorage];
};
