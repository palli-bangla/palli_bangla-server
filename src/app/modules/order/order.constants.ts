
export const orderSearchAbleFields: string[] = ['customer_name', 'customer_phone', 'order_id'];






export const orderFilterableFields: string[] = [
    'searchTerm',
    'minPrice',
    'maxPrice',
    'category'
];


type productRelationalFieldsMapper = {
    [key: string]: string;
  };
  
 export const productRelationalFieldsMapper: productRelationalFieldsMapper = {
    category: 'category',
  };