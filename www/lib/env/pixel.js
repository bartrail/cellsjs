/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 02.01.17
 * Time: 10:48
 */

class Pixel {

  constructor(x, y) {
    this.x           = x;
    this.y           = y;
    this.reDrawShape = true;
  }

  get color() {
    return 0x000000;
  }

  /**
   *
   * @param {PIXI.Stage} stage
   */
  render(stage) {
    this.drawShape();
    stage.addChild(this.rect);
  }

  drawShape() {
    if (typeof(this.rect) == 'undefined') {
      this.rect = new PIXI.Graphics();
    }
    this.rect.beginFill(this.color);
    this.rect.drawRect(this.x, this.y, SCALE, SCALE);
    this.rect.endFill();
  }

  draw() {
    this.rect.x = this.x;
    this.rect.y = this.y;
    if (this.reDrawShape) {
      this.drawShape();
      this.reDrawShape = false;
    }
  }

}