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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var common_1 = require("../common");
var TabsStyles;
(function (TabsStyles) {
    TabsStyles["Boxed"] = "is-boxed";
    TabsStyles["Toggle"] = "is-toggle";
    TabsStyles["FullWidth"] = "is-fullwidth";
})(TabsStyles = exports.TabsStyles || (exports.TabsStyles = {}));
var Tabs = (function (_super) {
    __extends(Tabs, _super);
    function Tabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tabs.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['tabs',
                this.props.size,
                this.props.styles,
                this.props.alignment,
            ]) },
            React.createElement("ul", null, this.props.children)));
    };
    return Tabs;
}(React.Component));
exports.Tabs = Tabs;
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        var _this = this;
        return (React.createElement("li", { className: common_1.classNameBuilder([(this.props.active ? 'is-active' : '')]) },
            React.createElement("a", __assign({}, (function () {
                if (_this.props.href) {
                    return { href: _this.props.href };
                }
            })(), common_1.getEventHandlerFromProps(this.props)), this.props.children)));
    };
    return Tab;
}(React.Component));
exports.Tab = Tab;
//# sourceMappingURL=tabs.js.map