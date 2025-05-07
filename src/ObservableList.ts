import { EventEmitter } from 'events';

export class ObservableList<T> extends EventEmitter {
  private items: T[] = [];
  private maxBufferSize = 50;

  constructor(maxBufferSize?: number){
    super();
    if(maxBufferSize)
      this.maxBufferSize = maxBufferSize;
  }

  push(item: T) {
    // aggiungo il nuovo elemento
    this.items.push(item);

    // se supero il numero massimo, rimuovo il primo inserito (FIFO)
    if (this.items.length > this.maxBufferSize) {
      this.items.shift();
    }
    this.emit('add');
  }

  shift(): T  {
    const removed = this.items.shift();
    if(removed === undefined)
      throw new Error("Message not found");
    //if (removed !== undefined) this.emit('remove');
    return removed;
  }

  isEmpty(): boolean{
    return this.items.length == 0;
  }
  // subscribe
  onAdd(cb: () => void) { this.on('add', cb); }

  // subscribe
  onAddOnce(cb: () => void) { this.once('add', cb); }
  //onRemove(cb: () => void) { this.on('remove', cb); }
}
