System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                    this.title = "LinuxVersions";
                    this.versions = [
                        { name: "Ubuntu", number: "1604" },
                        { name: "Linux Mint", number: "17.3" },
                        { name: "ElementaryOS", number: "0.3.2" },
                        { name: "Fedora", number: "23" }
                    ];
                }
                Main = __decorate([
                    core_1.Component({
                        selector: 'lw-app',
                        template: "\n        <div class=\"linuxVersions\">\n            <h1>{{title}}</h1>\n            \n            <ul *ngFor=\"#version of versions\">\n                <li>\n                    <span class=\"version-name\">{{version.name}}</span>\n                    <span class=\"version-number\">{{version.number}}</span> \n                </li>\n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=lw.main.js.map