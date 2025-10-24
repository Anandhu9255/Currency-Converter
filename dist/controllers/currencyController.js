"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversionHistory = exports.getSupportedCurrencies = exports.convertCurrency = exports.getExchangeRates = void 0;
const currencyApi_1 = require("../utils/currencyApi");
const ConversionHistory_1 = require("../models/ConversionHistory");
const logger_1 = require("../middlewares/logger");
const historyModel = new ConversionHistory_1.ConversionHistoryModel();
const getExchangeRates = async (req, res, next) => {
    try {
        const base = req.query.base || 'EUR';
        const rates = await currencyApi_1.currencyApi.getExchangeRates(base);
        logger_1.logger.info(`Fetched exchange rates for base ${base}`);
        res.json({
            success: true,
            data: {
                base,
                rates,
                timestamp: new Date().toISOString(),
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getExchangeRates = getExchangeRates;
const convertCurrency = async (req, res, next) => {
    try {
        const { from, to, amount } = req.query;
        const amountNum = parseFloat(amount);
        if (isNaN(amountNum) || amountNum <= 0) {
            const error = new Error('Invalid amount');
            error.statusCode = 400;
            return next(error);
        }
        const result = await currencyApi_1.currencyApi.convertCurrency(from, to, amountNum);
        const rates = await currencyApi_1.currencyApi.getExchangeRates(from);
        const rate = rates[to];
        // Add to history
        historyModel.addConversion({
            from,
            to,
            amount: amountNum,
            result,
            rate,
        });
        logger_1.logger.info(`Converted ${amountNum} ${from} to ${result} ${to}`);
        res.json({
            success: true,
            data: {
                from,
                to,
                amount: amountNum,
                result,
                rate,
                timestamp: new Date().toISOString(),
            },
        });
    }
    catch (error) {
        next(error);
    }
};
exports.convertCurrency = convertCurrency;
const getSupportedCurrencies = async (req, res, next) => {
    try {
        const currencies = await currencyApi_1.currencyApi.getSupportedCurrencies();
        logger_1.logger.info('Fetched supported currencies');
        res.json({
            success: true,
            data: currencies,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getSupportedCurrencies = getSupportedCurrencies;
const getConversionHistory = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const history = historyModel.getHistory(limit);
        res.json({
            success: true,
            data: history,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getConversionHistory = getConversionHistory;
//# sourceMappingURL=currencyController.js.map