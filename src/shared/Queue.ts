export default class Queue<T> {
    private running = true;
    private elements: T[] = [];
    private processing = false;
    private process: (element: T) => void;

    constructor(process: (element: T) => void) {
        this.process = process;
    }

    public enqueue(element: T): void {
        this.elements.push(element);
    }

    public dequeue(): T | undefined {
        return this.elements.shift();
    }

    public setProcessing(status: boolean): void {
        this.processing = status;
    }

    public isEmpty(): boolean {
        return this.elements.length === 0;
    }

    public stop(): void {
        this.running = false;
    }

    public start(): void {
        this.running = true;
        this.loop();
    }

    private loop(): void {
        if (this.running) {
            if (!this.isEmpty() && !this.processing) {
                this.processing = true;
                this.process(this.dequeue() ?? ({} as T));
            }
            requestAnimationFrame(this.loop.bind(this));
        }
    }
}
