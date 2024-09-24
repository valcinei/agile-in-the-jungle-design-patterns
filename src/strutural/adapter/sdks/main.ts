// PayPal original
export class PayPalGateway {
    public makePayment(amount: number): void {
        console.log(`Processing payment of ${amount} via PayPal.`);
    }
}

// Stripe original
export class StripeGateway {
    public charge(amount: number): void {
        console.log(`Processing payment of ${amount} via Stripe.`);
    }
}

// PagSeguro original
export class PagSeguroGateway {
    public realizarPagamento(amount: number): void {
        console.log(`Processing payment of ${amount} via PagSeguro.`);
    }
}
