"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
const elements_1 = require("../elements");
class FileUpload extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['file',
                (this.props.hasName ? 'has-name' : ''),
                this.props.alignment,
                (this.props.fullwidth ? 'is-fullwidth' : ''),
                (this.props.boxed ? 'is-boxed' : ''),
                this.props.color,
                this.props.size,
                this.props.state,
            ]) },
            React.createElement("label", { className: common_1.classNameBuilder(['file-label']) },
                React.createElement("input", Object.assign({ className: common_1.classNameBuilder(['file-input']), type: "file", name: this.props.name }, common_1.getEventHandlerFromProps(this.props))),
                (() => {
                    if (this.props.icon) {
                        return (React.createElement("span", { className: common_1.classNameBuilder(['file-cta']) },
                            React.createElement(elements_1.Icon, null, this.props.icon)));
                    }
                })(),
                React.createElement("span", { className: common_1.classNameBuilder(['file-label']) }, this.props.children))));
    }
}
exports.FileUpload = FileUpload;
//# sourceMappingURL=file.js.map