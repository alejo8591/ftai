'use strict';

var Person_one = function(name, id, age){
    return 'el nombre es: ' + name + ' ' + 'su id es: ' + id + 'su edad es: ' + age;
};

console.log(Person_one('Pedro', 38383, 34));


function Person(id, name){
    this.name = name;
    this.id = id;
}

Person.prototype.getHello = function(name){
    console.log('te saluda: ' + this.name + ' para que sepas ' + name);
};

var human = new Person(34, 'Alejandro');

human.getHello('Diego');

function Operation(a, b){
    this.a = a;
    this.b = b;
}

Operation.prototype.sum = function(a, b){

};

Operation.prototype.res = function(a, b){

};


function Person(){
    this.id = 0;
    this.first_name = '';
    this.last_name = '';
    this.age = 0;

}

// Comentario de una linea
Person.prototype.setFirstname = function(first_name){
    this.first_name = first_name;
};

/*
* Comentario
* multi
* linea
* */

Person.prototype.getFirstname = function(){
  return this.first_name;
};

/**
 *
 * @param last_name
 */

Person.prototype.setLastname = function(last_name){
    this.last_name = last_name;
};

Person.prototype.getLastname = function(){
    return this.last_name;
};

var student = new Person();

student.setFirstname('Luigi');

console.log(student.getFirstname());

student.setLastname('Rozo');

console.log(student.getLastname());

console.log('El nombre del estudiante es: ' + student.getFirstname() +' ' + student.getLastname());

