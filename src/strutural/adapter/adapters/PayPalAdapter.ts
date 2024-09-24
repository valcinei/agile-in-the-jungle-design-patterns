import {IPaymentGateway} from "../IPaymentGateway";
import { PayPalGateway } from "../sdks/main";

export class PayPalAdapter implements IPaymentGateway {

    constructor(private payPalGateway: PayPalGateway) {
        this.payPalGateway = payPalGateway;
    }

    public processPayment(amount: number): void {
        this.payPalGateway.makePayment(amount);
    }
}