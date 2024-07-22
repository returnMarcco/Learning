// Deakin University Bachelor of IT 2024: Unit SIT323 Cloud Application Development 1.1P
// LinkedIn Learning course: https://www.linkedin.com/learning/learning-node-js-2017

// Async
fs = require('fs'); // FileSystem library - built in to Node

function phoneNumber(err, data) {
    console.log('data:', data);
    console.error('Error: ', err);
}

fs.readdir('./', phoneNumber);

console.log('This comes after in the code, but first in execution'); // This comes first in Async as it is synchronous - call stack must clear before queued task is dequeued