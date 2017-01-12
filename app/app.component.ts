import {Component} from 'angular2/core';
import {AuthorComponent} from './author.component';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular Assignment</h1><author></author>',
    directives : [AuthorComponent]
})
export class AppComponent { }