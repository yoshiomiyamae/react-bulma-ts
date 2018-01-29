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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var common_1 = require("../common");
var Textarea = (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype.render = function () {
        return (React.createElement("textarea", __assign({ className: common_1.classNameBuilder(['textarea',
                this.props.color,
                this.props.size,
                this.props.state,
            ]), placeholder: this.props.placeholder, readOnly: this.props.readonly, cols: this.props.cols, maxLength: this.props.maxLength, rows: this.props.rows, wrap: this.props.wrap }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    };
    return Textarea;
}(React.Component));
exports.Textarea = Textarea;
//# sourceMappingURL=textarea.js.map
