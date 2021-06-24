import {Greeter} from './greeter';
import {JavascriptGreeter} from './javascript-greeter';
import {LoudGreeter} from './loud-greeter';
import {HtmlGreeter} from './html-greeter';


const myGreeter: Greeter = new Greeter('Goodnight, Grant!');
console.log(myGreeter.greeting);

const myJavascriptGreeter: JavascriptGreeter = new JavascriptGreeter('Hello, Grant!');
console.log(myJavascriptGreeter.greeting);

const myLoudGreeter: LoudGreeter = new LoudGreeter('Hello, Grant!!!');
console.log(myLoudGreeter.addVolume);
console.log(myLoudGreeter.greet)

const myHtmlGreeter: HtmlGreeter = new HtmlGreeter('Hello, Grant');
console.log(myHtmlGreeter.greet); 
console.log(myHtmlGreeter.tagName);