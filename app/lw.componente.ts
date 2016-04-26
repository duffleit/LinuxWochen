import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {VersionsComponent} from "./lw.versions.component";
import {VersionDetailComponent} from "./lw.version-detail.component";

@Component({
    selector: 'lw-app',
    template: `
        <div class="linuxVersions">
            <h1><a [routerLink]="['Versions']">{{title}}</a></h1>
            <router-outlet></router-outlet>
        </div>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/detail/:id',
        name: 'VersionDetail',
        component: VersionDetailComponent,
    },
    {
        path: '/versions',
        name: 'Versions',
        component: VersionsComponent,
        useAsDefault: true
    }
])
export class Main {

    public title = "LinuxVersionen";
}


