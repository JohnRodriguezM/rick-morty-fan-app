import { useState } from "react";

//*realizar esta función para almacenar los elemntos en el local storage, se deja esta de manera provisional
export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState((data: any) => {
    try {
      console.log(data)
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value: any) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
