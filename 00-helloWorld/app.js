// Node.js is an open-source server environment
// Node.js uses JavaScript on the server
// Node.js is Asynchronous
//   1. Sends the task to the computer's file system.
//   2. Ready to handle the next request.
//   3. When the file system has opened and read the file, the server returns the content to the client.
// Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello('World');

// In web browsers, window refers to an object that contains the global variables.
// console.log(window); // ReferenceError: window is not defined
// window is a browser thing that doesn’t exist on Node.

// If we really need to create a global, we can use global instead
console.log(global); // global is Node’s identifier for the global object, like window is on browsers.
// But, there’s no need to create truly global variables in Node programs. 
// Instead, just create a module global:
// …and since we include it in your exports, other modules can access the object it refers to as necessary.