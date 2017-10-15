"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Message extends React.Component {
    render() {
        return (React.createElement("article", { className: common_1.classNameBuilder(['message',
                this.props.color,
                this.props.size
            ]) }, this.props.children));
    }
}
exports.Message = Message;
class MessageHeader extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['message-header']) }, this.props.children));
    }
}
exports.MessageHeader = MessageHeader;
class MessageBody extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['message-body']) }, this.props.children));
    }
}
exports.MessageBody = MessageBody;
//# sourceMappingURL=message.js.map