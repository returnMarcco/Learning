// learn Modules

// Imports
// Note: May throw an error as this file is not being interpreted as an ES module.

// new way
import { myExportedHelloWorldfunction as HelloWorld } from './my-module';

// Old way
const myImportedGoodbyeWorldFunc = require('./my-module');

console.log(HelloWorld());

console.log(myImportedGoodbyeWorldFunc());