(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/addvl/addvl.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addvl/addvl.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add\">\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Thêm mới</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"cancel()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<form #form='ngForm'>\n<div class=\"modal-body\">\n  <div class=\"row\">\n      <div class=\"col-4\">\n          <p>Mã:</p>\n      </div>\n      <div class=\"col-8\">\n          <input type=\"text\" [(ngModel)]=\"add.Ma\" name=\"ma\" placeholder=\"Nhập mã\" required>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-4\">\n          <p>Tên:</p>\n      </div>\n      <div class=\"col-8\">\n          <input type=\"text\" [(ngModel)]=\"add.Ten\" name=\"ten\" placeholder=\"Nhập tên\" required>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-4\">\n          <p>Đơn vị tính:</p>\n      </div>\n      <div class=\"col-8\">\n          <input type=\"text\" [(ngModel)]=\"add.DVT\" name=\"dvt\" placeholder=\"Nhập đơn vị tính\">\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-4\">\n          <p>Nhà cung cấp:</p>\n      </div>\n      <div class=\"col-8\">\n          <input type=\"text\" [(ngModel)]=\"add.NCC\" name=\"ncc\" placeholder=\"Nhập nhà cung cấp\">\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-4\">\n          <p>Ghi chú:</p>\n      </div>\n      <div class=\"col-8\">\n          <input type=\"text\" [(ngModel)]=\"add.GhiChu\" name=\"note\" placeholder=\"Nhập ghi chú\">\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-4\">\n          <p>IdParent:</p>\n      </div>\n      <div class=\"col-8\">\n          <input type=\"text\" [(ngModel)]=\"add.IdParent\" name=\"idp\" [placeholder]=\"add.IdParent\" disabled>\n      </div>\n  </div>\n  <div class=\"row\" style=\"justify-content: center;width: 100%;\">\n    <button type=\"button\" name=\"save\" class=\"btn btn-outline-info mr-4\" [disabled]='form.invalid' (click)=\"save()\">Save</button>\n    <button type=\"button\" name=\"cancel\" class=\"btn btn-outline-danger ml-4\" (click)=\"cancel()\">Close</button>\n  </div>\n</div>\n</form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-vatlieu></app-vatlieu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vatlieu/vatlieu.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vatlieu/vatlieu.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header></header>\n<div class=\"to\">\n    <div class=\"menu\"></div>\n    <!-- end menu -->\n    <div class=\"body\">\n        <div class=\"data\">\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-lg-5 col-sm-5 col-md-5 mt-4\">\n                        <ng-container *ngTemplateOutlet=\"treeViewList; context:{$implicit:root}\">\n                        </ng-container>\n                        <ng-template #treeViewList let-list>\n                            <ul style=\"list-style-type:none;\">\n                                <li *ngFor=\"let item of list\">\n                                    <i *ngIf=\"item.child.length!==0\" class=\"fas fa-plus pr-1\"></i>\n                                    <a href=\"#\" [ngStyle]=\"item.state === true ? abc : def\" (click)='showData(item.Id,item.state)'>{{item.Ten}}</a>\n                                    <ng-container *ngTemplateOutlet=\"treeViewList; context:{$implicit: item.child}\">\n                                    </ng-container>\n                                </li>\n                            </ul>\n                        </ng-template>\n                    </div>\n                    <div class=\"col-lg-7 col-sm-7 col-md-7 mt-4\">\n                        <div class=\"row mb-2\">\n                            <div class=\"col-lg-3 col-sm-4 col-md-3\">\n                                <p>Mã:</p>\n                            </div>\n                            <div class=\"col-lg-9 col-sm-8 col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"selectedItem.Ma\">\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"col-lg-3 col-sm-4 col-md-3\">\n                                <p>Tên:</p>\n                            </div>\n                            <div class=\"col-lg-9 col-sm-8 col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"selectedItem.Ten\">\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"col-lg-3 col-sm-4 col-md-3\">\n                                <p>Đơn vị tính:</p>\n                            </div>\n                            <div class=\"col-lg-9 col-sm-8 col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"selectedItem.DVT\">\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"col-lg-3 col-sm-4 col-md-3\">\n                                <p>Nhà cung cấp:</p>\n                            </div>\n                            <div class=\"col-lg-9 col-sm-8 col-md-9\">\n                                <input type=\"text\" value=\"{{ncc}}\" [(ngModel)]=\"selectedItem.NCC\">\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"col-lg-3 col-sm-4 col-md-3\">\n                                <p>Ghi chú:</p>\n                            </div>\n                            <div class=\"col-lg-9 col-sm-8 col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"selectedItem.GhiChu\">\n                            </div>\n                        </div>\n                        <div class=\"row mb-2 check\">\n                            <input type=\"radio\" [(ngModel)]='cungcap' [value]='true' name=\"test\"> Thêm mới cùng cấp\n                        </div>\n                        <div class=\"row mb-2 check\">\n                            <input type=\"radio\" [(ngModel)]='cungcap' [value]='false' name=\"test\"> Thêm mới cấp con\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-4\">\n                                <button class=\"btn btn-info\" name=\"add\" [disabled]=\"xyz\" (click)=\"addvl()\">Thêm</button>\n                            </div>\n                            <div class=\"col-4\">\n                                <button class=\"btn btn-info\" name=\"repair\" [disabled]=\"xyz\" (click)=\"suaVatlieu();\">Sửa</button>\n                            </div>\n                            <div class=\"col-4\">\n                                <button class=\"btn btn-danger\" name=\"del\" [disabled]=\"xyz\" (click)=\"removeVatlieu()\">Xóa</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- end container -->\n        </div>\n        <!-- end data -->\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/addvl/addvl.component.css":
/*!*******************************************!*\
  !*** ./src/app/addvl/addvl.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input{\r\n    width: 100%;\r\n}\r\n.add{\r\n    border: 2px solid skyblue;\r\n}\r\nbutton.close:focus{\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkdmwvYWRkdmwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWRkdmwvYWRkdmwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFkZHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHNreWJsdWU7XHJcbn1cclxuYnV0dG9uLmNsb3NlOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/addvl/addvl.component.ts":
/*!******************************************!*\
  !*** ./src/app/addvl/addvl.component.ts ***!
  \******************************************/
/*! exports provided: AddvlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddvlComponent", function() { return AddvlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let AddvlComponent = class AddvlComponent {
    constructor(modal) {
        this.modal = modal;
        this.add = {
            Ten: "",
            Ma: "",
            IdParent: "",
            DVT: "",
            NCC: "",
            GhiChu: ""
        };
    }
    save() {
        this.modal.close(this.add);
    }
    cancel() {
        this.modal.dismiss("Đã hủy!");
    }
    ngOnInit() {
    }
};
AddvlComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
AddvlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addvl',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addvl.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/addvl/addvl.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addvl.component.css */ "./src/app/addvl/addvl.component.css")).default]
    })
], AddvlComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'homework';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vatlieu_vatlieu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vatlieu/vatlieu.component */ "./src/app/vatlieu/vatlieu.component.ts");
/* harmony import */ var _addvl_addvl_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addvl/addvl.component */ "./src/app/addvl/addvl.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _vatlieu_vatlieu_component__WEBPACK_IMPORTED_MODULE_8__["VatlieuComponent"],
            _addvl_addvl_component__WEBPACK_IMPORTED_MODULE_9__["AddvlComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        entryComponents: [_addvl_addvl_component__WEBPACK_IMPORTED_MODULE_9__["AddvlComponent"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/service/service.ts":
/*!************************************!*\
  !*** ./src/app/service/service.ts ***!
  \************************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let Services = class Services {
    constructor(http) {
        this.http = http;
    }
    getvatlieu(id) {
        let url;
        if (id === "a") {
            url = 'https://5e1d2989f846e500144d57ae.mockapi.io/chisogia/qlyvatlieu';
        }
        else {
            url = 'https://5e1d2989f846e500144d57ae.mockapi.io/chisogia/qlyvatlieu/' + id;
        }
        return this.http.get(url);
    }
    deleteVatLieu(id) {
        let url;
        url = 'https://5e1d2989f846e500144d57ae.mockapi.io/chisogia/qlyvatlieu/' + id;
        return this.http.delete(url);
    }
    addVatLieu(a) {
        return this.http.post('https://5e1d2989f846e500144d57ae.mockapi.io/chisogia/qlyvatlieu', a);
    }
    repairVatLieu(id, array) {
        return this.http.put('https://5e1d2989f846e500144d57ae.mockapi.io/chisogia/qlyvatlieu/' + id, array);
    }
};
Services.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
Services = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], Services);



/***/ }),

/***/ "./src/app/vatlieu/vatlieu.component.css":
/*!***********************************************!*\
  !*** ./src/app/vatlieu/vatlieu.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* *{margin: 0; padding: 0;} */\r\nheader{\r\n    width: 100%;\r\n    height: 15vh;\r\n    background-color: yellowgreen;\r\n}\r\n.menu{\r\n    display: block;\r\n    width: 10vw;\r\n    height: 85vh;\r\n    background-color: violet;\r\n    float: left;\r\n}\r\n.body .data input{\r\n    width: 50%;\r\n}\r\n.body .data .row.check input{\r\n    width: auto;\r\n    margin: auto 0;\r\n}\r\n.body .data .col-4 button{\r\n    width: 80%;\r\n    height: 2.5rem;\r\n}\r\nul.tree, ul.tree ul {\r\n    list-style-type: none;\r\n }\r\nul.tree, ul.tree ul {\r\n  list-style:none;\r\n  margin:0;\r\n  padding:0;\r\n}\r\nul.tree ul {\r\n  margin-left:20px; \r\n  position:relative;\r\n}\r\nul.tree ul:before {\r\n  content:\"\";\r\n  display:block;\r\n  width:0;\r\n  position:absolute;\r\n  top:0;\r\n  bottom:0;\r\n  left:0;\r\n  border-left:1px solid;\r\n}\r\nul.tree li {\r\n  margin:0;\r\n  padding:0 13px; \r\n  font-size:16px;\r\n  line-height:30px; \r\n  color:#369;\r\n  font-weight:bold;\r\n  position:relative;\r\n}\r\nul.tree ul li:before {\r\n  content:\"\";\r\n  display:block;\r\n  width:10px; \r\n  height:0;\r\n  border-top:1px solid;\r\n  position:absolute;\r\n  top:16px;\r\n  left:0;\r\n}\r\nul.tree ul li:last-child:before {\r\n  background:white; \r\n  height:auto;\r\n  top:15px; \r\n  bottom:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF0bGlldS92YXRsaWV1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCO0FBQzlCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7Q0FDeEI7QUFDQTtFQUNDLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsS0FBSztFQUNMLFFBQVE7RUFDUixNQUFNO0VBQ04scUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxRQUFRO0VBQ1IsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVTtFQUNWLFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixNQUFNO0FBQ1I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL3ZhdGxpZXUvdmF0bGlldS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKnttYXJnaW46IDA7IHBhZGRpbmc6IDA7fSAqL1xyXG5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xyXG59XHJcbi5tZW51e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTB2dztcclxuICAgIGhlaWdodDogODV2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5ib2R5IC5kYXRhIGlucHV0e1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4uYm9keSAuZGF0YSAucm93LmNoZWNrIGlucHV0e1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxufVxyXG4uYm9keSAuZGF0YSAuY29sLTQgYnV0dG9ue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG59XHJcbnVsLnRyZWUsIHVsLnRyZWUgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gfVxyXG4gdWwudHJlZSwgdWwudHJlZSB1bCB7XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MDtcclxufVxyXG4gXHJcbnVsLnRyZWUgdWwge1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7IFxyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbiBcclxudWwudHJlZSB1bDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOjA7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDowO1xyXG4gIGJvcmRlci1sZWZ0OjFweCBzb2xpZDtcclxufVxyXG4gXHJcbnVsLnRyZWUgbGkge1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6MCAxM3B4OyBcclxuICBmb250LXNpemU6MTZweDtcclxuICBsaW5lLWhlaWdodDozMHB4OyBcclxuICBjb2xvcjojMzY5O1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuIFxyXG51bC50cmVlIHVsIGxpOmJlZm9yZSB7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgd2lkdGg6MTBweDsgXHJcbiAgaGVpZ2h0OjA7XHJcbiAgYm9yZGVyLXRvcDoxcHggc29saWQ7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjE2cHg7XHJcbiAgbGVmdDowO1xyXG59XHJcbiBcclxudWwudHJlZSB1bCBsaTpsYXN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZDp3aGl0ZTsgXHJcbiAgaGVpZ2h0OmF1dG87XHJcbiAgdG9wOjE1cHg7IFxyXG4gIGJvdHRvbTowO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/vatlieu/vatlieu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vatlieu/vatlieu.component.ts ***!
  \**********************************************/
/*! exports provided: VatlieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatlieuComponent", function() { return VatlieuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _addvl_addvl_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addvl/addvl.component */ "./src/app/addvl/addvl.component.ts");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/service */ "./src/app/service/service.ts");





let VatlieuComponent = class VatlieuComponent {
    constructor(modalService, test) {
        this.modalService = modalService;
        this.test = test;
        this.vatlieu = [];
        this.root = [];
        this.selectedItem = {};
        this.abc = { background: "#117a8b", color: "white" };
        this.def = { background: "none", color: "black" };
        this.cungcap = true;
        this.xyz = true;
    }
    ngOnInit() {
        this.chucnang();
    }
    chucnang() {
        this.test.getvatlieu("a").subscribe((data) => {
            data.forEach(element => {
                element.Id = parseInt(element.Id);
            });
            this.vatlieu = data;
            this.flatToTreeArray(this.vatlieu, "Id", "IdParent");
            console.log(this.vatlieu);
        });
    }
    addvl() {
        let modalref = this.modalService.open(_addvl_addvl_component__WEBPACK_IMPORTED_MODULE_3__["AddvlComponent"], {
            ariaLabelledBy: "modal-basic-title"
        });
        if (this.cungcap) {
            modalref.componentInstance.add.IdParent = this.selectedItem.IdParent;
        }
        else {
            modalref.componentInstance.add.IdParent = this.selectedItem.Id;
        }
        modalref.result.then(result => {
            this.test.addVatLieu(result).subscribe(data => {
                console.log(data);
                this.chucnang();
                alert("Đã lưu!");
            });
        }, reason => {
            alert(this.getDismissReason(reason));
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return "Đã hủy!";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "Đã hủy!";
        }
        else {
            return "Đã hủy!";
        }
    }
    flatToTreeArray(list, id, idp) {
        let finalData = [];
        list.forEach(element => {
            element.child = [];
        });
        list.forEach(element => {
            if (element.IdParent !== null) {
                let a = list.filter((e) => e[id] === element[idp])[0];
                if (a) {
                    a.child.push(element);
                }
                else {
                    element = undefined;
                }
            }
            else {
                finalData.push(element);
            }
        });
        //console.log(finalData);
        this.root = finalData;
        // console.log(this.root);
    }
    showData(id, state) {
        this.xyz = false;
        const index = this.vatlieu.findIndex(a => a.Id === id);
        this.selectedItem = this.vatlieu[index];
        this.selectedItem.i = index;
        this.vatlieu.forEach(element => {
            element.state = false;
        });
        console.log(this.selectedItem.Id);
        if (!state) {
            this.selectedItem.state = !state;
        }
        else {
            this.selectedItem = {};
        }
    }
    removeVatlieu() {
        if (this.selectedItem.Id != undefined) {
            this.test.deleteVatLieu(this.selectedItem.Id).subscribe(data => {
                alert('Đã xóa!');
                this.selectedItem = {};
                this.xyz = true;
                this.chucnang();
            });
        }
    }
    suaVatlieu() {
        let repair = {
            Ten: this.selectedItem.Ten,
            Ma: this.selectedItem.Ma,
            IdParent: this.selectedItem.IdParent,
            DVT: this.selectedItem.DVT,
            NCC: this.selectedItem.NCC,
            GhiChu: this.selectedItem.GhiChu
        };
        this.test.repairVatLieu(this.selectedItem.Id, repair).subscribe(data => {
            this.chucnang();
            alert('Đã sửa!');
            this.selectedItem = {};
            this.xyz = true;
            console.log(this.selectedItem.Id);
        });
    }
};
VatlieuComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_4__["Services"] }
];
VatlieuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-vatlieu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vatlieu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vatlieu/vatlieu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vatlieu.component.css */ "./src/app/vatlieu/vatlieu.component.css")).default]
    })
], VatlieuComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\homework\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);