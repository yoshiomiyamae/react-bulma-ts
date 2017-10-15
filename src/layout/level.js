"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Level extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['level',
                this.props.breakpoint
            ]) }, this.props.children));
    }
}
exports.Level = Level;
class LevelLeft extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['level-left']) }, this.props.children));
    }
}
exports.LevelLeft = LevelLeft;
class LevelRight extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['level-right']) }, this.props.children));
    }
}
exports.LevelRight = LevelRight;
class LevelItem extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['level-item']) }, this.props.children));
    }
}
exports.LevelItem = LevelItem;
//# sourceMappingURL=level.js.map