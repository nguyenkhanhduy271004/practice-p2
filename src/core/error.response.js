'use strict';

const StatusCode = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_ERROR: 500
};

const ReasonStatusCode = {
    OK: 'Success',
    CREATED: 'Resource created',
    BAD_REQUEST: 'Bad request error',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Permission denied',
    NOT_FOUND: 'Resource not found',
    CONFLICT: 'Conflict error',
    INTERNAL_ERROR: 'Internal server error'
};

class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.status = statusCode;
    }
}

class BadRequestError extends ErrorResponse {
    constructor(message = ReasonStatusCode.BAD_REQUEST, statusCode = StatusCode.BAD_REQUEST) {
        super(message, statusCode);
    }
}

class UnauthorizedError extends ErrorResponse {
    constructor(message = ReasonStatusCode.UNAUTHORIZED, statusCode = StatusCode.UNAUTHORIZED) {
        super(message, statusCode);
    }
}

class ForbiddenError extends ErrorResponse {
    constructor(message = ReasonStatusCode.FORBIDDEN, statusCode = StatusCode.FORBIDDEN) {
        super(message, statusCode);
    }
}

class NotFoundError extends ErrorResponse {
    constructor(message = ReasonStatusCode.NOT_FOUND, statusCode = StatusCode.NOT_FOUND) {
        super(message, statusCode);
    }
}

class ConflictRequestError extends ErrorResponse {
    constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.CONFLICT) {
        super(message, statusCode);
    }
}

class InternalServerError extends ErrorResponse {
    constructor(message = ReasonStatusCode.INTERNAL_ERROR, statusCode = StatusCode.INTERNAL_ERROR) {
        super(message, statusCode);
    }
}

export {
    StatusCode,
    ReasonStatusCode,
    ErrorResponse,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictRequestError,
    InternalServerError
};
