import { EventEmitter } from 'events';
export class ObservableList extends EventEmitter {
    constructor(maxBufferSize) {
        super();
        this.items = [];
        this.maxBufferSize = 50;
        if (maxBufferSize)
            this.maxBufferSize = maxBufferSize;
    }
    push(item) {
        // aggiungo il nuovo elemento
        this.items.push(item);
        // se supero il numero massimo, rimuovo il primo inserito (FIFO)
        if (this.items.length > this.maxBufferSize) {
            this.items.shift();
        }
        this.emit('add');
    }
    shift() {
        const removed = this.items.shift();
        if (removed === undefined)
            throw new Error("Message not found");
        //if (removed !== undefined) this.emit('remove');
        return removed;
    }
    isEmpty() {
        return this.items.length == 0;
    }
    // subscribe
    onAdd(cb) { this.on('add', cb); }
    // subscribe
    onAddOnce(cb) { this.once('add', cb); }
}
//# sourceMappingURL=ObservableList.js.map