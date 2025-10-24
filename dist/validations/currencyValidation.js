"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRatesSchema = exports.convertCurrencySchema = void 0;
const zod_1 = require("zod");
exports.convertCurrencySchema = zod_1.z.object({
    query: zod_1.z.object({
        from: zod_1.z.string().length(3, 'Currency code must be 3 characters').toUpperCase(),
        to: zod_1.z.string().length(3, 'Currency code must be 3 characters').toUpperCase(),
        amount: zod_1.z.string().transform((val) => {
            const num = parseFloat(val);
            if (isNaN(num) || num <= 0) {
                throw new Error('Amount must be a positive number');
            }
            return num;
        }),
    }),
});
exports.getRatesSchema = zod_1.z.object({
    query: zod_1.z.object({
        base: zod_1.z.string().length(3, 'Currency code must be 3 characters').toUpperCase().optional(),
    }),
});
//# sourceMappingURL=currencyValidation.js.map