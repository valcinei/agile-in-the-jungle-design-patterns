export class EmailService {
    public sendConfirmation(clientId: string, message: string): void {
        console.log(`Sending confirmation email to client ${clientId}: ${message}`);
        // Here you would integrate with a real email service
    }
}

