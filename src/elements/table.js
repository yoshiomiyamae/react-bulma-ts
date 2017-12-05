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
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        return (React.createElement("table", { className: common_1.classNameBuilder(['table',
                (this.props.bordered ? 'is-bordered' : ''),
                (this.props.striped ? 'is-striped' : ''),
                (this.props.narrow ? 'is-narrow' : ''),
                (this.props.hoverable ? 'is-hoverable' : ''),
                (this.props.fullwidth ? 'is-fullwidth' : ''),
            ]) }, this.props.children));
    };
    return Table;
}(React.Component));
exports.Table = Table;
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableRow.prototype.render = function () {
        return (React.createElement("tr", __assign({ className: common_1.classNameBuilder([(this.props.seleted ? 'is-selected' : '')]) }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    };
    return TableRow;
}(React.Component));
exports.TableRow = TableRow;
//# sourceMappingURL=table.js.map
