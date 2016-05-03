"use strict";
var rxjs_1 = require('rxjs');
var starstream_1 = require('./starship/starstream');
var starship_1 = require('./starship/starship');
var paint_1 = require('./utils/paint');
var starsky_1 = require('./starship/starsky');
var enemy_1 = require('./starship/enemy');
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var render = function (_a) {
    var stars = _a.stars, starship = _a.starship, enemies = _a.enemies;
    paint_1.default(starsky_1.default).stars(stars);
    paint_1.default(starsky_1.default).triangle(starship.x, starship.y, 20, '#ff000', 'up');
    paintEnemies(enemies);
};
var paintEnemies = function (enemies) {
    enemies.forEach(function (enemy) {
        enemy.y += 5;
        enemy.x += getRandomInt(-15, 15);
        paint_1.default(starsky_1.default).triangle(enemy.x, enemy.y, 20, '#00ff00', 'down');
    });
};
var Game = rxjs_1.Observable
    .combineLatest(starstream_1.StarStream, starship_1.StarShip, enemy_1.default, function (stars, starship, enemies) {
    return { stars: stars, starship: starship, enemies: enemies };
});
Game.subscribe(render);
