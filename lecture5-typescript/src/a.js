(function foo() {
    var coursename = 'CS472';
    console.log('a.js', coursename);
})(); //IIFE -> Revealing module pattern

// (function() {
//     // your code
// })()

// (function(){
//     // your code
// }())







// 1. coursename not exposed to global, which b.js cannot get it
// 2. when load the index.html, a.js cs472 will printed automatically