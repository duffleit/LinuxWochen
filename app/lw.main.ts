import {Component} from 'angular2/core';
import {LinuxVersionService} from "./LinuxVersionService";
import {LinuxVersion} from "./linuxVersion";

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
    `,
    providers: [LinuxVersionService]
})
export class Main {

    constructor(private _linuxVersionService: LinuxVersionService) { }

    get versions():Array<LinuxVersion> {
        return this._linuxVersionService.getCurrentLinuxVersions();
    }

    public title = "LinuxVersionen";
}


