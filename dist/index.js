"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_1 = require("./greeter");
const javascript_greeter_1 = require("./javascript-greeter");
const loud_greeter_1 = require("./loud-greeter");
const html_greeter_1 = require("./html-greeter");
const myGreeter = new greeter_1.Greeter('Goodnight, Grant!');
console.log(myGreeter);
const myJavascriptGreeter = new javascript_greeter_1.JavascriptGreeter('Hello, Grant!');
console.log(myJavascriptGreeter);
const myLoudGreeter = new loud_greeter_1.LoudGreeter('Hello, Grant!!!');
console.log(myLoudGreeter);
const myHtmlGreeter = new html_greeter_1.HtmlGreeter('Hello, Grant');
console.log(myHtmlGreeter);