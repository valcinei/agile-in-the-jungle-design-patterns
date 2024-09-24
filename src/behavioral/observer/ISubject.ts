import { IObserver } from "./IObserver.ts";

export interface ISubject{
    registerObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(): void;
}