"use strict";
var Canvas = (function () {
    function Canvas(width, height, mount) {
        if (mount === void 0) { mount = document.body; }
        this.mount = mount;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    Canvas.prototype.draw = function () {
        this.mount.appendChild(this.canvas);
    };
    return Canvas;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Canvas;
