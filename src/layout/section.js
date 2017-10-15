"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Section extends React.Component {
    render() {
        return (React.createElement("section", { className: common_1.classNameBuilder(['section',
                this.props.spacing,
            ]) }, this.props.children));
    }
}
exports.Section = Section;
//# sourceMappingURL=section.js.map