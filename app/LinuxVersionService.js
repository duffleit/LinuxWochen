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
    var LinuxVersionService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LinuxVersionService = (function () {
                function LinuxVersionService() {
                    this.linuxVersions = [
                        { id: 0, name: "Ubuntu", number: "1604" },
                        { id: 1, name: "Linux Mint", number: "17.3" },
                        { id: 2, name: "ElementaryOS", number: "0.3.2" },
                        { id: 3, name: "Fedora", number: "23" }
                    ];
                }
                LinuxVersionService.prototype.getCurrentLinuxVersions = function () {
                    //this would probably call a webservice
                    return this.linuxVersions;
                };
                LinuxVersionService.prototype.addLinuxVersion = function (name, version) {
                    this.linuxVersions.push({
                        id: this.linuxVersions.length,
                        name: name,
                        number: version
                    });
                };
                LinuxVersionService.prototype.getLinuxVersion = function (id) {
                    return this.linuxVersions.filter(function (lv) { return lv.id === id; })[0];
                };
                LinuxVersionService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LinuxVersionService);
                return LinuxVersionService;
            }());
            exports_1("LinuxVersionService", LinuxVersionService);
        }
    }
});
//# sourceMappingURL=LinuxVersionService.js.map