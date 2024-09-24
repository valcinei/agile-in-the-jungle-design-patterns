import { EmailService } from "./services/EmailService.ts";
import { InvoiceService } from "./services/InvoiceService.ts";
import { PaymentService } from "./services/PaymentService.ts";
import { SlotService } from "./services/SlotService.ts";
import { CreditCardPaymentStrategy } from "./strategies/CreditCardPaymentStrategy.ts";
import { TicketPurchaseSystemFacade } from "./TicketPurchaseSystemFacade.ts";

const ticketFacade = new TicketPurchaseSystemFacade(new SlotService(), new PaymentService(), new EmailService(), new InvoiceService());
ticketFacade.purchaseTicket('1', 'code_client_id', 100, new CreditCardPaymentStrategy())