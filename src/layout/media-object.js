"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Media extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['media']) }, this.props.children));
    }
}
exports.Media = Media;
class MediaContent extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['media-content']) }, this.props.children));
    }
}
exports.MediaContent = MediaContent;
class MediaLeft extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['media-left']) }, this.props.children));
    }
}
exports.MediaLeft = MediaLeft;
class MediaRight extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['media-right']) }, this.props.children));
    }
}
exports.MediaRight = MediaRight;
class MediaItem extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['media-item']) }, this.props.children));
    }
}
exports.MediaItem = MediaItem;
//# sourceMappingURL=media-object.js.map