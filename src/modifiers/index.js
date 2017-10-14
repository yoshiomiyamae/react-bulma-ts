"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var responsive_helpers_1 = require("./responsive-helpers");
var typography_helpers_1 = require("./typography-helpers");
var Colors;
(function (Colors) {
    Colors["White"] = "is-white";
    Colors["Black"] = "is-black";
    Colors["Light"] = "is-light";
    Colors["Dark"] = "is-dark";
    Colors["Primary"] = "is-primary";
    Colors["Link"] = "is-link";
    Colors["Info"] = "is-info";
    Colors["Success"] = "is-success";
    Colors["Warning"] = "is-warning";
    Colors["Danger"] = "is-danger";
})(Colors = exports.Colors || (exports.Colors = {}));
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "is-small";
    Sizes["Medium"] = "is-medium";
    Sizes["Large"] = "is-large";
})(Sizes = exports.Sizes || (exports.Sizes = {}));
var Styles;
(function (Styles) {
    Styles["Outlined"] = "is-outlined";
    Styles["Inverted"] = "is-inverted";
})(Styles = exports.Styles || (exports.Styles = {}));
var States;
(function (States) {
    States["Normal"] = "";
    States["Hover"] = "is-hovered";
    States["Focus"] = "is-focused";
    States["Active"] = "is-active";
    States["Loading"] = "is-loading";
})(States = exports.States || (exports.States = {}));
var Alignments;
(function (Alignments) {
    Alignments["Centerd"] = "is-centered";
})(Alignments = exports.Alignments || (exports.Alignments = {}));
exports.default = { Helpers: helpers_1.default, ResponsiveHelpers: responsive_helpers_1.default, TypograpyHelpers: typography_helpers_1.default, Colors: Colors, Sizes: Sizes, Styles: Styles, States: States, Alignments: Alignments };
//# sourceMappingURL=index.js.map