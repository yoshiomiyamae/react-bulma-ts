"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Icon extends React.Component {
    render() {
        return (React.createElement("span", { className: common_1.classNameBuilder(['icon',
                this.props.color,
                this.props.size,
            ]) }, this.props.children));
    }
}
exports.Icon = Icon;
//# sourceMappingURL=icons.js.map