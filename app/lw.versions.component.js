System.register(['angular2/core', "./LinuxVersionService", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, LinuxVersionService_1, router_1;
    var VersionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LinuxVersionService_1_1) {
                LinuxVersionService_1 = LinuxVersionService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            VersionsComponent = (function () {
                function VersionsComponent(_router, _linuxVersionService) {
                    this._router = _router;
                    this._linuxVersionService = _linuxVersionService;
                }
                Object.defineProperty(VersionsComponent.prototype, "versions", {
                    get: function () {
                        return this._linuxVersionService.getCurrentLinuxVersions();
                    },
                    enumerable: true,
                    configurable: true
                });
                VersionsComponent.prototype.getDetail = function (version) {
                    this._router.navigate(['VersionDetail', { id: version.id }]);
                };
                VersionsComponent = __decorate([
                    core_1.Component({
                        selector: 'lw-versions',
                        template: "      \n            <ul *ngFor=\"#version of versions\">\n                <li>\n                    <span class=\"version-number\">{{version.number}}</span>\n                    <span class=\"version-name\">{{version.name}}</span>\n                    <a (click)=\"getDetail(version)\">get Details</a>\n                </li>\n            </ul>\n    ",
                        providers: [LinuxVersionService_1.LinuxVersionService, router_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, LinuxVersionService_1.LinuxVersionService])
                ], VersionsComponent);
                return VersionsComponent;
            }());
            exports_1("VersionsComponent", VersionsComponent);
        }
    }
});
//# sourceMappingURL=lw.versions.component.js.map