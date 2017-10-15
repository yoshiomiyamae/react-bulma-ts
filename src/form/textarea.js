"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Textarea extends React.Component {
    render() {
        return (React.createElement("textarea", Object.assign({ className: common_1.classNameBuilder(['textarea',
                this.props.color,
                this.props.size,
                this.props.state,
            ]), placeholder: this.props.placeholder, readOnly: this.props.readonly }, common_1.getEventHandlerFromProps(this.props))));
    }
}
exports.Textarea = Textarea;
//# sourceMappingURL=textarea.js.map