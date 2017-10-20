"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var common_1 = require("../common");
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        return (React.createElement("aside", { className: common_1.classNameBuilder(['menu']) }, this.props.children));
    };
    return Menu;
}(React.Component));
exports.Menu = Menu;
var MenuLabel = (function (_super) {
    __extends(MenuLabel, _super);
    function MenuLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuLabel.prototype.render = function () {
        return (React.createElement("p", { className: common_1.classNameBuilder(['menu-label']) }, this.props.children));
    };
    return MenuLabel;
}(React.Component));
exports.MenuLabel = MenuLabel;
var MenuList = (function (_super) {
    __extends(MenuList, _super);
    function MenuList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuList.prototype.render = function () {
        return (React.createElement("ul", { className: common_1.classNameBuilder(['menu-list']) }, this.props.children));
    };
    return MenuList;
}(React.Component));
exports.MenuList = MenuList;
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItem.prototype.render = function () {
        var _this = this;
        return (React.createElement("li", null,
            React.createElement("a", { className: common_1.classNameBuilder([(this.props.href ? 'is-active' : '')]) }, (function () {
                if (_this.props.text) {
                    return _this.props.text;
                }
                else {
                    return _this.props.children;
                }
            })()),
            (function () {
                if (_this.props.text) {
                    return _this.props.children;
                }
            })()));
    };
    return MenuItem;
}(React.Component));
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu.js.map