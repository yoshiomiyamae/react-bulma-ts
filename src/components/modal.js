Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
class Modal extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['modal',
                (this.props.active ? 'is-active' : '')
            ]) }, this.props.children));
    }
}
exports.Modal = Modal;
class ModalBackground extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['modal-background']) }, this.props.children));
    }
}
exports.ModalBackground = ModalBackground;
class ModalContent extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['modal-content']) }, this.props.children));
    }
}
exports.ModalContent = ModalContent;
class ModalClose extends React.Component {
    render() {
        return (React.createElement("button", Object.assign({ className: common_1.classNameBuilder(['modal-close',
                this.props.size
            ]) }, common_1.getEventHandlerFromProps(this.props)), this.props.children));
    }
}
exports.ModalClose = ModalClose;
class ModalCard extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['modal-card']) }, this.props.children));
    }
}
exports.ModalCard = ModalCard;
class ModalCardHead extends React.Component {
    render() {
        return (React.createElement("header", { className: common_1.classNameBuilder(['modal-card-head']) }, this.props.children));
    }
}
exports.ModalCardHead = ModalCardHead;
class ModalCardTitle extends React.Component {
    render() {
        return (React.createElement("p", { className: common_1.classNameBuilder(['modal-card-title',
                this.props.alignment
            ]) }, this.props.children));
    }
}
exports.ModalCardTitle = ModalCardTitle;
class ModalCardBody extends React.Component {
    render() {
        return (React.createElement("section", { className: common_1.classNameBuilder(['modal-card-foot']) }, this.props.children));
    }
}
exports.ModalCardBody = ModalCardBody;
class ModalCardFoot extends React.Component {
    render() {
        return (React.createElement("footer", { className: common_1.classNameBuilder(['modal-card-foot']) }, this.props.children));
    }
}
exports.ModalCardFoot = ModalCardFoot;
//# sourceMappingURL=modal.js.map
