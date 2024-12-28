export type IPayment = {
    email?: string;
    userName?: string;
    price: number;
    transactionId: string;
    date: Date;
    status: 'pending' | 'completed' | 'failed' | 'refunded'
};
  