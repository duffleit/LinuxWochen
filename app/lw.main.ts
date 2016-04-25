import {Component} from 'angular2/core';

@Component({
    selector: 'lw-app',
    template: `
        <div class="linuxVersions">
            <h1>{{title}}</h1>
            
            <ul *ngFor="#version of versions">
                <li>
                    <span class="version-name">{{version.name}}</span>
                    <span class="version-number">{{version.number}}</span> 
                </li>
            </ul>
        </div>
    `
})
export class Main {

    public title = "LinuxVersions";

    public versions = [
        { name: "Ubuntu", number: "1604"},
        { name: "Linux Mint", number: "17.3"},
        { name: "ElementaryOS", number: "0.3.2"},
        { name: "Fedora", number: "23"}
    ]
}


