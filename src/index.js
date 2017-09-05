"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var sample_component_1 = require("./sample.component");
var sample_directive_1 = require("./sample.directive");
var sample_pipe_1 = require("./sample.pipe");
var sample_service_1 = require("./sample.service");
__export(require("./sample.component"));
__export(require("./sample.directive"));
__export(require("./sample.pipe"));
__export(require("./sample.service"));
var SampleModule = SampleModule_1 = (function () {
    function SampleModule() {
    }
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule_1,
            providers: [sample_service_1.SampleService]
        };
    };
    return SampleModule;
}());
SampleModule = SampleModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            sample_component_1.SampleComponent,
            sample_directive_1.SampleDirective,
            sample_pipe_1.SamplePipe
        ],
        exports: [
            sample_component_1.SampleComponent,
            sample_directive_1.SampleDirective,
            sample_pipe_1.SamplePipe
        ]
    })
], SampleModule);
exports.SampleModule = SampleModule;
var SampleModule_1;
