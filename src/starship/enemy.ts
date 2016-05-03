import constants from '../constants/index';
import { Observable } from 'rxjs';
import StarSky from './starsky';
import { Coords } from '../interfaces/index';

const Enemies = Observable.interval(constants.ENEMY_FREQ)
  .scan((enemyArray: Coords[]) => {
    const enemy: Coords = {
      x:  Number(Math.random() * StarSky.canvas.width),
      y:  -30
    }
    enemyArray.push(enemy);
    return enemyArray;
  },[]);

export default Enemies;
