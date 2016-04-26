import {Component} from 'angular2/core';
import {LinuxVersionService} from "./LinuxVersionService";
import {LinuxVersion} from "./linuxVersion";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';

@Component({
    selector: 'lw-versions',
    template: `      
            <ul *ngFor="#version of versions">
                <li>
                    <span class="version-number">{{version.number}}</span>
                    <span class="version-name">{{version.name}}</span>
                    <a (click)="getDetail(version)">get Details</a>
                </li>
            </ul>
    `,
    providers: [LinuxVersionService, ROUTER_PROVIDERS]
})
export class VersionsComponent {

    constructor(
        private _router : Router,
        private _linuxVersionService: LinuxVersionService
    ) { }

    get versions():Array<LinuxVersion> {
        return this._linuxVersionService.getCurrentLinuxVersions();
    }

    getDetail(version: LinuxVersion) {
        this._router.navigate(['VersionDetail', { id: version.id }]);
    }
}


