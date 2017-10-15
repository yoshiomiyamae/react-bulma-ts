"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var InputTypes;
(function (InputTypes) {
    InputTypes["Text"] = "text";
    InputTypes["Password"] = "password";
    InputTypes["Email"] = "email";
    InputTypes["Tel"] = "tel";
})(InputTypes = exports.InputTypes || (exports.InputTypes = {}));
class Input extends React.Component {
    render() {
        return (React.createElement("input", Object.assign({ className: common_1.classNameBuilder(['input',
                this.props.color,
                this.props.size,
                this.props.state,
            ]), type: this.props.type, placeholder: this.props.placeholder, readOnly: this.props.readonly, disabled: this.props.disabled, value: this.props.value }, common_1.getEventHandlerFromProps(this.props))));
    }
}
exports.Input = Input;
//# sourceMappingURL=input.js.map