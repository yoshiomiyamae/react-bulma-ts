"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var PanelBlockTypes;
(function (PanelBlockTypes) {
    PanelBlockTypes[PanelBlockTypes["Anchor"] = 0] = "Anchor";
    PanelBlockTypes[PanelBlockTypes["Div"] = 1] = "Div";
})(PanelBlockTypes = exports.PanelBlockTypes || (exports.PanelBlockTypes = {}));
class Panel extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['panel']) }, this.props.children));
    }
}
exports.Panel = Panel;
class PanelTabs extends React.Component {
    render() {
        return (React.createElement("p", { className: common_1.classNameBuilder(['panel-tabs']) }, this.props.children));
    }
}
exports.PanelTabs = PanelTabs;
class PanelBlock extends React.Component {
    render() {
        switch (this.props.type) {
            case PanelBlockTypes.Anchor:
                return (React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['panel-block']) }, (() => {
                    if (this.props.href) {
                        return { href: this.props.href };
                    }
                })(), common_1.getEventHandlerFromProps(this.props)), this.props.children));
            case PanelBlockTypes.Div:
            default:
                return (React.createElement("div", { className: common_1.classNameBuilder(['panel-block']) }, this.props.children));
        }
    }
}
exports.PanelBlock = PanelBlock;
//# sourceMappingURL=panel.js.map