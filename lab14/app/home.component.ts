import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home-selector',
    templateUrl: 'templates/home.html'
})

export class HomeComponent implements OnInit{

    hello: string;

    constructor(){
        this.hello = 'OnInit HomeComponent';
    }

    ngOnInit(){
        this.hello = 'Oninit HomeComponent ngOnInit';
        console.log('Oninit HomeComponent ngOnInit');
    }
}