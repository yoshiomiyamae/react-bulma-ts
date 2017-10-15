"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Radio extends React.Component {
    render() {
        return (React.createElement("label", { className: common_1.classNameBuilder(['radio']) },
            React.createElement("input", Object.assign({ type: "radio", name: this.props.name, disabled: this.props.disabled, value: this.props.value }, common_1.getEventHandlerFromProps(this.props))),
            this.props.children));
    }
}
exports.Radio = Radio;
//# sourceMappingURL=radio.js.map