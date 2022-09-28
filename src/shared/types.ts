import * as e from 'express';
import { Query } from 'express-serve-static-core';


// **** Misc **** //

export type TAll = string | number | boolean | null | object;


// **** Express **** //

export interface IReqQuery<T extends Query, U = void> extends e.Request {
  query: T;
  body: U;
}

