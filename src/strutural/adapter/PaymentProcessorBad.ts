

class BadPayPalGateway {
    public makePayment(amount: number): void {
        console.log(`Processing payment of ${amount} via PayPal.`);
    }
}

class PaymentProcessor {
    private payPalGateway: BadPayPalGateway;

    constructor() {
        this.payPalGateway = new BadPayPalGateway();
    }

    public processPayment(amount: number): void {
        this.payPalGateway.makePayment(amount);
    }
}

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(100);
