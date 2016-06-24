import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'say-selector',
    templateUrl: 'templates/say.html'
})

export class SayComponent implements OnInit{

    say_hello: string;

    constructor(){
        this.say_hello = 'OnInit SayComponent';
    }

    ngOnInit(){
        this.say_hello = 'Oninit SayComponent ngOnInit';
        console.log('Oninit SayComponent ngOnInit');
    }
}