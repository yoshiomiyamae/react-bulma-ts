"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var common_1 = require("../common");
var TagTypes;
(function (TagTypes) {
    TagTypes[TagTypes["Anchor"] = 0] = "Anchor";
    TagTypes[TagTypes["Span"] = 1] = "Span";
})(TagTypes = exports.TagTypes || (exports.TagTypes = {}));
var Tags = (function (_super) {
    __extends(Tags, _super);
    function Tags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tags.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['tags',
                (this.props.hasAdons ? 'has-addons' : ''),
            ]) }, this.props.children));
    };
    return Tags;
}(React.Component));
exports.Tags = Tags;
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
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
    };
    return Tag;
}(React.Component));
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map