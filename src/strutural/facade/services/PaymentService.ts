
export interface IPaymentStrategy {
    processPayment(clientId: string, amount: number): boolean;
}

export class PaymentService {
    public processPayment(clientId: string, amount: number, paymentMethod: IPaymentStrategy): boolean {
        console.log(`Processing payment of $${amount} for client ${clientId}.`);
        return paymentMethod.processPayment(clientId, amount);
    }
}
