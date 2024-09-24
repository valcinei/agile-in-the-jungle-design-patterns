import {PayPalAdapter} from "./adapters/PayPalAdapter";
import { IPaymentGateway } from "./IPaymentGateway";
import { PayPalGateway } from "./sdks/main";


class PaymentProcessorWithAdapter {

    constructor(private paymentGateway: IPaymentGateway) {
    }

    public processPayment(amount: number): void {
        this.paymentGateway.processPayment(amount);
    }
}

const adpter = new PayPalAdapter(new PayPalGateway());
const paymentProcessor = new PaymentProcessorWithAdapter(adpter);
paymentProcessor.processPayment(100);
