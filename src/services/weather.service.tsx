import { api } from "../helpers/api-helper";
import { Weather } from "../models/weather";

export const weatherService = {
  getByCityName,
};

const apiUrl = "http://api.openweathermap.org/data/2.5";
const apiKey = "3f73895441da6be8bc396439c4360af0";

async function getByCityName(city: string, lng: string) {
  return api<Weather>(
    `${apiUrl}/weather?q=${city}&appid=${apiKey}&lang=${lng}&units=metric`
  );
}
