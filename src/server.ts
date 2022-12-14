import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import StatusCodes from "http-status-codes";
import express, { Request, Response, NextFunction } from "express";

import "express-async-errors";

import BaseRouter from "./routes/api";
import logger from "jet-logger";
import { CustomError } from "@shared/errors";
import envVars from "@shared/env-vars";

// **** Init express **** //

const app = express();

// **** Set basic express settings **** //

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(envVars.cookieProps.secret));
app.use(cors());

// Show routes called in console during development
if (envVars.nodeEnv === "development") {
  app.use(morgan("dev"));
}

// Security
if (envVars.nodeEnv === "production") {
  app.use(helmet());
}

// **** Add API routes **** //

// Add APIs
app.use("/api", BaseRouter);

// Setup error handler
app.use(
  (
    err: Error | CustomError,
    _: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __: NextFunction
  ) => {
    logger.err(err, true);
    // Status
    const status =
      err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST;
    // Return
    return res.status(status).json({
      error: err.message,
    });
  }
);

// **** Export default **** //

export default app;
