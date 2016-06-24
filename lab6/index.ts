'use strict';

class User{
    id: number;
    name: string;
    email: string;
    hobbies: Array<string>;

    constructor(id: number, name: string, email: string, hobbies: Array<string>){
        this.id = id;
        this.name = name;
        this.email = email;
        this.hobbies = hobbies;
    }

    setId(id: number): void {
        this.id = id;
    }

    getId(){
        return this.id;
    }
}

var user = new User(10, "Ale", "a@co.co", ['yop', 'trep']);

user.setId(25);
console.log(user.getId());
