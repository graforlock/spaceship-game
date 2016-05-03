export default class Canvas {
  public canvas = document.createElement('canvas');
  public ctx = this.canvas.getContext('2d');
  constructor(width: number,height: number, public mount:HTMLElement = document.body) {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  draw() {
    this.mount.appendChild(this.canvas);
  }
}
