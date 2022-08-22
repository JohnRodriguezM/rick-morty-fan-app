
//* definir la interface de los tipos de array que se va a definir dentro de data y dataBackUp

export interface GetCharacterIn {
  dataCharacter: any[];
  setDataCharacter: Function;
  dataBackUpCharacter: any[];
  setDataBackUpCharacter : Function;
  deleteCharacter: Function;
  findCharacter:Function;
}