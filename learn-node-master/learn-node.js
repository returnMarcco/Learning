// Imports
const _ = require('lodash');
const fs = require('fs');

// In the terminal, type 'nodemon <node_file>' to watch a node script for changes and reload automatically

// Test Lodash library

const myArrOne = [0, 1];

const myMergedArr = _.find(myArrOne, (el) => {
    if (el === 0 || el === 1) {
        console.log(true);
    }
})

console.log(myMergedArr);


/**
 * -------------------------------------------------------------------
 *  READ FROM FILES
 * -------------------------------------------------------------------
 */

fs.readFile('./files/file-to-read.js', 'utf-8', (err, data) => { // UTF-8 format used to output human-readable text
    if (err) {
        console.error(err);

        return;
    }

    console.log(data);
});


/**
 * -------------------------------------------------------------------
 *  WRITE TO FILES
 * -------------------------------------------------------------------
 */

data = {
    "name": "fred",
    "age" : "53"
};

dataStr = JSON.stringify(data);

fs.writeFile('./files/file-to-read.js', dataStr, (err) => console.log('Write Finished: ', err));


/**
 * -------------------------------------------------------------------
 *  READ DIRECTORIES
 * -------------------------------------------------------------------
 */

// JSON.parse(): JSON str => JS obj
// JSON.stringify(): JS obj => JSON String

fs.readdir('./', (err, data) => console.log(data));

/**
 * -------------------------------------------------------------------
 *  NODE FRAMEWORKS
 * -------------------------------------------------------------------
 */

// ExpressJS - Web APIS/Handles HTTP Requests.
// Socket.IO - Websockets. Event-driven. Both client and serverside. Bi-directional comms.
// Sails - Offers ORM for Node.