System.register(['angular2/platform/browser', './lw.main'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, lw_main_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (lw_main_1_1) {
                lw_main_1 = lw_main_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(lw_main_1.Main);
        }
    }
});
//# sourceMappingURL=bootstrapper.js.map