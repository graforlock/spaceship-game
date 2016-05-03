import { Observable, Subject } from 'rxjs';
import StarSky from './starsky';
import constants from '../constants/index';

const HERO_Y = constants.HERO_Y(StarSky.canvas);

export const StarShip = Observable.fromEvent(StarSky.canvas,'mousemove')
  .map((event: MouseEvent)=> {
    return {
      x: event.clientX,
      y: HERO_Y
    }
  })
  .startWith({
    x: StarSky.canvas.width /2,
    y: HERO_Y
  })
