export class InvoiceService {
    public generateInvoice(eventId: string, amount: number): void {
        console.log(`Invoice generated for event ${eventId}. Amount: $${amount}`);
        // Here you could integrate with a real invoice or PDF generation system
    }
}
