import { IPaymentStrategy } from "../services/PaymentService.ts";

export class CreditCardPaymentStrategy implements IPaymentStrategy {
    public processPayment(clientId: string, amount: number): boolean {
        console.log(`Payment of $${amount} successfully processed via credit card for client ${clientId}.`);
        return true; // Simulating successful payment
    }
}