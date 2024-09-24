import * as assert from 'assert';

class BankCustomer
{
    private name: string;
    private pin: string;

    constructor(name: string, pin: string)
    {
        this.name = name;
        this.pin = pin;
    }

    getName(): string
    {
        return this.name;
    }

    getPin(): string
    {
        return this.pin;
    }

    verifyPinInput(input: string): boolean
    {
        if (input === this.pin)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    changePin(newPin: string): void
    {
        this.pin = newPin;
    }

    changeName(newName: string): void
    {
        this.name = newName;
    }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));