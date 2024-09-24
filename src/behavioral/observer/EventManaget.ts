import { IObserver } from "./IObserver.ts";
import { ISubject } from "./ISubject.ts";

export class EventManager implements ISubject{
    private observers: IObserver[] = [];
    private eventData: string;

    // Registra um novo observador
    public registerObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    // Remove um observador existente
    public removeObserver(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex >= 0) {
            this.observers.splice(observerIndex, 1);
        }
    }

    // Notifica todos os observadores sobre as mudanças
    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.eventData);
        }
    }

    // Método para atualizar os dados do evento e notificar os observadores
    public updateEvent(eventData: string): void {
        this.eventData = eventData;
        this.notifyObservers();
    }

}