interface UserAccount {
    firstName: string;
    age: number;
}

const userAccount = {
    firstName: 'Ihor',
    age: 33,
};

let p2: typeof userAccount = {
    firstName: 'Ihor',
    age: 33,
};

let isDone: boolean = false;
let str: string = 'some value';
let num: number = 44;
let bigNum: bigint = 4n;

let und: undefined = undefined;
let nill: null = null;

const key1: unique symbol = Symbol('key1');
const key2: unique symbol = Symbol('key2');
const key3 = Symbol('key3');

let strictObject = {
    [key1]: 100,
    [key2]: 'Some value',
    [key3]: true,
};
let a1 = strictObject[key1];
let a2 = strictObject[key2];
let a3 = strictObject[key3];

