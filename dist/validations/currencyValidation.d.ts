import { z } from 'zod';
export declare const convertCurrencySchema: z.ZodObject<{
    query: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        amount: z.ZodEffects<z.ZodString, number, string>;
    }, "strip", z.ZodTypeAny, {
        from: string;
        to: string;
        amount: number;
    }, {
        from: string;
        to: string;
        amount: string;
    }>;
}, "strip", z.ZodTypeAny, {
    query: {
        from: string;
        to: string;
        amount: number;
    };
}, {
    query: {
        from: string;
        to: string;
        amount: string;
    };
}>;
export declare const getRatesSchema: z.ZodObject<{
    query: z.ZodObject<{
        base: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        base?: string | undefined;
    }, {
        base?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    query: {
        base?: string | undefined;
    };
}, {
    query: {
        base?: string | undefined;
    };
}>;
export type ConvertCurrencyInput = z.infer<typeof convertCurrencySchema>;
export type GetRatesInput = z.infer<typeof getRatesSchema>;
//# sourceMappingURL=currencyValidation.d.ts.map