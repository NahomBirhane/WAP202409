'use strict';

function foo(){
    j = 10; // implied global
}

foo();
console.log(j);