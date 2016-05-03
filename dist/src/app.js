"use strict";
var rxjs_1 = require('rxjs');
var starstream_1 = require('./starship/starstream');
var starship_1 = require('./starship/starship');
var paint_1 = require('./utils/paint');
var starsky_1 = require('./starship/starsky');
var render = function (_a) {
    var stars = _a.stars, starship = _a.starship;
    paint_1.default(starsky_1.default).stars(stars);
    paint_1.default(starsky_1.default).triangle(starship.x, starship.y, 20, '#ff000', 'up');
};
var Game = rxjs_1.Observable
    .combineLatest(starstream_1.StarStream, starship_1.StarShip, function (stars, starship) {
    return { stars: stars, starship: starship };
});
Game.subscribe(render);
