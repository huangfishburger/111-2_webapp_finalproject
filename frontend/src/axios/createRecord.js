import { instance } from "../connection";

export const createRecord = async ( formObject ) => {
  const { data } = await instance.post('/record', {
    userId: null,
    userName: formObject.userName,
    species: formObject.speciesName,
    hashtage: formObject.hashtage,
    coords: formObject.placeCoord,
    placeName: formObject.placeName,
    post: formObject.context,
    speciesImagePath: formObject.animalPhoto,
    authorized: formObject.isAuthPulic,
  });

  // console.log(data);
  return data
} 
