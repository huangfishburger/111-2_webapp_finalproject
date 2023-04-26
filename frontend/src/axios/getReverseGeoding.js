import axios from 'axios';
//import { xml2json } from 'xml-js';

const instance = axios.create({
  baseURL: `http://localhost:4000/api`,
});

export const getReverseGeocoding = async (lat, lon) => {
  const { data: { location } } = await instance.get('/getReverseGeocoding',
    {
      params: 
      { 
        lat: lat,
        lon: lon, 
      } 
    }
  );
  const place_name = location["display_name"];
  const place_name_list = place_name.split(", ");
  //console.log(place_name_list);
  return place_name_list
} 
