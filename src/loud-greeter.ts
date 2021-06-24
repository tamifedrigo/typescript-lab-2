import {Greeter} from './greeter';

export class LoudGreeter extends Greeter {
    private extra: string;

constructor(greeting: string, extra: string) {
    super(greeting);
    this.extra = "!";
}

addVolume(): void {
    this.extra += "!";
}

greet(name: string): string {
    return `${this.greeting} + ${name} + ${this.extra}`;
}
}