"use strict";
var rxjs_1 = require('rxjs');
var starsky_1 = require('./starsky');
var index_1 = require('../constants/index');
var HERO_Y = index_1.default.HERO_Y(starsky_1.default.canvas);
exports.StarShip = rxjs_1.Observable.fromEvent(starsky_1.default.canvas, 'mousemove')
    .map(function (event) {
    return {
        x: event.clientX,
        y: HERO_Y
    };
})
    .startWith({
    x: starsky_1.default.canvas.width / 2,
    y: HERO_Y
});
