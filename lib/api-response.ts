import { NextResponse } from "next/server";
import { ZodError } from "zod";

export type ApiError = {
  code: string;
  message: string;
  details?: unknown;
};

export type ApiResponse<T = unknown> = {
  data?: T;
  error?: ApiError;
};

export function createSuccessResponse<T>(
  data: T
): NextResponse<ApiResponse<T>> {
  return NextResponse.json({ data }, { status: 200 });
}

export function createErrorResponse(
  error: ApiError | Error | ZodError,
  status = 400
): NextResponse<ApiResponse> {
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: {
          code: "VALIDATION_ERROR",
          message: "Validation failed",
          details: error.errors,
        },
      },
      { status: 400 }
    );
  }

  if ("code" in error) {
    return NextResponse.json({ error }, { status });
  }

  return NextResponse.json(
    {
      error: {
        code: "INTERNAL_ERROR",
        message: error.message || "An unexpected error occurred",
      },
    },
    { status }
  );
}

export const ApiErrors = {
  Unauthorized: {
    code: "UNAUTHORIZED",
    message: "Authentication required",
  },
  NotFound: {
    code: "NOT_FOUND",
    message: "Resource not found",
  },
  BadRequest: {
    code: "BAD_REQUEST",
    message: "Invalid request",
  },
  Forbidden: {
    code: "FORBIDDEN",
    message: "Access denied",
  },
  Conflict: {
    code: "CONFLICT",
    message: "Resource conflict",
  },
} as const;
