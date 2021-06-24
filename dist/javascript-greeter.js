"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavascriptGreeter = void 0;
const greeter_1 = require("./greeter");
class JavascriptGreeter extends greeter_1.Greeter {
    greet(name) {
        return `${this.greeting}, ${name}`;
    }
}
exports.JavascriptGreeter = JavascriptGreeter;
