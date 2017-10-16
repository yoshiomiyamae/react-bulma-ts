"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var TabsStyles;
(function (TabsStyles) {
    TabsStyles["Boxed"] = "is-boxed";
    TabsStyles["Toggle"] = "is-toggle";
    TabsStyles["FullWidth"] = "is-fullwidth";
})(TabsStyles = exports.TabsStyles || (exports.TabsStyles = {}));
class Tabs extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['tabs',
                this.props.size,
                this.props.styles,
                this.props.alignment,
            ]) },
            React.createElement("ul", null, this.props.children)));
    }
}
exports.Tabs = Tabs;
class Tab extends React.Component {
    render() {
        return (React.createElement("li", { className: common_1.classNameBuilder([(this.props.active ? 'is-active' : '')]) },
            React.createElement("a", Object.assign({}, (() => {
                if (this.props.href) {
                    return { href: this.props.href };
                }
            })(), common_1.getEventHandlerFromProps(this.props)), this.props.children)));
    }
}
exports.Tab = Tab;
//# sourceMappingURL=tabs.js.map