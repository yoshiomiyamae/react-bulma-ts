"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Hero extends React.Component {
    render() {
        return (React.createElement("section", { className: common_1.classNameBuilder(['hero',
                this.props.color,
                this.props.size,
            ]) }, this.props.children));
    }
}
exports.Hero = Hero;
class HeroHead extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['hero-head']) }, this.props.children));
    }
}
exports.HeroHead = HeroHead;
class HeroBody extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['hero-body']) }, this.props.children));
    }
}
exports.HeroBody = HeroBody;
class HeroFoot extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['hero-foot']) }, this.props.children));
    }
}
exports.HeroFoot = HeroFoot;
//# sourceMappingURL=hero.js.map