import { IPaymentStrategy } from "./IPaymentStrategy.ts";

export class PaymentProcessor {
    private paymentStrategy: IPaymentStrategy;

    constructor(paymentStrategy: IPaymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    public setPaymentStrategy(paymentStrategy: IPaymentStrategy): void {
        this.paymentStrategy = paymentStrategy;
    }

    public processPayment(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}