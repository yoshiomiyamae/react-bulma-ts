"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Checkbox extends React.Component {
    render() {
        return (React.createElement("label", { className: common_1.classNameBuilder(['checkbox']) },
            React.createElement("input", Object.assign({ type: "checkbox", disabled: this.props.disabled, value: this.props.value }, common_1.getEventHandlerFromProps(this.props))),
            this.props.children));
    }
}
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map