import axios from 'axios';

const instance = axios.create({
  baseURL: `http://localhost:4000/api/reverseGeocoding`,
});

export const getReverseGeocoding = async({lat, lon}) => {
  const { data: { location } } = await instance.get('/query',
    {
      params: 
      { 
        lat: lat,
        lon: lon, 
      } 
    }
  )
  
  return location
} 
