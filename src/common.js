"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten = (array) => array.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
exports.classNameBuilder = (className) => flatten(className).join(' ');
exports.getEventHandlerFromProps = (props) => {
    var output = {};
    if (typeof props === 'object') {
        for (var key in props) {
            if (typeof props[key] === 'function') {
                output[key] = props[key];
            }
        }
    }
    return output;
};
exports.getChildren = (props) => {
    if (typeof props === 'object') {
        if ('children' in props) {
            return props.children;
        }
        else {
            return [];
        }
    }
    else {
        return [];
    }
};
//# sourceMappingURL=common.js.map