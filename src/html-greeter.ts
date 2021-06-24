import {Greeter} from './greeter';

export class HtmlGreeter extends Greeter {
    tagName(): string {
        return <"h1">;
    }


    constructor(greeting: string, tagName: string) {
        super(greeting);
        this.tagName = "<h1>";
    }

    greet(name: string): string {
        return `tagName${this.greeting}, ${name}tagName`;
    }

   
}