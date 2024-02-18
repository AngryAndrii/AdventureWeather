import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URI = import.meta.env.VITE_BASE_URI;

const getFunction = async (city) => {
  try {
    const resp = await axios.get(
      `${BASE_URI}${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export default getFunction;
