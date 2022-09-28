import StatusCodes from "http-status-codes";
import weatherService from "@services/weather-service";
import { Request, Response } from "express";

// **** Variables **** //

// Misc
const { OK } = StatusCodes;

// Paths
const paths = {
  basePath: "/weather",
  getCityWeather: "/city/:id",
  getCityForecast: "/city/forecast/:id",
} as const;

// **** Functions **** //

/**
 * Get weather.
 */
async function getCityWeatherById(_: Request, res: Response) {
  const { id } = _.params;
  const weatherData = await weatherService.getCityWeatherById(parseInt(id));
  return res.status(OK).json({ weatherData });
}

async function getCityForecastById(_: Request, res: Response) {
  const { id } = _.params;
  const weatherForeCastData = await weatherService.getCityForecastById(
    parseInt(id)
  );
  return res.status(OK).json({ weatherForeCastData });
}

// **** Export default **** //

export default {
  paths,
  getCityWeatherById,
  getCityForecastById,
} as const;
