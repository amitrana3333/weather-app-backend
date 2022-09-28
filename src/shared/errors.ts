import HttpStatusCodes from "http-status-codes";

export abstract class CustomError extends Error {
  public readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.HttpStatus = httpStatus;
  }
}

export class ParamInvalidError extends CustomError {
  public static readonly Msg =
    "One or more of the required was missing " + "or invalid.";
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor() {
    super(ParamInvalidError.Msg, ParamInvalidError.HttpStatus);
  }
}

export class ValidatorFnError extends CustomError {
  public static readonly Msg = "Validator function failed. function name: ";
  public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

  constructor(fnName: string) {
    super(ValidatorFnError.Msg + fnName, ValidatorFnError.HttpStatus);
  }
}

export class UnauthorizedError extends CustomError {
  public static readonly Msg = "Login failed";
  public static readonly HttpStatus = HttpStatusCodes.UNAUTHORIZED;

  constructor() {
    super(UnauthorizedError.Msg, UnauthorizedError.HttpStatus);
  }
}

export class InternalServerError extends CustomError {
  public static readonly Msg = "Internal Server Error";
  public static readonly HttpStatus = HttpStatusCodes.INTERNAL_SERVER_ERROR;

  constructor() {
    super(UnauthorizedError.Msg, UnauthorizedError.HttpStatus);
  }
}
