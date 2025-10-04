// map Question - Convert an array of numbers into a new array with every element Multiplied by 2
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter Question - Filter out all the even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6, 8, 10]

// Create a counter in JavaScript We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second
let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(counter);
}, 1000);

// Counter without setInterval Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck
let counter = 0;

function count() {
  counter++;
  console.log(counter);

  // Call itself after 1 second
  setTimeout(count, 1000);
}

// Start the counter
count();

// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.
const fs = require('fs');

// Read file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

// Expensive operation
function expensiveTask(iterations) {
  let sum = 0;
  for (let i = 0; i < iterations; i++) {
    sum += i;
  }
  console.log('Expensive task done! Sum:', sum);
}

// Call expensiveTask after starting file read
expensiveTask(1e7); // try 1e8, 1e9 to see the delay effect

// /* Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function. */ function wait(n) { } module.exports = wait;
function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited for ${n} seconds`);
    }, n * 1000); // convert seconds to milliseconds
  });
}

module.exports = wait;
// /* * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds. * During this time the thread should not be able to do anything else. * the function should return a promise just like before */ function sleep(milliseconds) { } module.exports = sleep

function sleep(milliseconds) {
  return new Promise((resolve) => {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
      // Busy-wait loop: do nothing, just block the thread
    }
    resolve(`Slept for ${milliseconds} ms`);
  });
}

module.exports = sleep;

// Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively. * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all, * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.

// Function that returns a promise that resolves after t milliseconds
function wait1(t) {
  return new Promise((resolve) => setTimeout(() => resolve(), t * 1000));
}

function wait2(t) {
  return new Promise((resolve) => setTimeout(() => resolve(), t * 1000));
}

function wait3(t) {
  return new Promise((resolve) => setTimeout(() => resolve(), t * 1000));
}

// Function to calculate total time taken using Promise.all
function calculateTime(t1, t2, t3) {
  const start = Date.now();

  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
    const end = Date.now();
    return end - start; // total time in milliseconds
  });
}

module.exports = calculateTime;

// * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively. * Write a function that sequentially calls all 3 of these functions in order. * Return a promise chain which return the time in milliseconds it takes to complete the entire operation. * Compare it with the results from 3-promise-all.js
// Functions that return promises resolving after t seconds
function wait1(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

function wait2(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

function wait3(t) {
  return new Promise((resolve) => setTimeout(resolve, t * 1000));
}

// Sequential execution
function calculateTime(t1, t2, t3) {
  const start = Date.now();

  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      const end = Date.now();
      return end - start; // total time in milliseconds
    });
}

module.exports = calculateTime;



