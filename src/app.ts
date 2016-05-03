
import {Observable} from 'rxjs';
import {StarStream} from './starship/starstream';
import {StarShip} from './starship/starship';
import paint from './utils/paint';
import StarSky from './starship/starsky';

const render = ({stars, starship}) => {
  paint(StarSky).stars(stars);
  paint(StarSky).triangle(starship.x, starship.y, 20, '#ff000', 'up');
}

const Game = Observable
  .combineLatest(
    StarStream, StarShip,
    (stars, starship) => {
      return {stars, starship};
    }
  )

Game.subscribe(render);
