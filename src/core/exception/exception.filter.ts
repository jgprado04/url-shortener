import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

interface IRequestBody {
  message: string;
  timestamp: string;
  error?: string;
  status_code: number;
  [key: string]: any;
}

@Catch()
export class HttpExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException | Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const timestamp = new Date().toISOString();
    const defaultStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    const defaultMessage =
      "Ocorreu um erro interno no servidor. Entre em contato com o suporte e tente novamente.";

    if (exception instanceof HttpException) {
      const exceptionResponse: any = exception.getResponse();

      const responseBody: IRequestBody = {
        ...exceptionResponse,
        message: exceptionResponse.message ?? defaultMessage,
        timestamp,
        error: exceptionResponse.error,
        statusCode: undefined,
        status_code:
          exceptionResponse.statusCode ??
          exception.getStatus() ??
          defaultStatus,
      };

      return response.status(responseBody.status_code).json({
        is_error: true,
        response: responseBody,
      });
    }

    return response.status(defaultStatus).json({
      is_error: true,
      response: {
        message: defaultMessage,
        timestamp,
        status_code: defaultStatus,
        error: "Internal Server Error",
      },
    });
  }
}
