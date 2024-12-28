/* eslint-disable @typescript-eslint/ban-ts-comment */
// import Stripe from 'stripe';
// import config from '../../../config';
import { IPayment } from './payment.interface';
import { Payment } from './payment.model';

// const stripe = new Stripe(config.stripeSecretKey as string, {
//   apiVersion: '2023-10-16',
// });

const createCharge = async (price: number) => {
  const amount = price * 100;
  console.log(amount, 'amount inside the intent');

  // const paymentIntent = await stripe.paymentIntents.create({
  //   amount: amount,
  //   currency: 'usd',
  //   payment_method_types: ['card'],
  // });

  // const result = paymentIntent.client_secret;
  // return {
  //   clientSecret: result,
  // };
};

const createPayment = async (paymentData: IPayment): Promise<IPayment> => {
  const result = await Payment.create(paymentData);
  return result;
};

const getPayments = async (email: string): Promise<IPayment[]> => {
  const result = await Payment.find({email:email});
  return result;
};

export const paymentService = {
  createCharge,
  createPayment,
  getPayments,
};
