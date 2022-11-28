import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Character } from "../types/GetCharacterAll.services";

interface Children {
  children: JSX.Element | JSX.Element[];
}

interface LikedContextProps {
  likedCharacters: Character[];
  setLikedCharacters: (likedCharacters: any) => void;
}

export const LikedCharactersContext = createContext({
  likedCharacters: [],
  setLikedCharacters: (likedCharacters: any) => {},
} as LikedContextProps);

const likedCharactersInitialValue: Character[] = [];

export const LikedCharactersProvider = ({ children }: Children) => {
  const [likedCharacters, setLikedCharacters] = useLocalStorage(
    "likedCharacters",
    likedCharactersInitialValue
  );

  const dataLiked: LikedContextProps = {
    likedCharacters,
    setLikedCharacters,
  };

  return (
    <LikedCharactersContext.Provider value={dataLiked}>
      {children}
    </LikedCharactersContext.Provider>
  );
};
