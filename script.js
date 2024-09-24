"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.getPin = function () {
        return this.pin;
    };
    BankCustomer.prototype.verifyPinInput = function (input) {
        if (input === this.pin) {
            return true;
        }
        else {
            return false;
        }
    };
    BankCustomer.prototype.changePin = function (newPin) {
        this.pin = newPin;
    };
    BankCustomer.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
