"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var TagTypes;
(function (TagTypes) {
    TagTypes[TagTypes["Anchor"] = 0] = "Anchor";
    TagTypes[TagTypes["Span"] = 1] = "Span";
})(TagTypes = exports.TagTypes || (exports.TagTypes = {}));
class Tags extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['tags',
                (this.props.hasAdons ? 'has-addons' : ''),
            ]) }, this.props.children));
    }
}
exports.Tags = Tags;
class Tag extends React.Component {
    render() {
        var className = common_1.classNameBuilder(['tag',
            this.props.color,
            this.props.size,
            (this.props.rounded ? 'is-rounded' : ''),
            (this.props.delete ? 'is-delete' : ''),
        ]);
        switch (this.props.type) {
            case TagTypes.Anchor:
                return (React.createElement("a", { className: className }, this.props.children));
            case TagTypes.Span:
            default:
                return (React.createElement("span", { className: className }, this.props.children));
        }
    }
}
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map