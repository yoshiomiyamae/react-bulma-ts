"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class ProgressBar extends React.Component {
    render() {
        return (React.createElement("progress", { className: common_1.classNameBuilder(['progress',
                this.props.color,
                this.props.size,
            ]), value: this.props.value, max: this.props.max }, this.props.children));
    }
}
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=progress.js.map