import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URI = import.meta.env.VITE_BASE_URI;

const getFunction = async () => {
  try {
    const resp = await axios.get(
      `${BASE_URI}kyiv/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};

export default getFunction;
