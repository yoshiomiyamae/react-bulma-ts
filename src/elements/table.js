"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Table extends React.Component {
    render() {
        return (React.createElement("table", { className: common_1.classNameBuilder(['table']) }, this.props.children));
    }
}
exports.Table = Table;
class TableRow extends React.Component {
    render() {
        return (React.createElement("tr", { className: common_1.classNameBuilder([(this.props.seleted ? 'is-selected' : '')]) }, this.props.children));
    }
}
exports.TableRow = TableRow;
//# sourceMappingURL=table.js.map