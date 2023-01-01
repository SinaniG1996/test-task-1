import { Context, Next } from "koa";
import { ErrorResponse } from "./types";
import { ValidationError } from "../../lib/errors";

export default () => {
  return async (ctx: Context, next: Next) => {
    try {
      await next()
    } catch (error) {
      if (error instanceof Error) {
        const errorResponse: ErrorResponse = {
          status: 500,
          message: error.message,
        }
  
        if (error instanceof ValidationError && error.status) errorResponse.status = error.status
        if (process.env.NODE_ENV !== 'production') errorResponse.trace = error.stack?.split('\n    ')
  
        ctx.status = 500
        ctx.body = errorResponse
      }
    }
  }
}