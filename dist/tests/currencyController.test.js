"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('Currency Controller', () => {
    describe('GET /api/v1/currency/rates', () => {
        it('should return exchange rates', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/v1/currency/rates')
                .expect(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('base');
            expect(response.body.data).toHaveProperty('rates');
        });
        it('should return rates for specified base currency', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/v1/currency/rates?base=USD')
                .expect(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data.base).toBe('USD');
        });
    });
    describe('GET /api/v1/currency/convert', () => {
        it('should convert currency', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/v1/currency/convert?from=EUR&to=USD&amount=100')
                .expect(200);
            expect(response.body.success).toBe(true);
            expect(response.body.data).toHaveProperty('from', 'EUR');
            expect(response.body.data).toHaveProperty('to', 'USD');
            expect(response.body.data).toHaveProperty('amount', 100);
            expect(response.body.data).toHaveProperty('result');
            expect(response.body.data).toHaveProperty('rate');
        });
        it('should return 400 for invalid amount', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/v1/currency/convert?from=EUR&to=USD&amount=invalid')
                .expect(400);
            expect(response.body.success).toBe(false);
        });
    });
    describe('GET /api/v1/currency/supported', () => {
        it('should return supported currencies', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/v1/currency/supported')
                .expect(200);
            expect(response.body.success).toBe(true);
            expect(typeof response.body.data).toBe('object');
        });
    });
    describe('GET /api/v1/currency/history', () => {
        it('should return conversion history', async () => {
            const response = await (0, supertest_1.default)(app_1.default)
                .get('/api/v1/currency/history')
                .expect(200);
            expect(response.body.success).toBe(true);
            expect(Array.isArray(response.body.data)).toBe(true);
        });
    });
});
//# sourceMappingURL=currencyController.test.js.map