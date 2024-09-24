import { IObserver } from "./IObserver.ts";

export class ParticipantObserver implements IObserver{
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    update(eventData: any) {
        console.log(`Participant ${this.name} received notification: ${eventData}`);  
    }
}