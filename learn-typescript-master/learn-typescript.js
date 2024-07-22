var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log('Hello, World!');
console.log('Learning TypeScript');
// Typed Vars
// -------------
var myInt = 5;
var myFloat = 7.5;
var myStr = 'A typed string';
var myBoolTrue = true;
var myBoolFalse = false;
// Data Structures / Special Types
// ----------------------------------
var myNumArray = [0, 1, 2, 3, 4];
var myStrArray = ['return', 'Marcco'];
var myReadOnlyStrArr = ['test', 'fixed'];
// myReadOnlyStrArr.push('thisWillErrorAtCompileTime');
// Type-enforced to the initial types passed into the declaration.
var myTuple = [1, 'Hello', true];
console.log(myTuple);
// Make the Tuple readonly because any values after the initial ones cannot be type-enforced.
// Named tuples - provides context on index-values.
var myReadOnlyTuple = __spreadArray([], myTuple, true); // Spread - copies by value.
console.log(myReadOnlyTuple);
var myCar = {
    vehicleId: 1,
    model: 'Ford',
    year: new Date().getFullYear(),
    // buildDate is optional
};
console.log(myCar);
// Index Signatures: Can define object without enforcing list of keys
var myRandomObj = {}; // All keys must be a string, all values must be of types string OR number.
myRandomObj.id = 1;
myRandomObj.model = 'Holden';
console.log(myRandomObj);
// Enums
// Default Enum - indexed from 0 - n
var notInitEnum;
(function (notInitEnum) {
    notInitEnum[notInitEnum["North"] = 0] = "North";
    notInitEnum[notInitEnum["South"] = 1] = "South";
    notInitEnum[notInitEnum["East"] = 2] = "East";
    notInitEnum[notInitEnum["West"] = 3] = "West";
})(notInitEnum || (notInitEnum = {}));
;
console.log(notInitEnum.North); // Logs 0
// Initialised Enum
var InitEnum;
(function (InitEnum) {
    InitEnum["North"] = "North";
    InitEnum["South"] = "South";
    InitEnum["East"] = "East";
    InitEnum["West"] = "West";
})(InitEnum || (InitEnum = {}));
;
console.log(InitEnum.North); // Logs `North`
// Typed Functions. (params)
// ----------------------------
function myTypedSumFunc(x, y) {
    return x + y;
}
console.log(myTypedSumFunc(5, 4)); // Logs 9
var myTypedMultiplierFuncExpression = function (x, y) {
    return x * y;
};
console.log(myTypedMultiplierFuncExpression(5, 3)); // Logs 15
var myFord = {
    vehicleId: 1,
    vehicleName: 'Ford',
};
;
// Any object that implements interface `Rectangle` must implement the `length` and `width`properties.
var rectangle = {
    length: 3,
    width: 4,
};
;
var myFunnyRectangle = {
    length: 1,
    width: 6,
    tickle: function (messages) {
        messages.forEach(function (message) { return console.log(message); });
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
function myGenericArrayShallowCopier(arr, fn) {
    var myArrShallowCopy = arr.map(function (el) { return el; });
    return myArrShallowCopy;
}
function myGenericArrayFactory(numOrStringArr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return __spreadArray([
        numOrStringArr
    ], rest, true);
}
var myArrOfNums = [1, 2, 3, 4, 5];
var myArrOfStrings = ['1', '2', '3', '4', '5'];
var myNumCpy = myGenericArrayShallowCopier(myArrOfNums);
var myStrCpy = myGenericArrayShallowCopier(myArrOfStrings);
console.log(myArrOfNums);
console.log(myNumCpy);
myArrOfNums[0] = 7;
console.log(myArrOfNums);
console.log(myNumCpy);
var myMixedArray = myGenericArrayFactory(myArrOfStrings, myArrOfNums, [1, 2, 3, 4], ['Hello, World!']);
console.log(myMixedArray);
