"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Notification extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['notification',
                this.props.color,
            ]) }, this.props.children));
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map