//* definir la interface de los tipos de array que se va a definir dentro de data y dataBackUp

//!tipado de components
export interface GetMainCharacter {
  dataCharacter: Character[];
  setDataCharacter: Function;
  setDataBackUpCharacter: Function;
  deleteCharacter?: Function;
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

//? tipado para el episode que se recibe en el componente de episode
export interface EpisodeInterface{
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number | string;
  name: string;
  url: string;
}

//tipado para el objeto auth en su propiedad current user en el componente de login
export interface AuthUserInterface{
  accessToken: string;
  auth: any;
  displayName: string;
  email: any;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: any;
  phoneNumber: any;
  photoURL: any;
  proactiveRefresh: any;
  providerData: any;
  providerId: string;
  reloadListener: any;
  reloadUserInfo: any;
  stsTokenManager: any;
  tenantId: any;
  uid: string;
}

//? tipodo auth
export interface SignValidation {
  email: string;
  password: string | number;
}
