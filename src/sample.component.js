"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SampleComponent = (function () {
    function SampleComponent(_myservice) {
        this._myservice = _myservice;
        this.data = [];
        this.header = [];
        this.getRecrods();
    }
    SampleComponent.prototype.getRecrods = function () {
        var _this = this;
        this._myservice.getValues().subscribe(function (value) {
            _this.data = value;
            for (var header in _this.data[0]) {
                _this.header.push(header);
            }
        });
    };
    return SampleComponent;
}());
SampleComponent = __decorate([
    core_1.Component({
        selector: 'sample-component',
        //template: `<h1>Sample component</h1>`
        template: "\n   <table>\n        <tr>\n          <th *ngFor=\"let head of header\">{{head}}</th>\n        </tr>\n        <tr *ngFor=\"let data of data\">\n        <td *ngFor=\"let head of header\">\n            {{data[head]}}\n        </td>\n        </tr>\n   </table>\n "
    })
], SampleComponent);
exports.SampleComponent = SampleComponent;
