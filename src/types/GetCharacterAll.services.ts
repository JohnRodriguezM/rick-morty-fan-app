//* definir la interface de los tipos de array que se va a definir dentro de data y dataBackUp

//!tipado de components
export interface GetMainCharacter {
  /*setLocalStorage: any;*/
  dataCharacter: any[];
  setDataCharacter: Function;
  dataBackUpCharacter: any[];
  setDataBackUpCharacter: Function;
  deleteCharacter: Function;
  findCharacter: Function;
}

export interface GetCharacterOut {
  dataCharacter: any[];
  dataBackUpCharacter: any[];
  deleteCharacter: Function;
  findCharacter: Function;
}

//* definir la interface de los tipos de array que se va a definir dentro de data y dataBackUp

export interface basePropIndividualCharacter {
  name: string;
  url: string;
}

interface locationPropIndividualCharacter extends basePropIndividualCharacter {}

interface originPropIndividualCharacter extends basePropIndividualCharacter {}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number | string;
  image: string;
  location: locationPropIndividualCharacter;
  name: string;
  origin: originPropIndividualCharacter;
  species: string;
  status: string;
  type: string;
  url: string;
}
