'use strict';

function msg(){
    console.log('hello');
}

msg();

var msg_one = function(){
    console.log('hello two');
};

msg_one();

function sum(a,b){
    return a + b;
}

console.log(sum(4, 3));

var sum_one = function(a, b){
    return a + b;
};

console.log(sum_one(5,7));