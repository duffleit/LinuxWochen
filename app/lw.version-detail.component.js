System.register(["angular2/core", "./LinuxVersionService", "angular2/router"], function(exports_1, context_1) {
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
    var VersionDetailComponent;
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
            VersionDetailComponent = (function () {
                function VersionDetailComponent(_linuxVersionService, _routeParams) {
                    this._linuxVersionService = _linuxVersionService;
                    this._routeParams = _routeParams;
                }
                VersionDetailComponent.prototype.ngOnInit = function () {
                    var id = +this._routeParams.get('id');
                    this.version = this._linuxVersionService.getLinuxVersion(id);
                };
                VersionDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'lw-version-detail',
                        template: "      \n        <div><b>Name</b> {{version.name}}</div>\n        <div><b>Number</b> {{version.number}}</div>\n        <div><b>Id</b> {{version.id}}</div>\n        ",
                        providers: [LinuxVersionService_1.LinuxVersionService]
                    }), 
                    __metadata('design:paramtypes', [LinuxVersionService_1.LinuxVersionService, router_1.RouteParams])
                ], VersionDetailComponent);
                return VersionDetailComponent;
            }());
            exports_1("VersionDetailComponent", VersionDetailComponent);
        }
    }
});
//# sourceMappingURL=lw.version-detail.component.js.map