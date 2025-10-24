"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const dotenv_1 = __importDefault(require("dotenv"));
const errorHandler_1 = require("./middlewares/errorHandler");
const logger_1 = require("./middlewares/logger");
const rateLimiter_1 = require("./middlewares/rateLimiter");
const currencyRoutes_1 = __importDefault(require("./routes/currencyRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Currency Converter API',
        version: '1.0.0',
        description: 'A professional currency converter API',
    },
    servers: [
        {
            url: `http://localhost:${PORT}/api/v1`,
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Middlewares
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(logger_1.requestLogger);
app.use(rateLimiter_1.rateLimiter);
// Swagger UI
app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// Routes
app.use('/api/v1/currency', currencyRoutes_1.default);
// Error handling middleware
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map