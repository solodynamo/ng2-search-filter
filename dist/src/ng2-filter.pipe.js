"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Ng2SearchPipe = (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @items = object from array
     * @term = term's search
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (term === undefined)
            return items;
        return items.filter(function (item) {
            for (var property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(term.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe = __decorate([
    core_1.Pipe({
        name: 'filter',
        pure: false
    }),
    core_1.Injectable()
], Ng2SearchPipe);
exports.Ng2SearchPipe = Ng2SearchPipe;
//# sourceMappingURL=ng2-filter.pipe.js.map