// Global Object

// console object is a global object part of the global scope
// setTimeOut: setTimeout() - Used to call a function after a delay
// clearTimeOut: clearTimeout() - Used to clear a timeOut
// setInterval: setInterval() - Used to repeatedly call a function after a delay 
// clearInterval: clearInterval() - Used to clear a time interval

// window
// window.console.log(), window.setTimeOut(), window.clearTimeOut(), window.setInterval(), window.clearInterval()
// console.log(), setTimeOut(), clearTimeOut(), setInterval(), clearInterval()
// console.log(window); // ReferenceError: window is not defined
// In web browsers, window refers to an object that contains the global variables.
// window is a browser thing that doesn’t exist on Node.

// If we really need to create a global, we can use global instead
// node.console.log();
console.log(); // global is Node’s identifier for the global object, like window is on browsers.
// global.console.log(), global.setTimeOut(), global.clearTimeOut(), global.setInterval(), global.clearInterval()
// console.log(), setTimeOut(), clearTimeOut(), setInterval(), clearInterval()


// difference
// In browser - the variables and functions we define are added to the window object.
// var message = 'message';
// console.log(window.message); // message is globally available in window object.

// In node - the variables and functions we define are not added to the global object.
// They are only scoped to the file.
// var message = 'message';
// console.log(window.message); // message will not be globally available in global object.

// But, there’s no need to create truly global variables in Node programs. 
// Instead, just create a module global:
// …and since we include it in your exports, other modules can access the object it refers to as necessary.