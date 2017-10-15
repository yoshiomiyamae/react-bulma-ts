"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Content extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['content',
                this.props.size,
            ]) }, this.props.children));
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map