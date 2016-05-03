import {getRandomInt} from '../utils/numbers';

export default  ({canvas, ctx}) => ({
  stars: (stars) => {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';
    stars.forEach(star => {
      ctx.fillRect(star.x,star.y, star.size, star.size);
    })
  },
  triangle: (x,y,width,color,direction) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - width,y);
    ctx.lineTo(x, direction === 'up' ? y - width : y + width);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x - width, y);
    ctx.fill();
  },
  enemies: function(enemies) {
    enemies.forEach(enemy => {
      enemy.y += 5;
      enemy.x += getRandomInt(-15,15);

      this.triangle(enemy.x, enemy.y, 20, '#00ff00', 'down');


    })
  }
});
