import { IPaymentStrategy } from "../IPaymentStrategy.ts";

export class CreditCardPaymentStrategy implements IPaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid ${amount} using Credit Card.`);
    }
}
