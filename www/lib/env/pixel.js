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
    this.x        = x;
    this.y        = y;
    this.reRender = true;
  }

  get color() {
    return 0x000000;
  }

  /**
   *
   * @param {PIXI.Stage} stage
   */
  render(stage) {
    this.drawRect();
    stage.addChild(this.rect);
  }

  drawRect() {
    if (typeof(this.rect) == 'undefined') {
      this.rect = new PIXI.Graphics();
    }
    this.rect.beginFill(this.color);
    this.rect.drawRect(0, 0, RESOLUTION, RESOLUTION);
    this.rect.endFill();
  }

  draw() {
    this.rect.x = this.x;
    this.rect.y = this.y;
    if (this.reRender) {
      this.drawRect();
      this.reRender = false;
    }
  }

}