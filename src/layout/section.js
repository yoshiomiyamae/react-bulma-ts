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
var Section = (function (_super) {
    __extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.render = function () {
        return (React.createElement("section", { className: common_1.classNameBuilder(['section',
                this.props.spacing,
            ]) }, this.props.children));
    };
    return Section;
}(React.Component));
exports.Section = Section;
//# sourceMappingURL=section.js.map