import { IPaymentStrategy } from "../IPaymentStrategy.ts";

class CryptoPaymentStrategy implements IPaymentStrategy {
    public pay(amount: number): void {
        console.log(`Paid ${amount} using Cryptocurrency.`);
    }
}