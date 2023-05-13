import { instance } from "../connection";

export const getRecords = async () => {
  const { data } = await instance.get('/record');

  return data
} 
