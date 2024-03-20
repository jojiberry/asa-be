import { Context } from "koa";
import { StatusCodes } from "http-status-codes";
import bodyParser from "koa-bodyparser";

type Response<T extends object = object> =
  | {
    data: T;
    errors: [];
  }
  | {
    data: null;
    errors: {
      message: string;
    };
  };

interface SuccessResponseParams<T extends object = object> {
  data: T;
}

function successResponse<T extends object = object>(
  context: Context,
  params: SuccessResponseParams<T>,
  httpStatus: StatusCodes = StatusCodes.OK
): Response<T> {
  let { data } = params;
  let body: Response<T> = {
    data,
    errors: [],
  };
  context.status = httpStatus;
  context.body = body;
  return body;
}

interface ErrorResponseParams {
  error: Error | string;
}

function errorResponse(
  context: Context,
  params: ErrorResponseParams,
  httpStatus: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR
) {
  let { error } = params;
  let body = {
    data: null,
    errors: [{ message: error }],
  };
  context.throw(httpStatus, body);
}

export { successResponse, errorResponse };
export type { Response };