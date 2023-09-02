"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes &${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on mario website", 250);
const invTwo = new Invoice("jon", "work on jon website", 300);
console.log(invOne, invTwo);
