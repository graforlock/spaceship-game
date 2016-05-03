import { Observable, Subject } from 'rxjs';
import StarSky from './starsky';
import constants from '../constants/index';
import { Coords } from '../interfaces/index';

const HERO_Y = constants.HERO_Y(StarSky.canvas);

export const StarShip = Observable.fromEvent<MouseEvent>(StarSky.canvas,'mousemove')
  .map((event)=> {
    return <Coords>{
      x: event.clientX,
      y: HERO_Y
    }
  })
  .startWith(<Coords>{
    x: StarSky.canvas.width /2,
    y: HERO_Y
  })
