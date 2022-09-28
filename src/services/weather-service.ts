import { InternalServerError } from "@shared/errors";
import axios from "axios";
// **** Functions **** //

/**
 * Get weather based on city id.
 */
async function getCityWeatherById(cityId: number) {
  const { WEATHER_URL, WEATHER_API_KEY } = process.env;
  try {
    const response = await axios.get(
      `${WEATHER_URL}/weather?id=${cityId}&appid=${WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new InternalServerError();
  }
}

/**
 * Get weather forecast based on  city id.
 */
async function getCityForecastById(cityId: number) {
  const { WEATHER_URL, WEATHER_API_KEY } = process.env;
  try {
    const response = await axios.get(
      `${WEATHER_URL}/forecast?id=${cityId}&appid=${WEATHER_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new InternalServerError();
  }
}
// **** Export default **** //

export default {
  getCityWeatherById,
  getCityForecastById,
} as const;
