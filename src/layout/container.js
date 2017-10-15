"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Container extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['container',
                (this.props.fluid ? 'is-fluid' : ''),
            ]) }, this.props.children));
    }
}
exports.Container = Container;
//# sourceMappingURL=container.js.map