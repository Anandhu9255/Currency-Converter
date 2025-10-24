"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const zod_1 = require("zod");
const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req);
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                const customError = new Error('Validation failed');
                customError.statusCode = 400;
                customError.details = error.errors;
                next(customError);
            }
            else {
                next(error);
            }
        }
    };
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validationMiddleware.js.map