"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Select extends React.Component {
    render() {
        return (React.createElement("div", Object.assign({ className: common_1.classNameBuilder(['select',
                this.props.color,
                this.props.size,
                this.props.state,
            ]), multiple: this.props.multiple, size: this.props.multiple }, common_1.getEventHandlerFromProps(this.props)),
            React.createElement("select", null, this.props.children)));
    }
}
exports.Select = Select;
//# sourceMappingURL=select.js.map