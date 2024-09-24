import { EmailService } from "./services/EmailService.ts";
import { InvoiceService } from "./services/InvoiceService.ts";
import { IPaymentStrategy, PaymentService } from "./services/PaymentService.ts";
import { SlotService } from "./services/SlotService.ts";
import { CreditCardPaymentStrategy } from "./strategies/CreditCardPaymentStrategy.ts";

export class TicketPurchaseSystemFacade {
    constructor(private slotService: SlotService, private paymentService: PaymentService, private emailService: EmailService, private invoiceService: InvoiceService) { }

    public purchaseTicket(eventId: string, clientId: string, amount: number, paymentMethod: IPaymentStrategy): void {
        console.log(`Starting ticket purchase for event ${eventId}.`);

        // Checking slot availability instead of seat
        if (!this.slotService.checkAvailability(eventId)) {
            console.log("No slots available.");
            return;
        }

        if (!this.paymentService.processPayment(clientId, amount, paymentMethod)) {
            console.log("Payment failed.");
            return;
        }

        // Sending confirmation and generating invoice
        this.emailService.sendConfirmation(clientId, `Ticket purchase for event ${eventId} confirmed.`);
        this.invoiceService.generateInvoice(eventId, amount);
    }
}

