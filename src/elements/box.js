"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Box extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['box']) }, this.props.children));
    }
}
exports.Box = Box;
//# sourceMappingURL=box.js.map