// Modules
// Modules are like JavaScript libraries. 
// • A Module is a set of functions you want to include in your application.
// • Every file in node application is considered as module.
// • The variables and functions defined in the module are private to the module.
// • If we want to use the variables and functions defined in that module, we need to explicitly export it and make it public.
// Every node application has at least one module.
// Node.js has a set of built-in modules which you can use without any further installation.

console.log(module);
//   Module {
//     id: '.',
//     path: '*:\\*\\*\\*\\*',
//     exports: {},
//     parent: *,
//     filename: '*:\\*\\*\\*\\*.js',
//     loaded: boolean,
//     children: [],
//     paths: [
//       '*:\\*\\*\\*\\*',
//       '*:\\*\\*\\*',
//       '*:\\*\\*',
//       '*:\\*'
//     ]
//   }

// console.log(global.module); // appears to be global but not global. // undefined