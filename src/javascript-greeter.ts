import {Greeter} from './greeter';

export class JavascriptGreeter extends Greeter {

    greet(name: string): string {
        return `${this.greeting}, ${name}`;
    }
}