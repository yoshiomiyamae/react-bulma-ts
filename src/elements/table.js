Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Table extends React.Component {
    render() {
        return (React.createElement("table", { className: common_1.classNameBuilder(['table',
                (this.props.bordered ? 'is-bordered' : ''),
                (this.props.striped ? 'is-striped' : ''),
                (this.props.narrow ? 'is-narrow' : ''),
                (this.props.hoverable ? 'is-hoverable' : ''),
                (this.props.fullwidth ? 'is-fullwidth' : ''),
            ]) }, this.props.children));
    }
}
exports.Table = Table;
class TableRow extends React.Component {
    render() {
        return (React.createElement("tr", Object.assign({ className: common_1.classNameBuilder([(this.props.seleted ? 'is-selected' : '')]) }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    }
}
exports.TableRow = TableRow;
//# sourceMappingURL=table.js.map
