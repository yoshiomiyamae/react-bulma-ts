"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var SeparatorTypes;
(function (SeparatorTypes) {
    SeparatorTypes["Arrow"] = "has-arrow-separator";
    SeparatorTypes["Bullet"] = "has-bullet-separator";
    SeparatorTypes["Dot"] = "has-dot-separator";
    SeparatorTypes["Succeeds"] = "has-succeeds-separator";
})(SeparatorTypes = exports.SeparatorTypes || (exports.SeparatorTypes = {}));
class Breadcrumb extends React.Component {
    render() {
        return (React.createElement("nav", { className: common_1.classNameBuilder(['breadcrumb',
                this.props.size,
                this.props.alignment,
                this.props.separatorTypes,
            ]) },
            React.createElement("ul", null, this.props.children)));
    }
}
exports.Breadcrumb = Breadcrumb;
class BreadcrumbItem extends React.Component {
    render() {
        return (React.createElement("li", { className: common_1.classNameBuilder([(this.props.active ? 'is-active' : '')]) },
            React.createElement("a", Object.assign({ href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children)));
    }
}
exports.BreadcrumbItem = BreadcrumbItem;
//# sourceMappingURL=breadcrumb.js.map