import { EventEmitter } from 'events';
export declare class ObservableList<T> extends EventEmitter {
    private items;
    private maxBufferSize;
    constructor(maxBufferSize?: number);
    push(item: T): void;
    shift(): T;
    isEmpty(): boolean;
    onAdd(cb: () => void): void;
    onAddOnce(cb: () => void): void;
}
