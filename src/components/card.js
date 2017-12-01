Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Card extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['card']) }, this.props.children));
    }
}
exports.Card = Card;
class CardImage extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['card-image']) }, this.props.children));
    }
}
exports.CardImage = CardImage;
class CardContent extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['card-content']) }, this.props.children));
    }
}
exports.CardContent = CardContent;
class CardHeader extends React.Component {
    render() {
        return (React.createElement("header", { className: common_1.classNameBuilder(['card-header']) }, this.props.children));
    }
}
exports.CardHeader = CardHeader;
class CardHeaderTitle extends React.Component {
    render() {
        return (React.createElement("p", { className: common_1.classNameBuilder(['card-header-title',
                this.props.alignment
            ]) }, this.props.children));
    }
}
exports.CardHeaderTitle = CardHeaderTitle;
class CardHeaderIcon extends React.Component {
    render() {
        return (React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['card-header-icon']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    }
}
exports.CardHeaderIcon = CardHeaderIcon;
class CardFooter extends React.Component {
    render() {
        return (React.createElement("footer", { className: common_1.classNameBuilder(['card-footer']) }, this.props.children));
    }
}
exports.CardFooter = CardFooter;
class CardFooterItem extends React.Component {
    render() {
        if (this.props.href) {
            return (React.createElement("a", Object.assign({ className: common_1.classNameBuilder(['card-footer-item']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
        else {
            return (React.createElement("p", { className: common_1.classNameBuilder(['card-footer-item']) }, this.props.children));
        }
    }
}
exports.CardFooterItem = CardFooterItem;
//# sourceMappingURL=card.js.map
