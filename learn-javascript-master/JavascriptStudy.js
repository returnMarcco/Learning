// JavaScript Study
// Started: 29/12/2022

/* Note - This module has been written
** to work in conjunction with
** test_js_with_html.html
*/

// Output
// ----------------
const PI = 3.14;
const NUM_Y = 10;
console.log("This was logged from an external JS script");

// Helper function - Used in functions below
function writeToEle(id, string) {
    document.getElementById(id).innerHTML = string;
}

// Event-handler function, albeit unnecessary
function windowAlert(alert) {
    window.alert(alert);
}

function testVariables(id, num_x) {

    if (num_x < PI) {
        writeToEle(id, "Number is less than PI: " + PI);
    }

    else if (num_x == PI) {
        writeToEle(id, "Number is equal to PI: " + PI);
    }

    else {
        writeToEle(id, "Number is greater than PI: " + PI);
    }
}

function testTernaryOperators(id, num_x) {
    num_x < NUM_Y ? writeToEle(id, "The entered number is less than " + NUM_Y) 
    : num_x == NUM_Y ? writeToEle(id, "The entered number is equal to " + NUM_Y) 
    : writeToEle(id, "The entered number is greater than " + NUM_Y);
}

function stringSliceDocWrite(id, stringInput, start, end) {
    let slicedString = stringInput.slice(start, end);
    writeToEle(id, slicedString);
}

// Test Array Destructering

// DO NOT create string objects — 
// This can produce undesired results and objects always return false when comparing for equality

// Loops
// ---------------
function testForLoop(id) {
    const myArr = ['a', 'b', 'c', 'd'];
    let counter = 0;
    let output = '';

    for (let i = 0; i < myArr.length; i++) {
        if (counter < myArr.length - 1) {
            output += myArr[i] + ', ';
            counter++;
        }

        else {
            output += myArr[i];
        }
    }
    
    writeToEle(id, "Array Output Using For Loop: " + output);
}

// Loops through object's keys - Can access values
// Do not use over array if index order is important
function testForIn(id) {
    let output = '';
    const myObj = {
        'Name': 'Jason',
        'Position': 'Student',
        'Language': 'English'
    };
    
    for (let key in myObj) {
        output += key + ': ' + myObj[key] + '<br>';
    }
    
    writeToEle(id, output);
}

// Used to iterate over an array - preserves index order
function testForOf(id) {
    let counter = 0;
    let output = '';
    const myArr = [
        'Name',
        'Position',
        'Language'
    ];

    for (let i of myArr) {
        if (counter < myArr.length - 1) {
            output += i + ', ';
            counter++;
        }

        else {
            output += i;
        }
    }
    
    writeToEle(id, output)
}

// Used to call a function on each element in an array. Modifies existing array.
function testForEach(array, id) {
    let counter = '';
    let output = '';
    
    array.forEach(function(element) {
        if (counter < array.length - 1) { 
            output += element + ', ';
            writeToEle(id, output);
            counter++;
        }
        
        else {
            output += element;
            writeToEle(id, output); 
        }
    })
}

// Map Function - Used to call a function on each element in an array. Creates new array.
function testMapFunction(array, id) {
    let counter = '';
    let output = '';
    
    array.map(function(element) {
        if (counter < array.length - 1) { 
            output += element + ' ';
            writeToEle(id, output);
            counter++;
        }
        
        else {
            output += element;
            writeToEle(id, output); 
        }
    })
}

// Sets are collections of unique values
function testSets() {
    const numArr = [1, 2, 3, 4, 5];
    const numSet = new Set(numArr);

    numSet.forEach(function(element) {
        console.log(element);
    })
    
    console.log('Adding elements to set');
    numSet.add(6);
    numSet.add(7);
    numSet.add(8);

    numSet.forEach(function(element) {
        console.log(element);
    })

    console.log('Returning iterator object from set');
    for (let element of numSet.values()) {
        console.log(element += element);
    }
}

// Maps are collections of key-value pairs. Maps preserve order of keys
// Keys can be of any data type
function testMap() {
    mapKeys = '';
    const personMap = new Map([
        ['name', 'trevor'],
        ['age', 30]
    ]);

    console.log('Map Size: ' + personMap.size);
    personMap.set('Address', '33 Mason Way');
    console.log('Map Size: ' + personMap.size);
    
    personMap.forEach(function(value, key) {
        mapKeys += key + ': ' + value + '\n';
    })

    console.log(mapKeys);
}

function main() {
    testMap();
}

