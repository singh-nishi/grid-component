"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var sample_component_1 = require("./sample.component");
describe('SampleComponent', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [sample_component_1.SampleComponent]
        });
        fixture = testing_1.TestBed.createComponent(sample_component_1.SampleComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('Should be false', function () {
        expect(false).toBe(true);
    });
});
