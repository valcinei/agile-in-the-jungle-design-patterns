export class SlotService {
    private availableSlots: { [eventId: string]: number } = {};

    constructor() {
        // Example data: 50 slots available for the event "event123"
        this.availableSlots["event123"] = 50;
    }

    public checkAvailability(eventId: string): boolean {
        const slots = this.availableSlots[eventId];
        return slots > 0;
    }

    public reserveSlot(eventId: string): boolean {
        if (this.checkAvailability(eventId)) {
            this.availableSlots[eventId]--;
            console.log(`Slot reserved for event ${eventId}. Remaining slots: ${this.availableSlots[eventId]}`);
            return true;
        } else {
            console.log(`No more slots available for event ${eventId}.`);
            return false;
        }
    }
}
