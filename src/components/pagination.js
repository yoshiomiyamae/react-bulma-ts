"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Pagination extends React.Component {
    render() {
        return (React.createElement("nav", { className: common_1.classNameBuilder(['pagination',
                this.props.size,
                this.props.alignment,
            ]) }, this.props.children));
    }
}
exports.Pagination = Pagination;
class PaginationPrevious extends React.Component {
    render() {
        return (React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['pagination-previous']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    }
}
exports.PaginationPrevious = PaginationPrevious;
class PaginationNext extends React.Component {
    render() {
        return (React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['pagination-next']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    }
}
exports.PaginationNext = PaginationNext;
class PaginationList extends React.Component {
    render() {
        return (React.createElement("ul", { className: common_1.classNameBuilder(['pagination-list']) }, this.props.children));
    }
}
exports.PaginationList = PaginationList;
class PaginationLink extends React.Component {
    render() {
        return (React.createElement("li", null,
            React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['pagination-link',
                    (this.props.current ? 'is-current' : '')
                ]) }, common_1.getEventHandlerFromProps(this.props)), this.props.children)));
    }
}
exports.PaginationLink = PaginationLink;
class PaginationEllipsis extends React.Component {
    render() {
        return (React.createElement("li", null,
            React.createElement("span", { className: common_1.classNameBuilder(['pagination-ellipsis']) }, (this.props.children ? this.props.children : '&hellip;'))));
    }
}
exports.PaginationEllipsis = PaginationEllipsis;
//# sourceMappingURL=pagination.js.map