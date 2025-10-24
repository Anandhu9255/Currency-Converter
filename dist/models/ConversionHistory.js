"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionHistoryModel = void 0;
class ConversionHistoryModel {
    constructor() {
        this.history = [];
    }
    addConversion(conversion) {
        const newConversion = {
            ...conversion,
            id: Date.now().toString(),
            timestamp: new Date(),
        };
        this.history.push(newConversion);
        return newConversion;
    }
    getHistory(limit = 10) {
        return this.history.slice(-limit);
    }
    getConversionById(id) {
        return this.history.find(conv => conv.id === id);
    }
}
exports.ConversionHistoryModel = ConversionHistoryModel;
//# sourceMappingURL=ConversionHistory.js.map