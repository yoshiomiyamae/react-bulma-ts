"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var TitleSizes;
(function (TitleSizes) {
    TitleSizes["One"] = "is-1";
    TitleSizes["Two"] = "is-2";
    TitleSizes["Three"] = "is-3";
    TitleSizes["Four"] = "is-4";
    TitleSizes["Five"] = "is-5";
    TitleSizes["Six"] = "is-6";
})(TitleSizes = exports.TitleSizes || (exports.TitleSizes = {}));
class Title extends React.Component {
    render() {
        return (React.createElement("p", { className: common_1.classNameBuilder(['title',
                this.props.size,
            ]) }, this.props.children));
    }
}
exports.Title = Title;
class Subtitle extends React.Component {
    render() {
        return (React.createElement("p", { className: common_1.classNameBuilder(['subtitle',
                this.props.size,
            ]) }, this.props.children));
    }
}
exports.Subtitle = Subtitle;
//# sourceMappingURL=title.js.map