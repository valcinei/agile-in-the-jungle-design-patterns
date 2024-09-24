import {IPaymentGateway} from "../IPaymentGateway";
import { StripeGateway } from "../sdks/main";

export class StripeAdapter implements IPaymentGateway {
    private payPalGateway: StripeGateway;

    constructor(payPalGateway: StripeGateway) {
        this.payPalGateway = payPalGateway;
    }

    public processPayment(amount: number): void {
        this.payPalGateway.charge(amount);
    }
}