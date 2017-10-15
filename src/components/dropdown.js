"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Dropdown extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['dropdown',
                (this.props.active ? 'is-active' : ''),
                (this.props.hoverable ? 'is-hoverable' : ''),
                this.props.alignment,
                (this.props.dropUp ? 'is-up' : ''),
            ]) }, this.props.children));
    }
}
exports.Dropdown = Dropdown;
class DropdownTrigger extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['dropdown-trigger']) }, this.props.children));
    }
}
exports.DropdownTrigger = DropdownTrigger;
class DropdownMenu extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['dropdown-menu']) }, this.props.children));
    }
}
exports.DropdownMenu = DropdownMenu;
class DropdownContent extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['dropdown-content']) }, this.props.children));
    }
}
exports.DropdownContent = DropdownContent;
class DropdownItem extends React.Component {
    render() {
        if (this.props.href) {
            return (React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['dropdown-item']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
        else {
            return (React.createElement("p", { className: common_1.classNameBuilder(['dropdown-item']) }, this.props.children));
        }
    }
}
exports.DropdownItem = DropdownItem;
//# sourceMappingURL=dropdown.js.map