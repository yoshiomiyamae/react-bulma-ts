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
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['card']) }, this.props.children));
    };
    return Card;
}(React.Component));
exports.Card = Card;
var CardImage = (function (_super) {
    __extends(CardImage, _super);
    function CardImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardImage.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['card-image']) }, this.props.children));
    };
    return CardImage;
}(React.Component));
exports.CardImage = CardImage;
var CardContent = (function (_super) {
    __extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        return (React.createElement("div", { className: common_1.classNameBuilder(['card-content']) }, this.props.children));
    };
    return CardContent;
}(React.Component));
exports.CardContent = CardContent;
var CardHeader = (function (_super) {
    __extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        return (React.createElement("header", { className: common_1.classNameBuilder(['card-header']) }, this.props.children));
    };
    return CardHeader;
}(React.Component));
exports.CardHeader = CardHeader;
var CardHeaderTitle = (function (_super) {
    __extends(CardHeaderTitle, _super);
    function CardHeaderTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeaderTitle.prototype.render = function () {
        return (React.createElement("p", { className: common_1.classNameBuilder(['card-header-title',
                this.props.alignment
            ]) }, this.props.children));
    };
    return CardHeaderTitle;
}(React.Component));
exports.CardHeaderTitle = CardHeaderTitle;
var CardHeaderIcon = (function (_super) {
    __extends(CardHeaderIcon, _super);
    function CardHeaderIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeaderIcon.prototype.render = function () {
        return (React.createElement("a", __assign({ className: common_1.classNameBuilder(['card-header-icon']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    };
    return CardHeaderIcon;
}(React.Component));
exports.CardHeaderIcon = CardHeaderIcon;
var CardFooter = (function (_super) {
    __extends(CardFooter, _super);
    function CardFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooter.prototype.render = function () {
        return (React.createElement("footer", { className: common_1.classNameBuilder(['card-footer']) }, this.props.children));
    };
    return CardFooter;
}(React.Component));
exports.CardFooter = CardFooter;
var CardFooterItem = (function (_super) {
    __extends(CardFooterItem, _super);
    function CardFooterItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooterItem.prototype.render = function () {
        if (this.props.href) {
            return (React.createElement("a", __assign({ className: common_1.classNameBuilder(['card-footer-item']), href: this.props.href }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
        }
        else {
            return (React.createElement("p", { className: common_1.classNameBuilder(['card-footer-item']) }, this.props.children));
        }
    };
    return CardFooterItem;
}(React.Component));
exports.CardFooterItem = CardFooterItem;
//# sourceMappingURL=card.js.map
