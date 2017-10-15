"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const common_1 = require("../common");
var ImageSize;
(function (ImageSize) {
    ImageSize["Sixteen"] = "is-16x16";
    ImageSize["TwentyFour"] = "is-24x24";
    ImageSize["ThirtyTwo"] = "is-32x32";
    ImageSize["FortyEight"] = "is-48x48";
    ImageSize["SixtyFour"] = "is-64x64";
    ImageSize["NintySix"] = "is-96x96";
    ImageSize["OneTwentyEight"] = "is-128x128";
})(ImageSize = exports.ImageSize || (exports.ImageSize = {}));
var ResponsiveImageWithRatios;
(function (ResponsiveImageWithRatios) {
    ResponsiveImageWithRatios["Square"] = "is-square";
    ResponsiveImageWithRatios["OneByOne"] = "is-1by1";
    ResponsiveImageWithRatios["FourByThree"] = "is-4by3";
    ResponsiveImageWithRatios["ThreeByTwo"] = "is-3by2";
    ResponsiveImageWithRatios["SixteenByNine"] = "is-16by9";
    ResponsiveImageWithRatios["TwoByOne"] = "is-2by1";
})(ResponsiveImageWithRatios = exports.ResponsiveImageWithRatios || (exports.ResponsiveImageWithRatios = {}));
class Image extends React.Component {
    render() {
        return (React.createElement("figure", { className: common_1.classNameBuilder(['image',
                this.props.size,
                this.props.responsiveImageWithRatios,
            ]) }, this.props.children));
    }
}
exports.Image = Image;
//# sourceMappingURL=image.js.map