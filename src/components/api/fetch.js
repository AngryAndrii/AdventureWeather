import axios from "axios";
import { getDayOfWeek } from "../modal/form/dateChanger";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URI = import.meta.env.VITE_BASE_URI;

export const getFunction = async (city) => {
  try {
    const resp = await axios.get(
      `${BASE_URI}${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (queryCity, startDate, endDate) => {
  try {
    const resp = await axios.get(
      `${BASE_URI}${queryCity}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const extractFromWeatherData = (weatherdata) => {
  const { days } = weatherdata;
  let arr = [];
  days.map((el) => {
    let dayOfWeek = getDayOfWeek(el.datetime);
    let icon = el.icon;
    let tempmin = el.tempmin;
    let tempmax = el.tempmax;
    arr.push({ dayOfWeek, icon, tempmin, tempmax });
  });
  console.log(arr);
  return arr;
};
