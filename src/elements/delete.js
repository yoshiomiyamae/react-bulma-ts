"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var DeleteTypes;
(function (DeleteTypes) {
    DeleteTypes[DeleteTypes["Anchor"] = 0] = "Anchor";
    DeleteTypes[DeleteTypes["Button"] = 1] = "Button";
})(DeleteTypes = exports.DeleteTypes || (exports.DeleteTypes = {}));
class Delete extends React.Component {
    render() {
        var className = common_1.classNameBuilder(['delete',
            this.props.size,
        ]);
        switch (this.props.type) {
            case DeleteTypes.Anchor:
                return (React.createElement("a", Object.assign({ className: className }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
            case DeleteTypes.Button:
            default:
                return (React.createElement("button", Object.assign({ className: className }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
    }
}
exports.Delete = Delete;
//# sourceMappingURL=delete.js.map