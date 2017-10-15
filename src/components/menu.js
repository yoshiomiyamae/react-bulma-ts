"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Menu extends React.Component {
    render() {
        return (React.createElement("aside", { className: common_1.classNameBuilder(['menu']) }, this.props.children));
    }
}
exports.Menu = Menu;
class MenuLabel extends React.Component {
    render() {
        return (React.createElement("p", { className: common_1.classNameBuilder(['menu-label']) }, this.props.children));
    }
}
exports.MenuLabel = MenuLabel;
class MenuList extends React.Component {
    render() {
        return (React.createElement("ul", { className: common_1.classNameBuilder(['menu-list']) }, this.props.children));
    }
}
exports.MenuList = MenuList;
class MenuItem extends React.Component {
    render() {
        return (React.createElement("li", null,
            React.createElement("a", { className: common_1.classNameBuilder([(this.props.href ? 'is-active' : '')]) }, (() => {
                if (this.props.text) {
                    return this.props.text;
                }
                else {
                    return this.props.children;
                }
            })()),
            (() => {
                if (this.props.text) {
                    return this.props.children;
                }
            })()));
    }
}
exports.MenuItem = MenuItem;
//# sourceMappingURL=menu.js.map