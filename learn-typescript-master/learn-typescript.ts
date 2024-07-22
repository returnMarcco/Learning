console.log('Hello, World!');
console.log('Learning TypeScript');

// Typed Vars
// -------------
let myInt: number   = 5;
let myFloat: number = 7.5;

let myStr: string = 'A typed string';

let myBoolTrue: boolean = true;
let myBoolFalse: boolean = false;


// Data Structures / Special Types
// ----------------------------------
const myNumArray: number[] = [0, 1, 2, 3, 4];
const myStrArray: string[] = ['return', 'Marcco'];

const myReadOnlyStrArr: readonly string[] = ['test', 'fixed'];
// myReadOnlyStrArr.push('thisWillErrorAtCompileTime');

// Type-enforced to the initial types passed into the declaration.
const myTuple: [number, string, boolean] = [1, 'Hello', true];
console.log(myTuple);

// Make the Tuple readonly because any values after the initial ones cannot be type-enforced.
// Named tuples - provides context on index-values.
const myReadOnlyTuple: readonly [id: number, msg: string, isDeleted: boolean] = [...myTuple]; // Spread - copies by value.
console.log(myReadOnlyTuple);

const myCar: { vehicleId: number, model: string, year: number, buildDate?: Date } = {
    vehicleId: 1,
    model: 'Ford',
    year: new Date().getFullYear(),
    // buildDate is optional
};
console.log(myCar);

// Index Signatures: Can define object without enforcing list of keys
const myRandomObj: { [index: string]: string | number } = {}; // All keys must be a string, all values must be of types string OR number.
myRandomObj.id = 1;
myRandomObj.model = 'Holden';
console.log(myRandomObj);

// Enums

// Default Enum - indexed from 0 - n
enum notInitEnum {
    'North',
    'South',
    'East',
    'West',
};
console.log(notInitEnum.North); // Logs 0

// Initialised Enum
enum InitEnum {
    North = 'North',
    South = 'South',
    East = 'East',
    West = 'West',
};
console.log(InitEnum.North); // Logs `North`

// Typed Functions. (params)
// ----------------------------
function  myTypedSumFunc(x: number, y: number): number {
    return x + y;
}

console.log(myTypedSumFunc(5, 4)); // Logs 9

const myTypedMultiplierFuncExpression = (x: number, y: number): number => {
    return x * y;
};

console.log(myTypedMultiplierFuncExpression(5, 3)); // Logs 15

// Type Aliases & Interfaces
// -----------------------------

// Type Aliases - assign types to vars (essentially)
type VehicleId   = number;
type VehicleName = string;

// Use these type aliases to compose a type-alias for an object literal.
type Car = {
    vehicleId  : number,
    vehicleName: VehicleName,
};

const myFord: Car = {
    vehicleId  : 1,
    vehicleName: 'Ford',
};

// Interfaces - fully abstract object-structures.
// Similar in concept to Interfaces in classical OOP.
// Note: Similar to Type Aliases but only apply to `Object` types.
interface Rectangle {
    length: number,
    width : number,
};

// Any object that implements interface `Rectangle` must implement the `length` and `width`properties.
const rectangle: Rectangle = {
    length: 3,
    width : 4,
};

// Polymorphism: Can extend an interface
interface LaughingRectangle extends Rectangle {
    tickle: Function,
};

const myFunnyRectangle: LaughingRectangle = {
    length: 1,
    width : 6,
    tickle: (messages: string[]): void => {
        messages.forEach(message => console.log(message));
    },
};
myFunnyRectangle.tickle([
    'Hello',
    'World',
    '!',
]); // Logs each string element in the passed-in string-array.


// Casting
// ------------


// Generics
// ------------
function myGenericArrayShallowCopier<Type>(arr: Type[], fn?: Function): Type[] {
    const myArrShallowCopy: Type[] = arr.map(el => el);

    return myArrShallowCopy;
}

function myGenericNestedArrayFactory<Type>(numOrStringArr: number[] | string[], ...rest: Type[]) : object {
    return [
        numOrStringArr,
        ...rest,
    ];
}

const myArrOfNums: number[] = [1, 2, 3, 4, 5];
const myArrOfStrings: string[] = ['1', '2', '3', '4', '5'];

const myNumCpy = myGenericArrayShallowCopier(myArrOfNums);
const myStrCpy = myGenericArrayShallowCopier(myArrOfStrings);

console.log(myArrOfNums);
console.log(myNumCpy);

myArrOfNums[0] = 7;

console.log(myArrOfNums);
console.log(myNumCpy);

const myMixedArray = myGenericNestedArrayFactory(myArrOfStrings, myArrOfNums, [1, 2, 3, 4], ['Hello, World!']);

console.log(myMixedArray);