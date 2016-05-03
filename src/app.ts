
import {Observable} from 'rxjs';
import {StarStream} from './starship/starstream';
import {StarShip} from './starship/starship';
import paint from './utils/paint';
import StarSky from './starship/starsky';
import Enemies from './starship/enemy';


const getRandomInt = (min:number, max:number):number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const render = ({stars, starship, enemies}) => {
  paint(StarSky).stars(stars);
  paint(StarSky).triangle(starship.x, starship.y, 20, '#ff000', 'up');
  paintEnemies(enemies);
}

const paintEnemies = (enemies) => {
  enemies.forEach(enemy => {
    enemy.y += 5;
    enemy.x += getRandomInt(-15,15);

    paint(StarSky).triangle(enemy.x, enemy.y, 20, '#00ff00', 'down');


  })
}

const Game = Observable
  .combineLatest(
    StarStream, StarShip, Enemies,
    (stars, starship, enemies) => {
      return {stars, starship, enemies};
    }
  )

Game.subscribe(render);
