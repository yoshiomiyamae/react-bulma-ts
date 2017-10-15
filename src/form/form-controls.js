"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var IconPosition;
(function (IconPosition) {
    IconPosition["Left"] = "has-icons-left";
    IconPosition["Right"] = "has-icons-right";
})(IconPosition = exports.IconPosition || (exports.IconPosition = {}));
var FieldStyle;
(function (FieldStyle) {
    FieldStyle["Addons"] = "has-addons";
    FieldStyle["Grouped"] = "is-grouped";
})(FieldStyle = exports.FieldStyle || (exports.FieldStyle = {}));
class Label extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['label']) }, this.props.children));
    }
}
exports.Label = Label;
class Field extends React.Component {
    render() {
        var alignment = this.props.style ? [this.props.style, this.props.alignment.substr(2)].join('') : this.props.alignment;
        var multiline = this.props.style ? [this.props.style, (this.props.multiline ? '-multiline' : '')].join('') : '';
        return (React.createElement("div", { className: common_1.classNameBuilder(['field',
                this.props.style,
                alignment,
                multiline,
                (this.props.horizontal ? 'is-horizontal' : ''),
            ]) }, this.props.children));
    }
}
exports.Field = Field;
class FieldLabel extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['field-label',
                this.props.size,
            ]) }, this.props.children));
    }
}
exports.FieldLabel = FieldLabel;
class FieldBody extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['field-body']) }, this.props.children));
    }
}
exports.FieldBody = FieldBody;
class Control extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['control',
                this.props.iconPosition,
                (this.props.expanded ? 'is-expanded' : ''),
            ]) }, this.props.children));
    }
}
exports.Control = Control;
//# sourceMappingURL=form-controls.js.map