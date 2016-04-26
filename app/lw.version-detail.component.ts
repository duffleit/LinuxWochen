import {Component, OnInit} from "angular2/core";
import {LinuxVersionService} from "./LinuxVersionService";
import {LinuxVersion} from "./linuxVersion";
import {RouteParams} from "angular2/router";

@Component({
    selector: 'lw-version-detail',
    template: `      
        <div><b>Name</b> {{version.name}}</div>
        <div><b>Number</b> {{version.number}}</div>
        <div><b>Id</b> {{version.id}}</div>
        `,
    providers: [LinuxVersionService]
})

export class VersionDetailComponent  implements OnInit{

    version : LinuxVersion;

    constructor(private _linuxVersionService: LinuxVersionService,
                private _routeParams: RouteParams) { }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.version = this._linuxVersionService.getLinuxVersion(id)
    }

}
