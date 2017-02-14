"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var listing_service_1 = require('../listing.service');
var GemsMineralsComponent = (function () {
    function GemsMineralsComponent(router, listingService) {
        this.router = router;
        this.listingService = listingService;
        this.gemListings = this.listingService.getAllGems();
    }
    GemsMineralsComponent.prototype.ngOnInit = function () {
    };
    GemsMineralsComponent.prototype.goToFullListing = function (listing) {
        this.router.navigate(['gems-minerals', listing.$key]);
    };
    GemsMineralsComponent = __decorate([
        core_1.Component({
            selector: 'app-gems-minerals',
            templateUrl: './gems-minerals.component.html',
            styleUrls: ['./gems-minerals.component.css'],
            providers: [listing_service_1.ListingService]
        })
    ], GemsMineralsComponent);
    return GemsMineralsComponent;
}());
exports.GemsMineralsComponent = GemsMineralsComponent;
