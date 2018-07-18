"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var customers = [
            { id: 1, name: 'HANAR' },
            { id: 2, name: 'VINER' },
            { id: 3, name: 'JOHN' },
            { id: 4, name: 'TOMSP' },
            { id: 11, name: 'HANAR' },
            { id: 21, name: 'VINER' },
            { id: 31, name: 'JOHN' },
            { id: 41, name: 'TOMSP' },
            { id: 121, name: 'HANAR' },
            { id: 22, name: 'VINER' },
            { id: 32, name: 'JOHN' },
            { id: 42, name: 'TOMSP' },
            { id: 12, name: 'HANAR' },
            { id: 212, name: 'VINER' },
            { id: 312, name: 'JOHN' },
            { id: 422, name: 'TOMSP' },
            { id: 542, name: 'SUPRD' }
        ];
        return { customers: customers };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;