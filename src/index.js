"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const main_1 = require("./main");
if (require.main !== module) {
    react_dom_1.render(React.createElement("div", null,
        React.createElement(main_1.default.Input, { type: main_1.default.InputTypes.Password })), document.getElementById('root'));
}
//# sourceMappingURL=index.js.map