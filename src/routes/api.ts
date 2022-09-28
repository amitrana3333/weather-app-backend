import { Router } from "express";
import weatherRoutes from "./weather-routes";

// **** Init **** //

const apiRouter = Router();

// **** Setup weather routes **** //

const weatherRouter = Router();

// Get weather by on id
weatherRouter.get(
  weatherRoutes.paths.getCityWeather,
  weatherRoutes.getCityWeatherById
);
// Get forecast based on id
weatherRouter.get(
  weatherRoutes.paths.getCityForecast,
  weatherRoutes.getCityForecastById
);
// Add weatherRouter
apiRouter.use(weatherRoutes.paths.basePath, weatherRouter);

// **** Export default **** //

export default apiRouter;
