"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var Context;
(function (Context) {
    Context["Unspecified"] = "";
    Context["Ancestor"] = "is-ancestor";
    Context["Parent"] = "is-parent";
    Context["Child"] = "is-child";
})(Context = exports.Context || (exports.Context = {}));
class Tile extends React.Component {
    render() {
        return (React.createElement("div", { className: common_1.classNameBuilder(['tile',
                this.props.context,
                (this.props.vertical ? 'is-vertical' : ''),
                this.props.size,
            ]) }, this.props.children));
    }
}
exports.Tile = Tile;
//# sourceMappingURL=tiles.js.map