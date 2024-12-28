import { Schema, model } from "mongoose";
import { IPayment } from "./payment.interface";

const paymentSchema = new Schema<IPayment>(
    {
        email: { type: String },
        userName: { type: String },
        price: { type: Number, required: true },
        transactionId: { type: String, required: true },
        date: { type: Date, required: true },
        status: {
          type: String,
          enum: ['pending', 'completed', 'failed', 'refunded'],
          required: true,
        },
    },
    { timestamps: true }
  );


  export const Payment = model<IPayment>('Payment', paymentSchema);
  