"use strict";
var rxjs_1 = require('rxjs');
var index_1 = require('../constants/index');
var starsky_1 = require('./starsky');
exports.StarStream = rxjs_1.Observable.range(1, index_1.default.STAR_NUMBER)
    .map(function () { return ({
    x: Number(Math.random() * starsky_1.default.canvas.width),
    y: Number(Math.random() * starsky_1.default.canvas.height),
    size: Math.random() * 3 + 1
}); })
    .toArray()
    .flatMap(function (starArray) {
    return rxjs_1.Observable.interval(index_1.default.SPEED)
        .map(function () {
        starArray.forEach(function (star) {
            if (star.y >= starsky_1.default.canvas.height) {
                star.y = 0;
            }
            star.y += 3;
        });
        return starArray;
    });
});
