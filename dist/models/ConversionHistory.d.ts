export interface ConversionHistory {
    id: string;
    from: string;
    to: string;
    amount: number;
    result: number;
    rate: number;
    timestamp: Date;
}
export declare class ConversionHistoryModel {
    private history;
    addConversion(conversion: Omit<ConversionHistory, 'id' | 'timestamp'>): ConversionHistory;
    getHistory(limit?: number): ConversionHistory[];
    getConversionById(id: string): ConversionHistory | undefined;
}
//# sourceMappingURL=ConversionHistory.d.ts.map