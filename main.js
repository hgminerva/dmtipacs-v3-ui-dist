(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account.login.component.html":
/*!******************************************************!*\
  !*** ./src/app/account/account.login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <br />\r\n    <br />\r\n    <br />\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\"></div>\r\n        <div class=\"col-md-4\">\r\n            <mat-card class=\"example-card\">\r\n                <br />\r\n                <mat-card-header>\r\n                    <mat-card-title style=\"margin-left: -10px;\">\r\n                        <a routerLink=\"/home\">\r\n                            <img src=\"../../assets/logo/DMTiPACS2.png\" style=\"height: 30px;\" />\r\n                        </a>\r\n                        <br />\r\n                        <br />\r\n                        <h3>\r\n                            Sign in\r\n                        </h3>\r\n                        <h6 style=\"margin-left: 1px;\">to continue to application</h6>\r\n                    </mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <form (ngSubmit)=\"btnLoginClick()\">\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Username</mat-label>\r\n                            <input required matInput id=\"inpUsername\" [(ngModel)]=\"userModel.UserName\" [ngModelOptions]=\"{standalone: true}\" />\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Password</mat-label>\r\n                            <input required matInput id=\"inpPassword\" placeholder=\"Enter your password\" [(ngModel)]=\"userModel.Password\" [ngModelOptions]=\"{standalone: true}\"\r\n                                [type]=\"hide ? 'text' : 'password'\">\r\n                            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                        </mat-form-field>\r\n                        <br />\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" id=\"btnLogin\" style=\"margin-top: 15px; height: 50px; font-size: 20px;\">\r\n                            Login\r\n                        </button>\r\n                    </form>\r\n                </mat-card-content>\r\n                <br />\r\n                <!-- <div>\r\n                    <a routerLink=\"/account/register\">Create an account</a>\r\n                </div> -->\r\n            </mat-card>\r\n            <br />\r\n            <p class=\"text-center\" style=\"color: gray; font-size: 12px;\">\r\n                Copyright © 2018 - DMTiPACS Application\r\n                <br /> version 3.20190731\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/account.login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/account/account.login.component.ts ***!
  \****************************************************/
/*! exports provided: AccountLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLoginComponent", function() { return AccountLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======


// =======
// Service
// =======

// ======
// Toastr
// ======

var AccountLoginComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function AccountLoginComponent(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        // ================
        // Global Variables
        // ================
        this.title = 'Login';
        // ================
        // Initialize Model
        // ================
        this.userModel = {
            Id: 0,
            Email: "",
            UserName: "",
            FullName: "",
            Address: "",
            Password: "",
            ConfirmPassword: "",
            ContactNumber: "",
            UserTypeId: 0
        };
    }
    // =====
    // Login
    // =====
    AccountLoginComponent.prototype.btnLoginClick = function () {
        var _this = this;
        if (this.loginSubscription != null)
            this.loginSubscription.unsubscribe();
        var btnLogin = document.getElementById("btnLogin");
        btnLogin.setAttribute("disabled", "disabled");
        btnLogin.innerHTML = "Logging in...";
        var inpUsername = document.getElementById("inpUsername");
        inpUsername.setAttribute("disabled", "disabled");
        var inpPassword = document.getElementById("inpPassword");
        inpPassword.setAttribute("disabled", "disabled");
        this.accountService.login(this.userModel.UserName, this.userModel.Password);
        this.loginSubscription = this.accountService.loginObservable.subscribe(function (data) {
            if (data == 1) {
                _this.toastr.success("Login successful.");
                setTimeout(function () {
                    _this.router.navigate(['/software']);
                }, 500);
            }
            else if (data == 0) {
                _this.toastr.error("Login failed.");
                btnLogin.removeAttribute("disabled");
                btnLogin.innerHTML = "Login";
                inpUsername.removeAttribute("disabled");
                inpPassword.removeAttribute("disabled");
            }
        });
    };
    // ============
    // On Load Page
    // ============
    AccountLoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("access_token") != null) {
            this.router.navigate(['/software']);
        }
    };
    // ===============
    // On Destory Page
    // ===============
    AccountLoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginSubscription != null)
            this.loginSubscription.unsubscribe();
    };
    AccountLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-login',
            template: __webpack_require__(/*! ./account.login.component.html */ "./src/app/account/account.login.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AccountLoginComponent);
    return AccountLoginComponent;
}());



/***/ }),

/***/ "./src/app/account/account.register.component.html":
/*!*********************************************************!*\
  !*** ./src/app/account/account.register.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <br />\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\"></div>\r\n        <div class=\"col-md-6\">\r\n            <mat-card class=\"example-card\">\r\n                <br />\r\n                <mat-card-header>\r\n                    <mat-card-title style=\"margin-left: -10px;\">\r\n                        <a routerLink=\"/home\">\r\n                            <img src=\"../../assets/logo/DMTiPACS2.png\" style=\"height: 30px;\" />\r\n                        </a>\r\n                        <br />\r\n                        <br />\r\n                        <h3>\r\n                            Create an account\r\n                        </h3>\r\n                        <h6 style=\"margin-left: 1px;\">to continue to application</h6>\r\n                    </mat-card-title>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                    <form (ngSubmit)=\"btnRegisterClick()\">\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Full Name</mat-label>\r\n                            <input required matInput [(ngModel)]=\"userModel.FullName\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"isFieldDisabled\"\r\n                            />\r\n                        </mat-form-field>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Email</mat-label>\r\n                                    <input required matInput [(ngModel)]=\"userModel.Email\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"isFieldDisabled\"\r\n                                    />\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Contact Number</mat-label>\r\n                                    <input required matInput [(ngModel)]=\"userModel.ContactNumber\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"isFieldDisabled\"\r\n                                    />\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Address</mat-label>\r\n                            <textarea required rows=\"3\" matInput [(ngModel)]=\"userModel.Address\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"isFieldDisabled\"></textarea>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Username</mat-label>\r\n                            <input required matInput [(ngModel)]=\"userModel.UserName\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"isFieldDisabled\"\r\n                            />\r\n                        </mat-form-field>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Password</mat-label>\r\n                                    <input required matInput [type]=\"passwordhide ? 'text' : 'password'\" [(ngModel)]=\"userModel.Password\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        [disabled]=\"isFieldDisabled\" />\r\n                                    <mat-icon matSuffix (click)=\"passwordhide = !passwordhide\">{{passwordhide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Confirm Password</mat-label>\r\n                                    <input required matInput [type]=\"confirmPasswordhide ? 'text' : 'password'\" [(ngModel)]=\"userModel.ConfirmPassword\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        [disabled]=\"isFieldDisabled\" />\r\n                                    <mat-icon matSuffix (click)=\"confirmPasswordhide = !confirmPasswordhide\">{{confirmPasswordhide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" id=\"btnRegister\" style=\"margin-top: 15px; height: 50px; font-size: 20px;\">\r\n                            Register\r\n                        </button>\r\n                    </form>\r\n                </mat-card-content>\r\n                <br />\r\n                <div>\r\n                    <a routerLink=\"/account/login\">Login to an existing account</a>\r\n                </div>\r\n            </mat-card>\r\n            <br />\r\n            <p class=\"text-center\" style=\"color: gray; font-size: 12px;\">\r\n                Copyright © 2018 - DMTiPACS Application\r\n                <br /> version 3.0.Beta.20180523\r\n            </p>\r\n        </div>\r\n        <div class=\"col-md-3\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/account.register.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/account/account.register.component.ts ***!
  \*******************************************************/
/*! exports provided: AccountRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRegisterComponent", function() { return AccountRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======


// =======
// Service
// =======

// ======
// Toastr
// ======

var AccountRegisterComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function AccountRegisterComponent(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        this.title = 'register';
        this.isFieldDisabled = false;
        // ================
        // Initialize Model
        // ================
        this.userModel = {
            Id: 0,
            Email: "",
            UserName: "",
            FullName: "",
            Address: "",
            Password: "",
            ConfirmPassword: "",
            ContactNumber: "",
            UserTypeId: 0
        };
    }
    // ========
    // Register
    // ========
    AccountRegisterComponent.prototype.btnRegisterClick = function () {
        var _this = this;
        if (this.registerSubscription != null)
            this.registerSubscription.unsubscribe();
        var btnRegister = document.getElementById("btnRegister");
        btnRegister.setAttribute("disabled", "disabled");
        btnRegister.innerHTML = "Saving your credentials...";
        this.isFieldDisabled = true;
        this.accountService.register(this.userModel);
        this.registerSubscription = this.accountService.registerObservable.subscribe(function (data) {
            if (data == 1) {
                _this.toastr.success("Register successful.");
                setTimeout(function () {
                    _this.router.navigate(['/account/login']);
                }, 500);
            }
            else if (data == 0) {
                _this.toastr.error("Register failed.");
                btnRegister.removeAttribute("disabled");
                btnRegister.innerHTML = "Register";
                _this.isFieldDisabled = false;
            }
        });
    };
    // ===============
    // On Destory Page
    // ===============
    AccountRegisterComponent.prototype.ngOnDestroy = function () {
        if (this.registerSubscription != null)
            this.registerSubscription.unsubscribe();
    };
    AccountRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-register',
            template: __webpack_require__(/*! ./account.register.component.html */ "./src/app/account/account.register.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AccountRegisterComponent);
    return AccountRegisterComponent;
}());



/***/ }),

/***/ "./src/app/account/account.service.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============


var AccountService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function AccountService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ==================
        // private properties
        // ==================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // =================
        // public properties
        // =================
        this.loginSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.loginObservable = this.loginSource.asObservable();
        this.logoutSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.logoutObservable = this.logoutSource.asObservable();
        this.registerSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.registerObservable = this.registerSource.asObservable();
        // ================
        // Initialize Model
        // ================
        this.userModel = {
            Id: 0,
            Email: "",
            UserName: "",
            FullName: "",
            Address: "",
            Password: "",
            ConfirmPassword: "",
            ContactNumber: "",
            UserTypeId: 0
        };
    }
    // =====
    // Login
    // =====
    AccountService.prototype.login = function (username, password) {
        var _this = this;
        var url = this.defaultAPIHostURL + '/token';
        var body = "username=" + username + "&password=" + password + "&grant_type=password";
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        this.http.post(url, body, options).subscribe(function (response) {
            localStorage.setItem('access_token', response.json().access_token);
            localStorage.setItem('expires_in', response.json().expires_in);
            localStorage.setItem('token_type', response.json().token_type);
            localStorage.setItem('username', response.json().userName);
            _this.loginSource.next(1);
        }, function (error) {
            _this.loginSource.next(0);
        });
    };
    // ======
    // Logout
    // ======
    AccountService.prototype.logout = function () {
        var _this = this;
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('username');
        localStorage.removeItem('current_facility_id');
        localStorage.removeItem('current_facility');
        localStorage.removeItem('current_user_type_id');
        setTimeout(function () {
            _this.logoutSource.next(1);
        }, 500);
    };
    // ========
    // Register
    // ========
    AccountService.prototype.register = function (objUser) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/account/Register";
        this.http.post(url, JSON.stringify(objUser), this.options).subscribe(function (response) {
            _this.registerSource.next(1);
        }, function (error) {
            _this.registerSource.next(0);
        });
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/app-auth-guard.ts":
/*!***********************************!*\
  !*** ./src/app/app-auth-guard.ts ***!
  \***********************************/
/*! exports provided: AppAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAuthGuard", function() { return AppAuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======


var AppAuthGuard = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function AppAuthGuard(router) {
        this.router = router;
    }
    // ==================
    // Can Activate Route
    // ==================
    AppAuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem("current_user_type_id") != null) {
            if (localStorage.getItem("current_user_type_id") == "3") {
                return true;
            }
            else {
                this.router.navigate(["/software/forbidden"]);
                return false;
            }
        }
        else {
            this.router.navigate(["/software/forbidden"]);
            return false;
        }
    };
    AppAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AppAuthGuard);
    return AppAuthGuard;
}());



/***/ }),

/***/ "./src/app/app-route-reuse-strategy.ts":
/*!*********************************************!*\
  !*** ./src/app/app-route-reuse-strategy.ts ***!
  \*********************************************/
/*! exports provided: AppRouteReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouteReuseStrategy", function() { return AppRouteReuseStrategy; });
var AppRouteReuseStrategy = /** @class */ (function () {
    function AppRouteReuseStrategy() {
        this.handlers = {};
    }
    AppRouteReuseStrategy.prototype.shouldDetach = function (route) {
        return true;
    };
    AppRouteReuseStrategy.prototype.store = function (route, handle) {
        switch (route.routeConfig.path) {
            case '': break;
            case 'home': break;
            case 'account/login': break;
            case 'account/register': break;
            case 'software': break;
            case 'software/dashboard': break;
            case 'user/detail/:id': break;
            case 'procedure/detail/:id': break;
            default: {
                this.handlers[route.routeConfig.path] = handle;
                break;
            }
        }
    };
    AppRouteReuseStrategy.prototype.shouldAttach = function (route) {
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    };
    AppRouteReuseStrategy.prototype.retrieve = function (route) {
        if (!route.routeConfig)
            return null;
        return this.handlers[route.routeConfig.path];
    };
    AppRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        if (curr.routeConfig != null) {
            var sideNavMenuDashboard = document.getElementById("sideNavMenuDashboard");
            var sideNavMenuBodyParts = document.getElementById("sideNavMenuBodyParts");
            var sideNavMenuModalityProcedure = document.getElementById("sideNavMenuModalityProcedure");
            var sideNavMenuUser = document.getElementById("sideNavMenuUser");
            var sideNavMenuRate = document.getElementById("sideNavMenuRate");
            var sideNavMenuProcedure = document.getElementById("sideNavMenuProcedure");
            var sideNavMenuReports = document.getElementById("sideNavMenuReports");
            switch (curr.routeConfig.path) {
                case 'dashboard':
                    {
                        sideNavMenuDashboard.classList.add("sideNavMenuStyles");
                        sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                        sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuUser.classList.remove("sideNavMenuStyles");
                        sideNavMenuRate.classList.remove("sideNavMenuStyles");
                        sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuReports.classList.remove("sideNavMenuStyles");
                        break;
                    }
                    ;
                case 'body/parts':
                    {
                        sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                        sideNavMenuBodyParts.classList.add("sideNavMenuStyles");
                        sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuUser.classList.remove("sideNavMenuStyles");
                        sideNavMenuRate.classList.remove("sideNavMenuStyles");
                        sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuReports.classList.remove("sideNavMenuStyles");
                        break;
                    }
                    ;
                case 'modality/procedure':
                    {
                        sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                        sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                        sideNavMenuModalityProcedure.classList.add("sideNavMenuStyles");
                        sideNavMenuUser.classList.remove("sideNavMenuStyles");
                        sideNavMenuRate.classList.remove("sideNavMenuStyles");
                        sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuReports.classList.remove("sideNavMenuStyles");
                        break;
                    }
                    ;
                case 'user':
                    {
                        sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                        sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                        sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuUser.classList.add("sideNavMenuStyles");
                        sideNavMenuRate.classList.remove("sideNavMenuStyles");
                        sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuReports.classList.remove("sideNavMenuStyles");
                        break;
                    }
                    ;
                case 'rate':
                    {
                        sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                        sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                        sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuUser.classList.remove("sideNavMenuStyles");
                        sideNavMenuRate.classList.add("sideNavMenuStyles");
                        sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuReports.classList.remove("sideNavMenuStyles");
                        break;
                    }
                    ;
                case 'procedure':
                    {
                        sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                        sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                        sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuUser.classList.remove("sideNavMenuStyles");
                        sideNavMenuRate.classList.remove("sideNavMenuStyles");
                        sideNavMenuProcedure.classList.add("sideNavMenuStyles");
                        sideNavMenuReports.classList.remove("sideNavMenuStyles");
                        break;
                    }
                    ;
                case 'procedure/detail/:id':
                    {
                        sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                        sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                        sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuUser.classList.remove("sideNavMenuStyles");
                        sideNavMenuRate.classList.remove("sideNavMenuStyles");
                        sideNavMenuProcedure.classList.add("sideNavMenuStyles");
                        sideNavMenuReports.classList.remove("sideNavMenuStyles");
                        break;
                    }
                    ;
                case 'reports':
                    {
                        sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                        sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                        sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuUser.classList.remove("sideNavMenuStyles");
                        sideNavMenuRate.classList.remove("sideNavMenuStyles");
                        sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                        sideNavMenuReports.classList.add("sideNavMenuStyles");
                        break;
                    }
                    ;
                default: {
                    break;
                }
            }
        }
        return future.routeConfig === curr.routeConfig;
    };
    return AppRouteReuseStrategy;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_account_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.login.component */ "./src/app/account/account.login.component.ts");
/* harmony import */ var _account_account_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.register.component */ "./src/app/account/account.register.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _modality_procedure_modality_procedure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modality-procedure/modality-procedure.component */ "./src/app/modality-procedure/modality-procedure.component.ts");
/* harmony import */ var _body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body-parts/body-parts.component */ "./src/app/body-parts/body-parts.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user-detail.component */ "./src/app/user/user-detail.component.ts");
/* harmony import */ var _rate_rate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rate/rate.component */ "./src/app/rate/rate.component.ts");
/* harmony import */ var _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./procedure/procedure.component */ "./src/app/procedure/procedure.component.ts");
/* harmony import */ var _procedure_procedure_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./procedure/procedure-detail.component */ "./src/app/procedure/procedure-detail.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-auth-guard */ "./src/app/app-auth-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===============
// Angular Modules
// ===============






// ===================
// Software Components
// ===================











// ======
// Routes
// ======
var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'account/login', component: _account_account_login_component__WEBPACK_IMPORTED_MODULE_3__["AccountLoginComponent"] },
    { path: 'account/register', component: _account_account_register_component__WEBPACK_IMPORTED_MODULE_4__["AccountRegisterComponent"] },
    {
        path: 'software', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
            { path: 'modality/procedure', component: _modality_procedure_modality_procedure_component__WEBPACK_IMPORTED_MODULE_7__["ModalityProcedureComponent"] },
            {
                path: 'body/parts', component: _body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_8__["BodyPartsComponent"],
                canActivate: [
                    _app_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AppAuthGuard"]
                ],
            },
            {
                path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                canActivate: [
                    _app_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AppAuthGuard"]
                ],
            },
            {
                path: 'user/detail/:id', component: _user_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"],
                canActivate: [
                    _app_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AppAuthGuard"]
                ],
            },
            { path: 'rate', component: _rate_rate_component__WEBPACK_IMPORTED_MODULE_11__["RateComponent"] },
            { path: 'procedure', component: _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_12__["ProcedureComponent"] },
            { path: 'procedure/detail/:id', component: _procedure_procedure_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProcedureDetailComponent"] },
            { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_14__["ReportsComponent"] },
            { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_15__["ForbiddenComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-settings.ts":
/*!*********************************!*\
  !*** ./src/app/app-settings.ts ***!
  \*********************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        // public defaultAPIHostURL: string = "http://localhost:52125";
        this.defaultAPIHostURL = "https://dmtipacsv3-api.azurewebsites.net";
        // more settings ...
    }
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_account_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account/account.login.component */ "./src/app/account/account.login.component.ts");
/* harmony import */ var _account_account_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account/account.register.component */ "./src/app/account/account.register.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account/account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _app_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app-route-reuse-strategy */ "./src/app/app-route-reuse-strategy.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app-settings */ "./src/app/app-settings.ts");
/* harmony import */ var _app_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-auth-guard */ "./src/app/app-auth-guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===============
// Angular Modules
// ===============






// ========
// Material
// ========







// ==============
// Custom Modules
// ==============

// ======
// Toastr
// ======

// ==========
// Components
// ==========





// ========
// Services
// ========

// ===========
// App Routing
// ===========

// ==============
// Custom Modules
// ==============


// ===============
// Custom TS Files
// ===============



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _account_account_login_component__WEBPACK_IMPORTED_MODULE_17__["AccountLoginComponent"], _account_account_register_component__WEBPACK_IMPORTED_MODULE_18__["AccountRegisterComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_19__["LayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false,
                    progressBar: true
                }),
                _components_components_module__WEBPACK_IMPORTED_MODULE_22__["ComponentsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_23__["LayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"].forRoot(),
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            ],
            exports: [
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"]
            ],
            providers: [
                _app_settings__WEBPACK_IMPORTED_MODULE_25__["AppSettings"],
                _account_account_service__WEBPACK_IMPORTED_MODULE_20__["AccountService"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _app_route_reuse_strategy__WEBPACK_IMPORTED_MODULE_24__["AppRouteReuseStrategy"] },
                _app_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AppAuthGuard"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body-parts/body-parts.component.css":
/*!*****************************************************!*\
  !*** ./src/app/body-parts/body-parts.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body-parts/body-parts.component.html":
/*!******************************************************!*\
  !*** ./src/app/body-parts/body-parts.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">\r\n        Body Parts\r\n    </li>\r\n</ol>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <table border=\"0\" style=\"width: 100%;\">\r\n            <tr>\r\n                <td style=\"width: 90%;\">\r\n                    <div class=\"input-group\">\r\n                        <button class=\"btn btn-info\" type=\"button\" [disabled]=\"isBtnRefreshBodyPartsDataDisabled\" (click)=\"getBodyPartsData()\">\r\n                            <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                        &nbsp; &nbsp;\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <b>Show</b>\r\n                            </div>\r\n                        </div>\r\n                        <wj-combo-box #cboNumberOfRows [itemsSource]=\"cboShowNumberOfRows\" [isEditable]=\"false\" [isRequired]=\"true\"\r\n                            [displayMemberPath]=\"'rowString'\" [selectedValuePath]=\"'rowNumber'\" (selectedIndexChanged)=\"cboShowNumberOfRowsOnSelectedIndexChanged(cboNumberOfRows.selectedValue)\"\r\n                            style=\"width: 180px;\">\r\n                        </wj-combo-box>\r\n                    </div>\r\n                </td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"btnAddBodyPartsClick()\">\r\n                        <i class=\"fa fa-plus\"></i> Add\r\n                    </button>\r\n                </td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"warn\" routerLink=\"/software/dashboard\">\r\n                        <i class=\"fa fa-close\"></i> Close\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <mat-progress-bar class=\"example-margin\" [hidden]=\"isProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n        <wj-flex-grid #bodyPartsFlexGrid [itemsSource]=\"bodyPartsCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"2\">\r\n            <wj-flex-grid-filter></wj-flex-grid-filter>\r\n            <wj-flex-grid-column [header]=\"Edit\" [isReadOnly]=\"true\" [isContentHtml]=\"true\" [width]=\"95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"primary\" class=\"btn-xs\" (click)=\"btnEditBodyPartsClick()\">\r\n                        <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"Delete\" [isReadOnly]=\"true\" [width]=\"96\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"warn\" class=\"btn-xs\" (click)=\"btnDeleteBodyPartsClick()\">\r\n                        <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Body Part'\" [binding]=\"'BodyPart'\" [isReadOnly]=\"true\" [width]=\"'*'\"></wj-flex-grid-column>\r\n        </wj-flex-grid>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bodyPartsCollectionView.moveToFirstPage()\">\r\n                <i class=\"fa fa-fast-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bodyPartsCollectionView.moveToPreviousPage()\">\r\n                <i class=\"fa fa-step-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                {{ bodyPartsCollectionView.pageIndex + 1 }} / {{ bodyPartsCollectionView.pageCount }}\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bodyPartsCollectionView.moveToNextPage()\">\r\n                <i class=\"fa fa-step-forward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bodyPartsCollectionView.moveToLastPage()\">\r\n                <i class=\"fa fa-fast-forward\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/body-parts/body-parts.component.ts":
/*!****************************************************!*\
  !*** ./src/app/body-parts/body-parts.component.ts ***!
  \****************************************************/
/*! exports provided: BodyPartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyPartsComponent", function() { return BodyPartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _dialog_body_parts_body_parts_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/body-parts/body-parts-detail.dialog.component */ "./src/app/dialog/body-parts/body-parts-detail.dialog.component.ts");
/* harmony import */ var _dialog_body_parts_body_parts_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/body-parts/body-parts-delete.dialog.component */ "./src/app/dialog/body-parts/body-parts-delete.dialog.component.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _body_parts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body-parts.service */ "./src/app/body-parts/body-parts.service.ts");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====================
// Angular and Material
// ====================



// ======
// Toastr
// ======

// =======
// Dialogs
// =======


// ====================
// Async Task and Wijmo
// ====================



var BodyPartsComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function BodyPartsComponent(dialog, bodyPartsService, router, toastr) {
        this.dialog = dialog;
        this.bodyPartsService = bodyPartsService;
        this.router = router;
        this.toastr = toastr;
        // ================
        // Global Variables
        // ================
        this.title = 'body parts';
        this.isProgressBarHidden = false;
        this.bodyPartsData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        this.bodyPartsCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](this.bodyPartsData);
        this.isBtnRefreshBodyPartsDataDisabled = true;
        this.cboShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        // ================
        // Initialize Model
        // ================
        this.bodyPartsModel = {
            Id: 0,
            BodyPart: ""
        };
    }
    // ================================
    // Create Combo Show Number of Rows
    // ================================
    BodyPartsComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "Show 15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "Show 50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "Show 100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "Show 150 Rows";
            }
            else {
                rows = 200;
                rowsString = "Show 200 Rows";
            }
            this.cboShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    // ===================================================
    // Combo Show Number of Rows On Selected Index Changed
    // ===================================================
    BodyPartsComponent.prototype.cboShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.bodyPartsNumberOfPageIndex = selectedValue;
        this.bodyPartsCollectionView.pageSize = this.bodyPartsNumberOfPageIndex;
        this.bodyPartsCollectionView.refresh();
        this.bodyPartsFlexGrid.refresh();
    };
    // ===================
    // Get Body Parts Data
    // ===================
    BodyPartsComponent.prototype.getBodyPartsData = function () {
        var _this = this;
        this.bodyPartsData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        this.bodyPartsCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](this.bodyPartsData);
        this.bodyPartsCollectionView.pageSize = 15;
        this.bodyPartsCollectionView.trackChanges = true;
        this.isProgressBarHidden = false;
        this.isBtnRefreshBodyPartsDataDisabled = true;
        this.bodyPartsService.getBodyParts();
        this.bodyPartsSubscription = this.bodyPartsService.bodyPartsObservable.subscribe(function (data) {
            if (data != null) {
                _this.bodyPartsData = data;
                _this.bodyPartsCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](_this.bodyPartsData);
                _this.bodyPartsCollectionView.pageSize = _this.bodyPartsNumberOfPageIndex;
                _this.bodyPartsCollectionView.trackChanges = true;
            }
            _this.isProgressBarHidden = true;
            _this.isBtnRefreshBodyPartsDataDisabled = false;
        });
    };
    // ==============
    // Add Body Parts
    // ==============
    BodyPartsComponent.prototype.btnAddBodyPartsClick = function () {
        var _this = this;
        this.bodyPartsModel.Id = 0;
        this.bodyPartsModel.BodyPart = "";
        var detailBodyPartsDialogRef = this.dialog.open(_dialog_body_parts_body_parts_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__["BodyPartsDetailDialogComponent"], {
            width: '800px',
            data: {
                objModalityDetailProcedureDialogTitle: "Add Body Part",
                objCurrentBodyParts: this.bodyPartsModel
            }
        });
        detailBodyPartsDialogRef.disableClose = true;
        detailBodyPartsDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Save Successful!');
                _this.getBodyPartsData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ===============
    // Edit Body Parts
    // ===============
    BodyPartsComponent.prototype.btnEditBodyPartsClick = function () {
        var _this = this;
        var currentBodyParts = this.bodyPartsCollectionView.currentItem;
        this.bodyPartsModel.Id = currentBodyParts.Id;
        this.bodyPartsModel.BodyPart = currentBodyParts.BodyPart;
        var detailBodyPartsDialogRef = this.dialog.open(_dialog_body_parts_body_parts_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__["BodyPartsDetailDialogComponent"], {
            width: '800px',
            data: {
                objModalityDetailProcedureDialogTitle: "Edit Body Part",
                objCurrentBodyParts: this.bodyPartsModel
            }
        });
        detailBodyPartsDialogRef.disableClose = true;
        detailBodyPartsDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Update Successful!');
                _this.getBodyPartsData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // =================
    // Delete Body Parts
    // =================
    BodyPartsComponent.prototype.btnDeleteBodyPartsClick = function () {
        var _this = this;
        var currentBodyParts = this.bodyPartsCollectionView.currentItem;
        this.bodyPartsModel.Id = currentBodyParts.Id;
        var deleteBodyPartsDialogRef = this.dialog.open(_dialog_body_parts_body_parts_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["BodyPartsDeleteDialogComponent"], {
            width: '400px',
            data: {
                objBodyPartsDeleteDialogTitle: "Delete Body Part",
                objCurrentBodyParts: this.bodyPartsModel
            }
        });
        deleteBodyPartsDialogRef.disableClose = true;
        deleteBodyPartsDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Delete Successful!');
                _this.getBodyPartsData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ============
    // On Load Page
    // ============
    BodyPartsComponent.prototype.ngOnInit = function () {
        this.createCboShowNumberOfRows();
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.getBodyPartsData();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    BodyPartsComponent.prototype.ngOnDestroy = function () {
        if (this.bodyPartsSubscription != null)
            this.bodyPartsSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bodyPartsFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__["WjFlexGrid"])
    ], BodyPartsComponent.prototype, "bodyPartsFlexGrid", void 0);
    BodyPartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-parts',
            template: __webpack_require__(/*! ./body-parts.component.html */ "./src/app/body-parts/body-parts.component.html"),
            styles: [__webpack_require__(/*! ./body-parts.component.css */ "./src/app/body-parts/body-parts.component.css"), __webpack_require__(/*! ../layout/layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _body_parts_service__WEBPACK_IMPORTED_MODULE_7__["BodyPartsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], BodyPartsComponent);
    return BodyPartsComponent;
}());



/***/ }),

/***/ "./src/app/body-parts/body-parts.service.ts":
/*!**************************************************!*\
  !*** ./src/app/body-parts/body-parts.service.ts ***!
  \**************************************************/
/*! exports provided: BodyPartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyPartsService", function() { return BodyPartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============



var BodyPartsService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function BodyPartsService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ================================
        // Token: Headers and Authorization
        // ================================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // ================
        // Async Properties 
        // ================
        this.bodyPartsSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.bodyPartsObservable = this.bodyPartsSource.asObservable();
        this.bodyPartsSavedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.bodyPartsSavedObservable = this.bodyPartsSavedSource.asObservable();
        this.bodyPartsDeletedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.bodyPartsDeletedObservable = this.bodyPartsDeletedSource.asObservable();
    }
    // ==============
    // Get Body Parts
    // ==============
    BodyPartsService.prototype.getBodyParts = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/bodyParts/list";
        var bodyPartsObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    bodyPartsObservableArray.push({
                        Id: results[i].Id,
                        BodyPart: results[i].BodyPart
                    });
                }
                _this.bodyPartsSource.next(bodyPartsObservableArray);
            }
            else {
                _this.bodyPartsSource.next(null);
            }
        }, function (error) {
            _this.bodyPartsSource.next(null);
        });
    };
    // ===============
    // Save Body Parts
    // ===============
    BodyPartsService.prototype.saveBodyParts = function (bodyPartsModel) {
        var _this = this;
        if (bodyPartsModel.Id == 0) {
            var url = this.defaultAPIHostURL + "/api/bodyParts/add";
            this.http.post(url, JSON.stringify(bodyPartsModel), this.options).subscribe(function (response) {
                _this.bodyPartsSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.bodyPartsSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.bodyPartsSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.bodyPartsSavedSource.next(500);
                }
            });
        }
        else {
            var id = bodyPartsModel.Id;
            var url = this.defaultAPIHostURL + "/api/bodyParts/update/" + id;
            this.http.put(url, JSON.stringify(bodyPartsModel), this.options).subscribe(function (response) {
                _this.bodyPartsSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.bodyPartsSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.bodyPartsSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.bodyPartsSavedSource.next(500);
                }
            });
        }
    };
    // =================
    // Delete Body Parts
    // =================
    BodyPartsService.prototype.deleteBodyParts = function (id) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/bodyParts/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.bodyPartsDeletedSource.next(200);
        }, function (error) {
            if (error.status == 404) {
                _this.bodyPartsDeletedSource.next(404);
            }
            else if (error.status == 400) {
                _this.bodyPartsDeletedSource.next(400);
            }
            else if (error.status == 500) {
                _this.bodyPartsDeletedSource.next(500);
            }
        });
    };
    BodyPartsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], BodyPartsService);
    return BodyPartsService;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid.filter */ "./node_modules/wijmo/wijmo.angular2.grid.filter.js");
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.service */ "./src/app/components/components.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===============
// Angular Modules
// ===============




// ========
// Material
// ========


// =============
// Wijmo Modules
// =============



// =========
// Component
// =========



// ========
// Services
// ========

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6__["WjGridFilterModule"], wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_7__["WjGridModule"], wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_8__["WjInputModule"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_11__["SidenavComponent"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_6__["WjGridFilterModule"], wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_7__["WjGridModule"], wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_8__["WjInputModule"]
            ],
            providers: [
                _components_service__WEBPACK_IMPORTED_MODULE_12__["ComponentsService"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.service.ts":
/*!**************************************************!*\
  !*** ./src/app/components/components.service.ts ***!
  \**************************************************/
/*! exports provided: ComponentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsService", function() { return ComponentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============



var ComponentsService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ComponentsService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ================================
        // Token: Headers and Authorization
        // ================================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // ================
        // Async Properties 
        // ================
        this.facilitiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.facilitiesObservable = this.facilitiesSource.asObservable();
    }
    // =================
    // Get Facility List
    // =================
    ComponentsService.prototype.getFacilities = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/facility/list";
        var facilitiesObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    facilitiesObservableArray.push({
                        Id: results[i].Id,
                        UserId: results[i].UserId,
                        UserFacility: results[i].UserFacility,
                        UserTypeId: results[i].UserTypeId
                    });
                }
                _this.facilitiesSource.next(facilitiesObservableArray);
            }
        }, function (error) {
            _this.facilitiesSource.next(null);
        });
    };
    ComponentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], ComponentsService);
    return ComponentsService;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ title }}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.title = 'footer';
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1.example-app-name {\r\n    margin-left: 10px;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table border=\"0\" style=\"width: 100%;\">\r\n    <tr>\r\n        <td style=\"width: 10%;\">\r\n            <a routerLink=\"/software/dashboard\" style=\"color: white; text-decoration: none;\">\r\n                <img src=\"../../assets/logo/DMTiPACS2.png\" style=\"height: 30px;\" />\r\n            </a>\r\n        </td>\r\n        <td style=\"width: 90%;\">\r\n            <button (click)=\"btnLogout()\" class=\"pull-right\" style=\"font-size: 15px; text-decoration: none; background: transparent; border: 0px;\">\r\n                <i class=\"fa fa-power-off fa-fw\"></i> Logout\r\n            </button>\r\n        </td>\r\n    </tr>\r\n</table>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../account/account.service */ "./src/app/account/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======


// ======
// Toastr
// ======

// =======
// Service
// =======

var HeaderComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function HeaderComponent(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        this.title = 'header';
        this.currentUser = localStorage.getItem("username");
    }
    // ======
    // Logout
    // ======
    HeaderComponent.prototype.btnLogout = function () {
        var _this = this;
        this.accountService.logout();
        this.logoutSubscription = this.accountService.logoutObservable.subscribe(function (data) {
            if (data == 1) {
                _this.toastr.success("Logout successful.");
                setTimeout(function () {
                    _this.router.navigate(['/software']);
                    window.location.reload();
                }, 500);
            }
        });
    };
    // ===============
    // On Destory Page
    // ===============
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.logoutSubscription != null)
            this.logoutSubscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_account_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-nav-list-styles {\r\n    width: 300px;\r\n}\r\n\r\n.svg-icon-style-side-menu {\r\n  height: 20px;\r\n}\r\n\r\n.side-username {\r\n  padding-left: 25px;\r\n  padding-right: 25px;\r\n  padding-top: 10px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.side-facility {\r\n  padding-left: 25px;\r\n  padding-right: 25px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.cbo-100 {\r\n  width: 100%;\r\n}\r\n\r\n.sideNavMenuStyles:link, .sideNavMenuStyles:visited, .sideNavMenuStyles:hover, .sideNavMenuStyles:active  {\r\n  background: #f2f2f2;\r\n  /* color: #fff; */\r\n}\r\n\r\n.sideNavMenuStyles {\r\n  background: #f2f2f2;\r\n  /* color: #fff; */\r\n}"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-username\">\r\n    <table style=\"width: 100%;\" border=\"0\">\r\n        <tr>\r\n            <td style=\"width: 11.5%;\">\r\n                <img src=\"../../assets/svgicons/user.svg\" class=\"svg-icon-style-side-menu\" />\r\n            </td>\r\n            <td style=\"width: 88.5%; font-size: 16px; padding-top: 3.5px;\">\r\n                {{ username }}\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<mat-divider></mat-divider>\r\n<div class=\"side-facility\">\r\n    <div class=\"form-group\">\r\n        <label>Current Facility</label>\r\n        <!-- <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"currentFacility\" aria-describedby=\"basic-addon2\"> -->\r\n        <div class=\"input-group mb-3\">\r\n            <input type=\"text\" class=\"form-control\" disabled [(ngModel)]=\"currentFacility\" aria-describedby=\"basic-addon2\">\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-info\" type=\"button\" (click)=\"launchFacilityDialog()\">\r\n                    <i class=\"fa fa-building\"></i>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<mat-divider></mat-divider>\r\n<mat-nav-list class=\"mat-nav-list-styles\">\r\n    <a mat-list-item routerLink=\"/software/dashboard\" id=\"sideNavMenuDashboard\" (click)=\"sideNavMenuClick('dashboard')\">&nbsp;&nbsp;\r\n        <img src=\"../../assets/svgicons/grid.svg\" class=\"svg-icon-style-side-menu\" /> &nbsp; Dashboard\r\n    </a>\r\n    <a mat-list-item routerLink=\"/software/body/parts\" id=\"sideNavMenuBodyParts\" (click)=\"sideNavMenuClick('bodyParts')\">&nbsp;&nbsp;\r\n        <img src=\"../../assets/svgicons/broken-arm.svg\" class=\"svg-icon-style-side-menu\" /> &nbsp; Body Parts\r\n    </a>\r\n    <a mat-list-item routerLink=\"/software/modality/procedure\" id=\"sideNavMenuModalityProcedure\" (click)=\"sideNavMenuClick('modalityProcedure')\">&nbsp;&nbsp;\r\n        <img src=\"../../assets/svgicons/mri.svg\" class=\"svg-icon-style-side-menu\" /> &nbsp; Modality Procedure\r\n    </a>\r\n    <a mat-list-item routerLink=\"/software/user\" id=\"sideNavMenuUser\" (click)=\"sideNavMenuClick('user')\">&nbsp;&nbsp;\r\n        <img src=\"../../assets/svgicons/key.svg\" class=\"svg-icon-style-side-menu\" /> &nbsp; User\r\n    </a>\r\n    <a mat-list-item routerLink=\"/software/rate\" id=\"sideNavMenuRate\" (click)=\"sideNavMenuClick('rate')\">&nbsp;&nbsp;\r\n        <img src=\"../../assets/svgicons/favorite.svg\" class=\"svg-icon-style-side-menu\" /> &nbsp; Rate\r\n    </a>\r\n    <a mat-list-item routerLink=\"/software/procedure\" id=\"sideNavMenuProcedure\" (click)=\"sideNavMenuClick('procedure')\">&nbsp;&nbsp;\r\n        <img src=\"../../assets/svgicons/x-rays.svg\" class=\"svg-icon-style-side-menu\" /> &nbsp; Procedure\r\n    </a>\r\n    <a mat-list-item routerLink=\"/software/reports\" id=\"sideNavMenuReports\" (click)=\"sideNavMenuClick('reports')\">&nbsp;&nbsp;\r\n        <img src=\"../../assets/svgicons/printer.svg\" class=\"svg-icon-style-side-menu\" /> &nbsp; Reports\r\n    </a>\r\n</mat-nav-list>\r\n<mat-divider></mat-divider>"

/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_facility_facility_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog/facility/facility.dialog.component */ "./src/app/dialog/facility/facility.dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =======
// Dialogs
// =======

var SidenavComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function SidenavComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.title = 'sidenav';
        this.username = localStorage.getItem("username");
        this.currentFacilityId = 0;
    }
    // ======================
    // Launch Facility Dialog
    // ======================
    SidenavComponent.prototype.launchFacilityDialog = function () {
        var _this = this;
        var detailFacilityDialogRef = this.dialog.open(_dialog_facility_facility_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FacilityDialogComponent"], {
            width: '400px',
            data: {
                objFacilityTitle: "Choose Facility",
            }
        });
        detailFacilityDialogRef.disableClose = true;
        detailFacilityDialogRef.afterClosed().subscribe(function (result) {
            _this.currentFacility = result;
        });
    };
    // ========
    // Side Nav
    // ========
    SidenavComponent.prototype.sideNavMenuClick = function (page) {
        var sideNavMenuDashboard = document.getElementById("sideNavMenuDashboard");
        var sideNavMenuBodyParts = document.getElementById("sideNavMenuBodyParts");
        var sideNavMenuModalityProcedure = document.getElementById("sideNavMenuModalityProcedure");
        var sideNavMenuUser = document.getElementById("sideNavMenuUser");
        var sideNavMenuRate = document.getElementById("sideNavMenuRate");
        var sideNavMenuProcedure = document.getElementById("sideNavMenuProcedure");
        var sideNavMenuReports = document.getElementById("sideNavMenuReports");
        switch (page) {
            case 'dashboard':
                {
                    sideNavMenuDashboard.classList.add("sideNavMenuStyles");
                    sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                    sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuUser.classList.remove("sideNavMenuStyles");
                    sideNavMenuRate.classList.remove("sideNavMenuStyles");
                    sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuReports.classList.remove("sideNavMenuStyles");
                    break;
                }
                ;
            case 'bodyParts':
                {
                    sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                    sideNavMenuBodyParts.classList.add("sideNavMenuStyles");
                    sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuUser.classList.remove("sideNavMenuStyles");
                    sideNavMenuRate.classList.remove("sideNavMenuStyles");
                    sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuReports.classList.remove("sideNavMenuStyles");
                    break;
                }
                ;
            case 'modalityProcedure':
                {
                    sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                    sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                    sideNavMenuModalityProcedure.classList.add("sideNavMenuStyles");
                    sideNavMenuUser.classList.remove("sideNavMenuStyles");
                    sideNavMenuRate.classList.remove("sideNavMenuStyles");
                    sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuReports.classList.remove("sideNavMenuStyles");
                    break;
                }
                ;
            case 'user':
                {
                    sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                    sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                    sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuUser.classList.add("sideNavMenuStyles");
                    sideNavMenuRate.classList.remove("sideNavMenuStyles");
                    sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuReports.classList.remove("sideNavMenuStyles");
                    break;
                }
                ;
            case 'rate':
                {
                    sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                    sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                    sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuUser.classList.remove("sideNavMenuStyles");
                    sideNavMenuRate.classList.add("sideNavMenuStyles");
                    sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuReports.classList.remove("sideNavMenuStyles");
                    break;
                }
                ;
            case 'procedure':
                {
                    sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                    sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                    sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuUser.classList.remove("sideNavMenuStyles");
                    sideNavMenuRate.classList.remove("sideNavMenuStyles");
                    sideNavMenuProcedure.classList.add("sideNavMenuStyles");
                    sideNavMenuReports.classList.remove("sideNavMenuStyles");
                    break;
                }
                ;
            case 'reports':
                {
                    sideNavMenuDashboard.classList.remove("sideNavMenuStyles");
                    sideNavMenuBodyParts.classList.remove("sideNavMenuStyles");
                    sideNavMenuModalityProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuUser.classList.remove("sideNavMenuStyles");
                    sideNavMenuRate.classList.remove("sideNavMenuStyles");
                    sideNavMenuProcedure.classList.remove("sideNavMenuStyles");
                    sideNavMenuReports.classList.add("sideNavMenuStyles");
                    break;
                }
                ;
            default: {
                break;
            }
        }
    };
    // ============
    // On Load Page
    // ============
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            if (localStorage.getItem("current_facility_id") == null || localStorage.getItem("current_facility") == null) {
                setTimeout(function () {
                    _this.launchFacilityDialog();
                }, 100);
            }
            else {
                this.currentFacility = localStorage.getItem("current_facility");
            }
        }
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg-icon-style {\r\n    height: 80px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.svg-icon-style-big {\r\n    height: 240.5px;\r\n    margin-top: 2px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item active\">\r\n        Dashboard\r\n    </li>\r\n</ol>\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/procedure\">\r\n            <br />\r\n            <br />\r\n            <img src=\"../../assets/svgicons/x-rays.svg\" class=\"svg-icon-style-big\" />\r\n            <br />\r\n            <br />\r\n            <h1>Procedure</h1>\r\n            <br />\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/modality/procedure\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/mri.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>Modality Procedure</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/rate\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/favorite.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>Rate</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/reports\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/printer.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>Reports</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <button mat-raised-button class=\"btn-block\" routerLink=\"/software/body/parts\">\r\n                    <br />\r\n                    <img src=\"../../assets/svgicons/broken-arm.svg\" class=\"svg-icon-style\" />\r\n                    <br />\r\n                    <br />\r\n                    <h4>Body Parts</h4>\r\n                    <br />\r\n                </button>\r\n                <br />\r\n                <br />\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <button mat-raised-button class=\"btn-block\" routerLink=\"/software/user\">\r\n                    <br />\r\n                    <img src=\"../../assets/svgicons/key.svg\" class=\"svg-icon-style\" />\r\n                    <br />\r\n                    <br />\r\n                    <h4>User</h4>\r\n                    <br />\r\n                </button>\r\n                <br />\r\n                <br />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/body/parts\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/broken-arm.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>Body Parts</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/modality/procedure\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/mri.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>Modality Procedure</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/user\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/key.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>User</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/rate\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/favorite.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>Rate</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/procedure\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/x-rays.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>Procedure</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <button mat-raised-button class=\"btn-block\" routerLink=\"/software/reports\">\r\n            <br />\r\n            <img src=\"../../assets/svgicons/printer.svg\" class=\"svg-icon-style\" />\r\n            <br />\r\n            <br />\r\n            <h4>Reports</h4>\r\n            <br />\r\n        </button>\r\n        <br />\r\n        <br />\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.title = 'dashboard';
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dialog/body-parts/body-parts-delete.dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dialog/body-parts/body-parts-delete.dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    Are you sure you want to delete this body part?\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnConfirmDeleteBodyParts\" (click)=\"btnConfirmDeleteBodyPartsClick()\">\r\n                    <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button id=\"btnCloseConfirmDeleteBodyParts\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close fa-fw\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/body-parts/body-parts-delete.dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dialog/body-parts/body-parts-delete.dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: BodyPartsDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyPartsDeleteDialogComponent", function() { return BodyPartsDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _body_parts_body_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../body-parts/body-parts.service */ "./src/app/body-parts/body-parts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



var BodyPartsDeleteDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function BodyPartsDeleteDialogComponent(deleteBodyPartsDialogRef, data, bodyPartsService) {
        this.deleteBodyPartsDialogRef = deleteBodyPartsDialogRef;
        this.data = data;
        this.bodyPartsService = bodyPartsService;
        // ================
        // Global Variables
        // ================
        this.title = 'Delete Body Part';
        // ================
        // Initialize Model
        // ================
        this.bodyPartsModel = {
            Id: 0,
            BodyPart: ""
        };
        this.title = data.objBodyPartsDeleteDialogTitle;
        this.bodyPartsModel.Id = data.objCurrentBodyParts.Id;
    }
    // =========================
    // Confirm Delete Body Parts
    // =========================
    BodyPartsDeleteDialogComponent.prototype.btnConfirmDeleteBodyPartsClick = function () {
        var _this = this;
        var btnConfirmDeleteBodyParts = document.getElementById("btnConfirmDeleteBodyParts");
        btnConfirmDeleteBodyParts.setAttribute("disabled", "disabled");
        btnConfirmDeleteBodyParts.innerHTML = "<i class='fa fa-trash fa-fw'></i> Deleting...";
        var btnCloseConfirmDeleteBodyParts = document.getElementById("btnCloseConfirmDeleteBodyParts");
        btnCloseConfirmDeleteBodyParts.setAttribute("disabled", "disabled");
        this.bodyPartsService.deleteBodyParts(this.bodyPartsModel.Id);
        this.bodyPartsSubscription = this.bodyPartsService.bodyPartsDeletedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.deleteBodyPartsDialogRef.close(200);
                btnConfirmDeleteBodyParts.removeAttribute("disabled");
                btnConfirmDeleteBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteBodyParts.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.deleteBodyPartsDialogRef.close(404);
                btnConfirmDeleteBodyParts.removeAttribute("disabled");
                btnConfirmDeleteBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteBodyParts.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.deleteBodyPartsDialogRef.close(400);
                btnConfirmDeleteBodyParts.removeAttribute("disabled");
                btnConfirmDeleteBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteBodyParts.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.deleteBodyPartsDialogRef.close(500);
                btnConfirmDeleteBodyParts.removeAttribute("disabled");
                btnConfirmDeleteBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteBodyParts.removeAttribute("disabled");
            }
        });
    };
    BodyPartsDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-parts-delete-dialog',
            template: __webpack_require__(/*! ./body-parts-delete.dialog.component.html */ "./src/app/dialog/body-parts/body-parts-delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _body_parts_body_parts_service__WEBPACK_IMPORTED_MODULE_2__["BodyPartsService"]])
    ], BodyPartsDeleteDialogComponent);
    return BodyPartsDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/body-parts/body-parts-detail.dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dialog/body-parts/body-parts-detail.dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Body Part</mat-label>\r\n        <input [(ngModel)]=\"bodyPartsModel.BodyPart\" matInput />\r\n    </mat-form-field>\r\n    <br /><br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"primary\" id=\"btnSaveBodyParts\" (click)=\"btnSaveBodyPartsClick()\">\r\n                    <i class=\"fa fa-save\"></i> Save\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnCloseBodyParts\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/body-parts/body-parts-detail.dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dialog/body-parts/body-parts-detail.dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: BodyPartsDetailDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyPartsDetailDialogComponent", function() { return BodyPartsDetailDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _body_parts_body_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../body-parts/body-parts.service */ "./src/app/body-parts/body-parts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



var BodyPartsDetailDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function BodyPartsDetailDialogComponent(detailBodyPartsDialogRef, data, bodyPartsService) {
        this.detailBodyPartsDialogRef = detailBodyPartsDialogRef;
        this.data = data;
        this.bodyPartsService = bodyPartsService;
        // ================
        // Global Variables
        // ================
        this.title = 'modality procedure detail dialog';
        // ================
        // Initialize Model
        // ================
        this.bodyPartsModel = {
            Id: 0,
            BodyPart: ""
        };
        this.title = data.objModalityDetailProcedureDialogTitle;
        this.bodyPartsModel.Id = data.objCurrentBodyParts.Id;
        this.bodyPartsModel.BodyPart = data.objCurrentBodyParts.BodyPart;
    }
    // ==============
    // Save Body Part
    // ==============
    BodyPartsDetailDialogComponent.prototype.btnSaveBodyPartsClick = function () {
        var _this = this;
        var btnSaveBodyParts = document.getElementById("btnSaveBodyParts");
        btnSaveBodyParts.setAttribute("disabled", "disabled");
        btnSaveBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Saving...";
        var btnCloseBodyParts = document.getElementById("btnCloseBodyParts");
        btnCloseBodyParts.setAttribute("disabled", "disabled");
        this.bodyPartsService.saveBodyParts(this.bodyPartsModel);
        this.bodyPartsSubscription = this.bodyPartsService.bodyPartsSavedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.detailBodyPartsDialogRef.close(200);
                btnSaveBodyParts.removeAttribute("disabled");
                btnSaveBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseBodyParts.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.detailBodyPartsDialogRef.close(404);
                btnSaveBodyParts.removeAttribute("disabled");
                btnSaveBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseBodyParts.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.detailBodyPartsDialogRef.close(400);
                btnSaveBodyParts.removeAttribute("disabled");
                btnSaveBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseBodyParts.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.detailBodyPartsDialogRef.close(500);
                btnSaveBodyParts.removeAttribute("disabled");
                btnSaveBodyParts.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseBodyParts.removeAttribute("disabled");
            }
        });
    };
    // ======================
    // Close Body Part Dialog
    // ======================
    BodyPartsDetailDialogComponent.prototype.btnCloseBodyPartsClick = function () {
        this.detailBodyPartsDialogRef.close();
        if (this.bodyPartsSubscription != null)
            this.bodyPartsSubscription.unsubscribe();
    };
    BodyPartsDetailDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body-parts-detail-dialog',
            template: __webpack_require__(/*! ./body-parts-detail.dialog.component.html */ "./src/app/dialog/body-parts/body-parts-detail.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _body_parts_body_parts_service__WEBPACK_IMPORTED_MODULE_2__["BodyPartsService"]])
    ], BodyPartsDetailDialogComponent);
    return BodyPartsDetailDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.css":
/*!***********************************!*\
  !*** ./src/app/dialog/dialog.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-100-percent {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/dialog/facility/facility.component.css":
/*!********************************************************!*\
  !*** ./src/app/dialog/facility/facility.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/facility/facility.dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dialog/facility/facility.dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Facility</mat-label>\r\n        <mat-select matInput placeholder=\"Select Facility\" [(ngModel)]='defaultSelectedFacilityId'>\r\n            <mat-option *ngFor=\"let cboFacility of cboFacilityObservableArray\" [value]=\"cboFacility.UserId\">\r\n                {{ cboFacility.UserFacility }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <!-- <div class=\"form-group\">\r\n        <label>Facility</label>\r\n        <div>\r\n            <wj-combo-box style=\"width: 100%;\" #cboFacility [itemsSource]=\"cboFacilityObservableArray\" [isEditable]=\"false\" [isRequired]=\"true\"\r\n                [displayMemberPath]=\"'UserFacility'\" [selectedValuePath]=\"'Id'\">\r\n            </wj-combo-box>\r\n        </div>\r\n    </div> -->\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 95%;\">\r\n                <button mat-mini-fab color=\"warn\" id=\"btnUpdateFacility\" (click)=\"btnLogoutClick()\">\r\n                    <i class=\"fa fa-power-off fa-fw\"></i>\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"primary\" id=\"btnUpdateFacility\" (click)=\"btnUpdateFacilityClick()\">\r\n                    <i class=\"fa fa-check\"></i> Done\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/facility/facility.dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialog/facility/facility.dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: FacilityDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityDialogComponent", function() { return FacilityDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layout_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/layout.service */ "./src/app/layout/layout.service.ts");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../account/account.service */ "./src/app/account/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



// ======
// Toastr
// ======

// =====
// Wijmo
// =====


// =================
// Service and Model
// =================

// =======
// Service
// =======

var FacilityDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function FacilityDialogComponent(detailFacilityDialogRef, data, layoutService, accountService, toastr, router) {
        this.detailFacilityDialogRef = detailFacilityDialogRef;
        this.data = data;
        this.layoutService = layoutService;
        this.accountService = accountService;
        this.toastr = toastr;
        this.router = router;
        this.title = 'facility';
        this.title = data.objFacilityTitle;
        this.getFacilityData();
    }
    // =================
    // Get Facility Data
    // =================
    FacilityDialogComponent.prototype.getFacilityData = function () {
        var _this = this;
        this.layoutService.getFacilities();
        this.facilitySubscription = this.layoutService.facilitiesObservable.subscribe(function (data) {
            var facilityObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"]();
            if (data != null) {
                for (var i = 0; i <= data.length - 1; i++) {
                    facilityObservableArray.push({
                        Id: data[i].Id,
                        UserId: data[i].UserId,
                        UserFacility: data[i].UserFacility,
                        UserTypeId: data[i].UserTypeId
                    });
                }
            }
            _this.cboFacilityObservableArray = facilityObservableArray;
            if (localStorage.getItem("current_facility_id") != null && localStorage.getItem("current_facility") != null) {
                _this.defaultSelectedFacilityId = parseInt(localStorage.getItem("current_facility_id"));
            }
            else {
                _this.defaultSelectedFacilityId = _this.cboFacilityObservableArray[0].UserId;
            }
        });
    };
    // =======================
    // Update Current Facility
    // =======================
    FacilityDialogComponent.prototype.btnUpdateFacilityClick = function () {
        var _this = this;
        var current_facility_id = this.cboFacilityObservableArray.filter(function (cboFacility) { return cboFacility.UserId === _this.defaultSelectedFacilityId; })[0].UserId;
        var current_facility = this.cboFacilityObservableArray.filter(function (cboFacility) { return cboFacility.UserId === _this.defaultSelectedFacilityId; })[0].UserFacility;
        var current_user_type_id = this.cboFacilityObservableArray.filter(function (cboFacility) { return cboFacility.UserId === _this.defaultSelectedFacilityId; })[0].UserTypeId;
        localStorage.setItem('current_facility_id', current_facility_id);
        localStorage.setItem('current_facility', current_facility);
        localStorage.setItem('current_user_type_id', current_user_type_id);
        this.detailFacilityDialogRef.close(current_facility);
        if (this.facilitySubscription != null)
            this.facilitySubscription.unsubscribe();
        setTimeout(function () {
            _this.router.navigate(['/software']);
        }, 500);
    };
    // ======
    // Logout
    // ======
    FacilityDialogComponent.prototype.btnLogoutClick = function () {
        var _this = this;
        this.accountService.logout();
        this.logoutSubscription = this.accountService.logoutObservable.subscribe(function (data) {
            if (data == 1) {
                _this.toastr.success("Logout successful.");
                setTimeout(function () {
                    _this.router.navigate(['/software']);
                    window.location.reload();
                }, 500);
            }
        });
    };
    // ===============
    // On Destory Page
    // ===============
    FacilityDialogComponent.prototype.ngOnDestroy = function () {
        if (this.facilitySubscription != null)
            this.facilitySubscription.unsubscribe();
        if (this.logoutSubscription != null)
            this.logoutSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cboFacility'),
        __metadata("design:type", wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__["WjComboBox"])
    ], FacilityDialogComponent.prototype, "cboFacility", void 0);
    FacilityDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facility',
            template: __webpack_require__(/*! ./facility.dialog.component.html */ "./src/app/dialog/facility/facility.dialog.component.html"),
            styles: [__webpack_require__(/*! ./facility.component.css */ "./src/app/dialog/facility/facility.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _layout_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"],
            _account_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacilityDialogComponent);
    return FacilityDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/modality-procedure/modality-procedure-delete.dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/dialog/modality-procedure/modality-procedure-delete.dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    Are you sure you want to delete this modality procedure?\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnConfirmDeleteModalityProcedure\" (click)=\"btnConfirmDeleteModalityProcedureClick()\">\r\n                    <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button id=\"btnCloseConfirmDeleteModalityProcedure\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close fa-fw\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/modality-procedure/modality-procedure-delete.dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dialog/modality-procedure/modality-procedure-delete.dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalityProcedureDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalityProcedureDeleteDialogComponent", function() { return ModalityProcedureDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modality_procedure_modality_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modality-procedure/modality-procedure.service */ "./src/app/modality-procedure/modality-procedure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



var ModalityProcedureDeleteDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ModalityProcedureDeleteDialogComponent(deleteModalityProcedureDialogRef, data, modalityProcedureService) {
        this.deleteModalityProcedureDialogRef = deleteModalityProcedureDialogRef;
        this.data = data;
        this.modalityProcedureService = modalityProcedureService;
        // ================
        // Global Variables
        // ================
        this.title = 'Delete Modality Procedure';
        // ================
        // Initialize Model
        // ================
        this.modalityProcedureModel = {
            Id: 0,
            ModalityId: 0,
            Modality: "",
            ModalityProcedure: "",
            ModalityResultTemplate: "",
            DoctorId: null
        };
        this.title = data.objModalityProcedureDeleteDialogTitle;
        this.modalityProcedureModel.Id = data.objCurrentModalityProcedure.Id;
    }
    // =================================
    // Confirm Delete Modality Procedure
    // =================================
    ModalityProcedureDeleteDialogComponent.prototype.btnConfirmDeleteModalityProcedureClick = function () {
        var _this = this;
        var btnConfirmDeleteModalityProcedure = document.getElementById("btnConfirmDeleteModalityProcedure");
        btnConfirmDeleteModalityProcedure.setAttribute("disabled", "disabled");
        btnConfirmDeleteModalityProcedure.innerHTML = "<i class='fa fa-trash fa-fw'></i> Deleting...";
        var btnCloseConfirmDeleteModalityProcedure = document.getElementById("btnCloseConfirmDeleteModalityProcedure");
        btnCloseConfirmDeleteModalityProcedure.setAttribute("disabled", "disabled");
        this.modalityProcedureService.deleteModalityProcedure(this.modalityProcedureModel.Id);
        this.modalityProcedureSubscription = this.modalityProcedureService.modalityProcedureDeletedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.deleteModalityProcedureDialogRef.close(200);
                btnConfirmDeleteModalityProcedure.removeAttribute("disabled");
                btnConfirmDeleteModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteModalityProcedure.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.deleteModalityProcedureDialogRef.close(404);
                btnConfirmDeleteModalityProcedure.removeAttribute("disabled");
                btnConfirmDeleteModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteModalityProcedure.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.deleteModalityProcedureDialogRef.close(400);
                btnConfirmDeleteModalityProcedure.removeAttribute("disabled");
                btnConfirmDeleteModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteModalityProcedure.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.deleteModalityProcedureDialogRef.close(500);
                btnConfirmDeleteModalityProcedure.removeAttribute("disabled");
                btnConfirmDeleteModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteModalityProcedure.removeAttribute("disabled");
            }
        });
    };
    ModalityProcedureDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modality-procedure-delete-dialog',
            template: __webpack_require__(/*! ./modality-procedure-delete.dialog.component.html */ "./src/app/dialog/modality-procedure/modality-procedure-delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _modality_procedure_modality_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ModalityProcedureService"]])
    ], ModalityProcedureDeleteDialogComponent);
    return ModalityProcedureDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/modality-procedure/modality-procedure-detail.dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/dialog/modality-procedure/modality-procedure-detail.dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Modality Procedure</mat-label>\r\n        <input [(ngModel)]=\"modalityProcedureModel.ModalityProcedure\" matInput />\r\n    </mat-form-field>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Result Template</mat-label>\r\n        <textarea [(ngModel)]=\"modalityProcedureModel.ModalityResultTemplate\" rows=\"10\" matInput></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Modality</mat-label>\r\n        <mat-select matInput placeholder=\"Select Modality\" [(ngModel)]=\"modalityProcedureModel.ModalityId\">\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let cboModality of cboModalityObservableArray\" [value]=\"cboModality.Id\">\r\n                {{ cboModality.Modality }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <!-- <div class=\"form-group\">\r\n        <label>Modality</label>\r\n        <div>\r\n            <wj-combo-box class=\"form-control\" #cboModality [itemsSource]=\"cboModalityObservableArray\" [isEditable]=\"false\" [isRequired]=\"true\" [displayMemberPath]=\"'Modality'\"\r\n                [selectedValuePath]=\"'Id'\" [(ngModel)]=\"modalityProcedureModel.ModalityId\">\r\n            </wj-combo-box>\r\n        </div>\r\n    </div> -->\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"primary\" id=\"btnSaveModalityProcedure\" (click)=\"btnSaveModalityProcedureClick()\">\r\n                    <i class=\"fa fa-save\"></i> Save\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnCloseModalityProcedure\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/modality-procedure/modality-procedure-detail.dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dialog/modality-procedure/modality-procedure-detail.dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalityProcedureDetailDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalityProcedureDetailDialogComponent", function() { return ModalityProcedureDetailDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modality_procedure_modality_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modality-procedure/modality-procedure.service */ "./src/app/modality-procedure/modality-procedure.service.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



// =====
// Wijmo
// =====

var ModalityProcedureDetailDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ModalityProcedureDetailDialogComponent(detailModalityProcedureDialogRef, data, modalityProcedureService) {
        this.detailModalityProcedureDialogRef = detailModalityProcedureDialogRef;
        this.data = data;
        this.modalityProcedureService = modalityProcedureService;
        // ================
        // Global Variables
        // ================
        this.title = 'modality procedure detail dialog';
        // ================
        // Initialize Model
        // ================
        this.modalityProcedureModel = {
            Id: 0,
            ModalityId: 0,
            Modality: "",
            ModalityProcedure: "",
            ModalityResultTemplate: "",
            DoctorId: null
        };
        this.title = data.objModalityDetailProcedureDialogTitle;
        this.modalityProcedureModel.Id = data.objCurrentModalityProcedure.Id;
        this.modalityProcedureModel.ModalityId = data.objCurrentModalityProcedure.ModalityId;
        this.modalityProcedureModel.Modality = data.objCurrentModalityProcedure.Modality;
        this.modalityProcedureModel.ModalityProcedure = data.objCurrentModalityProcedure.ModalityProcedure;
        this.modalityProcedureModel.ModalityResultTemplate = data.objCurrentModalityProcedure.ModalityResultTemplate;
        this.modalityProcedureModel.DoctorId = data.objCurrentModalityProcedure.DoctorId;
        this.getModalityData(this.modalityProcedureModel.ModalityId);
    }
    // =================
    // Get Modality Data
    // =================
    ModalityProcedureDetailDialogComponent.prototype.getModalityData = function (modalityId) {
        var _this = this;
        this.modalityProcedureService.getModality();
        this.modalitySubscription = this.modalityProcedureService.modalityObservable.subscribe(function (data) {
            var modalityObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
            if (data.length > 0) {
                for (var i = 0; i <= data.length - 1; i++) {
                    modalityObservableArray.push({
                        Id: data[i].Id,
                        Modality: data[i].Modality,
                    });
                }
            }
            _this.cboModalityObservableArray = modalityObservableArray;
            setTimeout(function () {
                _this.modalityProcedureModel.ModalityId = modalityId;
            }, 1000);
        });
    };
    // =======================
    // Save Modality Procedure
    // =======================
    ModalityProcedureDetailDialogComponent.prototype.btnSaveModalityProcedureClick = function () {
        var _this = this;
        var btnSaveModalityProcedure = document.getElementById("btnSaveModalityProcedure");
        btnSaveModalityProcedure.setAttribute("disabled", "disabled");
        btnSaveModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Saving...";
        var btnCloseModalityProcedure = document.getElementById("btnCloseModalityProcedure");
        btnCloseModalityProcedure.setAttribute("disabled", "disabled");
        this.modalityProcedureService.saveModalityProcedure(this.modalityProcedureModel);
        this.modalityProcedureSubscription = this.modalityProcedureService.modalityProcedureSavedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.detailModalityProcedureDialogRef.close(200);
                btnSaveModalityProcedure.removeAttribute("disabled");
                btnSaveModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseModalityProcedure.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.detailModalityProcedureDialogRef.close(404);
                btnSaveModalityProcedure.removeAttribute("disabled");
                btnSaveModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseModalityProcedure.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.detailModalityProcedureDialogRef.close(400);
                btnSaveModalityProcedure.removeAttribute("disabled");
                btnSaveModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseModalityProcedure.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.detailModalityProcedureDialogRef.close(500);
                btnSaveModalityProcedure.removeAttribute("disabled");
                btnSaveModalityProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseModalityProcedure.removeAttribute("disabled");
            }
        });
    };
    // ===============================
    // Close Modality Procedure Dialog
    // ===============================
    ModalityProcedureDetailDialogComponent.prototype.btnCloseModalityProcedureClick = function () {
        this.detailModalityProcedureDialogRef.close();
        if (this.modalityProcedureSubscription != null)
            this.modalityProcedureSubscription.unsubscribe();
        if (this.modalitySubscription != null)
            this.modalitySubscription.unsubscribe();
    };
    ModalityProcedureDetailDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modality-procedure-detail-dialog',
            template: __webpack_require__(/*! ./modality-procedure-detail.dialog.component.html */ "./src/app/dialog/modality-procedure/modality-procedure-detail.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _modality_procedure_modality_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ModalityProcedureService"]])
    ], ModalityProcedureDetailDialogComponent);
    return ModalityProcedureDetailDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/procedure/procedure-delete.dialog.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dialog/procedure/procedure-delete.dialog.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    Are you sure you want to delete this procedure?\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnConfirmDeleteProcedure\" (click)=\"btnConfirmDeleteProcedureClick()\">\r\n                    <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button id=\"btnCloseConfirmDeleteProcedure\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close fa-fw\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/procedure/procedure-delete.dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dialog/procedure/procedure-delete.dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProcedureDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureDeleteDialogComponent", function() { return ProcedureDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../procedure/procedure.service */ "./src/app/procedure/procedure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



var ProcedureDeleteDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ProcedureDeleteDialogComponent(deleteProcedureDialogRef, data, procedureService) {
        this.deleteProcedureDialogRef = deleteProcedureDialogRef;
        this.data = data;
        this.procedureService = procedureService;
        // ================
        // Global Variables
        // ================
        this.title = 'Delete Body Part';
        // ================
        // Initialize Model
        // ================
        this.procedureModel = {
            Id: 0,
            TransactionNumber: "",
            TransactionDateTime: "",
            TransactionTime: "",
            DICOMFileName: "",
            PatientName: "",
            Gender: "",
            DateOfBirth: "",
            Age: 0,
            Particulars: "",
            ModalityId: 0,
            Modality: "",
            BodyPartId: 0,
            BodyPart: "",
            UserId: 0,
            User: "",
            PatientAddress: "",
            ReferringPhysician: "",
            StudyDate: "",
            HospitalNumber: "",
            HospitalWardNumber: "",
            StudyInstanceId: ""
        };
        this.title = data.objProcedureDeleteDialogTitle;
        this.procedureModel.Id = data.objCurrentProcedure.Id;
    }
    // ========================
    // Confirm Delete Procedure
    // ========================
    ProcedureDeleteDialogComponent.prototype.btnConfirmDeleteProcedureClick = function () {
        var _this = this;
        var btnConfirmDeleteProcedure = document.getElementById("btnConfirmDeleteProcedure");
        btnConfirmDeleteProcedure.setAttribute("disabled", "disabled");
        btnConfirmDeleteProcedure.innerHTML = "<i class='fa fa-trash fa-fw'></i> Deleting...";
        var btnCloseConfirmDeleteProcedure = document.getElementById("btnCloseConfirmDeleteProcedure");
        btnCloseConfirmDeleteProcedure.setAttribute("disabled", "disabled");
        this.procedureService.deleteProcedure(this.procedureModel.Id);
        this.procedureSubscription = this.procedureService.procedureDeletedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.deleteProcedureDialogRef.close(200);
                btnConfirmDeleteProcedure.removeAttribute("disabled");
                btnConfirmDeleteProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteProcedure.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.deleteProcedureDialogRef.close(404);
                btnConfirmDeleteProcedure.removeAttribute("disabled");
                btnConfirmDeleteProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteProcedure.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.deleteProcedureDialogRef.close(400);
                btnConfirmDeleteProcedure.removeAttribute("disabled");
                btnConfirmDeleteProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteProcedure.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.deleteProcedureDialogRef.close(500);
                btnConfirmDeleteProcedure.removeAttribute("disabled");
                btnConfirmDeleteProcedure.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteProcedure.removeAttribute("disabled");
            }
        });
    };
    ProcedureDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-procedure-delete-dialog',
            template: __webpack_require__(/*! ./procedure-delete.dialog.component.html */ "./src/app/dialog/procedure/procedure-delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"]])
    ], ProcedureDeleteDialogComponent);
    return ProcedureDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/procedure/procedure-result-delete.dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dialog/procedure/procedure-result-delete.dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    Are you sure you want to delete this procedure result?\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnConfirmDeleteProcedureResult\" (click)=\"btnConfirmDeleteProcedureResultClick()\">\r\n                    <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button id=\"btnCloseConfirmDeleteProcedureResult\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close fa-fw\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/procedure/procedure-result-delete.dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialog/procedure/procedure-result-delete.dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProcedureResultDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureResultDeleteDialogComponent", function() { return ProcedureResultDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../procedure/procedure.service */ "./src/app/procedure/procedure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



var ProcedureResultDeleteDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ProcedureResultDeleteDialogComponent(deleteProcedureResultDialogRef, data, procedureResultService) {
        this.deleteProcedureResultDialogRef = deleteProcedureResultDialogRef;
        this.data = data;
        this.procedureResultService = procedureResultService;
        // ================
        // Global Variables
        // ================
        this.title = 'Delete Procedure Result';
        // ================
        // Initialize Model
        // ================
        this.procedureResultModel = {
            Id: 0,
            ProcedureId: 0,
            ModalityProcedureId: 0,
            ModalityProcedure: "",
            Result: "",
            DoctorId: 0,
            Doctor: "",
            DoctorDateTime: ""
        };
        this.title = data.objProcedureResultDeleteDialogTitle;
        this.procedureResultModel.Id = data.objCurrentProcedureResult.Id;
    }
    // ===============================
    // Confirm Delete Procedure Result
    // ===============================
    ProcedureResultDeleteDialogComponent.prototype.btnConfirmDeleteProcedureResultClick = function () {
        var _this = this;
        var btnConfirmDeleteProcedureResult = document.getElementById("btnConfirmDeleteProcedureResult");
        btnConfirmDeleteProcedureResult.setAttribute("disabled", "disabled");
        btnConfirmDeleteProcedureResult.innerHTML = "<i class='fa fa-trash fa-fw'></i> Deleting...";
        var btnCloseConfirmDeleteProcedureResult = document.getElementById("btnCloseConfirmDeleteProcedureResult");
        btnCloseConfirmDeleteProcedureResult.setAttribute("disabled", "disabled");
        this.procedureResultService.deleteProcedureResult(this.procedureResultModel.Id);
        this.procedureResultSubscription = this.procedureResultService.procedureResultDeletedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.deleteProcedureResultDialogRef.close(200);
                btnConfirmDeleteProcedureResult.removeAttribute("disabled");
                btnConfirmDeleteProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteProcedureResult.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.deleteProcedureResultDialogRef.close(404);
                btnConfirmDeleteProcedureResult.removeAttribute("disabled");
                btnConfirmDeleteProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteProcedureResult.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.deleteProcedureResultDialogRef.close(400);
                btnConfirmDeleteProcedureResult.removeAttribute("disabled");
                btnConfirmDeleteProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteProcedureResult.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.deleteProcedureResultDialogRef.close(500);
                btnConfirmDeleteProcedureResult.removeAttribute("disabled");
                btnConfirmDeleteProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteProcedureResult.removeAttribute("disabled");
            }
        });
    };
    ProcedureResultDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-procedure-result-delete-dialog',
            template: __webpack_require__(/*! ./procedure-result-delete.dialog.component.html */ "./src/app/dialog/procedure/procedure-result-delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"]])
    ], ProcedureResultDeleteDialogComponent);
    return ProcedureResultDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/procedure/procedure-result-detail-pdf.dialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/dialog/procedure/procedure-result-detail-pdf.dialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    <div [hidden]=\"isPDFProgressSpinnerHidden\" class=\"text-center\" style=\"width: 100%;\">\r\n        <mat-progress-spinner style=\"margin:0 auto;\" [color]=\"primary\" [mode]=\"'indeterminate'\"></mat-progress-spinner>\r\n    </div>\r\n    <div [hidden]=\"isPDFContentHidden\">\r\n        <pdf-viewer [src]=\"procedureResultPDFURL\" [render-text]=\"true\" style=\"display: block;\"></pdf-viewer>\r\n        <iframe id=\"printPDF\" name=\"printPDF\" style=\"width:0%;height:0;border:0; border:none;\"></iframe>\r\n    </div>\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89.5%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"isBtnPrintDisabled\" (click)=\"btnPrintrocedureResultPDFClick()\">\r\n                    <i class=\"fa fa-print fa-fw\"></i> Print\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 0.5%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" (click)=\"btnCloseProcedureResultPDFClick()\">\r\n                    <i class=\"fa fa-close fa-fw\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/procedure/procedure-result-detail-pdf.dialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/dialog/procedure/procedure-result-detail-pdf.dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProcedureResultPDFDetailPDFDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureResultPDFDetailPDFDialogComponent", function() { return ProcedureResultPDFDetailPDFDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../procedure/procedure.service */ "./src/app/procedure/procedure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======


// =================
// Service and Model
// =================

var ProcedureResultPDFDetailPDFDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ProcedureResultPDFDetailPDFDialogComponent(detailProcedureResultPDFDialogRef, data, procedureService) {
        this.detailProcedureResultPDFDialogRef = detailProcedureResultPDFDialogRef;
        this.data = data;
        this.procedureService = procedureService;
        this.title = 'Print Result';
        this.isBtnPrintDisabled = true;
        this.isPDFProgressSpinnerHidden = false;
        this.isPDFContentHidden = true;
        this.title = data.objProcedureResultDetailPDFDialogTitle;
        this.procedureResultId = data.id;
        this.procedureResultPDF(this.procedureResultId);
    }
    // ===
    // PDF
    // ===
    ProcedureResultPDFDetailPDFDialogComponent.prototype.procedureResultPDF = function (id) {
        var _this = this;
        this.procedureService.getProcedureResultPDF(id);
        this.procedureResultPDFSubscription = this.procedureService.procedureResultPDFObservable.subscribe(function (data) {
            _this.procedureResultPDFURL = URL.createObjectURL(data);
            var printPDF = document.getElementById("printPDF");
            printPDF.setAttribute("src", _this.procedureResultPDFURL);
            _this.isPDFProgressSpinnerHidden = true;
            _this.isPDFContentHidden = false;
            _this.isBtnPrintDisabled = false;
        });
    };
    // =====
    // Print
    // =====
    ProcedureResultPDFDetailPDFDialogComponent.prototype.btnPrintrocedureResultPDFClick = function () {
        window.frames["printPDF"].focus();
        window.frames["printPDF"].print();
    };
    // =============================
    // Close Procedure Result Dialog
    // =============================
    ProcedureResultPDFDetailPDFDialogComponent.prototype.btnCloseProcedureResultPDFClick = function () {
        this.detailProcedureResultPDFDialogRef.close();
        if (this.procedureResultPDFSubscription != null)
            this.procedureResultPDFSubscription.unsubscribe();
    };
    ProcedureResultPDFDetailPDFDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-procedure-result-detail-pdf-dialog',
            template: __webpack_require__(/*! ./procedure-result-detail-pdf.dialog.component.html */ "./src/app/dialog/procedure/procedure-result-detail-pdf.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"]])
    ], ProcedureResultPDFDetailPDFDialogComponent);
    return ProcedureResultPDFDetailPDFDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/procedure/procedure-result-detail.dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/dialog/procedure/procedure-result-detail.dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Procedure</mat-label>\r\n        <mat-select matInput placeholder=\"Select Procedure\" [(ngModel)]=\"procedureResultModel.ModalityProcedureId\">\r\n            <mat-option (onSelectionChange)=\"cboModalityProcedureOnSelectionChange($event)\">--</mat-option>\r\n            <mat-option *ngFor=\"let cboModalityProcedure of cboModalityProcedureObservableArray\" (onSelectionChange)=\"cboModalityProcedureOnSelectionChange($event)\" [value]=\"cboModalityProcedure.Id\">\r\n                {{ cboModalityProcedure.ModalityProcedureResultTemplate }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <!-- <div class=\"form-group\">\r\n        <label>Procedure</label>\r\n        <div class=\"input-group\">\r\n            <wj-combo-box class=\"form-control\" #cboModality [itemsSource]=\"cboModalityProcedureObservableArray\" [isEditable]=\"false\"\r\n                [isRequired]=\"true\" [displayMemberPath]=\"'ModalityProcedureResultTemplate'\" [selectedValuePath]=\"'Id'\" [(ngModel)]=\"procedureResultModel.ModalityProcedureId\">\r\n            </wj-combo-box>\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"btnGetModalityProcedureTemplate()\">\r\n                    <i class=\"fa fa-download fa-fw\"></i> Get Template\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Result</mat-label>\r\n        <textarea [(ngModel)]=\"procedureResultModel.Result\" rows=\"10\" matInput></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\" [hidden]=\"isCurrentDoctor\">\r\n        <mat-label>Doctor</mat-label>\r\n        <input [(ngModel)]=\"procedureResultModel.Doctor\" matInput disabled />\r\n    </mat-form-field>\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"primary\" id=\"btnSaveProcedureResult\" (click)=\"btnSaveProcedureResultClick()\">\r\n                    <i class=\"fa fa-save\"></i> Save\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnCloseProcedureResult\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/procedure/procedure-result-detail.dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/dialog/procedure/procedure-result-detail.dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProcedureResultDetailDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureResultDetailDialogComponent", function() { return ProcedureResultDetailDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../procedure/procedure.service */ "./src/app/procedure/procedure.service.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======





var ProcedureResultDetailDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ProcedureResultDetailDialogComponent(detailProcedureResultDialogRef, data, procedureService) {
        this.detailProcedureResultDialogRef = detailProcedureResultDialogRef;
        this.data = data;
        this.procedureService = procedureService;
        this.title = 'Detail Procedure Result';
        this.isCurrentDoctor = false;
        this.isCboProcedureClicked = false;
        this.isCboProcedureSelected = false;
        this.isClickedEdit = false;
        // ================
        // Initialize Model
        // ================
        this.procedureResultModel = {
            Id: 0,
            ProcedureId: 0,
            ModalityProcedureId: 0,
            ModalityProcedure: "",
            Result: "",
            DoctorId: 0,
            Doctor: "",
            DoctorDateTime: ""
        };
        this.title = data.objProcedureResultDetailDialogTitle;
        this.procedureResultModel.Id = data.objCurrentProcedureResult.Id;
        this.procedureResultModel.ProcedureId = data.objCurrentProcedureResult.ProcedureId;
        this.procedureResultModel.ModalityProcedureId = data.objCurrentProcedureResult.ModalityProcedureId;
        this.procedureResultModel.Result = data.objCurrentProcedureResult.Result;
        this.procedureResultModel.DoctorId = data.objCurrentProcedureResult.DoctorId;
        this.procedureResultModel.Doctor = data.objCurrentProcedureResult.Doctor;
        if (this.procedureResultModel.Id == 0) {
            this.isCurrentDoctor = true;
        }
        else {
            this.isClickedEdit = true;
        }
        this.getModalityProcedureData(this.procedureResultModel.ModalityProcedureId);
    }
    // ===========================
    // Get Modality Procedure Data
    // ===========================
    ProcedureResultDetailDialogComponent.prototype.getModalityProcedureData = function (modalityProcedureId) {
        var _this = this;
        this.procedureService.getModalityProcedure();
        this.modalityProcedureSubscription = this.procedureService.modalityProcedureObservable.subscribe(function (data) {
            var modalityProcedureObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
            if (data != null) {
                for (var i = 0; i <= data.length - 1; i++) {
                    modalityProcedureObservableArray.push({
                        Id: data[i].Id,
                        ModalityProcedure: data[i].ModalityProcedure,
                        ModalityProcedureResultTemplate: data[i].ModalityProcedure + " - " + data[i].ModalityResultTemplate,
                        ModalityResultTemplate: data[i].ModalityResultTemplate
                    });
                }
            }
            _this.cboModalityProcedureObservableArray = modalityProcedureObservableArray;
            setTimeout(function () {
                _this.procedureResultModel.ModalityProcedureId = modalityProcedureId;
            }, 1000);
        });
    };
    // ======================================
    // Modality Procedure On Selection Change
    // ======================================
    ProcedureResultDetailDialogComponent.prototype.cboModalityProcedureOnSelectionChange = function (event) {
        if (event.isUserInput) {
            var currentModalityProcedureId_1 = event.source.value;
            if (currentModalityProcedureId_1 == undefined) {
                this.procedureResultModel.Result = "";
            }
            else {
                if (!this.isClickedEdit) {
                    this.procedureResultModel.Result = this.cboModalityProcedureObservableArray.filter(function (cboModality) { return cboModality.Id === currentModalityProcedureId_1; })[0].ModalityResultTemplate;
                }
                else {
                    this.isClickedEdit = false;
                }
            }
        }
    };
    // =====================
    // Save Procedure Result
    // =====================
    ProcedureResultDetailDialogComponent.prototype.btnSaveProcedureResultClick = function () {
        var _this = this;
        var btnSaveProcedureResult = document.getElementById("btnSaveProcedureResult");
        btnSaveProcedureResult.setAttribute("disabled", "disabled");
        btnSaveProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Saving...";
        var btnCloseProcedureResult = document.getElementById("btnCloseProcedureResult");
        btnCloseProcedureResult.setAttribute("disabled", "disabled");
        this.procedureService.saveProcedureResult(this.procedureResultModel);
        this.procedureResultSubscription = this.procedureService.procedureResultSavedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.detailProcedureResultDialogRef.close(200);
                btnSaveProcedureResult.removeAttribute("disabled");
                btnSaveProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseProcedureResult.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.detailProcedureResultDialogRef.close(404);
                btnSaveProcedureResult.removeAttribute("disabled");
                btnSaveProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseProcedureResult.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.detailProcedureResultDialogRef.close(400);
                btnSaveProcedureResult.removeAttribute("disabled");
                btnSaveProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseProcedureResult.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.detailProcedureResultDialogRef.close(500);
                btnSaveProcedureResult.removeAttribute("disabled");
                btnSaveProcedureResult.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseProcedureResult.removeAttribute("disabled");
            }
        });
    };
    // =============================
    // Close Procedure Result Dialog
    // =============================
    ProcedureResultDetailDialogComponent.prototype.btnCloseProcedureResultClick = function () {
        this.detailProcedureResultDialogRef.close();
        if (this.procedureResultSubscription != null)
            this.procedureResultSubscription.unsubscribe();
        // if (this.modalityProcedureSubscription != null) this.modalityProcedureSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cboModality'),
        __metadata("design:type", wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_4__["WjComboBox"])
    ], ProcedureResultDetailDialogComponent.prototype, "cboModality", void 0);
    ProcedureResultDetailDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-procedure-result-detail-dialog',
            template: __webpack_require__(/*! ./procedure-result-detail.dialog.component.html */ "./src/app/dialog/procedure/procedure-result-detail.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_2__["ProcedureService"]])
    ], ProcedureResultDetailDialogComponent);
    return ProcedureResultDetailDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/rate/rate-delete.dialog.component.html":
/*!***************************************************************!*\
  !*** ./src/app/dialog/rate/rate-delete.dialog.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    Are you sure you want to delete this rate?\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnConfirmDeleteRate\" (click)=\"btnConfirmDeleteRateClick()\">\r\n                    <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button id=\"btnCloseConfirmDeleteRate\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close fa-fw\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/rate/rate-delete.dialog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dialog/rate/rate-delete.dialog.component.ts ***!
  \*************************************************************/
/*! exports provided: RateDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateDeleteDialogComponent", function() { return RateDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _rate_rate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rate/rate.service */ "./src/app/rate/rate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



var RateDeleteDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function RateDeleteDialogComponent(deleteRateDialogRef, data, rateService) {
        this.deleteRateDialogRef = deleteRateDialogRef;
        this.data = data;
        this.rateService = rateService;
        // ================
        // Global Variables
        // ================
        this.title = 'Delete Body Part';
        // ================
        // Initialize Model
        // ================
        this.rateModel = {
            Id: 0,
            UserId: 0,
            ModalityProcedureId: 0,
            ModalityProcedureCode: "",
            FacilityRate: 0,
            DoctorRate: 0,
            ImageRate: 0,
            Remarks: ""
        };
        this.title = data.objRateDeleteDialogTitle;
        this.rateModel.Id = data.objCurrentRate.Id;
    }
    // =========================
    // Confirm Delete Body Parts
    // =========================
    RateDeleteDialogComponent.prototype.btnConfirmDeleteRateClick = function () {
        var _this = this;
        var btnConfirmDeleteRate = document.getElementById("btnConfirmDeleteRate");
        btnConfirmDeleteRate.setAttribute("disabled", "disabled");
        btnConfirmDeleteRate.innerHTML = "<i class='fa fa-trash fa-fw'></i> Deleting...";
        var btnCloseConfirmDeleteRate = document.getElementById("btnCloseConfirmDeleteRate");
        btnCloseConfirmDeleteRate.setAttribute("disabled", "disabled");
        this.rateService.deleteRate(this.rateModel.Id);
        this.rateSubscription = this.rateService.rateDeletedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.deleteRateDialogRef.close(200);
                btnConfirmDeleteRate.removeAttribute("disabled");
                btnConfirmDeleteRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteRate.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.deleteRateDialogRef.close(404);
                btnConfirmDeleteRate.removeAttribute("disabled");
                btnConfirmDeleteRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteRate.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.deleteRateDialogRef.close(400);
                btnConfirmDeleteRate.removeAttribute("disabled");
                btnConfirmDeleteRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteRate.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.deleteRateDialogRef.close(500);
                btnConfirmDeleteRate.removeAttribute("disabled");
                btnConfirmDeleteRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteRate.removeAttribute("disabled");
            }
        });
    };
    RateDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-delete-dialog',
            template: __webpack_require__(/*! ./rate-delete.dialog.component.html */ "./src/app/dialog/rate/rate-delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _rate_rate_service__WEBPACK_IMPORTED_MODULE_2__["RateService"]])
    ], RateDeleteDialogComponent);
    return RateDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/rate/rate-detail.dialog.component.html":
/*!***************************************************************!*\
  !*** ./src/app/dialog/rate/rate-detail.dialog.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Procedure Code</mat-label>\r\n        <input [(ngModel)]=\"rateModel.ModalityProcedureCode\" matInput />\r\n    </mat-form-field>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                <mat-label>Facility Rate</mat-label>\r\n                <input type=\"number\" [(ngModel)]=\"rateModel.FacilityRate\" matInput />\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                <mat-label>Doctor Rate</mat-label>\r\n                <input type=\"number\" [(ngModel)]=\"rateModel.DoctorRate\" matInput />\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                <mat-label>Image Rate</mat-label>\r\n                <input type=\"number\" [(ngModel)]=\"rateModel.ImageRate\" matInput />\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Remarks</mat-label>\r\n        <textarea [(ngModel)]=\"rateModel.Remarks\" rows=\"9\" matInput></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Modality Procedure</mat-label>\r\n        <mat-select matInput placeholder=\"Select Modality Procedure\" [(ngModel)]=\"rateModel.ModalityProcedureId\">\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let cboModalityProcedure of cboModalityProcedureObservableArray\" [value]=\"cboModalityProcedure.Id\">\r\n                {{ cboModalityProcedure.ModalityProcedureResultTemplate }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <!-- <div class=\"form-group\">\r\n        <label>Modality Procedure</label>\r\n        <div>\r\n            <wj-combo-box class=\"form-control\" #cboModality [itemsSource]=\"cboModalityProcedureObservableArray\" [isEditable]=\"false\"\r\n                [isRequired]=\"true\" [displayMemberPath]=\"'ModalityProcedure'\" [selectedValuePath]=\"'Id'\" [(ngModel)]=\"rateModel.ModalityProcedureId\">\r\n            </wj-combo-box>\r\n        </div>\r\n    </div> -->\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"primary\" id=\"btnSaveRate\" (click)=\"btnSaveRateClick()\">\r\n                    <i class=\"fa fa-save\"></i> Save\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnCloseRate\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/rate/rate-detail.dialog.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dialog/rate/rate-detail.dialog.component.ts ***!
  \*************************************************************/
/*! exports provided: RateDetailDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateDetailDialogComponent", function() { return RateDetailDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _rate_rate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rate/rate.service */ "./src/app/rate/rate.service.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======




var RateDetailDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function RateDetailDialogComponent(detailRateDialogRef, data, rateService) {
        this.detailRateDialogRef = detailRateDialogRef;
        this.data = data;
        this.rateService = rateService;
        // ================
        // Global Variables
        // ================
        this.title = 'modality procedure detail dialog';
        // ================
        // Initialize Model
        // ================
        this.rateModel = {
            Id: 0,
            UserId: 0,
            ModalityProcedureId: 0,
            ModalityProcedureCode: "",
            FacilityRate: 0,
            DoctorRate: 0,
            ImageRate: 0,
            Remarks: ""
        };
        this.title = data.objModalityDetailProcedureDialogTitle;
        this.rateModel.Id = data.objCurrentRate.Id;
        this.rateModel.UserId = data.objCurrentRate.UserId;
        this.rateModel.ModalityProcedureId = data.objCurrentRate.ModalityProcedureId;
        this.rateModel.ModalityProcedureCode = data.objCurrentRate.ModalityProcedureCode;
        this.rateModel.FacilityRate = data.objCurrentRate.FacilityRate;
        this.rateModel.DoctorRate = data.objCurrentRate.DoctorRate;
        this.rateModel.ImageRate = data.objCurrentRate.ImageRate;
        this.rateModel.Remarks = data.objCurrentRate.Remarks;
        this.getModalityProcedureData(this.rateModel.ModalityProcedureId);
    }
    // ===========================
    // Get Modality Procedure Data
    // ===========================
    RateDetailDialogComponent.prototype.getModalityProcedureData = function (modalityProcedureId) {
        var _this = this;
        this.rateService.getModalityProcedure();
        this.modalityProcedureSubscription = this.rateService.modalityProcedureObservable.subscribe(function (data) {
            var modalityProcedureObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
            if (data.length > 0) {
                for (var i = 0; i <= data.length - 1; i++) {
                    modalityProcedureObservableArray.push({
                        Id: data[i].Id,
                        ModalityProcedure: data[i].ModalityProcedure,
                        ModalityProcedureResultTemplate: data[i].ModalityProcedure + " - " + data[i].ModalityResultTemplate,
                    });
                }
            }
            _this.cboModalityProcedureObservableArray = modalityProcedureObservableArray;
            setTimeout(function () {
                _this.rateModel.ModalityProcedureId = modalityProcedureId;
            }, 1000);
        });
    };
    // =========
    // Save Rate
    // =========
    RateDetailDialogComponent.prototype.btnSaveRateClick = function () {
        var _this = this;
        var btnSaveRate = document.getElementById("btnSaveRate");
        btnSaveRate.setAttribute("disabled", "disabled");
        btnSaveRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Saving...";
        var btnCloseRate = document.getElementById("btnCloseRate");
        btnCloseRate.setAttribute("disabled", "disabled");
        this.rateService.saveRate(this.rateModel);
        this.rateSubscription = this.rateService.rateSavedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.detailRateDialogRef.close(200);
                btnSaveRate.removeAttribute("disabled");
                btnSaveRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseRate.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.detailRateDialogRef.close(404);
                btnSaveRate.removeAttribute("disabled");
                btnSaveRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseRate.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.detailRateDialogRef.close(400);
                btnSaveRate.removeAttribute("disabled");
                btnSaveRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseRate.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.detailRateDialogRef.close(500);
                btnSaveRate.removeAttribute("disabled");
                btnSaveRate.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseRate.removeAttribute("disabled");
            }
        });
    };
    // =================
    // Close Rate Dialog
    // ==================
    RateDetailDialogComponent.prototype.btnCloseRateClick = function () {
        this.detailRateDialogRef.close();
        if (this.rateSubscription != null)
            this.rateSubscription.unsubscribe();
        if (this.modalityProcedureSubscription != null)
            this.modalityProcedureSubscription.unsubscribe();
    };
    RateDetailDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate-detail-dialog',
            template: __webpack_require__(/*! ./rate-detail.dialog.component.html */ "./src/app/dialog/rate/rate-detail.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _rate_rate_service__WEBPACK_IMPORTED_MODULE_2__["RateService"]])
    ], RateDetailDialogComponent);
    return RateDetailDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/user/user-doctor-delete.dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialog/user/user-doctor-delete.dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    Are you sure you want to delete this user doctor?\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnConfirmDeleteUserDoctor\" (click)=\"btnConfirmDeleteUserDoctorClick()\">\r\n                    <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button id=\"btnCloseConfirmDeleteUserDoctor\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close fa-fw\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/user/user-doctor-delete.dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialog/user/user-doctor-delete.dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: UserDoctorDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDoctorDeleteDialogComponent", function() { return UserDoctorDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/user.service */ "./src/app/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======



var UserDoctorDeleteDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function UserDoctorDeleteDialogComponent(deleteUserDoctorDialogRef, data, userService) {
        this.deleteUserDoctorDialogRef = deleteUserDoctorDialogRef;
        this.data = data;
        this.userService = userService;
        // ================
        // Global Variables
        // ================
        this.title = 'Delete Body Part';
        // ================
        // Initialize Model
        // ================
        this.userDoctorModel = {
            Id: 0,
            UserId: 0,
            DoctorId: 0,
        };
        this.title = data.objUserDoctorDeleteDialogTitle;
        this.userDoctorModel.Id = data.objCurrentUserDoctor.Id;
    }
    // =========================
    // Confirm Delete Body Parts
    // =========================
    UserDoctorDeleteDialogComponent.prototype.btnConfirmDeleteUserDoctorClick = function () {
        var _this = this;
        var btnConfirmDeleteUserDoctor = document.getElementById("btnConfirmDeleteUserDoctor");
        btnConfirmDeleteUserDoctor.setAttribute("disabled", "disabled");
        btnConfirmDeleteUserDoctor.innerHTML = "<i class='fa fa-trash fa-fw'></i> Deleting...";
        var btnCloseConfirmDeleteUserDoctor = document.getElementById("btnCloseConfirmDeleteUserDoctor");
        btnCloseConfirmDeleteUserDoctor.setAttribute("disabled", "disabled");
        this.userService.deleteUserDoctor(this.userDoctorModel.Id);
        this.userDoctorSubscription = this.userService.userDoctorDeletedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.deleteUserDoctorDialogRef.close(200);
                btnConfirmDeleteUserDoctor.removeAttribute("disabled");
                btnConfirmDeleteUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteUserDoctor.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.deleteUserDoctorDialogRef.close(404);
                btnConfirmDeleteUserDoctor.removeAttribute("disabled");
                btnConfirmDeleteUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteUserDoctor.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.deleteUserDoctorDialogRef.close(400);
                btnConfirmDeleteUserDoctor.removeAttribute("disabled");
                btnConfirmDeleteUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteUserDoctor.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.deleteUserDoctorDialogRef.close(500);
                btnConfirmDeleteUserDoctor.removeAttribute("disabled");
                btnConfirmDeleteUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseConfirmDeleteUserDoctor.removeAttribute("disabled");
            }
        });
    };
    UserDoctorDeleteDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-doctor-delete-dialog',
            template: __webpack_require__(/*! ./user-doctor-delete.dialog.component.html */ "./src/app/dialog/user/user-doctor-delete.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserDoctorDeleteDialogComponent);
    return UserDoctorDeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/user/user-doctor-detail.dialog.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dialog/user/user-doctor-detail.dialog.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ title }}</h2>\r\n<mat-dialog-content>\r\n    <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n        <mat-label>Doctor</mat-label>\r\n        <mat-select matInput placeholder=\"Select Doctor\" [(ngModel)]=\"userDoctorModel.DoctorId\">\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let cboDoctor of cboDoctorObservableArray\" [value]=\"cboDoctor.Id\">\r\n                {{ cboDoctor.FullName }}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <!-- <div class=\"form-group\">\r\n        <label>Doctor</label>\r\n        <div>\r\n            <wj-combo-box class=\"input-100-percent\" #cboModality [itemsSource]=\"cboDoctorObservableArray\" [isEditable]=\"false\" [isRequired]=\"true\"\r\n                [displayMemberPath]=\"'FullName'\" [selectedValuePath]=\"'Id'\" [(ngModel)]=\"userDoctorModel.DoctorId\">\r\n            </wj-combo-box>\r\n        </div>\r\n    </div> -->\r\n    <br />\r\n    <br />\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n    <table border=\"0\" style=\"width: 100%;\">\r\n        <tr>\r\n            <td style=\"width: 89%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"primary\" id=\"btnSaveUserDoctor\" (click)=\"btnSaveUserDoctorClick()\">\r\n                    <i class=\"fa fa-save\"></i> Save\r\n                </button>\r\n            </td>\r\n            <td style=\"width: 1%;\"></td>\r\n            <td style=\"width: 5%;\" align=\"right\">\r\n                <button mat-raised-button color=\"warn\" id=\"btnCloseUserDoctor\" [mat-dialog-close]=\"true\">\r\n                    <i class=\"fa fa-close\"></i> Close\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <br />\r\n    <br />\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/dialog/user/user-doctor-detail.dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialog/user/user-doctor-detail.dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: UserDoctorDetailDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDoctorDetailDialogComponent", function() { return UserDoctorDetailDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// =======
// Angular
// =======




var UserDoctorDetailDialogComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function UserDoctorDetailDialogComponent(detailUserDoctorDialogRef, data, userDoctorService) {
        this.detailUserDoctorDialogRef = detailUserDoctorDialogRef;
        this.data = data;
        this.userDoctorService = userDoctorService;
        // ================
        // Global Variables
        // ================
        this.title = 'modality procedure detail dialog';
        // ================
        // Initialize Model
        // ================
        this.userDoctorModel = {
            Id: 0,
            UserId: 0,
            DoctorId: 0,
        };
        this.title = data.objUserDoctorDetailDialogTitle;
        this.userDoctorModel.Id = data.objCurrentUserDoctor.Id;
        this.userDoctorModel.UserId = data.objCurrentUserDoctor.UserId;
        this.userDoctorModel.DoctorId = data.objCurrentUserDoctor.DoctorId;
        this.geDoctorData(this.userDoctorModel.DoctorId);
    }
    // ===============
    // Get Doctor Data
    // ===============
    UserDoctorDetailDialogComponent.prototype.geDoctorData = function (doctorId) {
        var _this = this;
        this.userDoctorService.getDoctor();
        this.doctorSubscription = this.userDoctorService.doctorObservable.subscribe(function (data) {
            var doctorObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
            if (data.length > 0) {
                for (var i = 0; i <= data.length - 1; i++) {
                    doctorObservableArray.push({
                        Id: data[i].Id,
                        FullName: data[i].FullName,
                    });
                }
            }
            _this.cboDoctorObservableArray = doctorObservableArray;
            setTimeout(function () {
                _this.userDoctorModel.DoctorId = doctorId;
            }, 1000);
        });
    };
    // ================
    // Save User Doctor
    // ================
    UserDoctorDetailDialogComponent.prototype.btnSaveUserDoctorClick = function () {
        var _this = this;
        var btnSaveUserDoctor = document.getElementById("btnSaveUserDoctor");
        btnSaveUserDoctor.setAttribute("disabled", "disabled");
        btnSaveUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Saving...";
        var btnCloseUserDoctor = document.getElementById("btnCloseUserDoctor");
        btnCloseUserDoctor.setAttribute("disabled", "disabled");
        this.userDoctorService.saveUserDoctor(this.userDoctorModel);
        this.userDoctorSubscription = this.userDoctorService.userDoctorSavedObservable.subscribe(function (data) {
            if (data == 200) {
                _this.detailUserDoctorDialogRef.close(200);
                btnSaveUserDoctor.removeAttribute("disabled");
                btnSaveUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseUserDoctor.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.detailUserDoctorDialogRef.close(404);
                btnSaveUserDoctor.removeAttribute("disabled");
                btnSaveUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseUserDoctor.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.detailUserDoctorDialogRef.close(400);
                btnSaveUserDoctor.removeAttribute("disabled");
                btnSaveUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseUserDoctor.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.detailUserDoctorDialogRef.close(500);
                btnSaveUserDoctor.removeAttribute("disabled");
                btnSaveUserDoctor.innerHTML = "<i class='fa fa-save fa-fw'></i> Save";
                btnCloseUserDoctor.removeAttribute("disabled");
            }
        });
    };
    // ========================
    // Close User Doctor Dialog
    // ========================
    UserDoctorDetailDialogComponent.prototype.btnCloseUserDoctorClick = function () {
        this.detailUserDoctorDialogRef.close();
        if (this.userDoctorSubscription != null)
            this.userDoctorSubscription.unsubscribe();
        if (this.doctorSubscription != null)
            this.doctorSubscription.unsubscribe();
    };
    UserDoctorDetailDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-doctor-detail-dialog',
            template: __webpack_require__(/*! ./user-doctor-detail.dialog.component.html */ "./src/app/dialog/user/user-doctor-detail.dialog.component.html"),
            styles: [__webpack_require__(/*! ../dialog.css */ "./src/app/dialog/dialog.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserDoctorDetailDialogComponent);
    return UserDoctorDetailDialogComponent;
}());



/***/ }),

/***/ "./src/app/forbidden/forbidden.component.css":
/*!***************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.html":
/*!****************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n</ol>\r\n<div class=\"card\">\r\n    <div class=\"card-header\" align=\"right\">\r\n        <button mat-raised-button color=\"warn\" routerLink=\"/software/dashboard\">\r\n            <i class=\"fa fa-close\"></i> Close\r\n        </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"jumbotron\" style=\"text-align: center;\">\r\n            <i class=\"fa fa-hand-stop-o\" style=\"font-size: 200px; color: #dfda00;\"></i>\r\n            <br /><br />\r\n            <h1>Page Forbidden</h1>\r\n            <p>Sorry, you have no rights to access this page.</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forbidden/forbidden.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forbidden/forbidden.component.ts ***!
  \**************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
        this.title = 'forbidden';
    }
    ForbiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.css */ "./src/app/forbidden/forbidden.component.css")]
        })
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand-logo {\r\n    width: 125px;\r\n    height: 28px;\r\n}\r\n\r\n.container-vid {\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.fullscreen-video-wrap {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    background:#292931;\r\n}\r\n\r\n.fullscreen-video-wrap video {\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    background: #000;\r\n    opacity: 0.1;\r\n}\r\n\r\n.header-content {\r\n    padding: 1rem;\r\n    z-index: 1;\r\n    width: 100%;\r\n}\r\n\r\n.myVideo{\r\n    min-width: 100%; \r\n    min-height: 100%;\r\n}\r\n\r\n.intro-h1 {\r\n    font-size: 60px;\r\n    font-weight: bold;\r\n}\r\n\r\n.intro-h3 {\r\n    font-size: 30px;\r\n}\r\n\r\n.feature-lists {\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n    list-style-type: none;\r\n}\r\n\r\n.about-section-logo {\r\n    height: 40px;\r\n}\r\n\r\n.about-section{\r\n    padding: 50px 0px;\r\n}\r\n\r\n.features-section {\r\n    background: #fbfbfb;\r\n    padding: 50px 0px;\r\n}\r\n\r\n.customer-section {\r\n    padding: 50px 0px;\r\n}\r\n\r\n.digitizer-section {\r\n    background: #fbfbfb;\r\n    padding: 50px 0px;\r\n}\r\n\r\n.contact-section {\r\n    background: #0099cc;\r\n    padding: 50px 0px;\r\n}\r\n\r\n/* ============= */\r\n\r\n/* custom header */\r\n\r\n/* ============= */\r\n\r\nheader.masthead {\r\n    position: relative;\r\n    background-color: #202122;\r\n    background: url('header-bg.png') no-repeat center center;\r\n    background-size: cover;\r\n    padding-top: 8rem;\r\n    padding-bottom: 8rem;\r\n}\r\n\r\nheader.masthead .overlay {\r\n    position: absolute;\r\n    background-color: #212529;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0.8;\r\n}\r\n\r\n.container-header {\r\n    padding: 110px 0;\r\n}\r\n  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== -->\r\n<!-- Navigation -->\r\n<!-- ========== -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\" style=\"border-bottom: 0.5px solid grey;\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" routerLink=\"/home\">\r\n            <img class=\"navbar-brand-logo\" src=\"../../assets/logo/DMTiPACS2.png\" alt=\"\">\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <!-- <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" routerLink=\".\">About</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\".\">Contact</a>\r\n                </li> -->\r\n            </ul>\r\n            <div class=\"form-inline my-2 my-lg-0\">\r\n                <button class=\"btn btn-primary my-2 my-sm-0\" routerLink=\"/account/login\">Login</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<!-- ================= -->\r\n<!-- Master Background -->\r\n<!-- ================= -->\r\n<header class=\"masthead text-white text-center\">\r\n    <div class=\"overlay\"></div>\r\n    <div class=\"container container-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-2\"></div>\r\n            <div class=\"col-md-8\">\r\n                <br />\r\n                <h1>\r\n                    Complete Software-as-a-Service (SaaS) Telerad Application with unlimited and independent cloud storage.\r\n                </h1>\r\n                <br />\r\n                <button type=\"button\" class=\"btn btn-info btn-lg\" routerLink=\"/account/login\">\r\n                    <i class=\"fa fa-check\"></i> Get Started\r\n                </button>\r\n                <br />\r\n                <br />\r\n                <br />\r\n            </div>\r\n            <div class=\"col-md-2\"></div>\r\n        </div>\r\n    </div>\r\n</header>\r\n\r\n<!-- ================ -->\r\n<!-- Background Video -->\r\n<!-- ================ -->\r\n<!-- <header class=\"container-vid\">\r\n    <div class=\"fullscreen-video-wrap\">\r\n        <video autoplay=\"true\" loop=\"loop\" muted=\"muted\" class=\"myVideo\">\r\n            <source src=\"../../assets/videos/bg-video.mp4\" type=\"video/mp4\" id=\"vid\">\r\n        </video>\r\n    </div>\r\n    <div class=\"header-content\">\r\n        <div class=\"intro-message\">\r\n            <br />\r\n            <h1 class=\"intro-h1\">DMTiPACS </h1>\r\n            <h3 class=\"intro-h3\">Image Solutions</h3>\r\n            <br />\r\n            <p>\r\n                Complete Software-as-a-Service (SaaS) Telerad Application with unlimited and independent cloud storage.\r\n            </p>\r\n            <br />\r\n            <button type=\"button\" class=\"btn btn-info btn-lg\" routerLink=\"/software\">\r\n                <i class=\"fa fa-check\"></i> Get Started\r\n            </button>\r\n            <br />\r\n            <br />\r\n        </div>\r\n    </div>\r\n</header> -->\r\n\r\n<!-- ============= -->\r\n<!-- About Section -->\r\n<!-- ============= -->\r\n<section id=\"about\" class=\"about-section\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <br>\r\n        <div align=\"center\" class=\"text-center\">\r\n            <img class=\"img-thumbnail\" style=\"border: none;\" src=\"../../assets/images/transaction-xray-monitor-bg.png\">\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"row text-center\">\r\n            <div class=\"col-md-2\"></div>\r\n            <div class=\"col-md-8\">\r\n                <p class=\"lead\">\r\n                    DMTiPACS is an end-to-end cloud-based Telerad Application that covers medical equipment integration to remote reading and\r\n                    printing of results.\r\n                </p>\r\n            </div>\r\n            <div class=\"col-md-2\"></div>\r\n        </div>\r\n        <br>\r\n    </div>\r\n</section>\r\n\r\n<!-- ================ -->\r\n<!-- Features Section -->\r\n<!-- ================ -->\r\n<section class=\"features-section showcase bg-light\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-7\">\r\n                <h4>Features:</h4>\r\n                <br />\r\n                <table style=\"border: none; width: 100%; margin-left: 15px;\" border=\"0\">\r\n                    <tr>\r\n                        <td style=\"width: 5%;\">\r\n                            <i class=\"fa fa-check\" style=\"color: green\"></i>\r\n                        </td>\r\n                        <td style=\"width: 95%;\" class=\"lead\">\r\n                            100% Cloud Application with independent storage.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"width: 5%;\">\r\n                            <i class=\"fa fa-check\" style=\"color: green\"></i>\r\n                        </td>\r\n                        <td style=\"width: 95%;\" class=\"lead\">\r\n                            Fully integrated PACS recording and real-time cloud study entries.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"width: 5%;\">\r\n                            <i class=\"fa fa-check\" style=\"color: green\"></i>\r\n                        </td>\r\n                        <td style=\"width: 95%;\" class=\"lead\">\r\n                            Customizable DICOM code entries.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"width: 5%;\">\r\n                            <i class=\"fa fa-check\" style=\"color: green\"></i>\r\n                        </td>\r\n                        <td style=\"width: 95%;\" class=\"lead\">\r\n                            Customizable physician's template\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"width: 5%;\">\r\n                            <i class=\"fa fa-check\" style=\"color: green\"></i>\r\n                        </td>\r\n                        <td style=\"width: 95%;\" class=\"lead\">\r\n                            Customizable result reports.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"width: 5%;\">\r\n                            <i class=\"fa fa-check\" style=\"color: green\"></i>\r\n                        </td>\r\n                        <td style=\"width: 95%;\" class=\"lead\">\r\n                            Multi-level security with physician's electronic signature.\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td style=\"width: 5%;\">\r\n                            <i class=\"fa fa-check\" style=\"color: green\"></i>\r\n                        </td>\r\n                        <td style=\"width: 95%;\" class=\"lead\">\r\n                            Online management reports, e.g., Billing Transactions.\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"col-md-5\">\r\n                <br>\r\n                <img class=\"img-thumbnail\" style=\"border: none; background: #fbfbfb;\" src=\"../../assets/images/feature-macbook-bg.png\">\r\n            </div>\r\n        </div>\r\n        <br>\r\n    </div>\r\n</section>\r\n\r\n<!-- ================ -->\r\n<!-- Customer Section -->\r\n<!-- ================ -->\r\n<section class=\"customer-section\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <br>\r\n        <div class=\"text-center\">\r\n            <h2>Join our growing customers!</h2>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\"></div>\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-3\">\r\n                            <img class=\"rounded-circle\" src=\"../../assets/images/customer-alcantara.jpg\" width=\"120\"> &nbsp;\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <img class=\"rounded-circle\" src=\"../../assets/images/customer-LR.jpg\" width=\"120\"> &nbsp;\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <img class=\"rounded-circle\" src=\"../../assets/images/customer-margosatubig.jpg\" width=\"120\"> &nbsp;\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <img class=\"rounded-circle\" src=\"../../assets/images/customer-medical-care.jpg\" width=\"120\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2\"></div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <a href=\"http://www.dmtipacs.com/Images/TeleradBrochure.pdf\" class=\"btn btn-info btn-lg\">\r\n                <i class=\"fa fa-download\"></i> Download Brochure\r\n            </a>\r\n        </div>\r\n        <br>\r\n    </div>\r\n</section>\r\n\r\n<!-- ================= -->\r\n<!-- Digitizer Section -->\r\n<!-- ================= -->\r\n<section class=\"digitizer-section\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <br>\r\n        <div class=\"text-center\" style=\"padding: 0px 100px;\">\r\n            <h2>Supported Digitizers!</h2>\r\n            <p>We support the following digitizer brands.</p>\r\n            <img class=\"img-thumbnail\" style=\"border: none; background: #fbfbfb;\" src=\"../../assets/images/digitizer.png\">\r\n        </div>\r\n        <br>\r\n    </div>\r\n</section>\r\n\r\n<!-- =============== -->\r\n<!-- Contact Section -->\r\n<!-- =============== -->\r\n<section class=\"contact-section\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <ul class=\"list-group banner-list\">\r\n                    <li class=\"list-group-item\">\r\n                        <i class=\"fa fa-map-marker fa-fw\"></i> Cebu City, Philippines 6000\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <i class=\"fa fa-phone fa-fw\"></i> +63 32 9178123982\r\n                    </li>\r\n                    <li class=\"list-group-item\">Support:\r\n                        <a href=\"#\">support@dmtipacs.com</a>\r\n                    </li>\r\n                    <li class=\"list-group-item\">Marketing:\r\n                        <a href=\"#\">marketing@dmtipacs.com</a>\r\n                    </li>\r\n                </ul>\r\n                <br />\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <iframe width=\"100%\" height=\"400\" src=\"https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=Fuente%20Osme%C3%B1a%20Circle%2C%20Cebu%20City+(DMTiPACS)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed\"\r\n                    frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\r\n                    <a href=\"https://www.maps.ie/create-google-map/\">Google map generator</a>\r\n                </iframe>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n</section>\r\n\r\n<!-- ====== -->\r\n<!-- Footer -->\r\n<!-- ====== -->\r\n<footer id=\"footer\">\r\n    <div class=\"container\">\r\n        <br>\r\n        <div class=\"text-center\">\r\n            <p class=\"copyright text-muted small\">Copyright &copy; 2018 - DMTiPACS Application - Version 3.20190731</p>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'home';
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-toolbar {\r\n  padding: 10px;\r\n  box-shadow: 7px 7px 7px 7px #000;\r\n  border-bottom: 1.5px solid rgb(223, 223, 223);\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n  position: fixed;\r\n}\r\n\r\n.example-sidenav-container {\r\n  flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n  flex: 1 0 auto;\r\n}\r\n\r\n.mat-sidenav-content-styles {\r\n  padding: 20px;\r\n}\r\n\r\n.btn-xs {\r\n  padding: 0.3rem 0;\r\n  margin-bottom: 0.2rem;\r\n  line-height: 1.2;\r\n}"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\">\r\n    <mat-toolbar color=\"\" class=\"example-toolbar\">\r\n        <button mat-icon-button (click)=\"openSideNav()\">\r\n            <i class=\"fa fa-bars fa-fw\"></i>\r\n        </button>\r\n        <app-header style=\"width: 100%;\"></app-header>\r\n    </mat-toolbar>\r\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\r\n        <mat-sidenav #sidenav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\r\n            <app-sidenav></app-sidenav>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content class=\"mat-sidenav-content-styles\">\r\n            <router-outlet></router-outlet>\r\n        </mat-sidenav-content>\r\n        <app-footer></app-footer>\r\n    </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ==================
// Angular and Layout
// ==================




var LayoutComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function LayoutComponent(changeDetectorRef, media, router) {
        this.router = router;
        // ================
        // Global Variables
        // ================
        this.title = 'layout';
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    // ========================
    // Open Side Navigation Bar
    // ========================
    LayoutComponent.prototype.openSideNav = function () {
        this.sidenav.toggle();
    };
    // ============
    // On Load Page
    // ============
    LayoutComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.openSideNav();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    LayoutComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], LayoutComponent.prototype, "sidenav", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid.filter */ "./node_modules/wijmo/wijmo.angular2.grid.filter.js");
/* harmony import */ var wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _dialog_facility_facility_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dialog/facility/facility.dialog.component */ "./src/app/dialog/facility/facility.dialog.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _modality_procedure_modality_procedure_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modality-procedure/modality-procedure.component */ "./src/app/modality-procedure/modality-procedure.component.ts");
/* harmony import */ var _dialog_modality_procedure_modality_procedure_detail_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../dialog/modality-procedure/modality-procedure-detail.dialog.component */ "./src/app/dialog/modality-procedure/modality-procedure-detail.dialog.component.ts");
/* harmony import */ var _dialog_modality_procedure_modality_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../dialog/modality-procedure/modality-procedure-delete.dialog.component */ "./src/app/dialog/modality-procedure/modality-procedure-delete.dialog.component.ts");
/* harmony import */ var _body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../body-parts/body-parts.component */ "./src/app/body-parts/body-parts.component.ts");
/* harmony import */ var _dialog_body_parts_body_parts_detail_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dialog/body-parts/body-parts-detail.dialog.component */ "./src/app/dialog/body-parts/body-parts-detail.dialog.component.ts");
/* harmony import */ var _dialog_body_parts_body_parts_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../dialog/body-parts/body-parts-delete.dialog.component */ "./src/app/dialog/body-parts/body-parts-delete.dialog.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../user/user-detail.component */ "./src/app/user/user-detail.component.ts");
/* harmony import */ var _dialog_user_user_doctor_detail_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../dialog/user/user-doctor-detail.dialog.component */ "./src/app/dialog/user/user-doctor-detail.dialog.component.ts");
/* harmony import */ var _dialog_user_user_doctor_delete_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../dialog/user/user-doctor-delete.dialog.component */ "./src/app/dialog/user/user-doctor-delete.dialog.component.ts");
/* harmony import */ var _rate_rate_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../rate/rate.component */ "./src/app/rate/rate.component.ts");
/* harmony import */ var _dialog_rate_rate_detail_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../dialog/rate/rate-detail.dialog.component */ "./src/app/dialog/rate/rate-detail.dialog.component.ts");
/* harmony import */ var _dialog_rate_rate_delete_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../dialog/rate/rate-delete.dialog.component */ "./src/app/dialog/rate/rate-delete.dialog.component.ts");
/* harmony import */ var _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../procedure/procedure.component */ "./src/app/procedure/procedure.component.ts");
/* harmony import */ var _procedure_procedure_detail_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../procedure/procedure-detail.component */ "./src/app/procedure/procedure-detail.component.ts");
/* harmony import */ var _dialog_procedure_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../dialog/procedure/procedure-delete.dialog.component */ "./src/app/dialog/procedure/procedure-delete.dialog.component.ts");
/* harmony import */ var _dialog_procedure_procedure_result_detail_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../dialog/procedure/procedure-result-detail.dialog.component */ "./src/app/dialog/procedure/procedure-result-detail.dialog.component.ts");
/* harmony import */ var _dialog_procedure_procedure_result_delete_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../dialog/procedure/procedure-result-delete.dialog.component */ "./src/app/dialog/procedure/procedure-result-delete.dialog.component.ts");
/* harmony import */ var _dialog_procedure_procedure_result_detail_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../dialog/procedure/procedure-result-detail-pdf.dialog.component */ "./src/app/dialog/procedure/procedure-result-detail-pdf.dialog.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../forbidden/forbidden.component */ "./src/app/forbidden/forbidden.component.ts");
/* harmony import */ var _layout_layout_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../layout/layout.service */ "./src/app/layout/layout.service.ts");
/* harmony import */ var _modality_procedure_modality_procedure_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../modality-procedure/modality-procedure.service */ "./src/app/modality-procedure/modality-procedure.service.ts");
/* harmony import */ var _body_parts_body_parts_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../body-parts/body-parts.service */ "./src/app/body-parts/body-parts.service.ts");
/* harmony import */ var _rate_rate_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../rate/rate.service */ "./src/app/rate/rate.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _reports_reports_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../reports/reports.service */ "./src/app/reports/reports.service.ts");
/* harmony import */ var _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../procedure/procedure.service */ "./src/app/procedure/procedure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ===============
// Angular Modules
// ===============





// ========
// Material
// ========










// =============
// Wijmo Modules
// =============



// ===================
// Software Components
// ===================























// ========
// Services
// ========







var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dialog_facility_facility_dialog_component__WEBPACK_IMPORTED_MODULE_18__["FacilityDialogComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _modality_procedure_modality_procedure_component__WEBPACK_IMPORTED_MODULE_20__["ModalityProcedureComponent"], _dialog_modality_procedure_modality_procedure_detail_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ModalityProcedureDetailDialogComponent"], _dialog_modality_procedure_modality_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ModalityProcedureDeleteDialogComponent"],
                _body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_23__["BodyPartsComponent"], _dialog_body_parts_body_parts_detail_dialog_component__WEBPACK_IMPORTED_MODULE_24__["BodyPartsDetailDialogComponent"], _dialog_body_parts_body_parts_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["BodyPartsDeleteDialogComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_26__["UserComponent"], _user_user_detail_component__WEBPACK_IMPORTED_MODULE_27__["UserDetailComponent"], _dialog_user_user_doctor_detail_dialog_component__WEBPACK_IMPORTED_MODULE_28__["UserDoctorDetailDialogComponent"], _dialog_user_user_doctor_delete_dialog_component__WEBPACK_IMPORTED_MODULE_29__["UserDoctorDeleteDialogComponent"],
                _rate_rate_component__WEBPACK_IMPORTED_MODULE_30__["RateComponent"], _dialog_rate_rate_detail_dialog_component__WEBPACK_IMPORTED_MODULE_31__["RateDetailDialogComponent"], _dialog_rate_rate_delete_dialog_component__WEBPACK_IMPORTED_MODULE_32__["RateDeleteDialogComponent"],
                _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_33__["ProcedureComponent"], _procedure_procedure_detail_component__WEBPACK_IMPORTED_MODULE_34__["ProcedureDetailComponent"], _dialog_procedure_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ProcedureDeleteDialogComponent"], _dialog_procedure_procedure_result_detail_dialog_component__WEBPACK_IMPORTED_MODULE_36__["ProcedureResultDetailDialogComponent"], _dialog_procedure_procedure_result_delete_dialog_component__WEBPACK_IMPORTED_MODULE_37__["ProcedureResultDeleteDialogComponent"], _dialog_procedure_procedure_result_detail_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_38__["ProcedureResultPDFDetailPDFDialogComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_39__["ReportsComponent"],
                _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_40__["ForbiddenComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__["PdfViewerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_15__["WjGridFilterModule"], wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_16__["WjGridModule"], wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_17__["WjInputModule"]
            ],
            exports: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _modality_procedure_modality_procedure_component__WEBPACK_IMPORTED_MODULE_20__["ModalityProcedureComponent"], _dialog_modality_procedure_modality_procedure_detail_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ModalityProcedureDetailDialogComponent"], _dialog_modality_procedure_modality_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ModalityProcedureDeleteDialogComponent"],
                _body_parts_body_parts_component__WEBPACK_IMPORTED_MODULE_23__["BodyPartsComponent"], _dialog_body_parts_body_parts_detail_dialog_component__WEBPACK_IMPORTED_MODULE_24__["BodyPartsDetailDialogComponent"], _dialog_body_parts_body_parts_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["BodyPartsDeleteDialogComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_26__["UserComponent"], _user_user_detail_component__WEBPACK_IMPORTED_MODULE_27__["UserDetailComponent"], _dialog_user_user_doctor_detail_dialog_component__WEBPACK_IMPORTED_MODULE_28__["UserDoctorDetailDialogComponent"], _dialog_user_user_doctor_delete_dialog_component__WEBPACK_IMPORTED_MODULE_29__["UserDoctorDeleteDialogComponent"],
                _rate_rate_component__WEBPACK_IMPORTED_MODULE_30__["RateComponent"], _dialog_rate_rate_detail_dialog_component__WEBPACK_IMPORTED_MODULE_31__["RateDetailDialogComponent"], _dialog_rate_rate_delete_dialog_component__WEBPACK_IMPORTED_MODULE_32__["RateDeleteDialogComponent"],
                _procedure_procedure_component__WEBPACK_IMPORTED_MODULE_33__["ProcedureComponent"], _procedure_procedure_detail_component__WEBPACK_IMPORTED_MODULE_34__["ProcedureDetailComponent"], _dialog_procedure_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ProcedureDeleteDialogComponent"], _dialog_procedure_procedure_result_detail_dialog_component__WEBPACK_IMPORTED_MODULE_36__["ProcedureResultDetailDialogComponent"], _dialog_procedure_procedure_result_delete_dialog_component__WEBPACK_IMPORTED_MODULE_37__["ProcedureResultDeleteDialogComponent"], _dialog_procedure_procedure_result_detail_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_38__["ProcedureResultPDFDetailPDFDialogComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_39__["ReportsComponent"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                wijmo_wijmo_angular2_grid_filter__WEBPACK_IMPORTED_MODULE_15__["WjGridFilterModule"], wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_16__["WjGridModule"], wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_17__["WjInputModule"]
            ],
            providers: [
                _layout_layout_service__WEBPACK_IMPORTED_MODULE_41__["LayoutService"],
                _modality_procedure_modality_procedure_service__WEBPACK_IMPORTED_MODULE_42__["ModalityProcedureService"],
                _body_parts_body_parts_service__WEBPACK_IMPORTED_MODULE_43__["BodyPartsService"],
                _rate_rate_service__WEBPACK_IMPORTED_MODULE_44__["RateService"],
                _user_user_service__WEBPACK_IMPORTED_MODULE_45__["UserService"],
                _reports_reports_service__WEBPACK_IMPORTED_MODULE_46__["ReportService"],
                _procedure_procedure_service__WEBPACK_IMPORTED_MODULE_47__["ProcedureService"]
            ],
            entryComponents: [
                _dialog_facility_facility_dialog_component__WEBPACK_IMPORTED_MODULE_18__["FacilityDialogComponent"],
                _dialog_modality_procedure_modality_procedure_detail_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ModalityProcedureDetailDialogComponent"], _dialog_modality_procedure_modality_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ModalityProcedureDeleteDialogComponent"],
                _dialog_body_parts_body_parts_detail_dialog_component__WEBPACK_IMPORTED_MODULE_24__["BodyPartsDetailDialogComponent"], _dialog_body_parts_body_parts_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["BodyPartsDeleteDialogComponent"],
                _dialog_rate_rate_detail_dialog_component__WEBPACK_IMPORTED_MODULE_31__["RateDetailDialogComponent"], _dialog_rate_rate_delete_dialog_component__WEBPACK_IMPORTED_MODULE_32__["RateDeleteDialogComponent"],
                _dialog_user_user_doctor_detail_dialog_component__WEBPACK_IMPORTED_MODULE_28__["UserDoctorDetailDialogComponent"], _dialog_user_user_doctor_delete_dialog_component__WEBPACK_IMPORTED_MODULE_29__["UserDoctorDeleteDialogComponent"],
                _dialog_procedure_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_35__["ProcedureDeleteDialogComponent"], _dialog_procedure_procedure_result_detail_dialog_component__WEBPACK_IMPORTED_MODULE_36__["ProcedureResultDetailDialogComponent"], _dialog_procedure_procedure_result_delete_dialog_component__WEBPACK_IMPORTED_MODULE_37__["ProcedureResultDeleteDialogComponent"], _dialog_procedure_procedure_result_detail_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_38__["ProcedureResultPDFDetailPDFDialogComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.service.ts":
/*!******************************************!*\
  !*** ./src/app/layout/layout.service.ts ***!
  \******************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============



var LayoutService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function LayoutService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ================================
        // Token: Headers and Authorization
        // ================================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // ================
        // Async Properties 
        // ================
        this.facilitiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.facilitiesObservable = this.facilitiesSource.asObservable();
    }
    // =================
    // Get Facility List
    // =================
    LayoutService.prototype.getFacilities = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/facility/list";
        var facilitiesObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    facilitiesObservableArray.push({
                        Id: results[i].Id,
                        UserId: results[i].UserId,
                        UserFacility: results[i].UserFacility,
                        UserTypeId: results[i].UserTypeId
                    });
                }
                _this.facilitiesSource.next(facilitiesObservableArray);
            }
            else {
                _this.facilitiesSource.next(null);
            }
        }, function (error) {
            _this.facilitiesSource.next(null);
        });
    };
    LayoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/modality-procedure/modality-procedure.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modality-procedure/modality-procedure.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg-icon-style-side-menu {\r\n    height: 30px;\r\n    margin-bottom: 5px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/modality-procedure/modality-procedure.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modality-procedure/modality-procedure.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">\r\n        Modality Procedure\r\n    </li>\r\n</ol>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <table border=\"0\" style=\"width: 100%;\">\r\n            <tr>\r\n                <td style=\"width: 90%;\">\r\n                    <div class=\"input-group\">\r\n                        <button class=\"btn btn-info\" type=\"button\" [disabled]=\"isBtnRefreshModalityProcedureDataDisabled\" (click)=\"getModalityProcedureData()\">\r\n                            <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                        &nbsp; &nbsp;\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <b>Show</b>\r\n                            </div>\r\n                        </div>\r\n                        <wj-combo-box #cboNumberOfRows [itemsSource]=\"cboShowNumberOfRows\" [isEditable]=\"false\" [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\"\r\n                            [selectedValuePath]=\"'rowNumber'\" (selectedIndexChanged)=\"cboShowNumberOfRowsOnSelectedIndexChanged(cboNumberOfRows.selectedValue)\"\r\n                            style=\"width: 180px;\">\r\n                        </wj-combo-box>\r\n                    </div>\r\n                </td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"btnAddModalityProcedureClick()\">\r\n                        <i class=\"fa fa-plus\"></i> Add\r\n                    </button>\r\n                </td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"warn\" routerLink=\"/software/dashboard\">\r\n                        <i class=\"fa fa-close\"></i> Close\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <mat-progress-bar class=\"example-margin\" [hidden]=\"isProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n        <wj-flex-grid #modalityProcedureFlexGrid [itemsSource]=\"modalityProcedureCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"2\">\r\n            <wj-flex-grid-filter></wj-flex-grid-filter>\r\n            <wj-flex-grid-column [header]=\"Edit\" [isReadOnly]=\"true\" [isContentHtml]=\"true\" [width]=\"95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"primary\" class=\"btn-xs\" (click)=\"btnEditModalityProcedureClick()\">\r\n                        <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"Delete\" [isReadOnly]=\"true\" [width]=\"96\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"warn\" class=\"btn-xs\" (click)=\"btnDeleteModalityProcedureClick()\">\r\n                        <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Modality Procedure'\" [binding]=\"'ModalityProcedure'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Result Template'\" [binding]=\"'ModalityResultTemplate'\" [isReadOnly]=\"true\" [width]=\"'5*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Modality'\" [binding]=\"'Modality'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n        </wj-flex-grid>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalityProcedureCollectionView.moveToFirstPage()\">\r\n                <i class=\"fa fa-fast-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalityProcedureCollectionView.moveToPreviousPage()\">\r\n                <i class=\"fa fa-step-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                {{ modalityProcedureCollectionView.pageIndex + 1 }} / {{ modalityProcedureCollectionView.pageCount }}\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalityProcedureCollectionView.moveToNextPage()\">\r\n                <i class=\"fa fa-step-forward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modalityProcedureCollectionView.moveToLastPage()\">\r\n                <i class=\"fa fa-fast-forward\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modality-procedure/modality-procedure.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modality-procedure/modality-procedure.component.ts ***!
  \********************************************************************/
/*! exports provided: ModalityProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalityProcedureComponent", function() { return ModalityProcedureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _dialog_modality_procedure_modality_procedure_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/modality-procedure/modality-procedure-detail.dialog.component */ "./src/app/dialog/modality-procedure/modality-procedure-detail.dialog.component.ts");
/* harmony import */ var _dialog_modality_procedure_modality_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/modality-procedure/modality-procedure-delete.dialog.component */ "./src/app/dialog/modality-procedure/modality-procedure-delete.dialog.component.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modality_procedure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modality-procedure.service */ "./src/app/modality-procedure/modality-procedure.service.ts");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====================
// Angular and Material
// ====================



// ======
// Toastr
// ======

// =======
// Dialogs
// =======


// ====================
// Async Task and Wijmo
// ====================



var ModalityProcedureComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ModalityProcedureComponent(dialog, modalityProcedureService, router, toastr) {
        this.dialog = dialog;
        this.modalityProcedureService = modalityProcedureService;
        this.router = router;
        this.toastr = toastr;
        // ================
        // Global Variables
        // ================
        this.title = 'Modality Procedure';
        this.isProgressBarHidden = false;
        this.modalityProcedureData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        this.modalityProcedureCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](this.modalityProcedureData);
        this.isBtnRefreshModalityProcedureDataDisabled = true;
        this.cboShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        // ================
        // Initialize Model
        // ================
        this.modalityProcedureModel = {
            Id: 0,
            ModalityId: 0,
            Modality: "",
            ModalityProcedure: "",
            ModalityResultTemplate: "",
            DoctorId: null
        };
    }
    // ================================
    // Create Combo Show Number of Rows
    // ================================
    ModalityProcedureComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "Show 15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "Show 50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "Show 100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "Show 150 Rows";
            }
            else {
                rows = 200;
                rowsString = "Show 200 Rows";
            }
            this.cboShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    // ===================================================
    // Combo Show Number of Rows On Selected Index Changed
    // ===================================================
    ModalityProcedureComponent.prototype.cboShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.modalityProcedureNumberOfPageIndex = selectedValue;
        this.modalityProcedureCollectionView.pageSize = this.modalityProcedureNumberOfPageIndex;
        this.modalityProcedureCollectionView.refresh();
        this.modalityProcedureFlexGrid.refresh();
    };
    // ===========================
    // Get Modality Procedure Data
    // ===========================
    ModalityProcedureComponent.prototype.getModalityProcedureData = function () {
        var _this = this;
        this.modalityProcedureData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        this.modalityProcedureCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](this.modalityProcedureData);
        this.modalityProcedureCollectionView.pageSize = 15;
        this.modalityProcedureCollectionView.trackChanges = true;
        this.isProgressBarHidden = false;
        this.isBtnRefreshModalityProcedureDataDisabled = true;
        this.modalityProcedureService.getModalityProcedure();
        this.modalityProcedureSubscription = this.modalityProcedureService.modalityProcedureObservable.subscribe(function (data) {
            if (data != null) {
                _this.modalityProcedureData = data;
                _this.modalityProcedureCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](_this.modalityProcedureData);
                _this.modalityProcedureCollectionView.pageSize = _this.modalityProcedureNumberOfPageIndex;
                _this.modalityProcedureCollectionView.trackChanges = true;
            }
            _this.isProgressBarHidden = true;
            _this.isBtnRefreshModalityProcedureDataDisabled = false;
        });
    };
    // ======================
    // Add Modality Procedure
    // ======================
    ModalityProcedureComponent.prototype.btnAddModalityProcedureClick = function () {
        var _this = this;
        this.modalityProcedureModel.Id = 0;
        this.modalityProcedureModel.ModalityId = 0;
        this.modalityProcedureModel.Modality = "";
        this.modalityProcedureModel.ModalityProcedure = "";
        this.modalityProcedureModel.ModalityResultTemplate = "";
        this.modalityProcedureModel.DoctorId = null;
        var detailModalityProcedureDialogRef = this.dialog.open(_dialog_modality_procedure_modality_procedure_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ModalityProcedureDetailDialogComponent"], {
            width: '800px',
            data: {
                objModalityDetailProcedureDialogTitle: "Add Modality Procedure",
                objCurrentModalityProcedure: this.modalityProcedureModel
            }
        });
        detailModalityProcedureDialogRef.disableClose = true;
        detailModalityProcedureDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Save Successful!');
                _this.getModalityProcedureData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // =======================
    // Edit Modality Procedure
    // =======================
    ModalityProcedureComponent.prototype.btnEditModalityProcedureClick = function () {
        var _this = this;
        var currentModalityProcedure = this.modalityProcedureCollectionView.currentItem;
        this.modalityProcedureModel.Id = currentModalityProcedure.Id;
        this.modalityProcedureModel.ModalityId = currentModalityProcedure.ModalityId;
        this.modalityProcedureModel.Modality = currentModalityProcedure.Modality;
        this.modalityProcedureModel.ModalityProcedure = currentModalityProcedure.ModalityProcedure;
        this.modalityProcedureModel.ModalityResultTemplate = currentModalityProcedure.ModalityResultTemplate;
        this.modalityProcedureModel.DoctorId = currentModalityProcedure.DoctorId;
        var detailModalityProcedureDialogRef = this.dialog.open(_dialog_modality_procedure_modality_procedure_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ModalityProcedureDetailDialogComponent"], {
            width: '800px',
            data: {
                objModalityDetailProcedureDialogTitle: "Edit Modality Procedure",
                objCurrentModalityProcedure: this.modalityProcedureModel
            }
        });
        detailModalityProcedureDialogRef.disableClose = true;
        detailModalityProcedureDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Update Successful!');
                _this.getModalityProcedureData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // =========================
    // Delete Modality Procedure
    // =========================
    ModalityProcedureComponent.prototype.btnDeleteModalityProcedureClick = function () {
        var _this = this;
        var currentModalityProcedure = this.modalityProcedureCollectionView.currentItem;
        this.modalityProcedureModel.Id = currentModalityProcedure.Id;
        var deleteModalityProcedureDialogRef = this.dialog.open(_dialog_modality_procedure_modality_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ModalityProcedureDeleteDialogComponent"], {
            width: '400px',
            data: {
                objModalityProcedureDeleteDialogTitle: "Delete Modality Procedure",
                objCurrentModalityProcedure: this.modalityProcedureModel
            }
        });
        deleteModalityProcedureDialogRef.disableClose = true;
        deleteModalityProcedureDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Delete Successful!');
                _this.getModalityProcedureData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ============
    // On Load Page
    // ============
    ModalityProcedureComponent.prototype.ngOnInit = function () {
        this.createCboShowNumberOfRows();
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.getModalityProcedureData();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    ModalityProcedureComponent.prototype.ngOnDestroy = function () {
        if (this.modalityProcedureSubscription != null)
            this.modalityProcedureSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalityProcedureFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__["WjFlexGrid"])
    ], ModalityProcedureComponent.prototype, "modalityProcedureFlexGrid", void 0);
    ModalityProcedureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modality-procedure',
            template: __webpack_require__(/*! ./modality-procedure.component.html */ "./src/app/modality-procedure/modality-procedure.component.html"),
            styles: [__webpack_require__(/*! ./modality-procedure.component.css */ "./src/app/modality-procedure/modality-procedure.component.css"), __webpack_require__(/*! ../layout/layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _modality_procedure_service__WEBPACK_IMPORTED_MODULE_7__["ModalityProcedureService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ModalityProcedureComponent);
    return ModalityProcedureComponent;
}());



/***/ }),

/***/ "./src/app/modality-procedure/modality-procedure.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modality-procedure/modality-procedure.service.ts ***!
  \******************************************************************/
/*! exports provided: ModalityProcedureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalityProcedureService", function() { return ModalityProcedureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============



var ModalityProcedureService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ModalityProcedureService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ================================
        // Token: Headers and Authorization
        // ================================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // ================
        // Async Properties 
        // ================
        this.modalityProcedureSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.modalityProcedureObservable = this.modalityProcedureSource.asObservable();
        this.modalitySource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.modalityObservable = this.modalitySource.asObservable();
        this.modalityProcedureSavedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.modalityProcedureSavedObservable = this.modalityProcedureSavedSource.asObservable();
        this.modalityProcedureDeletedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.modalityProcedureDeletedObservable = this.modalityProcedureDeletedSource.asObservable();
    }
    // ======================
    // Get Modality Procedure
    // ======================
    ModalityProcedureService.prototype.getModalityProcedure = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/modalityProcedure/list";
        var modalityProcedureObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    modalityProcedureObservableArray.push({
                        Id: results[i].Id,
                        ModalityId: results[i].ModalityId,
                        Modality: results[i].Modality,
                        ModalityProcedure: results[i].ModalityProcedure,
                        ModalityResultTemplate: results[i].ModalityResultTemplate,
                        DoctorId: results[i].DoctorId == null ? null : results[i].DoctorId
                    });
                }
                _this.modalityProcedureSource.next(modalityProcedureObservableArray);
            }
            else {
                _this.modalityProcedureSource.next(null);
            }
        }, function (error) {
            _this.modalityProcedureSource.next(null);
        });
    };
    // ============
    // Get Modality
    // ============
    ModalityProcedureService.prototype.getModality = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/modality/list";
        var modalityObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    modalityObservableArray.push({
                        Id: results[i].Id,
                        Modality: results[i].Modality
                    });
                }
                _this.modalitySource.next(modalityObservableArray);
            }
        }, function (error) {
            _this.modalitySource.next(null);
        });
    };
    // =======================
    // Save Modality Procedure
    // =======================
    ModalityProcedureService.prototype.saveModalityProcedure = function (modalityProcedureModel) {
        var _this = this;
        if (modalityProcedureModel.Id == 0) {
            var url = this.defaultAPIHostURL + "/api/modalityProcedure/add";
            this.http.post(url, JSON.stringify(modalityProcedureModel), this.options).subscribe(function (response) {
                _this.modalityProcedureSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.modalityProcedureSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.modalityProcedureSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.modalityProcedureSavedSource.next(500);
                }
            });
        }
        else {
            var id = modalityProcedureModel.Id;
            var url = this.defaultAPIHostURL + "/api/modalityProcedure/update/" + id;
            this.http.put(url, JSON.stringify(modalityProcedureModel), this.options).subscribe(function (response) {
                _this.modalityProcedureSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.modalityProcedureSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.modalityProcedureSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.modalityProcedureSavedSource.next(500);
                }
            });
        }
    };
    // =========================
    // Delete Modality Procedure
    // =========================
    ModalityProcedureService.prototype.deleteModalityProcedure = function (id) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/modalityProcedure/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.modalityProcedureDeletedSource.next(200);
        }, function (error) {
            if (error.status == 404) {
                _this.modalityProcedureDeletedSource.next(404);
            }
            else if (error.status == 400) {
                _this.modalityProcedureDeletedSource.next(400);
            }
            else if (error.status == 500) {
                _this.modalityProcedureDeletedSource.next(500);
            }
        });
    };
    ModalityProcedureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], ModalityProcedureService);
    return ModalityProcedureService;
}());



/***/ }),

/***/ "./src/app/procedure/procedure-detail.component.html":
/*!***********************************************************!*\
  !*** ./src/app/procedure/procedure-detail.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/procedure\">Procedure</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">\r\n        Procedure Detail\r\n    </li>\r\n</ol>\r\n<mat-tab-group (selectedTabChange)=\"onTabClick($event)\">\r\n    <mat-tab label=\"General Information\">\r\n        <br />\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <table border=\"0\" style=\"width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"width: 90%;\"></td>\r\n                        <td style=\"width: 5%;\" align=\"right\">\r\n                            <button mat-raised-button color=\"primary\" id=\"btnViewProcedure\" (click)=\"btnDownloadJSONProcedureClick()\">\r\n                                <i class=\"fa fa-eye\"></i> View\r\n                            </button>\r\n                        </td>\r\n                        <td style=\"width: 5%;\" align=\"right\">\r\n                            <button mat-raised-button color=\"warn\" id=\"btnCloseProcedure\" routerLink=\"/software/procedure\">\r\n                                <i class=\"fa fa-close\"></i> Close\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Transaction No.</mat-label>\r\n                            <input [(ngModel)]=\"procedureModel.TransactionNumber\" matInput disabled />\r\n                        </mat-form-field>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Date</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.TransactionDateTime\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Time</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.TransactionTime\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Patient</mat-label>\r\n                            <input [(ngModel)]=\"procedureModel.PatientName\" matInput disabled />\r\n                        </mat-form-field>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Gender</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.Gender\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Age</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.Age\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Date of Birth</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.DateOfBirth\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Modality</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.Modality\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Body Part</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.BodyPart\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Particulars</mat-label>\r\n                            <textarea rows=\"10\" [(ngModel)]=\"procedureModel.Particulars\" matInput disabled></textarea>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br />\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <table border=\"0\" style=\"width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"width: 95%;\"></td>\r\n                        <td style=\"width: 5%;\" align=\"right\">\r\n                            <button mat-raised-button color=\"primary\" (click)=\"btnAddProcedureResultClick()\" [disabled]=\"isBtnAddProcedureResultDisabled\">\r\n                                <i class=\"fa fa-plus\"></i> Add\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <mat-progress-bar class=\"example-margin\" [hidden]=\"isProcedureResultProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n                <wj-flex-grid #procedureResultFlexGrid [itemsSource]=\"procedureResultCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"3\">\r\n                    <wj-flex-grid-filter></wj-flex-grid-filter>\r\n                    <wj-flex-grid-column [header]=\"Edit\" [isReadOnly]=\"true\" [isContentHtml]=\"true\" [width]=\"95\">\r\n                        <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                            <button mat-raised-button color=\"primary\" class=\"btn-xs\" (click)=\"btnEditProcedureResultClick()\" [disabled]=\"isBtnEditProcedureResultDisabled\">\r\n                                <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                            </button>\r\n                        </ng-template>\r\n                    </wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"Print\" [isReadOnly]=\"true\" [isContentHtml]=\"true\" [width]=\"95\">\r\n                        <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                            <button mat-raised-button color=\"primary\" class=\"btn-xs\" (click)=\"btnPrintProcedureResultClick()\">\r\n                                <i class=\"fa fa-print fa-fw\"></i> Print\r\n                            </button>\r\n                        </ng-template>\r\n                    </wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"Delete\" [isReadOnly]=\"true\" [width]=\"96\">\r\n                        <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                            <button mat-raised-button color=\"warn\" class=\"btn-xs\" (click)=\"btnDeleteProcedureResultClick()\" [disabled]=\"isBtnDeleteProcedureResultDisabled\">\r\n                                <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                            </button>\r\n                        </ng-template>\r\n                    </wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Procedure'\" [binding]=\"'ModalityProcedure'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Result'\" [binding]=\"'Result'\" [isReadOnly]=\"true\" [width]=\"'3*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Doctor'\" [binding]=\"'Doctor'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Date'\" [binding]=\"'DoctorDateTime'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Time'\" [binding]=\"'DoctorTime'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                </wj-flex-grid>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureResultCollectionView.moveToFirstPage()\">\r\n                        <i class=\"fa fa-fast-backward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureResultCollectionView.moveToPreviousPage()\">\r\n                        <i class=\"fa fa-step-backward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                        {{ procedureResultCollectionView.pageIndex + 1 }} / {{ procedureResultCollectionView.pageCount }}\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureResultCollectionView.moveToNextPage()\">\r\n                        <i class=\"fa fa-step-forward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureResultCollectionView.moveToLastPage()\">\r\n                        <i class=\"fa fa-fast-forward\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"History\">\r\n        <br />\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <table border=\"0\" style=\"width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"width: 90%;\"></td>\r\n                        <td style=\"width: 5%;\" align=\"right\">\r\n                            <button mat-raised-button color=\"primary\" (click)=\"btnDownloadJSONProcedureComparativeClick()\">\r\n                                <i class=\"fa fa-eye\"></i> View All Images\r\n                            </button>\r\n                        </td>\r\n                        <td style=\"width: 5%;\" align=\"right\">\r\n                            <button mat-raised-button color=\"warn\" id=\"btnCloseProcedure\" routerLink=\"/software/procedure\">\r\n                                <i class=\"fa fa-close\"></i> Close\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <mat-progress-bar class=\"example-margin\" [hidden]=\"isProcedureComparativeProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n                <wj-flex-grid #procedureComparativeFlexGrid [itemsSource]=\"procedureComparativeCollectionView\" [selectionMode]=\"3\">\r\n                    <wj-flex-grid-filter></wj-flex-grid-filter>\r\n                    <wj-flex-grid-column [header]=\"'Tx No.'\" [binding]=\"'TransactionNumber'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Date'\" [binding]=\"'TransactionDateTime'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Time'\" [binding]=\"'TransactionTime'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Patient'\" [binding]=\"'PatientName'\" [isReadOnly]=\"true\" [width]=\"'3*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Gender'\" [binding]=\"'Gender'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Age'\" [binding]=\"'Age'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Modality'\" [binding]=\"'Modality'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Body Part'\" [binding]=\"'BodyPart'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Doctor'\" [binding]=\"'Doctor'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                </wj-flex-grid>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureComparativeCollectionView.moveToFirstPage()\">\r\n                        <i class=\"fa fa-fast-backward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureComparativeCollectionView.moveToPreviousPage()\">\r\n                        <i class=\"fa fa-step-backward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                        {{ procedureComparativeCollectionView.pageIndex + 1 }} / {{ procedureComparativeCollectionView.pageCount }}\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureComparativeCollectionView.moveToNextPage()\">\r\n                        <i class=\"fa fa-step-forward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureComparativeCollectionView.moveToLastPage()\">\r\n                        <i class=\"fa fa-fast-forward\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Others\">\r\n        <br />\r\n        <div class=\"card\" *ngIf=\"isOtherComponentShow\">\r\n            <div class=\"card-header\">\r\n                <table border=\"0\" style=\"width: 100%;\">\r\n                    <tr>\r\n                        <td style=\"width: 90%;\"></td>\r\n                        <td style=\"width: 5%;\" align=\"right\">\r\n                            <button mat-raised-button color=\"primary\" id=\"btnViewProcedure\" (click)=\"btnDownloadJSONProcedureClick()\">\r\n                                <i class=\"fa fa-eye\"></i> View\r\n                            </button>\r\n                        </td>\r\n                        <td style=\"width: 5%;\" align=\"right\">\r\n                            <button mat-raised-button color=\"warn\" id=\"btnCloseProcedure\" routerLink=\"/software/procedure\">\r\n                                <i class=\"fa fa-close\"></i> Close\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>Patient Address</mat-label>\r\n                            <input [(ngModel)]=\"procedureModel.PatientAddress\" matInput disabled />\r\n                        </mat-form-field>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Hospital Number</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.HospitalNumber\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Hospital Ward Number</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.HospitalWardNumber\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Referring Physician</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.ReferringPhysician\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                                    <mat-label>Study Date</mat-label>\r\n                                    <input [(ngModel)]=\"procedureModel.StudyDate\" matInput disabled />\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                            <mat-label>DICOM File</mat-label>\r\n                            <textarea rows=\"10\" [(ngModel)]=\"procedureModel.DICOMFileName\" matInput disabled></textarea>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/procedure/procedure-detail.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/procedure/procedure-detail.component.ts ***!
  \*********************************************************/
/*! exports provided: ProcedureDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureDetailComponent", function() { return ProcedureDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _procedure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./procedure.service */ "./src/app/procedure/procedure.service.ts");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dialog_procedure_procedure_result_detail_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog/procedure/procedure-result-detail.dialog.component */ "./src/app/dialog/procedure/procedure-result-detail.dialog.component.ts");
/* harmony import */ var _dialog_procedure_procedure_result_delete_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog/procedure/procedure-result-delete.dialog.component */ "./src/app/dialog/procedure/procedure-result-delete.dialog.component.ts");
/* harmony import */ var _dialog_procedure_procedure_result_detail_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dialog/procedure/procedure-result-detail-pdf.dialog.component */ "./src/app/dialog/procedure/procedure-result-detail-pdf.dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====================
// Angular and Material
// ====================




// ======
// Toastr
// ======

// =======
// Service
// =======


// ====================
// Async Task and Wijmo
// ====================


// =======
// Dialogs
// =======



var ProcedureDetailComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ProcedureDetailComponent(dialog, procedureService, userService, toastr, router, activatedRoute, sanitizer) {
        this.dialog = dialog;
        this.procedureService = procedureService;
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.title = 'procedure detail';
        this.isProcedureResultProgressBarHidden = false;
        this.isProcedureComparativeProgressBarHidden = false;
        this.isBtnAddProcedureResultDisabled = false;
        this.isBtnEditProcedureResultDisabled = false;
        this.isBtnDeleteProcedureResultDisabled = false;
        this.isOtherComponentShow = false;
        this.procedureResultData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["ObservableArray"]();
        this.procedureResultCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["CollectionView"](this.procedureResultData);
        this.procedureComparativeData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["ObservableArray"]();
        this.procedureComparativeCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["CollectionView"](this.procedureComparativeData);
        // ================
        // Initialize Model
        // ================
        this.procedureModel = {
            Id: 0,
            TransactionNumber: "",
            TransactionDateTime: "",
            TransactionTime: "",
            DICOMFileName: "",
            PatientName: "",
            Gender: "",
            DateOfBirth: "",
            Age: 0,
            Particulars: "",
            ModalityId: 0,
            Modality: "",
            BodyPartId: 0,
            BodyPart: "",
            UserId: 0,
            User: "",
            PatientAddress: "",
            ReferringPhysician: "",
            StudyDate: "",
            HospitalNumber: "",
            HospitalWardNumber: "",
            StudyInstanceId: ""
        };
        this.procedureResultModel = {
            Id: 0,
            ProcedureId: 0,
            ModalityProcedureId: 0,
            ModalityProcedure: "",
            Result: "",
            DoctorId: 0,
            Doctor: "",
            DoctorDateTime: ""
        };
    }
    // =======================
    // Get Parameter Id Method
    // =======================
    ProcedureDetailComponent.prototype.getId = function () {
        var id = 0;
        this.activatedRoute.params.subscribe(function (params) {
            id = params["id"];
        });
        return id;
    };
    // =========================
    // Get Procedure Detail Data
    // =========================
    ProcedureDetailComponent.prototype.getProcedureDetailData = function () {
        var _this = this;
        this.procedureService.getProcedureDetail(this.getId());
        this.procedureSubscription = this.procedureService.procedureDetailObservable
            .subscribe(function (data) {
            _this.procedureModel.Id = data.Id;
            _this.procedureModel.TransactionNumber = data.TransactionNumber;
            _this.procedureModel.TransactionDateTime = data.TransactionDateTime;
            _this.procedureModel.TransactionTime = data.TransactionTime;
            _this.procedureModel.DICOMFileName = data.DICOMFileName;
            _this.procedureModel.PatientName = data.PatientName;
            _this.procedureModel.Gender = data.Gender;
            _this.procedureModel.DateOfBirth = data.DateOfBirth;
            _this.procedureModel.Age = data.Age;
            _this.procedureModel.Particulars = data.Particulars;
            _this.procedureModel.ModalityId = data.ModalityId;
            _this.procedureModel.Modality = data.Modality;
            _this.procedureModel.BodyPartId = data.BodyPartId;
            _this.procedureModel.BodyPart = data.BodyPart;
            _this.procedureModel.User = data.User;
            _this.procedureModel.PatientAddress = data.PatientAddress;
            _this.procedureModel.ReferringPhysician = data.ReferringPhysician;
            _this.procedureModel.StudyDate = data.StudyDate;
            _this.procedureModel.HospitalNumber = data.HospitalNumber;
            _this.procedureModel.HospitalWardNumber = data.HospitalWardNumber;
            _this.procedureModel.StudyInstanceId = data.StudyInstanceId;
        });
    };
    // =========================
    // Download Procedure - JSON
    // =========================
    ProcedureDetailComponent.prototype.btnDownloadJSONProcedureClick = function () {
        var currentProcedure = [];
        currentProcedure.push({
            Id: this.procedureModel.Id,
            TransactionNumber: this.procedureModel.TransactionNumber,
            TransactionDateTime: this.procedureModel.TransactionDateTime,
            DICOMFileName: this.procedureModel.DICOMFileName,
            PatientName: this.procedureModel.PatientName,
            Gender: this.procedureModel.Gender,
            DateOfBirth: this.procedureModel.DateOfBirth,
            Age: this.procedureModel.Age,
            Particulars: this.procedureModel.Particulars,
            ModalityId: this.procedureModel.ModalityId,
            BodyPartId: this.procedureModel.BodyPartId,
            BodyPart: this.procedureModel.BodyPart,
            User: this.procedureModel.User,
            PatientAddress: this.procedureModel.PatientAddress,
            ReferringPhysician: this.procedureModel.ReferringPhysician,
            StudyDate: this.procedureModel.StudyDate,
            HospitalNumber: this.procedureModel.HospitalNumber,
            HospitalWardNumber: this.procedureModel.HospitalWardNumber,
            StudyInstanceId: this.procedureModel.StudyInstanceId
        });
        var jsonData = JSON.stringify(currentProcedure);
        var element = document.createElement('a');
        element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
        element.setAttribute('download', this.procedureModel.TransactionNumber + ".json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    // =========================
    // Get Procedure Result Data
    // =========================
    ProcedureDetailComponent.prototype.getProcedureResultData = function () {
        var _this = this;
        this.procedureResultData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["ObservableArray"]();
        this.procedureResultCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["CollectionView"](this.procedureResultData);
        this.procedureResultCollectionView.pageSize = 15;
        this.procedureResultCollectionView.trackChanges = true;
        this.isProcedureResultProgressBarHidden = false;
        this.procedureService.getProcedureResult(this.getId());
        this.procedureResultSubscription = this.procedureService.procedureResultObservable.subscribe(function (data) {
            if (data != null) {
                _this.procedureResultData = data;
                _this.procedureResultCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["CollectionView"](_this.procedureResultData);
                _this.procedureResultCollectionView.pageSize = 15;
                _this.procedureResultCollectionView.trackChanges = true;
                _this.userService.getCurrentUser();
                _this.procedureCurrentUserSubscription = _this.userService.userCurrentObservable.subscribe(function (data) {
                    if (data != null) {
                        if (data.Id != _this.procedureResultCollectionView.items[0].DoctorId) {
                            _this.isBtnAddProcedureResultDisabled = true;
                            _this.isBtnEditProcedureResultDisabled = true;
                            _this.isBtnDeleteProcedureResultDisabled = true;
                        }
                    }
                });
            }
            _this.isProcedureResultProgressBarHidden = true;
        });
    };
    // ====================
    // Add Procedure Result
    // ====================
    ProcedureDetailComponent.prototype.btnAddProcedureResultClick = function () {
        var _this = this;
        this.procedureResultModel.Id = 0;
        this.procedureResultModel.ProcedureId = this.getId();
        this.procedureResultModel.ModalityProcedureId = 0;
        this.procedureResultModel.Result = "";
        this.procedureResultModel.DoctorId = 0;
        this.procedureResultModel.Doctor = "";
        var detailProcedureResultDialogRef = this.dialog.open(_dialog_procedure_procedure_result_detail_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProcedureResultDetailDialogComponent"], {
            width: '800px',
            data: {
                objProcedureResultDetailDialogTitle: "Add Procedure Result",
                objCurrentProcedureResult: this.procedureResultModel
            }
        });
        detailProcedureResultDialogRef.disableClose = true;
        detailProcedureResultDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Save Successful!');
                _this.getProcedureResultData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // =====================
    // Edit Procedure Result
    // =====================
    ProcedureDetailComponent.prototype.btnEditProcedureResultClick = function () {
        var _this = this;
        var currentProcedureResult = this.procedureResultCollectionView.currentItem;
        this.procedureResultModel.Id = currentProcedureResult.Id;
        this.procedureResultModel.ProcedureId = this.getId();
        this.procedureResultModel.ModalityProcedureId = currentProcedureResult.ModalityProcedureId;
        this.procedureResultModel.Result = currentProcedureResult.Result;
        this.procedureResultModel.DoctorId = currentProcedureResult.DoctorId;
        this.procedureResultModel.Doctor = currentProcedureResult.Doctor;
        var detailProcedureResultDialogRef = this.dialog.open(_dialog_procedure_procedure_result_detail_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProcedureResultDetailDialogComponent"], {
            width: '800px',
            data: {
                objProcedureResultDetailDialogTitle: "Edit Procedure Result",
                objCurrentProcedureResult: this.procedureResultModel
            }
        });
        detailProcedureResultDialogRef.disableClose = true;
        detailProcedureResultDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Update Successful!');
                _this.getProcedureResultData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ======================
    // Print Procedure Result
    // ======================
    ProcedureDetailComponent.prototype.btnPrintProcedureResultClick = function () {
        var currentProcedureResult = this.procedureResultCollectionView.currentItem;
        this.procedureResultModel.Id = currentProcedureResult.Id;
        var printProcedureResultDialogRef = this.dialog.open(_dialog_procedure_procedure_result_detail_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ProcedureResultPDFDetailPDFDialogComponent"], {
            width: '1100px',
            data: {
                objProcedureResultDetailPDFDialogTitle: "Print Result",
                id: this.procedureResultModel.Id
            }
        });
        printProcedureResultDialogRef.disableClose = true;
        printProcedureResultDialogRef.afterClosed().subscribe(function (result) {
        });
    };
    // =======================
    // Delete Procedure Result
    // =======================
    ProcedureDetailComponent.prototype.btnDeleteProcedureResultClick = function () {
        var _this = this;
        var currentProcedureResult = this.procedureResultCollectionView.currentItem;
        this.procedureResultModel.Id = currentProcedureResult.Id;
        var deleteProcedureResultDialogRef = this.dialog.open(_dialog_procedure_procedure_result_delete_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ProcedureResultDeleteDialogComponent"], {
            width: '400px',
            data: {
                objProcedureResultDeleteDialogTitle: "Delete Procedure Result",
                objCurrentProcedureResult: this.procedureResultModel
            }
        });
        deleteProcedureResultDialogRef.disableClose = true;
        deleteProcedureResultDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Delete Successful!');
                _this.getProcedureResultData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ==============================
    // Get Procedure Comparative Data
    // ==============================
    ProcedureDetailComponent.prototype.getProcedureComparativeData = function () {
        var _this = this;
        this.procedureComparativeData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["ObservableArray"]();
        this.procedureComparativeCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["CollectionView"](this.procedureComparativeData);
        this.procedureComparativeCollectionView.pageSize = 15;
        this.procedureComparativeCollectionView.trackChanges = true;
        this.isProcedureComparativeProgressBarHidden = false;
        this.procedureService.getProcedureComparative(this.getId());
        this.procedureComparativeSubscription = this.procedureService.procedureComparativeObservable.subscribe(function (data) {
            if (data != null) {
                _this.procedureComparativeData = data;
                _this.procedureComparativeCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_7__["CollectionView"](_this.procedureComparativeData);
                _this.procedureComparativeCollectionView.pageSize = 15;
                _this.procedureComparativeCollectionView.trackChanges = true;
            }
            _this.isProcedureComparativeProgressBarHidden = true;
        });
    };
    // =====================================
    // Download Procedure Comparative - JSON
    // =====================================
    ProcedureDetailComponent.prototype.btnDownloadJSONProcedureComparativeClick = function () {
        var procedureComparative = [];
        for (var i = 0; i < this.procedureComparativeCollectionView.items.length; i++) {
            procedureComparative.push({
                Id: this.procedureComparativeCollectionView.items[i].Id,
                TransactionNumber: this.procedureComparativeCollectionView.items[i].TransactionNumber,
                TransactionDateTime: this.procedureComparativeCollectionView.items[i].TransactionDateTime,
                TransactionTime: this.procedureComparativeCollectionView.items[i].TransactionTime,
                DICOMFileName: this.procedureComparativeCollectionView.items[i].DICOMFileName,
                PatientName: this.procedureComparativeCollectionView.items[i].PatientName,
                Gender: this.procedureComparativeCollectionView.items[i].Gender,
                DateOfBirth: this.procedureComparativeCollectionView.items[i].DateOfBirth,
                Age: this.procedureComparativeCollectionView.items[i].Age,
                Particulars: this.procedureComparativeCollectionView.items[i].Particulars,
                ModalityId: this.procedureComparativeCollectionView.items[i].ModalityId,
                Modality: this.procedureComparativeCollectionView.items[i].Modality,
                BodyPartId: this.procedureComparativeCollectionView.items[i].BodyPartId,
                BodyPart: this.procedureComparativeCollectionView.items[i].BodyPart,
                UserId: this.procedureComparativeCollectionView.items[i].UserId,
                User: this.procedureComparativeCollectionView.items[i].User,
                PatientAddress: this.procedureComparativeCollectionView.items[i].PatientAddress,
                ReferringPhysician: this.procedureComparativeCollectionView.items[i].ReferringPhysician,
                StudyDate: this.procedureComparativeCollectionView.items[i].StudyDate,
                HospitalNumber: this.procedureComparativeCollectionView.items[i].HospitalNumber,
                HospitalWardNumber: this.procedureComparativeCollectionView.items[i].HospitalWardNumber,
                StudyInstanceId: this.procedureComparativeCollectionView.items[i].StudyInstanceId,
                Doctor: this.procedureComparativeCollectionView.items[i].Doctor
            });
        }
        var jsonData = JSON.stringify(procedureComparative);
        var element = document.createElement('a');
        element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
        element.setAttribute('download', this.procedureModel.TransactionNumber + ".json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    // =============
    // On Click Tabs
    // =============
    ProcedureDetailComponent.prototype.onTabClick = function (event) {
        if (event.index == 0) {
            this.procedureResultCollectionView.refresh();
            this.procedureResultFlexGrid.refresh();
        }
        else if (event.index == 1) {
            this.procedureComparativeCollectionView.refresh();
            this.procedureComparativeFlexGrid.refresh();
        }
        else if (event.index == 2) {
            this.isOtherComponentShow = true;
        }
    };
    // ============
    // On Load Page
    // ============
    ProcedureDetailComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.getProcedureDetailData();
            this.getProcedureResultData();
            this.getProcedureComparativeData();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    ProcedureDetailComponent.prototype.ngOnDestroy = function () {
        if (this.procedureSubscription != null)
            this.procedureSubscription.unsubscribe();
        if (this.procedureResultSubscription != null)
            this.procedureResultSubscription.unsubscribe();
        if (this.procedureComparativeSubscription != null)
            this.procedureComparativeSubscription.unsubscribe();
        if (this.procedureCurrentUserSubscription != null)
            this.procedureCurrentUserSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('procedureResultFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__["WjFlexGrid"])
    ], ProcedureDetailComponent.prototype, "procedureResultFlexGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('procedureComparativeFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__["WjFlexGrid"])
    ], ProcedureDetailComponent.prototype, "procedureComparativeFlexGrid", void 0);
    ProcedureDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-procedure-detail',
            template: __webpack_require__(/*! ./procedure-detail.component.html */ "./src/app/procedure/procedure-detail.component.html"),
            styles: [__webpack_require__(/*! ./procedure.component.css */ "./src/app/procedure/procedure.component.css"), __webpack_require__(/*! ../layout/layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _procedure_service__WEBPACK_IMPORTED_MODULE_5__["ProcedureService"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ProcedureDetailComponent);
    return ProcedureDetailComponent;
}());



/***/ }),

/***/ "./src/app/procedure/procedure.component.css":
/*!***************************************************!*\
  !*** ./src/app/procedure/procedure.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/procedure/procedure.component.html":
/*!****************************************************!*\
  !*** ./src/app/procedure/procedure.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">\r\n        Procedure\r\n    </li>\r\n</ol>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <table border=\"0\" style=\"width: 100%; border: none;\">\r\n            <tr>\r\n                <td style=\"width: 3%;\">\r\n                    <button class=\"btn btn-info\" type=\"button\" [disabled]=\"isBtnRefreshProcedureDataDisabled\" (click)=\"getProcedureData()\">\r\n                        <i class=\"fa fa-refresh\"></i>\r\n                    </button>\r\n                </td>\r\n                <td style=\"width: 18%;\">\r\n                    <div class=\"input-group\">\r\n                        &nbsp;\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <b>Start</b>\r\n                            </div>\r\n                        </div>\r\n                        <wj-input-date #procedureStartDate [(ngModel)]=\"procedureStartDateData\" [ngModelOptions]=\"{standalone: true}\" (textChanged)=\"startDateTextChanged()\"\r\n                            format=\"MM-dd-yyyy\" class=\"form-control\">\r\n                        </wj-input-date>\r\n                    </div>\r\n                </td>\r\n                <td style=\"width: 18%;\">\r\n                    <div class=\"input-group\">\r\n                        &nbsp;\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <b>End</b>\r\n                            </div>\r\n                        </div>\r\n                        <wj-input-date #procedureEndDate [(ngModel)]=\"procedureEndDateData\" [ngModelOptions]=\"{standalone: true}\" (textChanged)=\"endDateTextChanged()\"\r\n                            format=\"MM-dd-yyyy\" class=\"form-control\">\r\n                        </wj-input-date>\r\n                    </div>\r\n                </td>\r\n                <td style=\"width: 23%;\">\r\n                    <div class=\"input-group\">\r\n                        &nbsp;\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <b>Facility</b>\r\n                            </div>\r\n                        </div>\r\n                        <wj-combo-box #cboFacility [itemsSource]=\"cboFacilityObservableArray\" [isEditable]=\"false\" [isRequired]=\"true\" [displayMemberPath]=\"'UserFacility'\"\r\n                            [selectedValuePath]=\"'UserId'\" [selectedValue]=\"currentfacilityId\" (selectedIndexChanged)=\"cboFacilitySelectedIndexChanged()\"\r\n                            class=\"form-control\">\r\n                        </wj-combo-box>\r\n                    </div>\r\n                </td>\r\n                <td style=\"width: 18%;\">\r\n                    <div class=\"input-group\">\r\n                        &nbsp;\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <b>Show</b>\r\n                            </div>\r\n                        </div>\r\n                        <wj-combo-box #cboProcedureNumberOfRows [itemsSource]=\"cboProcedureShowNumberOfRows\" [isEditable]=\"false\" [isRequired]=\"true\"\r\n                            [displayMemberPath]=\"'rowString'\" [selectedValuePath]=\"'rowNumber'\" (selectedIndexChanged)=\"cboShowNumberOfRowsOnSelectedIndexChanged(cboProcedureNumberOfRows.selectedValue)\"\r\n                            class=\"form-control\">\r\n                        </wj-combo-box>\r\n                    </div>\r\n                </td>\r\n                <td style=\"width: 20%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"warn\" routerLink=\"/software/dashboard\">\r\n                        <i class=\"fa fa-close\"></i> Close\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <mat-progress-bar class=\"example-margin\" [hidden]=\"isProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n        <wj-flex-grid #procedureFlexGrid [itemsSource]=\"procedureCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"2\">\r\n            <wj-flex-grid-filter></wj-flex-grid-filter>\r\n            <wj-flex-grid-column [header]=\"Edit\" [isReadOnly]=\"true\" [isContentHtml]=\"true\" [width]=\"95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"primary\" class=\"btn-xs\" (click)=\"btnEditProcedureClick()\">\r\n                        <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"Delete\" [isReadOnly]=\"true\" [width]=\"96\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"warn\" class=\"btn-xs\" (click)=\"btnDeleteProcedureClick()\">\r\n                        <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Tx No.'\" [binding]=\"'TransactionNumber'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Date'\" [binding]=\"'TransactionDateTime'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Time'\" [binding]=\"'TransactionTime'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Patient'\" [binding]=\"'PatientName'\" [isReadOnly]=\"true\" [width]=\"'3*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Gender'\" [binding]=\"'Gender'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Age'\" [binding]=\"'Age'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Modality'\" [binding]=\"'Modality'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Body Part'\" [binding]=\"'BodyPart'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Doctor'\" [binding]=\"'Doctor'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n        </wj-flex-grid>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureCollectionView.moveToFirstPage()\">\r\n                <i class=\"fa fa-fast-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureCollectionView.moveToPreviousPage()\">\r\n                <i class=\"fa fa-step-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                {{ procedureCollectionView.pageIndex + 1 }} / {{ procedureCollectionView.pageCount }}\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureCollectionView.moveToNextPage()\">\r\n                <i class=\"fa fa-step-forward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureCollectionView.moveToLastPage()\">\r\n                <i class=\"fa fa-fast-forward\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/procedure/procedure.component.ts":
/*!**************************************************!*\
  !*** ./src/app/procedure/procedure.component.ts ***!
  \**************************************************/
/*! exports provided: ProcedureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureComponent", function() { return ProcedureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_procedure_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog/procedure/procedure-delete.dialog.component */ "./src/app/dialog/procedure/procedure-delete.dialog.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _procedure_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./procedure.service */ "./src/app/procedure/procedure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====================
// Angular and Material
// ====================



// =======
// Dialogs
// =======

// ======
// Toastr
// ======

// ====================
// Async Task and Wijmo
// ====================




var ProcedureComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ProcedureComponent(dialog, procedureService, toastr, router) {
        this.dialog = dialog;
        this.procedureService = procedureService;
        this.toastr = toastr;
        this.router = router;
        // ================
        // Global Variables
        // ================
        this.title = 'procedure';
        this.isProgressBarHidden = false;
        this.procedureData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        this.procedureCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["CollectionView"](this.procedureData);
        this.cboFacilityObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        // ===========================
        // Date Range Filters (Values)
        // ===========================
        this.procedureStartDateData = new Date();
        this.procedureEndDateData = new Date();
        this.cboProcedureShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        this.isStartDateClicked = false;
        this.isStartDateSelected = false;
        this.isEndDateClicked = false;
        this.isEndDateSelected = false;
        this.isBtnRefreshProcedureDataDisabled = true;
        // ================
        // Initialize Model
        // ================
        this.procedureModel = {
            Id: 0,
            TransactionNumber: "",
            TransactionDateTime: "",
            TransactionTime: "",
            DICOMFileName: "",
            PatientName: "",
            Gender: "",
            DateOfBirth: "",
            Age: 0,
            Particulars: "",
            ModalityId: 0,
            Modality: "",
            BodyPartId: 0,
            BodyPart: "",
            UserId: 0,
            User: "",
            PatientAddress: "",
            ReferringPhysician: "",
            StudyDate: "",
            HospitalNumber: "",
            HospitalWardNumber: "",
            StudyInstanceId: ""
        };
    }
    // ================================
    // Create Combo Show Number of Rows
    // ================================
    ProcedureComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "Show 15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "Show 50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "Show 100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "Show 150 Rows";
            }
            else {
                rows = 200;
                rowsString = "Show 200 Rows";
            }
            this.cboProcedureShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    // ===================================================
    // Combo Show Number of Rows On Selected Index Changed
    // ===================================================
    ProcedureComponent.prototype.cboShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.procedureNumberOfPageIndex = selectedValue;
        this.procedureCollectionView.pageSize = this.procedureNumberOfPageIndex;
        this.procedureCollectionView.refresh();
        this.procedureFlexGrid.refresh();
    };
    // ========================
    // Text Change : Start Date
    // ========================
    ProcedureComponent.prototype.startDateTextChanged = function () {
        if (this.isStartDateClicked == true) {
            if (this.isStartDateSelected == true) {
                this.getProcedureData();
            }
            else {
                this.isStartDateSelected = true;
            }
        }
        else {
            this.isStartDateClicked = true;
        }
    };
    // ======================
    // Text Change : End Date
    // ======================
    ProcedureComponent.prototype.endDateTextChanged = function () {
        if (this.isEndDateClicked == true) {
            if (this.isEndDateSelected == true) {
                this.getProcedureData();
            }
            else {
                this.isEndDateSelected = true;
            }
        }
        else {
            this.isEndDateClicked = true;
        }
    };
    // =================
    // Get Facility Data
    // =================
    ProcedureComponent.prototype.getFacilityData = function () {
        var _this = this;
        this.procedureService.getFacilities();
        this.facilitySubscription = this.procedureService.facilitiesObservable.subscribe(function (data) {
            var facilityObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
            if (data != null) {
                for (var i = 0; i <= data.length - 1; i++) {
                    facilityObservableArray.push({
                        Id: data[i].Id,
                        UserId: data[i].UserId,
                        UserFacility: data[i].UserFacility
                    });
                }
            }
            _this.cboFacilityObservableArray = facilityObservableArray;
            _this.getProcedureData();
        });
    };
    // =========================================
    // Combo Box Facility Selected Index Changed
    // =========================================
    ProcedureComponent.prototype.cboFacilitySelectedIndexChanged = function () {
        if (this.cboFacility.selectedValue != null) {
            this.getProcedureData();
        }
    };
    // ==================
    // Get Procedure Data
    // ==================
    ProcedureComponent.prototype.getProcedureData = function () {
        var _this = this;
        this.procedureData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        this.procedureCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["CollectionView"](this.procedureData);
        this.procedureCollectionView.pageSize = 15;
        this.procedureCollectionView.trackChanges = true;
        this.isProgressBarHidden = false;
        this.isBtnRefreshProcedureDataDisabled = true;
        var dateStart = [this.procedureStartDateData.getFullYear(), this.procedureStartDateData.getMonth() + 1, this.procedureStartDateData.getDate()].join('-');
        var dateEnd = [this.procedureEndDateData.getFullYear(), this.procedureEndDateData.getMonth() + 1, this.procedureEndDateData.getDate()].join('-');
        var facilityId = parseInt(localStorage.getItem("current_facility_id"));
        if (this.cboFacility.selectedValue != null) {
            facilityId = this.cboFacility.selectedValue;
        }
        this.procedureService.getProcedure(dateStart, dateEnd, facilityId);
        this.procedureSubscription = this.procedureService.procedureObservable.subscribe(function (data) {
            if (data != null) {
                _this.procedureData = data;
                _this.procedureCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["CollectionView"](_this.procedureData);
                _this.procedureCollectionView.pageSize = _this.procedureNumberOfPageIndex;
                _this.procedureCollectionView.trackChanges = true;
            }
            _this.isProgressBarHidden = true;
            _this.isBtnRefreshProcedureDataDisabled = false;
        });
    };
    // ==============
    // Edit Procedure
    // ==============
    ProcedureComponent.prototype.btnEditProcedureClick = function () {
        var currentProcedure = this.procedureCollectionView.currentItem;
        this.router.navigate(['/software/procedure/detail', currentProcedure.Id]);
    };
    // ================
    // Delete Procedure
    // ================
    ProcedureComponent.prototype.btnDeleteProcedureClick = function () {
        var _this = this;
        var currentProcedure = this.procedureCollectionView.currentItem;
        this.procedureModel.Id = currentProcedure.Id;
        var deleteProcedureDialogRef = this.dialog.open(_dialog_procedure_procedure_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ProcedureDeleteDialogComponent"], {
            width: '400px',
            data: {
                objProcedureDeleteDialogTitle: "Delete Procedure",
                objCurrentProcedure: this.procedureModel
            }
        });
        deleteProcedureDialogRef.disableClose = true;
        deleteProcedureDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Delete Successful!');
                _this.getProcedureData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ============
    // On Load Page
    // ============
    ProcedureComponent.prototype.ngOnInit = function () {
        this.createCboShowNumberOfRows();
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.getFacilityData();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    ProcedureComponent.prototype.ngOnDestroy = function () {
        if (this.facilitySubscription != null)
            this.facilitySubscription.unsubscribe();
        if (this.procedureSubscription != null)
            this.procedureSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('procedureFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_6__["WjFlexGrid"])
    ], ProcedureComponent.prototype, "procedureFlexGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cboFacility'),
        __metadata("design:type", wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_7__["WjComboBox"])
    ], ProcedureComponent.prototype, "cboFacility", void 0);
    ProcedureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-procedure',
            template: __webpack_require__(/*! ./procedure.component.html */ "./src/app/procedure/procedure.component.html"),
            styles: [__webpack_require__(/*! ./procedure.component.css */ "./src/app/procedure/procedure.component.css"), __webpack_require__(/*! ../layout/layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _procedure_service__WEBPACK_IMPORTED_MODULE_8__["ProcedureService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProcedureComponent);
    return ProcedureComponent;
}());



/***/ }),

/***/ "./src/app/procedure/procedure.service.ts":
/*!************************************************!*\
  !*** ./src/app/procedure/procedure.service.ts ***!
  \************************************************/
/*! exports provided: ProcedureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureService", function() { return ProcedureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============



var ProcedureService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ProcedureService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ================================
        // Token: Headers and Authorization
        // ================================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // ================
        // Async Properties 
        // ================
        this.facilitiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.facilitiesObservable = this.facilitiesSource.asObservable();
        this.procedureSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureObservable = this.procedureSource.asObservable();
        this.procedureDetailSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureDetailObservable = this.procedureDetailSource.asObservable();
        this.procedureSavedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureSavedObservable = this.procedureSavedSource.asObservable();
        this.procedureDeletedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureDeletedObservable = this.procedureDeletedSource.asObservable();
        this.procedureResultSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureResultObservable = this.procedureResultSource.asObservable();
        this.procedureResultPDFSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureResultPDFObservable = this.procedureResultPDFSource.asObservable();
        this.modalityProcedureSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.modalityProcedureObservable = this.modalityProcedureSource.asObservable();
        this.doctorSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.doctorObservable = this.doctorSource.asObservable();
        this.procedureResultSavedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureResultSavedObservable = this.procedureResultSavedSource.asObservable();
        this.procedureResultDeletedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureResultDeletedObservable = this.procedureResultDeletedSource.asObservable();
        this.procedureComparativeSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureComparativeObservable = this.procedureComparativeSource.asObservable();
        // ================
        // Initialize Model
        // ================
        this.procedureResultModel = {
            Id: 0,
            ProcedureId: 0,
            ModalityProcedureId: 0,
            ModalityProcedure: "",
            Result: "",
            DoctorId: 0,
            Doctor: "",
            DoctorDateTime: ""
        };
    }
    // =================
    // Get Facility List
    // =================
    ProcedureService.prototype.getFacilities = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/facility/list";
        var facilitiesObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    facilitiesObservableArray.push({
                        Id: results[i].Id,
                        UserId: results[i].UserId,
                        UserFacility: results[i].UserFacility
                    });
                }
                _this.facilitiesSource.next(facilitiesObservableArray);
            }
            else {
                _this.facilitiesSource.next(null);
            }
        }, function (error) {
            _this.facilitiesSource.next(null);
        });
    };
    // =============
    // Get Procedure
    // =============
    ProcedureService.prototype.getProcedure = function (startDate, endDate, facilityId) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/procedure/list/byDateRange/" + startDate + "/" + endDate + "/" + facilityId;
        var procedureObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    procedureObservableArray.push({
                        Id: results[i].Id,
                        TransactionNumber: results[i].TransactionNumber,
                        TransactionDateTime: results[i].TransactionDateTime,
                        TransactionTime: results[i].TransactionTime,
                        PatientName: results[i].PatientName,
                        Gender: results[i].Gender,
                        Age: results[i].Age,
                        Modality: results[i].Modality,
                        BodyPart: results[i].BodyPart,
                        Doctor: results[i].Doctor
                    });
                }
                _this.procedureSource.next(procedureObservableArray);
            }
            else {
                _this.procedureSource.next(null);
            }
        }, function (error) {
            _this.procedureSource.next(null);
        });
    };
    // ====================
    // Get Procedure Detail
    // ====================
    ProcedureService.prototype.getProcedureDetail = function (id) {
        var _this = this;
        var procedureModel;
        var url = this.defaultAPIHostURL + "/api/procedure/detail/" + id;
        this.http.get(url, this.options).subscribe(function (response) {
            var result = response.json();
            if (result != null) {
                procedureModel = {
                    Id: result.Id,
                    TransactionNumber: result.TransactionNumber,
                    TransactionDateTime: result.TransactionDateTime,
                    TransactionTime: result.TransactionTime,
                    DICOMFileName: result.DICOMFileName,
                    PatientName: result.PatientName,
                    Gender: result.Gender,
                    DateOfBirth: result.DateOfBirth,
                    Age: result.Age,
                    Particulars: result.Particulars,
                    ModalityId: result.ModalityId,
                    Modality: result.Modality,
                    BodyPartId: result.BodyPartId,
                    BodyPart: result.BodyPart,
                    UserId: result.UserId,
                    User: result.User,
                    PatientAddress: result.PatientAddress,
                    ReferringPhysician: result.ReferringPhysician,
                    StudyDate: result.StudyDate,
                    HospitalNumber: result.HospitalNumber,
                    HospitalWardNumber: result.HospitalWardNumber,
                    StudyInstanceId: result.StudyInstanceId
                };
                _this.procedureDetailSource.next(procedureModel);
            }
        }, function (error) {
            _this.procedureDetailSource.next(null);
        });
    };
    // ================
    // Delete Procedure
    // ================
    ProcedureService.prototype.deleteProcedure = function (id) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/procedureProcedure/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.procedureDeletedSource.next(200);
        }, function (error) {
            if (error.status == 404) {
                _this.procedureDeletedSource.next(404);
            }
            else if (error.status == 400) {
                _this.procedureDeletedSource.next(400);
            }
            else if (error.status == 500) {
                _this.procedureDeletedSource.next(500);
            }
        });
    };
    // ====================
    // Get Procedure Result
    // ====================
    ProcedureService.prototype.getProcedureResult = function (procedureId) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/procedureResult/list/" + procedureId;
        var procedureResultObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    procedureResultObservableArray.push({
                        Id: results[i].Id,
                        ProcedureId: results[i].ProcedureId,
                        ModalityProcedureId: results[i].ModalityProcedureId,
                        ModalityProcedure: results[i].ModalityProcedure,
                        Result: results[i].Result,
                        DoctorId: results[i].DoctorId,
                        Doctor: results[i].Doctor,
                        DoctorDateTime: results[i].DoctorDateTime,
                        DoctorTime: results[i].DoctorTime
                    });
                }
                _this.procedureResultSource.next(procedureResultObservableArray);
            }
            else {
                _this.procedureResultSource.next(null);
            }
        }, function (error) {
            _this.procedureResultSource.next(null);
        });
    };
    // ========================
    // Get Procedure Result PDF
    // ========================
    ProcedureService.prototype.getProcedureResultPDF = function (id) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/procedureResultReport/PDF/result/" + id;
        this.http.get(url, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob }).subscribe(function (response) {
            var pdf = new Blob([response.blob()], { type: 'application/pdf' });
            _this.procedureResultPDFSource.next(pdf);
        });
    };
    // ======================
    // Get Modality Procedure
    // ======================
    ProcedureService.prototype.getModalityProcedure = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/modalityProcedure/list";
        var modalityProcedureObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    modalityProcedureObservableArray.push({
                        Id: results[i].Id,
                        ModalityProcedure: results[i].ModalityProcedure,
                        ModalityResultTemplate: results[i].ModalityResultTemplate
                    });
                }
                _this.modalityProcedureSource.next(modalityProcedureObservableArray);
            }
            else {
                _this.modalityProcedureSource.next(null);
            }
        }, function (error) {
            _this.modalityProcedureSource.next(null);
        });
    };
    // ==========
    // Get Doctor
    // ==========
    ProcedureService.prototype.getDoctor = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/user/list/byUserType/2";
        var doctorObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    doctorObservableArray.push({
                        Id: results[i].Id,
                        FullName: results[i].FullName
                    });
                }
                _this.doctorSource.next(doctorObservableArray);
            }
            else {
                _this.doctorSource.next(null);
            }
        }, function (error) {
            _this.doctorSource.next(null);
        });
    };
    // =====================
    // Save Procedure Result
    // =====================
    ProcedureService.prototype.saveProcedureResult = function (procedureResultModel) {
        var _this = this;
        if (procedureResultModel.Id == 0) {
            var url = this.defaultAPIHostURL + "/api/procedureResult/add";
            this.http.post(url, JSON.stringify(procedureResultModel), this.options).subscribe(function (response) {
                _this.procedureResultSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.procedureResultSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.procedureResultSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.procedureResultSavedSource.next(500);
                }
            });
        }
        else {
            var id = procedureResultModel.Id;
            var url = this.defaultAPIHostURL + "/api/procedureResult/update/" + id;
            this.http.put(url, JSON.stringify(procedureResultModel), this.options).subscribe(function (response) {
                _this.procedureResultSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.procedureResultSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.procedureResultSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.procedureResultSavedSource.next(500);
                }
            });
        }
    };
    // =======================
    // Delete Procedure Result
    // =======================
    ProcedureService.prototype.deleteProcedureResult = function (id) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/procedureResult/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.procedureResultDeletedSource.next(200);
        }, function (error) {
            if (error.status == 404) {
                _this.procedureResultDeletedSource.next(404);
            }
            else if (error.status == 400) {
                _this.procedureResultDeletedSource.next(400);
            }
            else if (error.status == 500) {
                _this.procedureResultDeletedSource.next(500);
            }
        });
    };
    // =========================
    // Get Procedure Comparative
    // =========================
    ProcedureService.prototype.getProcedureComparative = function (id) {
        var _this = this;
        var facilityId = parseInt(localStorage.getItem("current_facility_id"));
        var url = this.defaultAPIHostURL + "/api/procedure/list/comparative/" + id + "/" + facilityId;
        var procedureComparativeObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    procedureComparativeObservableArray.push({
                        Id: results[i].Id,
                        TransactionNumber: results[i].TransactionNumber,
                        TransactionDateTime: results[i].TransactionDateTime,
                        TransactionTime: results[i].TransactionTime,
                        DICOMFileName: results[i].DICOMFileName,
                        PatientName: results[i].PatientName,
                        Gender: results[i].Gender,
                        DateOfBirth: results[i].DateOfBirth,
                        Age: results[i].Age,
                        Particulars: results[i].Particulars,
                        ModalityId: results[i].ModalityId,
                        Modality: results[i].Modality,
                        BodyPartId: results[i].BodyPartId,
                        BodyPart: results[i].BodyPart,
                        UserId: results[i].UserId,
                        User: results[i].User,
                        PatientAddress: results[i].PatientAddress,
                        ReferringPhysician: results[i].ReferringPhysician,
                        StudyDate: results[i].StudyDate,
                        HospitalNumber: results[i].HospitalNumber,
                        HospitalWardNumber: results[i].HospitalWardNumber,
                        StudyInstanceId: results[i].StudyInstanceId,
                        Doctor: results[i].Doctor
                    });
                }
                _this.procedureComparativeSource.next(procedureComparativeObservableArray);
            }
            else {
                _this.procedureComparativeSource.next(null);
            }
        }, function (error) {
            _this.procedureComparativeSource.next(null);
        });
    };
    ProcedureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], ProcedureService);
    return ProcedureService;
}());



/***/ }),

/***/ "./src/app/rate/rate.component.css":
/*!*****************************************!*\
  !*** ./src/app/rate/rate.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rate/rate.component.html":
/*!******************************************!*\
  !*** ./src/app/rate/rate.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">\r\n        Rate\r\n    </li>\r\n</ol>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <table border=\"0\" style=\"width: 100%;\">\r\n            <tr>\r\n                <td style=\"width: 90%;\" align=\"left\">\r\n                    <div class=\"input-group\">\r\n                        <button class=\"btn btn-info\" type=\"button\" [disabled]=\"isBtnRefreshRateDataDisabled\" (click)=\"getRateData()\">\r\n                            <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                        &nbsp; &nbsp;\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <b>Show</b>\r\n                            </div>\r\n                        </div>\r\n                        <wj-combo-box #cboNumberOfRows [itemsSource]=\"cboShowNumberOfRows\" [isEditable]=\"false\" [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\"\r\n                            [selectedValuePath]=\"'rowNumber'\" (selectedIndexChanged)=\"cboShowNumberOfRowsOnSelectedIndexChanged(cboNumberOfRows.selectedValue)\"\r\n                            style=\"width: 180px;\">\r\n                        </wj-combo-box>\r\n                    </div>\r\n                </td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"btnAddRateClick()\">\r\n                        <i class=\"fa fa-plus\"></i> Add\r\n                    </button>\r\n                </td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"warn\" routerLink=\"/software/dashboard\">\r\n                        <i class=\"fa fa-close\"></i> Close\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <mat-progress-bar class=\"example-margin\" [hidden]=\"isProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n        <wj-flex-grid #rateFlexGrid [itemsSource]=\"rateCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"2\">\r\n            <wj-flex-grid-filter></wj-flex-grid-filter>\r\n            <wj-flex-grid-column [header]=\"Edit\" [isReadOnly]=\"true\" [isContentHtml]=\"true\" [width]=\"95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"primary\" class=\"btn-xs\" (click)=\"btnEditRateClick()\">\r\n                        <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"Delete\" [isReadOnly]=\"true\" [width]=\"96\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"warn\" class=\"btn-xs\" (click)=\"btnDeleteRateClick()\">\r\n                        <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Code'\" [binding]=\"'ModalityProcedureCode'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Procedure'\" [binding]=\"'ModalityProcedure'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Facility Rate'\" [binding]=\"'FacilityRate'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Doctor Rate'\" [binding]=\"'DoctorRate'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Image Rate'\" [binding]=\"'ImageRate'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n        </wj-flex-grid>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"rateCollectionView.moveToFirstPage()\">\r\n                <i class=\"fa fa-fast-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"rateCollectionView.moveToPreviousPage()\">\r\n                <i class=\"fa fa-step-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                {{ rateCollectionView.pageIndex + 1 }} / {{ rateCollectionView.pageCount }}\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"rateCollectionView.moveToNextPage()\">\r\n                <i class=\"fa fa-step-forward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"rateCollectionView.moveToLastPage()\">\r\n                <i class=\"fa fa-fast-forward\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/rate/rate.component.ts":
/*!****************************************!*\
  !*** ./src/app/rate/rate.component.ts ***!
  \****************************************/
/*! exports provided: RateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateComponent", function() { return RateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _dialog_rate_rate_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog/rate/rate-detail.dialog.component */ "./src/app/dialog/rate/rate-detail.dialog.component.ts");
/* harmony import */ var _dialog_rate_rate_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog/rate/rate-delete.dialog.component */ "./src/app/dialog/rate/rate-delete.dialog.component.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _rate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rate.service */ "./src/app/rate/rate.service.ts");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====================
// Angular and Material
// ====================



// ======
// Toastr
// ======

// =======
// Dialogs
// =======


// ====================
// Async Task and Wijmo
// ====================



var RateComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function RateComponent(dialog, rateService, router, toastr) {
        this.dialog = dialog;
        this.rateService = rateService;
        this.router = router;
        this.toastr = toastr;
        // ================
        // Global Variables
        // ================
        this.title = 'rate';
        this.isProgressBarHidden = false;
        this.rateData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        this.rateCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](this.rateData);
        this.isBtnRefreshRateDataDisabled = true;
        this.cboShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        // ================
        // Initialize Model
        // ================
        this.rateModel = {
            Id: 0,
            UserId: 0,
            ModalityProcedureId: 0,
            ModalityProcedureCode: "",
            FacilityRate: 0,
            DoctorRate: 0,
            ImageRate: 0,
            Remarks: ""
        };
    }
    // ================================
    // Create Combo Show Number of Rows
    // ================================
    RateComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "Show 15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "Show 50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "Show 100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "Show 150 Rows";
            }
            else {
                rows = 200;
                rowsString = "Show 200 Rows";
            }
            this.cboShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    // ===================================================
    // Combo Show Number of Rows On Selected Index Changed
    // ===================================================
    RateComponent.prototype.cboShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.ratesNumberOfPageIndex = selectedValue;
        this.rateCollectionView.pageSize = this.ratesNumberOfPageIndex;
        this.rateCollectionView.refresh();
        this.rateFlexGrid.refresh();
    };
    // =============
    // Get Rate Data
    // =============
    RateComponent.prototype.getRateData = function () {
        var _this = this;
        this.rateData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"]();
        this.rateCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](this.rateData);
        this.rateCollectionView.pageSize = 15;
        this.rateCollectionView.trackChanges = true;
        this.isProgressBarHidden = false;
        this.isBtnRefreshRateDataDisabled = true;
        this.rateService.getRate();
        this.rateSubscription = this.rateService.rateObservable.subscribe(function (data) {
            if (data != null) {
                _this.rateData = data;
                _this.rateCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_6__["CollectionView"](_this.rateData);
                _this.rateCollectionView.pageSize = _this.ratesNumberOfPageIndex;
                _this.rateCollectionView.trackChanges = true;
            }
            _this.isProgressBarHidden = true;
            _this.isBtnRefreshRateDataDisabled = false;
        });
    };
    // ========
    // Add Rate
    // ========
    RateComponent.prototype.btnAddRateClick = function () {
        var _this = this;
        this.rateModel.Id = 0;
        this.rateModel.UserId = 0;
        this.rateModel.ModalityProcedureId = 0;
        this.rateModel.ModalityProcedureCode = "";
        this.rateModel.FacilityRate = 0;
        this.rateModel.DoctorRate = 0;
        this.rateModel.ImageRate = 0;
        this.rateModel.Remarks = "";
        var detailRateDialogRef = this.dialog.open(_dialog_rate_rate_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RateDetailDialogComponent"], {
            width: '800px',
            data: {
                objModalityDetailProcedureDialogTitle: "Add Rate",
                objCurrentRate: this.rateModel
            }
        });
        detailRateDialogRef.disableClose = true;
        detailRateDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Save Successful!');
                _this.getRateData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // =========
    // Edit Rate
    // =========
    RateComponent.prototype.btnEditRateClick = function () {
        var _this = this;
        var currentRate = this.rateCollectionView.currentItem;
        this.rateModel.Id = currentRate.Id;
        this.rateModel.UserId = currentRate.UserId;
        this.rateModel.ModalityProcedureId = currentRate.ModalityProcedureId;
        this.rateModel.ModalityProcedureCode = currentRate.ModalityProcedureCode;
        this.rateModel.FacilityRate = currentRate.FacilityRate;
        this.rateModel.DoctorRate = currentRate.DoctorRate;
        this.rateModel.ImageRate = currentRate.ImageRate;
        this.rateModel.Remarks = currentRate.Remarks;
        var detailRateDialogRef = this.dialog.open(_dialog_rate_rate_detail_dialog_component__WEBPACK_IMPORTED_MODULE_4__["RateDetailDialogComponent"], {
            width: '800px',
            data: {
                objModalityDetailProcedureDialogTitle: "Edit Rate",
                objCurrentRate: this.rateModel
            }
        });
        detailRateDialogRef.disableClose = true;
        detailRateDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Update Successful!');
                _this.getRateData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ===========
    // Delete Rate
    // ===========
    RateComponent.prototype.btnDeleteRateClick = function () {
        var _this = this;
        var currentRate = this.rateCollectionView.currentItem;
        this.rateModel.Id = currentRate.Id;
        var deleteRateDialogRef = this.dialog.open(_dialog_rate_rate_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RateDeleteDialogComponent"], {
            width: '400px',
            data: {
                objRateDeleteDialogTitle: "Delete Rate",
                objCurrentRate: this.rateModel
            }
        });
        deleteRateDialogRef.disableClose = true;
        deleteRateDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Delete Successful!');
                _this.getRateData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ============
    // On Load Page
    // ============
    RateComponent.prototype.ngOnInit = function () {
        this.createCboShowNumberOfRows();
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.getRateData();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    RateComponent.prototype.ngOnDestroy = function () {
        if (this.rateSubscription != null)
            this.rateSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rateFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_8__["WjFlexGrid"])
    ], RateComponent.prototype, "rateFlexGrid", void 0);
    RateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rate',
            template: __webpack_require__(/*! ./rate.component.html */ "./src/app/rate/rate.component.html"),
            styles: [__webpack_require__(/*! ./rate.component.css */ "./src/app/rate/rate.component.css"), __webpack_require__(/*! ../layout/layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _rate_service__WEBPACK_IMPORTED_MODULE_7__["RateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RateComponent);
    return RateComponent;
}());



/***/ }),

/***/ "./src/app/rate/rate.service.ts":
/*!**************************************!*\
  !*** ./src/app/rate/rate.service.ts ***!
  \**************************************/
/*! exports provided: RateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RateService", function() { return RateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============



var RateService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function RateService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ================================
        // Token: Headers and Authorization
        // ================================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // ================
        // Async Properties 
        // ================
        this.rateSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rateObservable = this.rateSource.asObservable();
        this.modalityProcedureSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.modalityProcedureObservable = this.modalityProcedureSource.asObservable();
        this.rateSavedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rateSavedObservable = this.rateSavedSource.asObservable();
        this.rateDeletedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rateDeletedObservable = this.rateDeletedSource.asObservable();
    }
    // ========
    // Get Rate
    // ========
    RateService.prototype.getRate = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/userRate/list";
        var rateObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    rateObservableArray.push({
                        Id: results[i].Id,
                        UserId: results[i].UserId,
                        BodyPart: results[i].BodyPart,
                        ModalityProcedureId: results[i].ModalityProcedureId,
                        ModalityProcedure: results[i].ModalityProcedure,
                        ModalityProcedureCode: results[i].ModalityProcedureCode,
                        FacilityRate: results[i].FacilityRate,
                        DoctorRate: results[i].DoctorRate,
                        ImageRate: results[i].ImageRate,
                        Remarks: results[i].Remarks
                    });
                }
                _this.rateSource.next(rateObservableArray);
            }
            else {
                _this.rateSource.next(null);
            }
        }, function (error) {
            _this.rateSource.next(null);
        });
    };
    // ======================
    // Get Modality Procedure
    // ======================
    RateService.prototype.getModalityProcedure = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/modalityProcedure/list";
        var modalityProcedureObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    modalityProcedureObservableArray.push({
                        Id: results[i].Id,
                        ModalityProcedure: results[i].ModalityProcedure,
                        ModalityResultTemplate: results[i].ModalityResultTemplate
                    });
                }
                _this.modalityProcedureSource.next(modalityProcedureObservableArray);
            }
        }, function (error) {
            _this.modalityProcedureSource.next(null);
        });
    };
    // =========
    // Save Rate
    // =========
    RateService.prototype.saveRate = function (rateModel) {
        var _this = this;
        if (rateModel.Id == 0) {
            var url = this.defaultAPIHostURL + "/api/userRate/add";
            this.http.post(url, JSON.stringify(rateModel), this.options).subscribe(function (response) {
                _this.rateSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.rateSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.rateSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.rateSavedSource.next(500);
                }
            });
        }
        else {
            var id = rateModel.Id;
            var url = this.defaultAPIHostURL + "/api/userRate/update/" + id;
            this.http.put(url, JSON.stringify(rateModel), this.options).subscribe(function (response) {
                _this.rateSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.rateSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.rateSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.rateSavedSource.next(500);
                }
            });
        }
    };
    // ===========
    // Delete Rate
    // ===========
    RateService.prototype.deleteRate = function (id) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/userRate/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.rateDeletedSource.next(200);
        }, function (error) {
            if (error.status == 404) {
                _this.rateDeletedSource.next(404);
            }
            else if (error.status == 400) {
                _this.rateDeletedSource.next(400);
            }
            else if (error.status == 500) {
                _this.rateDeletedSource.next(500);
            }
        });
    };
    RateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], RateService);
    return RateService;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">\r\n        Reports\r\n    </li>\r\n</ol>\r\n<mat-tab-group class=\"demo-tab-group\" (selectedTabChange)=\"onTabClick($event)\">\r\n    <mat-tab label=\"Procedure Summary Report\" (click)=\"procedureSummaryReportTabClick()\">\r\n        <br />\r\n        <div class=\"demo-tab-content\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <table border=\"0\" style=\"width: 100%; border: none;\">\r\n                        <tr>\r\n                            <td style=\"width: 3%;\">\r\n                                <button class=\"btn btn-info\" [disabled]=\"isBtnRefreshProcedureSummaryReportDataDisabled\" (click)=\"getProcedureSummaryReportData()\">\r\n                                    <i class=\"fa fa-refresh\"></i>\r\n                                </button>\r\n                            </td>\r\n                            <td style=\"width: 18%;\">\r\n                                <div class=\"input-group\">\r\n                                    &nbsp;\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\">\r\n                                            <b>Start</b>\r\n                                        </div>\r\n                                    </div>\r\n                                    <wj-input-date #procedureSummaryReportStartDate [(ngModel)]=\"procedureSummaryReportStartDateData\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        (textChanged)=\"procedureSummaryReportStartDateTextChanged()\" format=\"MM-dd-yyyy\" class=\"form-control\">\r\n                                    </wj-input-date>\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"width: 18%;\">\r\n                                <div class=\"input-group\">\r\n                                    &nbsp;\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\">\r\n                                            <b>End</b>\r\n                                        </div>\r\n                                    </div>\r\n                                    <wj-input-date #procedureSummaryReportEndDate [(ngModel)]=\"procedureSummaryReportEndDateData\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        (textChanged)=\"procedureSummaryReportEndDateTextChanged()\" format=\"MM-dd-yyyy\" class=\"form-control\">\r\n                                    </wj-input-date>\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"width: 23%;\">\r\n                                <div class=\"input-group\">\r\n                                    &nbsp;\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\">\r\n                                            <b>Facility</b>\r\n                                        </div>\r\n                                    </div>\r\n                                    <wj-combo-box #cboProcedureSummaryReportFacility [itemsSource]=\"cboFacilityObservableArray\" [isEditable]=\"false\" [isRequired]=\"true\"\r\n                                        [displayMemberPath]=\"'UserFacility'\" [selectedValuePath]=\"'UserId'\" (selectedIndexChanged)=\"cboProcedureSummaryReportFacilitySelectedIndexChanged()\"\r\n                                        class=\"form-control\">\r\n                                    </wj-combo-box>\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"width: 18%;\">\r\n                                <div class=\"input-group\">\r\n                                    &nbsp;\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\">\r\n                                            <b>Show</b>\r\n                                        </div>\r\n                                    </div>\r\n                                    <wj-combo-box #cboProcedureSummaryReportNumberOfRows [itemsSource]=\"cboProcedureSummaryReportShowNumberOfRows\" [isEditable]=\"false\"\r\n                                        [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\" [selectedValuePath]=\"'rowNumber'\"\r\n                                        (selectedIndexChanged)=\"cboProcedureSummaryReportShowNumberOfRowsOnSelectedIndexChanged(cboProcedureSummaryReportNumberOfRows.selectedValue)\"\r\n                                        class=\"form-control\">\r\n                                    </wj-combo-box>\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"width: 20%;\" align=\"right\">\r\n                                <button style=\"margin-right: 3px;\" mat-raised-button color=\"primary\" (click)=\"btnExportCSVProcedureSummaryReport()\">\r\n                                    <i class=\"fa fa-file-excel-o\"></i> CSV\r\n                                </button>\r\n                                <button mat-raised-button color=\"warn\" routerLink=\"/software/dashboard\">\r\n                                    <i class=\"fa fa-close\"></i> Close\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <mat-progress-bar class=\"example-margin\" [hidden]=\"isProcedureSummaryReportProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n                    <wj-flex-grid #procedureSummaryReportFlexGrid [itemsSource]=\"procedureSummaryReportCollectionView\" [selectionMode]=\"3\">\r\n                        <wj-flex-grid-filter></wj-flex-grid-filter>\r\n                        <wj-flex-grid-column [header]=\"'Facility'\" [binding]=\"'Facility'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                        <wj-flex-grid-column [header]=\"'Tx No.'\" [binding]=\"'TransactionNumber'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n                        <wj-flex-grid-column [header]=\"'Tx Date'\" [binding]=\"'TransactionDateTime'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                        <wj-flex-grid-column [header]=\"'Tx Time'\" [binding]=\"'TransactionTime'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                        <wj-flex-grid-column [header]=\"'Patient'\" [binding]=\"'PatientName'\" [isReadOnly]=\"true\" [width]=\"'3*'\"></wj-flex-grid-column>\r\n                        <wj-flex-grid-column [header]=\"'Age'\" [binding]=\"'Age'\" [isReadOnly]=\"true\" [width]=\"'0.8*'\"></wj-flex-grid-column>\r\n                        <wj-flex-grid-column [header]=\"'Modality'\" [binding]=\"'Modality'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                        <wj-flex-grid-column [header]=\"'Doctor'\" [binding]=\"'Doctor'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    </wj-flex-grid>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureSummaryReportCollectionView.moveToFirstPage()\">\r\n                            <i class=\"fa fa-fast-backward\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureSummaryReportCollectionView.moveToPreviousPage()\">\r\n                            <i class=\"fa fa-step-backward\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                            {{ procedureSummaryReportCollectionView.pageIndex + 1 }} / {{ procedureSummaryReportCollectionView.pageCount }}\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureSummaryReportCollectionView.moveToNextPage()\">\r\n                            <i class=\"fa fa-step-forward\"></i>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureSummaryReportCollectionView.moveToLastPage()\">\r\n                            <i class=\"fa fa-fast-forward\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Procedure Detail Report\" (click)=\"procedureDetailReportTabClick()\">\r\n        <br />\r\n        <div class=\"demo-tab-content\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <table border=\"0\" style=\"width: 100%; border: none;\">\r\n                        <tr>\r\n                            <td style=\"width: 3%;\">\r\n                                <button class=\"btn btn-info\" [disabled]=\"isBtnRefreshProcedureDetailReportDataDisabled\" (click)=\"getProcedureDetailReportData()\">\r\n                                    <i class=\"fa fa-refresh\"></i>\r\n                                </button>\r\n                            </td>\r\n                            <td style=\"width: 18%;\">\r\n                                <div class=\"input-group\">\r\n                                    &nbsp;\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\">\r\n                                            <b>Start</b>\r\n                                        </div>\r\n                                    </div>\r\n                                    <wj-input-date #procedureDetailReportStartDate [(ngModel)]=\"procedureDetailReportStartDateData\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        (textChanged)=\"procedureDetailReportStartDateTextChanged()\" format=\"MM-dd-yyyy\" class=\"form-control\">\r\n                                    </wj-input-date>\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"width: 18%;\">\r\n                                <div class=\"input-group\">\r\n                                    &nbsp;\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\">\r\n                                            <b>End</b>\r\n                                        </div>\r\n                                    </div>\r\n                                    <wj-input-date #procedureDetailReportEndDate [(ngModel)]=\"procedureDetailReportEndDateData\" [ngModelOptions]=\"{standalone: true}\"\r\n                                        (textChanged)=\"procedureDetailReportEndDateTextChanged()\" format=\"MM-dd-yyyy\" class=\"form-control\">\r\n                                    </wj-input-date>\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"width: 23%;\">\r\n                                <div class=\"input-group\">\r\n                                    &nbsp;\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\">\r\n                                            <b>Facility</b>\r\n                                        </div>\r\n                                    </div>\r\n                                    <wj-combo-box #cboProcedureDetailReportFacility [itemsSource]=\"cboFacilityObservableArray\" [isEditable]=\"false\" [isRequired]=\"true\"\r\n                                        [displayMemberPath]=\"'UserFacility'\" [selectedValuePath]=\"'UserId'\" (selectedIndexChanged)=\"cboProcedureDetailReportFacilitySelectedIndexChanged()\"\r\n                                        class=\"form-control\">\r\n                                    </wj-combo-box>\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"width: 18%;\">\r\n                                <div class=\"input-group\">\r\n                                    &nbsp;\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <div class=\"input-group-text\">\r\n                                            <b>Show</b>\r\n                                        </div>\r\n                                    </div>\r\n                                    <wj-combo-box #cboProcedureDetailReportNumberOfRows [itemsSource]=\"cboProcedureDetailReportShowNumberOfRows\" [isEditable]=\"false\"\r\n                                        [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\" [selectedValuePath]=\"'rowNumber'\"\r\n                                        (selectedIndexChanged)=\"cboProcedureDetailReportShowNumberOfRowsOnSelectedIndexChanged(cboProcedureDetailReportNumberOfRows.selectedValue)\"\r\n                                        class=\"form-control\">\r\n                                    </wj-combo-box>\r\n                                </div>\r\n                            </td>\r\n                            <td style=\"width: 20%;\" align=\"right\">\r\n                                <button style=\"margin-right: 3px;\" mat-raised-button color=\"primary\" (click)=\"btnExportCSVProcedureDetailReport()\">\r\n                                    <i class=\"fa fa-file-excel-o\"></i> CSV\r\n                                </button>\r\n                                <button mat-raised-button color=\"warn\" routerLink=\"/software/dashboard\">\r\n                                    <i class=\"fa fa-close\"></i> Close\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <mat-progress-bar class=\"example-margin\" [hidden]=\"isProcedureDetailReportProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n                <wj-flex-grid #procedureDetailReportFlexGrid [itemsSource]=\"procedureDetailReportCollectionView\" [selectionMode]=\"3\">\r\n                    <wj-flex-grid-filter></wj-flex-grid-filter>\r\n                    <wj-flex-grid-column [header]=\"'Facility'\" [binding]=\"'Facility'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Tx No.'\" [binding]=\"'TransactionNumber'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Tx Date'\" [binding]=\"'TransactionDateTime'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Patient'\" [binding]=\"'Patient'\" [isReadOnly]=\"true\" [width]=\"'2.5*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Exam Taken'\" [binding]=\"'Modality'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Procedure'\" [binding]=\"'ModalityProcedure'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'Doctor'\" [binding]=\"'Doctor'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'F Rate'\" [binding]=\"'FacilityRate'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'D Rate'\" [binding]=\"'DoctorRate'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                    <wj-flex-grid-column [header]=\"'I Rate'\" [binding]=\"'ImageRate'\" [isReadOnly]=\"true\" [width]=\"'1*'\"></wj-flex-grid-column>\r\n                </wj-flex-grid>\r\n            </div>\r\n            <div class=\"card-footer\">\r\n                <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureDetailReportCollectionView.moveToFirstPage()\">\r\n                        <i class=\"fa fa-fast-backward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureDetailReportCollectionView.moveToPreviousPage()\">\r\n                        <i class=\"fa fa-step-backward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                        {{ procedureDetailReportCollectionView.pageIndex + 1 }} / {{ procedureDetailReportCollectionView.pageCount }}\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureDetailReportCollectionView.moveToNextPage()\">\r\n                        <i class=\"fa fa-step-forward\"></i>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"procedureDetailReportCollectionView.moveToLastPage()\">\r\n                        <i class=\"fa fa-fast-forward\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular5-csv/Angular5-csv */ "./node_modules/angular5-csv/Angular5-csv.js");
/* harmony import */ var angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wijmo/wijmo.angular2.input */ "./node_modules/wijmo/wijmo.angular2.input.js");
/* harmony import */ var wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reports.service */ "./src/app/reports/reports.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====================
// Angular and Material
// ====================



// =================================
// Async Task and Wijmo and Services
// =================================




// ======
// Toastr
// ======

var ReportsComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ReportsComponent(reportService, router, toastr) {
        this.reportService = reportService;
        this.router = router;
        this.toastr = toastr;
        // ================
        // Global Variables
        // ================
        this.title = 'reports';
        this.isProcedureSummaryReportProgressBarHidden = false;
        this.isProcedureDetailReportProgressBarHidden = false;
        this.procedureSummaryReportData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.procedureSummaryReportCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](this.procedureSummaryReportData);
        this.procedureDetailReportData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.procedureDetailReportCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](this.procedureSummaryReportData);
        // ===========================
        // Date Range Filters (Values)
        // ===========================
        this.procedureSummaryReportStartDateData = new Date();
        this.procedureSummaryReportEndDateData = new Date();
        this.procedureDetailReportStartDateData = new Date();
        this.procedureDetailReportEndDateData = new Date();
        this.isProcedureSummaryReportStartDateClicked = false;
        this.isProcedureSummaryReportStartDateSelected = false;
        this.isProcedureSummaryReportEndDateClicked = false;
        this.isProcedureSummaryReportEndDateSelected = false;
        this.isProcedureDetailReportStartDateClicked = false;
        this.isProcedureDetailReportStartDateSelected = false;
        this.isProcedureDetailReportEndDateClicked = false;
        this.isProcedureDetailReportEndDateSelected = false;
        this.cboProcedureSummaryReportShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.cboProcedureDetailReportShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.isBtnRefreshProcedureSummaryReportDataDisabled = true;
        this.isBtnRefreshProcedureDetailReportDataDisabled = true;
        this.cboFacilityObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
    }
    // =================================================
    // Text Change : Start Date Procedure Summary Report
    // =================================================
    ReportsComponent.prototype.procedureSummaryReportStartDateTextChanged = function () {
        if (this.isProcedureSummaryReportStartDateClicked == true) {
            if (this.isProcedureSummaryReportStartDateSelected == true) {
                this.getProcedureSummaryReportData();
            }
            else {
                this.isProcedureSummaryReportStartDateSelected = true;
            }
        }
        else {
            this.isProcedureSummaryReportStartDateClicked = true;
        }
    };
    // ===============================================
    // Text Change : End Date Procedure Summary Report
    // ===============================================
    ReportsComponent.prototype.procedureSummaryReportEndDateTextChanged = function () {
        if (this.isProcedureSummaryReportEndDateClicked == true) {
            if (this.isProcedureSummaryReportEndDateSelected == true) {
                this.getProcedureSummaryReportData();
            }
            else {
                this.isProcedureSummaryReportEndDateClicked = true;
            }
        }
        else {
            this.isProcedureSummaryReportEndDateSelected = true;
        }
    };
    // ==================================================================
    // Combo Box Procedure Summary Report Facility Selected Index Changed
    // ==================================================================
    ReportsComponent.prototype.cboProcedureSummaryReportFacilitySelectedIndexChanged = function () {
        if (this.cboProcedureSummaryReportFacility.selectedValue != null) {
            this.getProcedureSummaryReportData();
        }
    };
    // ================================================
    // Text Change : Start Date Procedure Detail Report
    // ================================================
    ReportsComponent.prototype.procedureDetailReportStartDateTextChanged = function () {
        if (this.isProcedureDetailReportStartDateClicked == true) {
            if (this.isProcedureDetailReportStartDateSelected == true) {
                this.getProcedureDetailReportData();
            }
            else {
                this.isProcedureDetailReportStartDateSelected = true;
            }
        }
        else {
            this.isProcedureDetailReportStartDateClicked = true;
        }
    };
    // ==============================================
    // Text Change : End Date Procedure Detail Report
    // ==============================================
    ReportsComponent.prototype.procedureDetailReportEndDateTextChanged = function () {
        if (this.isProcedureDetailReportEndDateClicked == true) {
            if (this.isProcedureDetailReportEndDateSelected == true) {
                this.getProcedureDetailReportData();
            }
            else {
                this.isProcedureDetailReportEndDateClicked = true;
            }
        }
        else {
            this.isProcedureDetailReportEndDateSelected = true;
        }
    };
    // =================================================================
    // Combo Box Procedure Detail Report Facility Selected Index Changed
    // =================================================================
    ReportsComponent.prototype.cboProcedureDetailReportFacilitySelectedIndexChanged = function () {
        if (this.cboProcedureDetailReportFacility.selectedValue != null) {
            this.getProcedureDetailReportData();
        }
    };
    // ================================
    // Create Combo Show Number of Rows
    // ================================
    ReportsComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "Show 15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "Show 50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "Show 100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "Show 150 Rows";
            }
            else {
                rows = 200;
                rowsString = "Show 200 Rows";
            }
            this.cboProcedureSummaryReportShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
            this.cboProcedureDetailReportShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    // =================
    // Get Facility Data
    // =================
    ReportsComponent.prototype.getFacilityData = function () {
        var _this = this;
        this.reportService.getFacilities();
        this.facilitySubscription = this.reportService.facilitiesObservable.subscribe(function (data) {
            var facilityObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
            if (data != null) {
                for (var i = 0; i <= data.length - 1; i++) {
                    facilityObservableArray.push({
                        Id: data[i].Id,
                        UserId: data[i].UserId,
                        UserFacility: data[i].UserFacility
                    });
                }
                _this.cboFacilityObservableArray = facilityObservableArray;
                _this.getProcedureSummaryReportData();
                _this.getProcedureDetailReportData();
            }
        });
    };
    // =================================
    // Get Procedure Summary Report Data
    // =================================
    ReportsComponent.prototype.getProcedureSummaryReportData = function () {
        var _this = this;
        this.procedureSummaryReportData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.procedureSummaryReportCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](this.procedureSummaryReportData);
        this.procedureSummaryReportCollectionView.pageSize = this.procedureSummaryReportNumberOfPageIndex;
        this.procedureSummaryReportCollectionView.trackChanges = true;
        if (this.procedureSummaryReportSubscription != null)
            this.procedureSummaryReportSubscription.unsubscribe();
        this.isProcedureSummaryReportProgressBarHidden = false;
        this.isBtnRefreshProcedureSummaryReportDataDisabled = true;
        var dateStart = [this.procedureSummaryReportStartDateData.getFullYear(), this.procedureSummaryReportStartDateData.getMonth() + 1, this.procedureSummaryReportStartDateData.getDate()].join('-');
        var dateEnd = [this.procedureSummaryReportEndDateData.getFullYear(), this.procedureSummaryReportEndDateData.getMonth() + 1, this.procedureSummaryReportEndDateData.getDate()].join('-');
        var facilityId = parseInt(localStorage.getItem("current_facility_id"));
        if (this.cboProcedureSummaryReportFacility.selectedValue != null) {
            facilityId = this.cboProcedureSummaryReportFacility.selectedValue;
        }
        this.reportService.getProcedureSummaryReport(dateStart, dateEnd, facilityId);
        this.procedureSummaryReportSubscription = this.reportService.procedureSummaryReportObservable.subscribe(function (data) {
            if (data != null) {
                _this.procedureSummaryReportData = data;
                _this.procedureSummaryReportCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](_this.procedureSummaryReportData);
                _this.procedureSummaryReportCollectionView.pageSize = _this.procedureSummaryReportNumberOfPageIndex;
                _this.procedureSummaryReportCollectionView.trackChanges = true;
            }
            _this.isProcedureSummaryReportProgressBarHidden = true;
            _this.isBtnRefreshProcedureSummaryReportDataDisabled = false;
        });
    };
    // ========================================
    // Export CSV Procedure Summary Report Data
    // ============================-===========
    ReportsComponent.prototype.btnExportCSVProcedureSummaryReport = function () {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: false,
            useBom: true,
            noDownload: false,
            headers: ["Facility", "Tx No.", "Tx Date", "Tx Time", "Patient", "Age", "Modality", "Doctor"]
        };
        new angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_2__["Angular5Csv"](this.procedureSummaryReportCollectionView.items, 'Procedure Summary Report', options);
    };
    // =============================================================================
    // Combo Show Number of Rows On Selected Index Changed: Procedure Summary Report
    // =============================================================================
    ReportsComponent.prototype.cboProcedureSummaryReportShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.procedureSummaryReportNumberOfPageIndex = selectedValue;
        this.procedureSummaryReportCollectionView.pageSize = this.procedureSummaryReportNumberOfPageIndex;
        this.procedureSummaryReportCollectionView.refresh();
        this.procedureSummaryReportFlexGrid.refresh();
    };
    // ================================
    // Get Procedure Detail Report Data
    // ================================
    ReportsComponent.prototype.getProcedureDetailReportData = function () {
        var _this = this;
        this.procedureDetailReportData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.procedureDetailReportCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](this.procedureDetailReportData);
        this.procedureDetailReportCollectionView.pageSize = this.procedureDetailReportNumberOfPageIndex;
        this.procedureDetailReportCollectionView.trackChanges = true;
        if (this.procedureDetailReportSubscription != null)
            this.procedureDetailReportSubscription.unsubscribe();
        this.isProcedureDetailReportProgressBarHidden = false;
        this.isBtnRefreshProcedureDetailReportDataDisabled = true;
        var dateStart = [this.procedureDetailReportStartDateData.getFullYear(), this.procedureDetailReportStartDateData.getMonth() + 1, this.procedureDetailReportStartDateData.getDate()].join('-');
        var dateEnd = [this.procedureDetailReportEndDateData.getFullYear(), this.procedureDetailReportEndDateData.getMonth() + 1, this.procedureDetailReportEndDateData.getDate()].join('-');
        var facilityId = parseInt(localStorage.getItem("current_facility_id"));
        if (this.cboProcedureDetailReportFacility.selectedValue != null) {
            facilityId = this.cboProcedureDetailReportFacility.selectedValue;
        }
        this.reportService.getProcedureDetailReport(dateStart, dateEnd, facilityId);
        this.procedureDetailReportSubscription = this.reportService.procedureDetailReportObservable.subscribe(function (data) {
            if (data != null) {
                _this.procedureDetailReportData = data;
                _this.procedureDetailReportCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](_this.procedureDetailReportData);
                _this.procedureDetailReportCollectionView.pageSize = _this.procedureDetailReportNumberOfPageIndex;
                _this.procedureDetailReportCollectionView.trackChanges = true;
            }
            _this.isProcedureDetailReportProgressBarHidden = true;
            _this.isBtnRefreshProcedureDetailReportDataDisabled = false;
        });
    };
    // =======================================
    // Export CSV Procedure Detail Report Data
    // =======================================
    ReportsComponent.prototype.btnExportCSVProcedureDetailReport = function () {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: false,
            useBom: true,
            noDownload: false,
            headers: ["Facility", "Tx No.", "Tx Date", "Tx Time", "Patient", "Exam Taken", "Procedure", "Doctor", "Facility Rate", "Doctor Rate", "Image Rate"]
        };
        new angular5_csv_Angular5_csv__WEBPACK_IMPORTED_MODULE_2__["Angular5Csv"](this.procedureDetailReportCollectionView.items, 'Procedure Detail Report', options);
    };
    // ============================================================================
    // Combo Show Number of Rows On Selected Index Changed: Procedure Detail Report
    // ============================================================================
    ReportsComponent.prototype.cboProcedureDetailReportShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.procedureDetailReportNumberOfPageIndex = selectedValue;
        this.procedureDetailReportCollectionView.pageSize = this.procedureDetailReportNumberOfPageIndex;
        this.procedureDetailReportCollectionView.refresh();
        this.procedureDetailReportFlexGrid.refresh();
    };
    // ============
    // On Click Tabs
    // =============
    ReportsComponent.prototype.onTabClick = function (event) {
        var _this = this;
        if (event.index == 0) {
            setTimeout(function () {
                _this.procedureSummaryReportCollectionView.refresh();
                _this.procedureSummaryReportFlexGrid.refresh();
            }, 500);
        }
        else if (event.index == 1) {
            setTimeout(function () {
                _this.procedureDetailReportCollectionView.refresh();
                _this.procedureDetailReportFlexGrid.refresh();
            }, 500);
        }
    };
    // ============
    // On Load Page
    // ============
    ReportsComponent.prototype.ngOnInit = function () {
        this.createCboShowNumberOfRows();
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.getFacilityData();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    ReportsComponent.prototype.ngOnDestroy = function () {
        if (this.facilitySubscription != null)
            this.facilitySubscription.unsubscribe();
        if (this.procedureSummaryReportSubscription != null)
            this.procedureSummaryReportSubscription.unsubscribe();
        if (this.procedureDetailReportSubscription != null)
            this.procedureDetailReportSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('procedureSummaryReportFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__["WjFlexGrid"])
    ], ReportsComponent.prototype, "procedureSummaryReportFlexGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('procedureDetailReportFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_4__["WjFlexGrid"])
    ], ReportsComponent.prototype, "procedureDetailReportFlexGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cboProcedureSummaryReportFacility'),
        __metadata("design:type", wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__["WjComboBox"])
    ], ReportsComponent.prototype, "cboProcedureSummaryReportFacility", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cboProcedureDetailReportFacility'),
        __metadata("design:type", wijmo_wijmo_angular2_input__WEBPACK_IMPORTED_MODULE_5__["WjComboBox"])
    ], ReportsComponent.prototype, "cboProcedureDetailReportFacility", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [_reports_service__WEBPACK_IMPORTED_MODULE_6__["ReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.service.ts":
/*!********************************************!*\
  !*** ./src/app/reports/reports.service.ts ***!
  \********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============



var ReportService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function ReportService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ================================
        // Token: Headers and Authorization
        // ================================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // ================
        // Async Properties 
        // ================
        this.facilitiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.facilitiesObservable = this.facilitiesSource.asObservable();
        this.procedureSummaryReportSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureSummaryReportObservable = this.procedureSummaryReportSource.asObservable();
        this.procedureDetailReportSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.procedureDetailReportObservable = this.procedureDetailReportSource.asObservable();
    }
    // =================
    // Get Facility List
    // =================
    ReportService.prototype.getFacilities = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/facility/list";
        var facilitiesObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    facilitiesObservableArray.push({
                        Id: results[i].Id,
                        UserId: results[i].UserId,
                        UserFacility: results[i].UserFacility
                    });
                }
                _this.facilitiesSource.next(facilitiesObservableArray);
            }
            else {
                _this.facilitiesSource.next(null);
            }
        }, function (error) {
            _this.facilitiesSource.next(null);
        });
    };
    // ============================
    // Get Procedure Summary Report
    // ============================
    ReportService.prototype.getProcedureSummaryReport = function (startDate, endDate, facilityId) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/procedureSummaryReport/list/byDateRange/" + startDate + "/" + endDate + "/" + facilityId;
        var procedureSummaryReportObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    procedureSummaryReportObservableArray.push({
                        // Id: results[i].Id,
                        Facility: results[i].Facility,
                        TransactionNumber: results[i].TransactionNumber,
                        TransactionDateTime: results[i].TransactionDateTime,
                        TransactionTime: results[i].TransactionTime,
                        PatientName: results[i].PatientName,
                        Age: results[i].Age,
                        Modality: results[i].Modality,
                        Doctor: results[i].Doctor
                    });
                }
                _this.procedureSummaryReportSource.next(procedureSummaryReportObservableArray);
            }
            else {
                _this.procedureSummaryReportSource.next(null);
            }
        }, function (error) {
            _this.procedureSummaryReportSource.next(null);
        });
    };
    // ===========================
    // Get Procedure Detail Report
    // ===========================
    ReportService.prototype.getProcedureDetailReport = function (startDate, endDate, facilityId) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/procedureDetailReport/list/byDateRange/" + startDate + "/" + endDate + "/" + facilityId;
        var procedureDetailReportObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    procedureDetailReportObservableArray.push({
                        // Id: results[i].Id,
                        Facility: results[i].Facility,
                        TransactionNumber: results[i].TransactionNumber,
                        TransactionDateTime: results[i].TransactionDateTime,
                        Patient: results[i].Patient,
                        Modality: results[i].Modality,
                        ModalityProcedure: results[i].ModalityProcedure,
                        Doctor: results[i].Doctor,
                        FacilityRate: results[i].FacilityRate,
                        DoctorRate: results[i].DoctorRate,
                        ImageRate: results[i].ImageRate
                    });
                }
                _this.procedureDetailReportSource.next(procedureDetailReportObservableArray);
            }
            else {
                _this.procedureDetailReportSource.next(null);
            }
        }, function (error) {
            _this.procedureDetailReportSource.next(null);
        });
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/user/user-detail.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/user-detail.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/user\">User</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">\r\n        User Detail\r\n    </li>\r\n</ol>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <table border=\"0\" style=\"width: 100%;\">\r\n            <tr>\r\n                <td style=\"width: 90%;\"></td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"primary\" id=\"btnUpdateUser\" (click)=\"updateUserClick()\">\r\n                        <i class=\"fa fa-check\"></i> Update\r\n                    </button>\r\n                </td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"warn\" id=\"btnCloseUser\" routerLink=\"/software/user\">\r\n                        <i class=\"fa fa-close\"></i> Close\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                    <mat-label>Full Name</mat-label>\r\n                    <input matInput [(ngModel)]=\"userModel.FullName\" />\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                    <mat-label>Username</mat-label>\r\n                    <input matInput [(ngModel)]=\"userModel.UserName\" disabled/>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n            <mat-label>Address</mat-label>\r\n            <textarea rows=\"5\" matInput [(ngModel)]=\"userModel.Address\"></textarea>\r\n        </mat-form-field>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                    <mat-label>Contact Number</mat-label>\r\n                    <input matInput [(ngModel)]=\"userModel.ContactNumber\" />\r\n                </mat-form-field>\r\n                <!-- <div class=\"form-group\">\r\n                    <label>User Type</label>\r\n                    <div>\r\n                        <wj-combo-box [(ngModel)]=\"userModel.UserTypeId\" #cboModality [itemsSource]=\"cboUserTypeObservableArray\" [isEditable]=\"false\"\r\n                            [isRequired]=\"true\" [displayMemberPath]=\"'UserType'\" [selectedValuePath]=\"'Id'\">\r\n                        </wj-combo-box>\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <mat-form-field class=\"input-100-percent\" appearance=\"outline\">\r\n                    <mat-label>User Type</mat-label>\r\n                    <mat-select matInput placeholder=\"Select User Type\" [(ngModel)]=\"userModel.UserTypeId\">\r\n                        <mat-option>--</mat-option>\r\n                        <mat-option *ngFor=\"let cboUserType of cboUserTypeObservableArray\" [value]=\"cboUserType.Id\">\r\n                            {{ cboUserType.UserType }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <table border=\"0\" style=\"width: 100%;\">\r\n            <tr>\r\n                <td style=\"width: 95%;\"></td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"primary\" (click)=\"btnAddUserDoctorClick()\">\r\n                        <i class=\"fa fa-plus\"></i> Add\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <mat-progress-bar class=\"example-margin\" [hidden]=\"isUserDoctorProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n        <wj-flex-grid #userDoctorFlexGrid [itemsSource]=\"userDoctorCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"2\">\r\n            <wj-flex-grid-filter></wj-flex-grid-filter>\r\n            <wj-flex-grid-column [header]=\"Edit\" [isReadOnly]=\"true\" [isContentHtml]=\"true\" [width]=\"95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"primary\" class=\"btn-xs\" (click)=\"btnEditUserDoctorClick()\">\r\n                        <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"Delete\" [isReadOnly]=\"true\" [width]=\"96\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"warn\" class=\"btn-xs\" (click)=\"btnDeleteUserDoctorClick()\">\r\n                        <i class=\"fa fa-trash fa-fw\"></i> Delete\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Doctor'\" [binding]=\"'Doctor'\" [isReadOnly]=\"true\" [width]=\"'*'\"></wj-flex-grid-column>\r\n        </wj-flex-grid>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userDoctorCollectionView.moveToFirstPage()\">\r\n                <i class=\"fa fa-fast-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userDoctorCollectionView.moveToPreviousPage()\">\r\n                <i class=\"fa fa-step-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                {{ userDoctorCollectionView.pageIndex + 1 }} / {{ userDoctorCollectionView.pageCount }}\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userDoctorCollectionView.moveToNextPage()\">\r\n                <i class=\"fa fa-step-forward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userDoctorCollectionView.moveToLastPage()\">\r\n                <i class=\"fa fa-fast-forward\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-detail.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/user-detail.component.ts ***!
  \***********************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dialog_user_user_doctor_detail_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/user/user-doctor-detail.dialog.component */ "./src/app/dialog/user/user-doctor-detail.dialog.component.ts");
/* harmony import */ var _dialog_user_user_doctor_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog/user/user-doctor-delete.dialog.component */ "./src/app/dialog/user/user-doctor-delete.dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====================
// Angular and Material
// ====================



// ======
// Toastr
// ======

// =======
// Service
// =======

// ====================
// Async Task and Wijmo
// ====================

// =======
// Dialogs
// =======


var UserDetailComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function UserDetailComponent(dialog, userService, toastr, router, activatedRoute) {
        this.dialog = dialog;
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'user detail';
        this.isUserDoctorProgressBarHidden = false;
        // ================
        // Initialize Model
        // ================
        this.userModel = {
            Id: 0,
            Email: "",
            UserName: "",
            FullName: "",
            Address: "",
            Password: "",
            ConfirmPassword: "",
            ContactNumber: "",
            UserTypeId: 0
        };
        this.userDoctorModel = {
            Id: 0,
            UserId: 0,
            DoctorId: 0,
        };
        this.userDoctorData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        this.userDoctorCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["CollectionView"](this.userDoctorData);
    }
    // =======================
    // Get Parameter Id Method
    // =======================
    UserDetailComponent.prototype.getId = function () {
        var id = 0;
        this.activatedRoute.params.subscribe(function (params) {
            id = params["id"];
        });
        return id;
    };
    // ====================
    // Get User Detail Data
    // ====================
    UserDetailComponent.prototype.getUserDetailData = function () {
        var _this = this;
        this.userService.getUserDetail(this.getId());
        this.userSubscription = this.userService.userDetailObservable
            .subscribe(function (data) {
            _this.userModel.Id = data.Id;
            _this.userModel.UserName = data.UserName;
            _this.userModel.FullName = data.FullName;
            _this.userModel.Address = data.Address;
            _this.userModel.ContactNumber = data.ContactNumber;
            _this.userModel.UserTypeId = data.UserTypeId;
            _this.getUserTypeData(_this.userModel.UserTypeId);
        });
    };
    // ==================
    // Get User Type Data
    // ==================
    UserDetailComponent.prototype.getUserTypeData = function (userTypeId) {
        var _this = this;
        this.userService.getUserType();
        this.userTypeSubscription = this.userService.userTypeObservable.subscribe(function (data) {
            var modalityObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
            if (data.length > 0) {
                for (var i = 0; i <= data.length - 1; i++) {
                    modalityObservableArray.push({
                        Id: data[i].Id,
                        UserType: data[i].UserType,
                    });
                }
            }
            _this.cboUserTypeObservableArray = modalityObservableArray;
            setTimeout(function () {
                _this.userModel.UserTypeId = userTypeId;
            }, 1000);
        });
    };
    // ===========
    // Update User
    // ===========
    UserDetailComponent.prototype.updateUserClick = function () {
        var _this = this;
        var btnUpdateUser = document.getElementById("btnUpdateUser");
        btnUpdateUser.setAttribute("disabled", "disabled");
        btnUpdateUser.innerHTML = "<i class='fa fa-check fa-fw'></i> Updating...";
        var btnCloseUser = document.getElementById("btnCloseUser");
        btnCloseUser.setAttribute("disabled", "disabled");
        this.userService.updateUser(this.userModel);
        this.userSubscription = this.userService.userUpdateObservable.subscribe(function (data) {
            if (data == 200) {
                _this.toastr.success("Update Successful!");
                btnUpdateUser.removeAttribute("disabled");
                btnUpdateUser.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                btnCloseUser.removeAttribute("disabled");
            }
            else if (data == 404) {
                _this.toastr.error('Not Found!');
                btnUpdateUser.removeAttribute("disabled");
                btnUpdateUser.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                btnCloseUser.removeAttribute("disabled");
            }
            else if (data == 400) {
                _this.toastr.error('Bad Request!');
                btnUpdateUser.removeAttribute("disabled");
                btnUpdateUser.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                btnCloseUser.removeAttribute("disabled");
            }
            else if (data == 500) {
                _this.toastr.error('Internal Server Error!');
                btnUpdateUser.removeAttribute("disabled");
                btnUpdateUser.innerHTML = "<i class='fa fa-check fa-fw'></i> Update";
                btnCloseUser.removeAttribute("disabled");
            }
        });
    };
    // ====================
    // Get User Doctor Data
    // ====================
    UserDetailComponent.prototype.getUserDoctorData = function () {
        var _this = this;
        this.userDoctorData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"]();
        this.userDoctorCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["CollectionView"](this.userDoctorData);
        this.userDoctorCollectionView.pageSize = 15;
        this.userDoctorCollectionView.trackChanges = true;
        this.isUserDoctorProgressBarHidden = false;
        this.userService.getUserDoctor(this.getId());
        this.userDoctorSubscription = this.userService.userDoctorObservable.subscribe(function (data) {
            if (data != null) {
                _this.userDoctorData = data;
                _this.userDoctorCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_5__["CollectionView"](_this.userDoctorData);
                _this.userDoctorCollectionView.pageSize = 15;
                _this.userDoctorCollectionView.trackChanges = true;
            }
            _this.isUserDoctorProgressBarHidden = true;
        });
    };
    // ===============
    // Add User Doctor
    // ===============
    UserDetailComponent.prototype.btnAddUserDoctorClick = function () {
        var _this = this;
        this.userDoctorModel.Id = 0;
        this.userDoctorModel.UserId = this.getId();
        this.userDoctorModel.DoctorId = 0;
        var detailUserDoctorDialogRef = this.dialog.open(_dialog_user_user_doctor_detail_dialog_component__WEBPACK_IMPORTED_MODULE_6__["UserDoctorDetailDialogComponent"], {
            width: '600px',
            data: {
                objUserDoctorDetailDialogTitle: "Add User Doctor",
                objCurrentUserDoctor: this.userDoctorModel
            }
        });
        detailUserDoctorDialogRef.disableClose = true;
        detailUserDoctorDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Save Successful!');
                _this.getUserDoctorData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ================
    // Edit User Doctor
    // ================
    UserDetailComponent.prototype.btnEditUserDoctorClick = function () {
        var _this = this;
        var currentUserDoctor = this.userDoctorCollectionView.currentItem;
        this.userDoctorModel.Id = currentUserDoctor.Id;
        this.userDoctorModel.UserId = this.getId();
        this.userDoctorModel.DoctorId = currentUserDoctor.DoctorId;
        var detailUserDoctorDialogRef = this.dialog.open(_dialog_user_user_doctor_detail_dialog_component__WEBPACK_IMPORTED_MODULE_6__["UserDoctorDetailDialogComponent"], {
            width: '800px',
            data: {
                objUserDoctorDetailDialogTitle: "Edit User Doctor",
                objCurrentUserDoctor: this.userDoctorModel
            }
        });
        detailUserDoctorDialogRef.disableClose = true;
        detailUserDoctorDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Update Successful!');
                _this.getUserDoctorData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ==================
    // Delete User Doctor
    // ==================
    UserDetailComponent.prototype.btnDeleteUserDoctorClick = function () {
        var _this = this;
        var currentUserDoctor = this.userDoctorCollectionView.currentItem;
        this.userDoctorModel.Id = currentUserDoctor.Id;
        var deleteUserDoctorDialogRef = this.dialog.open(_dialog_user_user_doctor_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["UserDoctorDeleteDialogComponent"], {
            width: '400px',
            data: {
                objUserDoctorDeleteDialogTitle: "Delete User Doctor",
                objCurrentUserDoctor: this.userDoctorModel
            }
        });
        deleteUserDoctorDialogRef.disableClose = true;
        deleteUserDoctorDialogRef.afterClosed().subscribe(function (result) {
            if (result == 200) {
                _this.toastr.success('Delete Successful!');
                _this.getUserDoctorData();
            }
            else if (result == 404) {
                _this.toastr.error('Not Found!');
            }
            else if (result == 400) {
                _this.toastr.error('Bad Request!');
            }
            else if (result == 500) {
                _this.toastr.error('Internal Server Error!');
            }
            ;
        });
    };
    // ============
    // On Load Page
    // ============
    UserDetailComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.getUserDetailData();
            this.getUserDoctorData();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    UserDetailComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription != null)
            this.userSubscription.unsubscribe();
        if (this.userTypeSubscription != null)
            this.userTypeSubscription.unsubscribe();
        if (this.userDoctorSubscription != null)
            this.userDoctorSubscription.unsubscribe();
    };
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/user/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css"), __webpack_require__(/*! ../layout/layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n        <a routerLink=\"/software/dashboard\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\">\r\n        User\r\n    </li>\r\n</ol>\r\n<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        <table border=\"0\" style=\"width: 100%;\">\r\n            <tr>\r\n                <td style=\"width: 95%;\">\r\n                    <div class=\"input-group\">\r\n                        <button class=\"btn btn-info\" type=\"button\" [disabled]=\"isBtnRefreshUserDataDisabled\" (click)=\"getUserData()\">\r\n                            <i class=\"fa fa-refresh\"></i>\r\n                        </button>\r\n                        &nbsp; &nbsp;\r\n                        <div class=\"input-group-prepend\">\r\n                            <div class=\"input-group-text\">\r\n                                <b>Show</b>\r\n                            </div>\r\n                        </div>\r\n                        <wj-combo-box #cboNumberOfRows [itemsSource]=\"cboShowNumberOfRows\" [isEditable]=\"false\" [isRequired]=\"true\" [displayMemberPath]=\"'rowString'\"\r\n                            [selectedValuePath]=\"'rowNumber'\" (selectedIndexChanged)=\"cboShowNumberOfRowsOnSelectedIndexChanged(cboNumberOfRows.selectedValue)\"\r\n                            style=\"width: 180px;\">\r\n                        </wj-combo-box>\r\n                    </div>\r\n                </td>\r\n                <td style=\"width: 5%;\" align=\"right\">\r\n                    <button mat-raised-button color=\"warn\" routerLink=\"/software/dashboard\">\r\n                        <i class=\"fa fa-close\"></i> Close\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <mat-progress-bar class=\"example-margin\" [hidden]=\"isProgressBarHidden\" [color]=\"'primary'\" [mode]=\"'indeterminate'\"></mat-progress-bar>\r\n        <wj-flex-grid #userFlexGrid [itemsSource]=\"userCollectionView\" [selectionMode]=\"3\" [frozenColumns]=\"1\">\r\n            <wj-flex-grid-filter></wj-flex-grid-filter>\r\n            <wj-flex-grid-column [header]=\"Edit\" [isReadOnly]=\"true\" [isContentHtml]=\"true\" [width]=\"95\">\r\n                <ng-template wjFlexGridCellTemplate [cellType]=\"'Cell'\" let-cell=\"cell\">\r\n                    <button mat-raised-button color=\"primary\" class=\"btn-xs\" (click)=\"btnEditUserClick()\">\r\n                        <i class=\"fa fa-edit fa-fw\"></i> Edit\r\n                    </button>\r\n                </ng-template>\r\n            </wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Username'\" [binding]=\"'UserName'\" [isReadOnly]=\"true\" [width]=\"'1.5*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Full Name'\" [binding]=\"'FullName'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Address'\" [binding]=\"'Address'\" [isReadOnly]=\"true\" [width]=\"'4*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'Contact Number'\" [binding]=\"'ContactNumber'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n            <wj-flex-grid-column [header]=\"'User Type'\" [binding]=\"'UserType'\" [isReadOnly]=\"true\" [width]=\"'2*'\"></wj-flex-grid-column>\r\n        </wj-flex-grid>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <div class=\"col-sm-12 btn-group\" style=\"padding: 5px 0px 5px 0px;\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userCollectionView.moveToFirstPage()\">\r\n                <i class=\"fa fa-fast-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userCollectionView.moveToPreviousPage()\">\r\n                <i class=\"fa fa-step-backward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" disabled style=\"width:100px\">\r\n                {{ userCollectionView.pageIndex + 1 }} / {{ userCollectionView.pageCount }}\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userCollectionView.moveToNextPage()\">\r\n                <i class=\"fa fa-step-forward\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"userCollectionView.moveToLastPage()\">\r\n                <i class=\"fa fa-fast-forward\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wijmo/wijmo.angular2.grid */ "./node_modules/wijmo/wijmo.angular2.grid.js");
/* harmony import */ var wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ====================
// Angular and Material
// ====================


// ======
// Toastr
// ======

// ====================
// Async Task and Wijmo
// ====================



var UserComponent = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function UserComponent(userService, toastr, router) {
        this.userService = userService;
        this.toastr = toastr;
        this.router = router;
        // ================
        // Global Variables
        // ================
        this.title = 'user';
        this.isProgressBarHidden = false;
        this.userData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.userCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](this.userData);
        this.isBtnRefreshUserDataDisabled = true;
        this.cboShowNumberOfRows = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        // ================
        // Initialize Model
        // ================
        this.userModel = {
            Id: 0,
            Email: "",
            UserName: "",
            FullName: "",
            Address: "",
            Password: "",
            ConfirmPassword: "",
            ContactNumber: "",
            UserTypeId: 0
        };
    }
    // ================================
    // Create Combo Show Number of Rows
    // ================================
    UserComponent.prototype.createCboShowNumberOfRows = function () {
        for (var i = 0; i <= 4; i++) {
            var rows = 0;
            var rowsString = "";
            if (i == 0) {
                rows = 15;
                rowsString = "Show 15 Rows";
            }
            else if (i == 1) {
                rows = 50;
                rowsString = "Show 50 Rows";
            }
            else if (i == 2) {
                rows = 100;
                rowsString = "Show 100 Rows";
            }
            else if (i == 3) {
                rows = 150;
                rowsString = "Show 150 Rows";
            }
            else {
                rows = 200;
                rowsString = "Show 200 Rows";
            }
            this.cboShowNumberOfRows.push({
                rowNumber: rows,
                rowString: rowsString
            });
        }
    };
    // ===================================================
    // Combo Show Number of Rows On Selected Index Changed
    // ===================================================
    UserComponent.prototype.cboShowNumberOfRowsOnSelectedIndexChanged = function (selectedValue) {
        this.usersNumberOfPageIndex = selectedValue;
        this.userCollectionView.pageSize = this.usersNumberOfPageIndex;
        this.userCollectionView.refresh();
        this.userFlexGrid.refresh();
    };
    // =============
    // Get User Data
    // =============
    UserComponent.prototype.getUserData = function () {
        var _this = this;
        this.userData = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.userCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](this.userData);
        this.userCollectionView.pageSize = 15;
        this.userCollectionView.trackChanges = true;
        this.isProgressBarHidden = false;
        this.isBtnRefreshUserDataDisabled = true;
        this.userService.getUser();
        this.userSubscription = this.userService.userObservable.subscribe(function (data) {
            if (data != null) {
                _this.userData = data;
                _this.userCollectionView = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["CollectionView"](_this.userData);
                _this.userCollectionView.pageSize = _this.usersNumberOfPageIndex;
                _this.userCollectionView.trackChanges = true;
            }
            _this.isProgressBarHidden = true;
            _this.isBtnRefreshUserDataDisabled = false;
        });
    };
    // =========
    // Edit User
    // =========
    UserComponent.prototype.btnEditUserClick = function () {
        var currentUser = this.userCollectionView.currentItem;
        this.router.navigate(['/software/user/detail', currentUser.Id]);
    };
    // ============
    // On Load Page
    // ============
    UserComponent.prototype.ngOnInit = function () {
        this.createCboShowNumberOfRows();
        if (localStorage.getItem("access_token") == null) {
            this.router.navigate(['/account/login']);
        }
        else {
            this.getUserData();
        }
    };
    // ===============
    // On Destory Page
    // ===============
    UserComponent.prototype.ngOnDestroy = function () {
        if (this.userSubscription != null)
            this.userSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userFlexGrid'),
        __metadata("design:type", wijmo_wijmo_angular2_grid__WEBPACK_IMPORTED_MODULE_5__["WjFlexGrid"])
    ], UserComponent.prototype, "userFlexGrid", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css"), __webpack_require__(/*! ../layout/layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wijmo/wijmo */ "./node_modules/wijmo/wijmo.js");
/* harmony import */ var wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-settings */ "./src/app/app-settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// =======
// Angular
// =======



// =============
// Async Classes
// =============



var UserService = /** @class */ (function () {
    // ===========
    // Constructor
    // ===========
    function UserService(router, http, appSettings) {
        this.router = router;
        this.http = http;
        this.appSettings = appSettings;
        // ================================
        // Token: Headers and Authorization
        // ================================
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
        });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.defaultAPIHostURL = this.appSettings.defaultAPIHostURL;
        // ================
        // Async Properties 
        // ================
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userObservable = this.userSource.asObservable();
        this.userDetailSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userDetailObservable = this.userDetailSource.asObservable();
        this.userCurrentSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userCurrentObservable = this.userCurrentSource.asObservable();
        this.userTypeSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userTypeObservable = this.userTypeSource.asObservable();
        this.userUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userUpdateObservable = this.userUpdateSource.asObservable();
        this.userDoctorSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userDoctorObservable = this.userDoctorSource.asObservable();
        this.doctorSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.doctorObservable = this.doctorSource.asObservable();
        this.userDoctorSavedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userDoctorSavedObservable = this.userDoctorSavedSource.asObservable();
        this.userDoctorDeletedSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userDoctorDeletedObservable = this.userDoctorDeletedSource.asObservable();
        // ================
        // Initialize Model
        // ================
        this.userModel = {
            Id: 0,
            Email: "",
            UserName: "",
            FullName: "",
            Address: "",
            Password: "",
            ConfirmPassword: "",
            ContactNumber: "",
            UserTypeId: 0
        };
        this.userDoctorModel = {
            Id: 0,
            UserId: 0,
            DoctorId: 0,
        };
    }
    // ========
    // Get User
    // ========
    UserService.prototype.getUser = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/user/list";
        var userObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    userObservableArray.push({
                        Id: results[i].Id,
                        UserName: results[i].UserName,
                        FullName: results[i].FullName,
                        Address: results[i].Address,
                        ContactNumber: results[i].ContactNumber,
                        UserTypeId: results[i].UserTypeId,
                        UserType: results[i].UserType
                    });
                }
                _this.userSource.next(userObservableArray);
            }
            else {
                _this.userSource.next(null);
            }
        }, function (error) {
            _this.userSource.next(null);
        });
    };
    // ===============
    // Get User Detail
    // ===============
    UserService.prototype.getUserDetail = function (id) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/user/detail/" + id;
        this.http.get(url, this.options).subscribe(function (response) {
            var result = response.json();
            if (result != null) {
                _this.userModel.Id = result.Id;
                _this.userModel.UserName = result.UserName;
                _this.userModel.FullName = result.FullName;
                _this.userModel.Address = result.Address;
                _this.userModel.ContactNumber = result.ContactNumber;
                _this.userModel.UserTypeId = result.UserTypeId;
                _this.userDetailSource.next(_this.userModel);
            }
        }, function (error) {
            _this.userDetailSource.next(null);
        });
    };
    // =============
    // Get User Type
    // =============
    UserService.prototype.getUserType = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/userType/list";
        var userTypeObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    userTypeObservableArray.push({
                        Id: results[i].Id,
                        UserType: results[i].UserType
                    });
                }
                _this.userTypeSource.next(userTypeObservableArray);
            }
        }, function (error) {
            _this.userTypeSource.next(null);
        });
    };
    // ===========
    // Update User
    // ===========
    UserService.prototype.updateUser = function (userModel) {
        var _this = this;
        var id = userModel.Id;
        var url = this.defaultAPIHostURL + "/api/user/update/" + id;
        this.http.put(url, JSON.stringify(userModel), this.options).subscribe(function (response) {
            _this.userUpdateSource.next(200);
        }, function (error) {
            if (error.status == 404) {
                _this.userUpdateSource.next(404);
            }
            else if (error.status == 400) {
                _this.userUpdateSource.next(400);
            }
            else if (error.status == 500) {
                _this.userUpdateSource.next(500);
            }
        });
    };
    // ===============
    // Get User Doctor
    // ===============
    UserService.prototype.getUserDoctor = function (userId) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/userDoctor/list/" + userId;
        var userDoctorObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    userDoctorObservableArray.push({
                        Id: results[i].Id,
                        UserId: results[i].UserId,
                        DoctorId: results[i].DoctorId,
                        Doctor: results[i].Doctor
                    });
                }
                _this.userDoctorSource.next(userDoctorObservableArray);
            }
            else {
                _this.userDoctorSource.next(null);
            }
        }, function (error) {
            _this.userDoctorSource.next(null);
        });
    };
    // ==========
    // Get Doctor
    // ==========
    UserService.prototype.getDoctor = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/user/list/byUserType/2";
        var doctorObservableArray = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        this.http.get(url, this.options).subscribe(function (response) {
            var results = new wijmo_wijmo__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](response.json());
            if (results.length > 0) {
                for (var i = 0; i <= results.length - 1; i++) {
                    doctorObservableArray.push({
                        Id: results[i].Id,
                        FullName: results[i].FullName
                    });
                }
                _this.doctorSource.next(doctorObservableArray);
            }
            else {
                _this.doctorSource.next(null);
            }
        }, function (error) {
            _this.doctorSource.next(null);
        });
    };
    // ================
    // Save User Doctor
    // ================
    UserService.prototype.saveUserDoctor = function (userDoctorModel) {
        var _this = this;
        if (userDoctorModel.Id == 0) {
            var url = this.defaultAPIHostURL + "/api/userDoctor/add";
            this.http.post(url, JSON.stringify(userDoctorModel), this.options).subscribe(function (response) {
                _this.userDoctorSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.userDoctorSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.userDoctorSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.userDoctorSavedSource.next(500);
                }
            });
        }
        else {
            var id = userDoctorModel.Id;
            var url = this.defaultAPIHostURL + "/api/userDoctor/update/" + id;
            this.http.put(url, JSON.stringify(userDoctorModel), this.options).subscribe(function (response) {
                _this.userDoctorSavedSource.next(200);
            }, function (error) {
                if (error.status == 404) {
                    _this.userDoctorSavedSource.next(404);
                }
                else if (error.status == 400) {
                    _this.userDoctorSavedSource.next(400);
                }
                else if (error.status == 500) {
                    _this.userDoctorSavedSource.next(500);
                }
            });
        }
    };
    // ==================
    // Delete User Doctor
    // ==================
    UserService.prototype.deleteUserDoctor = function (id) {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/userDoctor/delete/" + id;
        this.http.delete(url, this.options).subscribe(function (response) {
            _this.userDoctorDeletedSource.next(200);
        }, function (error) {
            if (error.status == 404) {
                _this.userDoctorDeletedSource.next(404);
            }
            else if (error.status == 400) {
                _this.userDoctorDeletedSource.next(400);
            }
            else if (error.status == 500) {
                _this.userDoctorDeletedSource.next(500);
            }
        });
    };
    // ================
    // Get Current User
    // ================
    UserService.prototype.getCurrentUser = function () {
        var _this = this;
        var url = this.defaultAPIHostURL + "/api/user/current";
        this.http.get(url, this.options).subscribe(function (response) {
            var result = response.json();
            if (result != null) {
                _this.userModel.Id = result.Id;
                _this.userModel.UserName = result.UserName;
                _this.userModel.FullName = result.FullName;
                _this.userModel.Address = result.Address;
                _this.userModel.ContactNumber = result.ContactNumber;
                _this.userModel.UserTypeId = result.UserTypeId;
                _this.userCurrentSource.next(_this.userModel);
            }
            else {
                _this.userCurrentSource.next(null);
            }
        }, function (error) {
            _this.userCurrentSource.next(null);
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\DMTIpacs\Apps\dmtipacs-uiv3\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map