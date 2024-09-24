
export interface IPaymentGateway {
    processPayment(amount: number): void;
}


