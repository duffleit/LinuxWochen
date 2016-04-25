import {Component} from 'angular2/core';

@Component({
    selector: 'lw-app',
    template: `
        <div class="linuxVersions">
            <h1>{{title}}</h1>
            
            <input (click)="addYear()" type="button" value="add year to title"/>
            
        </div>
    `
})
export class Main {

    public title = "LinuxVersions";

    public addYear(){
        var currentYear = this.getCurrentYear();
        this.title = "LinuxVersion in " + currentYear;
    }

    private getCurrentYear() : number {
        return (new Date()).getFullYear();
    }
}


