"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var NavbarItemTypes;
(function (NavbarItemTypes) {
    NavbarItemTypes[NavbarItemTypes["Anchor"] = 0] = "Anchor";
    NavbarItemTypes[NavbarItemTypes["Div"] = 1] = "Div";
})(NavbarItemTypes = exports.NavbarItemTypes || (exports.NavbarItemTypes = {}));
class Navbar extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar',
                (this.props.transparent ? 'is-transparent' : ''),
                this.props.color,
                (this.props.hasShadow ? 'has-shadow' : ''),
            ]) }, this.props.children));
    }
}
exports.Navbar = Navbar;
class NavbarBrand extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-brand']) }, this.props.children));
    }
}
exports.NavbarBrand = NavbarBrand;
class NavbarBurger extends React.Component {
    render() {
        return (React.createElement("button", Object.assign({ className: common_1.classNameBuilder(['navbar-burger',
                (this.props.active ? 'is-active' : '')
            ]) }, common_1.getEventHandlerFromProps(this.props)),
            React.createElement("span", null),
            React.createElement("span", null),
            React.createElement("span", null)));
    }
}
exports.NavbarBurger = NavbarBurger;
class NavbarHMenu extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-menu',
                (this.props.active ? 'is-active' : '')
            ]) }, this.props.children));
    }
}
exports.NavbarHMenu = NavbarHMenu;
class NavbarStart extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-start']) }, this.props.children));
    }
}
exports.NavbarStart = NavbarStart;
class NavbarEnd extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-end']) }, this.props.children));
    }
}
exports.NavbarEnd = NavbarEnd;
class NavbarTabs extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-tabs']) }, this.props.children));
    }
}
exports.NavbarTabs = NavbarTabs;
class NavbarItem extends React.Component {
    render() {
        switch (this.props.type) {
            case NavbarItemTypes.Div:
                return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-item',
                        (this.props.hasDropdown ? 'has-dropdown' : ''),
                        (this.props.active ? 'is-active' : ''),
                        (this.props.tab ? 'is-tab' : ''),
                    ]) }, this.props.children));
            case NavbarItemTypes.Anchor:
            default:
                return (React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['navbar-item',
                        (this.props.hasDropdown ? 'has-dropdown' : ''),
                        (this.props.active ? 'is-active' : ''),
                        (this.props.tab ? 'is-tab' : ''),
                    ]) }, (() => {
                    if (this.props.href) {
                        return { href: this.props.href };
                    }
                })(), common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
    }
}
exports.NavbarItem = NavbarItem;
class NavbarLink extends React.Component {
    render() {
        return (React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['navbar-link']) }, (() => {
            if (this.props.href) {
                return { href: this.props.href };
            }
        })(), common_1.getEventHandlerFromProps(this.props)), this.props.children));
    }
}
exports.NavbarLink = NavbarLink;
class NavbarDropdown extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['navbar-dropdown',
                this.props.alignment,
                (this.props.boxed ? 'is-boxed' : '')
            ]) }, this.props.children));
    }
}
exports.NavbarDropdown = NavbarDropdown;
class NavbarDivider extends React.Component {
    render() {
        return (React.createElement("hr", { className: common_1.classNameBuilder(['navbar-divider']) }));
    }
}
exports.NavbarDivider = NavbarDivider;
//# sourceMappingURL=navbar.js.map