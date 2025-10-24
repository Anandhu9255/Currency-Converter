declare class CurrencyApi {
    private cache;
    constructor();
    getExchangeRates(base?: string): Promise<Record<string, number>>;
    convertCurrency(from: string, to: string, amount: number): Promise<number>;
    getSupportedCurrencies(): Promise<Record<string, string>>;
}
export declare const currencyApi: CurrencyApi;
export {};
//# sourceMappingURL=currencyApi.d.ts.map