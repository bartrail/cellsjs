/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 02.01.17
 * Time: 10:48
 */

(function() {
  "use strict";

  class Pixel {

    constructor(stage, x, y) {
      this.stage       = stage;
      this.x           = x;
      this.y           = y;
      this.visible     = true;
      this.reDrawShape = true;
    }

    get color() {
      return 0x000000;
    }

    render() {
      if (this.visible) {
        this.drawShape();
        this.stage.addChild(this.rect);
      } else {
        this.stage.removeChild(this.rect);
      }
    }

    drawShape() {
      if (typeof(this.rect) == 'undefined') {
        this.rect = new PIXI.Graphics();
      }
      this.rect.beginFill(this.color);
      this.rect.drawRect(this.x, this.y, 1, 1);
      this.rect.endFill();
    }

    draw() {
      if(this.visible) {
        this.rect.x = this.x;
        this.rect.y = this.y;
        if (this.reDrawShape) {
          this.drawShape();
          this.reDrawShape = false;
        }
      }else{
        this.stage.removeChild(this.rect);
      }
    }

  }

  CellsJS.Pixel = Pixel;

})();
