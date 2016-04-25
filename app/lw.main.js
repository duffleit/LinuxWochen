System.register(['angular2/core', "./LinuxVersionService"], function(exports_1, context_1) {
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
    var core_1, LinuxVersionService_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LinuxVersionService_1_1) {
                LinuxVersionService_1 = LinuxVersionService_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main(_linuxVersionService) {
                    this._linuxVersionService = _linuxVersionService;
                    this.title = "LinuxVersionen";
                }
                Object.defineProperty(Main.prototype, "versions", {
                    get: function () {
                        return this._linuxVersionService.getCurrentLinuxVersions();
                    },
                    enumerable: true,
                    configurable: true
                });
                Main = __decorate([
                    core_1.Component({
                        selector: 'lw-app',
                        template: "\n        <div class=\"linuxVersions\">\n            <h1>{{title}}</h1>\n            \n            <ul *ngFor=\"#version of versions\">\n                <li>\n                    <span class=\"version-name\">{{version.name}}</span>\n                    <span class=\"version-number\">{{version.number}}</span>\n                </li>\n            </ul>\n        </div>\n    ",
                        providers: [LinuxVersionService_1.LinuxVersionService]
                    }), 
                    __metadata('design:paramtypes', [LinuxVersionService_1.LinuxVersionService])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=lw.main.js.map