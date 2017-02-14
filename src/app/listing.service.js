"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ListingService = (function () {
    function ListingService(angularFire) {
        this.angularFire = angularFire;
        this.allListings = angularFire.database.list('listings');
        this.books = angularFire.database.list('listings', {
            query: {
                orderByChild: 'productType',
                equalTo: "Books & Ephemera"
            }
        });
        this.coins = angularFire.database.list('listings', {
            query: {
                orderByChild: 'productType',
                equalTo: "Coins & Currency"
            }
        });
        this.art = angularFire.database.list('listings', {
            query: {
                orderByChild: 'productType',
                equalTo: "Art"
            }
        });
        this.collectibles = angularFire.database.list('listings', {
            query: {
                orderByChild: 'productType',
                equalTo: "Diverse Collectibles"
            }
        });
        this.gems = angularFire.database.list('listings', {
            query: {
                orderByChild: 'productType',
                equalTo: "Gems & Minerals"
            }
        });
    }
    ListingService.prototype.getFirebaseListings = function () {
        return this.allListings;
    };
    ListingService.prototype.addListing = function (newListing) {
        this.allListings.push(newListing);
    };
    ListingService.prototype.getListingByID = function (listingId) {
        return this.angularFire.database.object('listings/' + listingId);
    };
    ListingService.prototype.getAllBooks = function () {
        return this.books;
    };
    ListingService.prototype.getAllArt = function () {
        return this.art;
    };
    ListingService.prototype.getAllCoins = function () {
        return this.coins;
    };
    ListingService.prototype.getAllCollectibles = function () {
        return this.collectibles;
    };
    ListingService.prototype.getAllGems = function () {
        return this.gems;
    };
    ListingService.prototype.updateListing = function (firebaseKey, newListing) {
        var currentListing = this.getListingByID(firebaseKey);
        currentListing.update(newListing);
    };
    ListingService.prototype.deleteListing = function (firebaseKey) {
        var currentListing = this.getListingByID(firebaseKey);
        currentListing.remove();
    };
    ListingService = __decorate([
        core_1.Injectable()
    ], ListingService);
    return ListingService;
}());
exports.ListingService = ListingService;
