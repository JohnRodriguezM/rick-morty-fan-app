interface locationPropIndividualCharacter{
  name: string;
  url: string;
}
interface likedCharacters{
  created: string;
  episode: string[];
  gender: string;
  id: number | string;
  image: string;
  location: locationPropIndividualCharacter;
  name: string;
  origin: any;
  species: string;
  status: string;
  type: string;
  url: string;
}