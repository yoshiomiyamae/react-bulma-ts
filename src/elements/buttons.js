"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var ButtonTypes;
(function (ButtonTypes) {
    ButtonTypes[ButtonTypes["Anchor"] = 0] = "Anchor";
    ButtonTypes[ButtonTypes["Button"] = 1] = "Button";
    ButtonTypes[ButtonTypes["Submit"] = 2] = "Submit";
    ButtonTypes[ButtonTypes["Reset"] = 3] = "Reset";
})(ButtonTypes = exports.ButtonTypes || (exports.ButtonTypes = {}));
class Button extends React.Component {
    render() {
        var className = common_1.classNameBuilder(['button',
            this.props.color,
            this.props.size,
            this.props.state,
            this.props.styles,
            (this.props.static ? 'is-static' : ''),
        ]);
        switch (this.props.type) {
            case ButtonTypes.Anchor:
                return (React.createElement("a", Object.assign({ className: className }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
            case ButtonTypes.Submit:
                return (React.createElement("input", Object.assign({ className: className, type: "submit", value: this.props.children, disabled: this.props.disabled }, common_1.getEventHandlerFromProps(this.props))));
            case ButtonTypes.Reset:
                return (React.createElement("input", Object.assign({ className: className, type: "reset", value: this.props.children, disabled: this.props.disabled }, common_1.getEventHandlerFromProps(this.props))));
            case ButtonTypes.Button:
            default:
                return (React.createElement("button", Object.assign({ className: className, disabled: this.props.disabled }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
    }
}
exports.Button = Button;
//# sourceMappingURL=buttons.js.map