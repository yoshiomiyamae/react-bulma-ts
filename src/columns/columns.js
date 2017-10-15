"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Columns extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['columns',
                (this.props.multiline ? 'is-multiline' : ''),
                this.props.mobileColums,
                this.props.alignment,
            ]) }, this.props.children));
    }
}
exports.Columns = Columns;
class Column extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['column',
                this.props.size,
                this.props.offset,
                this.props.narrow,
            ]) }, this.props.children));
    }
}
exports.Column = Column;
//# sourceMappingURL=columns.js.map