"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyApi = void 0;
const axios_1 = __importDefault(require("axios"));
const node_cache_1 = __importDefault(require("node-cache"));
const config_1 = require("../config");
class CurrencyApi {
    constructor() {
        this.cache = new node_cache_1.default({ stdTTL: config_1.config.cacheTtl });
    }
    async getExchangeRates(base = 'EUR') {
        const cacheKey = `rates_${base}`;
        const cachedRates = this.cache.get(cacheKey);
        if (cachedRates) {
            return cachedRates;
        }
        try {
            const response = await axios_1.default.get(`${config_1.config.apiBaseUrl}/latest?base=${base}`);
            const rates = response.data.rates;
            this.cache.set(cacheKey, rates);
            return rates;
        }
        catch (error) {
            throw new Error('Failed to fetch exchange rates');
        }
    }
    async convertCurrency(from, to, amount) {
        const cacheKey = `convert_${from}_${to}_${amount}`;
        const cachedResult = this.cache.get(cacheKey);
        if (cachedResult !== undefined) {
            return cachedResult;
        }
        try {
            const rates = await this.getExchangeRates(from);
            if (!rates[to]) {
                throw new Error(`Currency ${to} not supported`);
            }
            const result = amount * rates[to];
            this.cache.set(cacheKey, result);
            return result;
        }
        catch (error) {
            throw new Error('Failed to convert currency');
        }
    }
    async getSupportedCurrencies() {
        const cacheKey = 'supported_currencies';
        const cachedCurrencies = this.cache.get(cacheKey);
        if (cachedCurrencies) {
            return cachedCurrencies;
        }
        try {
            const response = await axios_1.default.get(`${config_1.config.apiBaseUrl}/currencies`);
            const currencies = response.data;
            this.cache.set(cacheKey, currencies);
            return currencies;
        }
        catch (error) {
            throw new Error('Failed to fetch supported currencies');
        }
    }
}
exports.currencyApi = new CurrencyApi();
//# sourceMappingURL=currencyApi.js.map