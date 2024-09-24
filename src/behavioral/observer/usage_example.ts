import { EventManager } from "./EventManaget.ts";
import { ParticipantObserver } from "./IParticipant.ts";


const eventManager = new EventManager();

const participant1 = new ParticipantObserver("Alice");
eventManager.registerObserver(participant1);
eventManager.updateEvent("VAAAAI");
