
import {Observable} from 'rxjs';
import {StarStream} from './starship/starstream';
import {StarShip} from './starship/starship';

import paint from './utils/paint';

import StarSky from './starship/starsky';
import Enemies from './starship/enemy';

const render = ({stars, starship, enemies}) => {
  paint(StarSky).stars(stars);
  paint(StarSky).triangle(starship.x, starship.y, 20, '#ff000', 'up');
  paint(StarSky).enemies(enemies);
}

const Game = Observable
  .combineLatest(
    StarStream, StarShip, Enemies,
    (stars, starship, enemies) => {
      return {stars, starship, enemies};
    }
  )

Game.subscribe(render);
