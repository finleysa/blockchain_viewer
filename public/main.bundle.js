webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar (clearCoinStorage)=\"clearCoinStorageHandler()\"></app-navbar>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <app-holdings [allCoins]=\"allCoins\" (coinOwnedEvent)=\"coinOwnedHandler($event)\"></app-holdings>\n    </div>\n    <div class=\"col-lg-6\">\n      <app-dash [allCoins]=\"allCoins\" (coinToggleEvent)=\"coinToggleHandler($event)\"></app-dash>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  background-image: linear-gradient(#2c406d, #04060a 100%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_coinmarketcap_service__ = __webpack_require__("../../../../../src/app/services/coinmarketcap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(cmcService) {
        this.cmcService = cmcService;
        this.savedCoins = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get stored coins
        var temp = localStorage.getItem('savedCoins');
        if (temp) {
            this.savedCoins = JSON.parse(temp);
        }
        this.startUpdate();
        setInterval(function () {
            _this.startUpdate();
        }, 20000);
    };
    AppComponent.prototype.startUpdate = function () {
        var _this = this;
        this.cmcService.getPrices().subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.map(data, function (m) {
                __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.map(_this.savedCoins, function (n) {
                    if (m.id === n.id) {
                        m.isMyCoin = n.isMyCoin;
                        m.amount_owned = n.amount_owned;
                    }
                });
            });
            _this.allCoins = data;
        }, function (err) {
            console.error(err);
        }, function () {
        });
    };
    AppComponent.prototype.clearCoinStorageHandler = function () {
        this.savedCoins = [];
        __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.map(this.allCoins, function (n) {
            n.isMyCoin = false;
            n.amount_owned = 0;
        });
        localStorage.clear();
    };
    AppComponent.prototype.coinOwnedHandler = function (coin) {
        __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.map(this.savedCoins, function (n) {
            if (n.id === coin.id) {
                n.amount_owned = coin.amount_owned;
                n.ownedTotal = coin.ownedTotal;
            }
        });
        this.saveCoins(JSON.stringify(this.savedCoins));
    };
    AppComponent.prototype.coinToggleHandler = function (coin) {
        if (coin.isMyCoin) {
            this.savedCoins.push(coin);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.remove(this.savedCoins, function (n) {
                return n.id === coin.id;
            });
        }
        this.saveCoins(JSON.stringify(this.savedCoins));
    };
    AppComponent.prototype.saveCoins = function (value) {
        localStorage.setItem('savedCoins', value);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_coinmarketcap_service__["a" /* CoinmarketcapService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dash_dash_component__ = __webpack_require__("../../../../../src/app/components/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_coinmarketcap_service__ = __webpack_require__("../../../../../src/app/services/coinmarketcap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_holdings_holdings_component__ = __webpack_require__("../../../../../src/app/components/holdings/holdings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_holdings_holding_holding_component__ = __webpack_require__("../../../../../src/app/components/holdings/holding/holding.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_dash_dash_component__["a" /* DashComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_holdings_holdings_component__["a" /* HoldingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_12__components_holdings_holding_holding_component__["a" /* HoldingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["k" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatCheckboxModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_coinmarketcap_service__["a" /* CoinmarketcapService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dash/dash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n\n    <div class=\"mat-container mat-elevation-z8\">\n\n      <mat-card>\n        <div class=\"search\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" [disabled]=\"checked\" placeholder=\"Filter\">\n          </mat-form-field>\n          <mat-checkbox [(ngModel)]=\"checked\">Show Checked Only</mat-checkbox>\n        </div>\n      </mat-card>\n\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"add\">\n          <mat-header-cell *matHeaderCellDef></mat-header-cell>\n          <mat-cell *matCellDef=\"let coin\">\n            <button (click)=\"toggleCoin(coin)\">\n              <i *ngIf=\"!coin.isMyCoin\" class=\"fa fa-plus\" aria-hidden=\"true\" style=\"color: green\"></i>\n              <i *ngIf=\"coin.isMyCoin\" class=\"fa fa-minus\" aria-hidden=\"true\" style=\"color: red\"></i>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let coin\"> {{coin.name}} </mat-cell>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"price\">\n          <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>\n          <mat-cell *matCellDef=\"let coin\"> {{coin.price_usd}} </mat-cell>\n        </ng-container>\n\n        <!-- Color Column -->\n        <ng-container matColumnDef=\"percent_change_1h\">\n          <mat-header-cell *matHeaderCellDef> 1hr change </mat-header-cell>\n          <mat-cell *matCellDef=\"let coin\" [ngClass]=\"coin.percent_change_1h < 0 ? 'red-text' : 'green-text'\"> {{coin.percent_change_1h}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"percent_change_24h\">\n          <mat-header-cell *matHeaderCellDef> 24h Change </mat-header-cell>\n          <mat-cell *matCellDef=\"let coin\" [ngClass]=\"coin.percent_change_24h < 0 ? 'red-text' : 'green-text'\"> {{coin.percent_change_24h}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"percent_change_7d\">\n          <mat-header-cell *matHeaderCellDef> 7d Change </mat-header-cell>\n          <mat-cell *matCellDef=\"let coin\" [ngClass]=\"coin.percent_change_7d < 0 ? 'red-text' : 'green-text'\"> {{coin.percent_change_7d}} </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dash/dash.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 100%;\n}\n/* Structure */\n.mat-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n.search {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dash/dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_numeral__ = __webpack_require__("../../../../numeral/numeral.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_numeral__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashComponent = (function () {
    function DashComponent() {
        this._checked = false;
        this.updateCount = 0;
        this.coinToggleEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.displayedColumns = ['add', 'name', 'price', 'percent_change_1h', 'percent_change_24h', 'percent_change_7d'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatTableDataSource */](this._allCoins);
    }
    Object.defineProperty(DashComponent.prototype, "allCoins", {
        get: function () {
            return this._allCoins;
        },
        set: function (coins) {
            this._allCoins = coins;
            if (this.updateCount <= 2) {
                this.updateCount++;
                this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatTableDataSource */](this._allCoins);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            console.log(checked);
            if (checked) {
                this.dataSource.filter = 'true';
            }
            else {
                this.dataSource.filter = null;
            }
            this._checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DashComponent.prototype.toggleCoin = function (coin) {
        console.log(coin.name);
        coin.isMyCoin = !coin.isMyCoin;
        this.coinToggleEvent.emit(coin);
    };
    DashComponent.prototype.moneyFormat = function (money) {
        return __WEBPACK_IMPORTED_MODULE_2_numeral__(money).format('$0,0.00');
    };
    DashComponent.prototype.myCoinsOnly = function () {
        console.log("only");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], DashComponent.prototype, "coinToggleEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DashComponent.prototype, "allCoins", null);
    DashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-dash',
            template: __webpack_require__("../../../../../src/app/components/dash/dash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dash/dash.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/holdings/holding/holding.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"coin.isMyCoin\" class=\"row\">\n\n  <div class=\"col-sm-6\">\n    <div class=\"media-left\">\n      <a href=\"#\">\n        <img class=\"media-object\" src=\"/assets/{{coin.id}}.png\" alt=\"...\" style=\"height: 5em; width: 5em;\">\n      </a>\n    </div>\n    <div class=\"media- body\">\n      <h4 class=\"media-heading\">{{coin.name}}</h4>\n      <h4 class=\"media-heading\">{{coin.price_usd}}</h4>\n    </div>\n  </div>\n\n  <div class=\"col-sm-6\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n\n        <mat-list-item>\n          <mat-form-field>\n            <input matInput value=\"{{coin.amount_owned}}\" type=\"text\" (keyup)=\"multiply($event, coin)\" placeholder=\"Owned Amount\">\n          </mat-form-field>\n        </mat-list-item>\n\n      </div>\n      <div class=\"col-sm-6\">\n\n        <mat-list-item *ngIf=\"coin.amount_owned && coin.amount_owned != 0\">\n          {{coin.amount_owned * coin.price_usd}}\n        </mat-list-item>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/holdings/holding/holding.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/holdings/holding/holding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoldingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_coin__ = __webpack_require__("../../../../../src/app/models/coin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HoldingComponent = (function () {
    function HoldingComponent() {
        this.coinOwnedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    HoldingComponent.prototype.ngOnInit = function () {
    };
    HoldingComponent.prototype.multiply = function (e, coin) {
        if (e.target.value > 0) {
            coin.amount_owned = e.target.value;
        }
        else {
            coin.amount_owned = null;
        }
        this.coinOwnedEvent.emit(coin);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_coin__["a" /* Coin */])
    ], HoldingComponent.prototype, "coin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], HoldingComponent.prototype, "coinOwnedEvent", void 0);
    HoldingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-holding',
            template: __webpack_require__("../../../../../src/app/components/holdings/holding/holding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/holdings/holding/holding.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HoldingComponent);
    return HoldingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/holdings/holdings.component.html":
/***/ (function(module, exports) {

module.exports = "  <mat-card class=\"mat-elevation-z8\">\n    <h1 class=\"jumbo\">{{moneys}}</h1>\n  </mat-card>\n\n  <mat-card class=\"mat-container mat-scroll mat-elevation-z8\">\n    <div *ngIf=\"allCoins\">\n        <app-holding *ngFor=\"let coin of allCoins\"[coin]=\"coin\" (coinOwnedEvent)=\"emitCoin(coin)\"></app-holding>\n    </div>\n  </mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/holdings/holdings.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail img {\n  height: 200px;\n  width: 200px;\n}\n.jumbo {\n  margin-bottom: .3em;\n  font-size: 10rem;\n}\n@media (max-width: 600px) {\n  .jumbo {\n    font-size: 6rem;\n  }\n}\n.holdings {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n  max-height: 500px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/holdings/holdings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoldingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_numeral__ = __webpack_require__("../../../../numeral/numeral.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_numeral__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HoldingsComponent = (function () {
    function HoldingsComponent() {
        this.coinOwnedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Object.defineProperty(HoldingsComponent.prototype, "allCoins", {
        get: function () {
            return this._allCoins;
        },
        set: function (coins) {
            this._allCoins = coins;
            var temp = 0;
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(this.allCoins, function (n) {
                if (n.isMyCoin && n.amount_owned) {
                    temp += (n.amount_owned * n.price_usd);
                }
            });
            this.moneys = __WEBPACK_IMPORTED_MODULE_2_numeral__(temp).format('$0,0.00');
        },
        enumerable: true,
        configurable: true
    });
    HoldingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get total after allCoins is set
        var timer = setInterval(function () {
            if (_this.allCoins) {
                _this.totalMoneys();
                clearInterval(timer);
            }
        }, 100);
    };
    HoldingsComponent.prototype.totalMoneys = function () {
        var temp = 0;
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(this.allCoins, function (n) {
            if (n.isMyCoin && n.amount_owned) {
                temp += (n.amount_owned * n.price_usd);
            }
        });
        this.moneys = __WEBPACK_IMPORTED_MODULE_2_numeral__(temp).format('$0,0.00');
    };
    HoldingsComponent.prototype.emitCoin = function (coin) {
        this.totalMoneys();
        this.coinOwnedEvent.emit(coin);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], HoldingsComponent.prototype, "allCoins", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], HoldingsComponent.prototype, "coinOwnedEvent", void 0);
    HoldingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-holdings',
            template: __webpack_require__("../../../../../src/app/components/holdings/holdings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/holdings/holdings.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], HoldingsComponent);
    return HoldingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\"background-color: #181818; color: white;\">\n  <span>Crypto Dashboard</span>\n  <mat-menu #appMenu=\"matMenu\">\n    <button mat-menu-item> Settings </button>\n    <button mat-menu-item> Help </button>\n  </mat-menu>\n\n  <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n    <mat-icon>more_vert</mat-icon>\n  </button>\n</mat-toolbar>\n<!--<nav class=\"navbar navbar-inverse\">-->\n  <!--<div class=\"container-fluid\">-->\n    <!--<div class=\"navbar-header\">-->\n      <!--<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">-->\n        <!--<span class=\"sr-only\">Toggle navigation</span>-->\n        <!--<span class=\"icon-bar\"></span>-->\n        <!--<span class=\"icon-bar\"></span>-->\n        <!--<span class=\"icon-bar\"></span>-->\n      <!--</button>-->\n      <!--<a class=\"navbar-brand\" href=\"#\">Brand</a>-->\n    <!--</div>-->\n    <!--<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">-->\n      <!--<ul class=\"nav navbar-nav\">-->\n        <!--<li><a href=\"#\" class=\"pull-right btn\" (click)=\"clearStorage()\">CLEAR</a></li>-->\n      <!--</ul>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</nav>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.clearCoinStorage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.clearStorage = function () {
        localStorage.setItem('savedCoins', '');
        this.clearCoinStorage.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "clearCoinStorage", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/coin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
var Coin = (function () {
    function Coin(newCoin) {
        this.id = newCoin.id;
        this.name = newCoin.name;
        this.symbol = newCoin.symbol;
        this.rank = newCoin.rank;
        this.price_usd = newCoin.price_usd;
        this.price_btc = newCoin.price_btc;
        // this.twofour_hr_volume_usd = newCoin.24h_volume_usd;
        this.market_cap_usd = newCoin.arket_cap_usd;
        this.available_supply = newCoin.available_supply;
        this.total_supply = newCoin.total_supply;
        this.max_supply = newCoin.max_supply;
        this.percent_change_1h = newCoin.percent_change_1h;
        this.percent_change_24h = newCoin.percent_change_24h;
        this.percent_change_7d = newCoin.percent_change_7d;
        this.last_update = newCoin.last_update;
    }
    return Coin;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    // transform(value: any, args?: any): any {
    //   return null;
    // }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        ;
        if (!searchText) {
            return items;
        }
        ;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.id.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/coinmarketcap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinmarketcapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoinmarketcapService = (function () {
    function CoinmarketcapService(http) {
        this.http = http;
    }
    CoinmarketcapService.prototype.getPrices = function () {
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/');
    };
    CoinmarketcapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CoinmarketcapService);
    return CoinmarketcapService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map