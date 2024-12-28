"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRelationalFieldsMapper = exports.orderFilterableFields = exports.orderSearchAbleFields = void 0;
exports.orderSearchAbleFields = ['customer_name', 'customer_phone', 'order_id'];
exports.orderFilterableFields = [
    'searchTerm',
    'minPrice',
    'maxPrice',
    'category'
];
exports.productRelationalFieldsMapper = {
    category: 'category',
};
