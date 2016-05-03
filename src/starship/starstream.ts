import {Observable} from 'rxjs';
import constants from '../constants/index';
import StarSky from './starsky';

export const StarStream = Observable.range(1,constants.STAR_NUMBER)
  .map(() =>({
    x: Number(Math.random() * StarSky.canvas.width),
    y: Number(Math.random() * StarSky.canvas.height),
    size: Math.random() * 3 + 1
  }))
  .toArray()
  .flatMap(starArray => {
    return Observable.interval(constants.SPEED)
      .map(() => {
        starArray.forEach(star => {
          if(star.y >= StarSky.canvas.height) {
            star.y = 0;
          }
          star.y += 3;
        })
        return starArray;
      });
  });
