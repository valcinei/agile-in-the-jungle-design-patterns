import { PaymentProcessor } from "./PaymentProcessor.ts";
import { CreditCardPaymentStrategy } from "./strategies/CreditCardPaymentStrategy.ts";

const paymentStrategy = new  CreditCardPaymentStrategy();

const paymentProcessor =  new PaymentProcessor(paymentStrategy);
paymentProcessor.processPayment(100);
