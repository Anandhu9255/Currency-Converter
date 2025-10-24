"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const currencyController_1 = require("../controllers/currencyController");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
const currencyValidation_1 = require("../validations/currencyValidation");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /api/v1/currency/rates:
 *   get:
 *     summary: Get exchange rates
 *     parameters:
 *       - in: query
 *         name: base
 *         schema:
 *           type: string
 *         description: Base currency (default EUR)
 *     responses:
 *       200:
 *         description: Exchange rates
 */
router.get('/rates', (0, validationMiddleware_1.validateRequest)(currencyValidation_1.getRatesSchema), currencyController_1.getExchangeRates);
/**
 * @swagger
 * /api/v1/currency/convert:
 *   get:
 *     summary: Convert currency
 *     parameters:
 *       - in: query
 *         name: from
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: to
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: amount
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Conversion result
 */
router.get('/convert', (0, validationMiddleware_1.validateRequest)(currencyValidation_1.convertCurrencySchema), currencyController_1.convertCurrency);
/**
 * @swagger
 * /api/v1/currency/supported:
 *   get:
 *     summary: Get supported currencies
 *     responses:
 *       200:
 *         description: List of supported currencies
 */
router.get('/supported', currencyController_1.getSupportedCurrencies);
/**
 * @swagger
 * /api/v1/currency/history:
 *   get:
 *     summary: Get conversion history
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of records to return (default 10)
 *     responses:
 *       200:
 *         description: Conversion history
 */
router.get('/history', currencyController_1.getConversionHistory);
exports.default = router;
//# sourceMappingURL=currencyRoutes.js.map