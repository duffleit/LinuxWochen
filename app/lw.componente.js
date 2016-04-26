System.register(['angular2/core', 'angular2/router', "./lw.versions.component", "./lw.version-detail.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, lw_versions_component_1, lw_version_detail_component_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lw_versions_component_1_1) {
                lw_versions_component_1 = lw_versions_component_1_1;
            },
            function (lw_version_detail_component_1_1) {
                lw_version_detail_component_1 = lw_version_detail_component_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                    this.title = "LinuxVersionen";
                }
                Main = __decorate([
                    core_1.Component({
                        selector: 'lw-app',
                        template: "\n        <div class=\"linuxVersions\">\n            <h1><a [routerLink]=\"['Versions']\">{{title}}</a></h1>\n            <router-outlet></router-outlet>\n        </div>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/detail/:id',
                            name: 'VersionDetail',
                            component: lw_version_detail_component_1.VersionDetailComponent,
                        },
                        {
                            path: '/versions',
                            name: 'Versions',
                            component: lw_versions_component_1.VersionsComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=lw.componente.js.map