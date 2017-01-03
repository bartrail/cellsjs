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
      this.onStage     = false;
      this.x           = x;
      this.y           = y;
      this.visible     = true;
      this.reDrawShape = true;
    }

    set x(x) {
      this._x          = x;
      this.reDrawShape = true;
      if (this.rect) {
        this.rect.x = x;
      }
    }

    get x() {
      return this._x;
    }

    set y(y) {
      this._y          = y;
      this.reDrawShape = true;
      if (this.rect) {
        this.rect.y = y;
      }
    }

    get y() {
      return this._y;
    }

    set visible(visible) {
      this._visible    = visible;
      this.reDrawShape = true;
    }

    get visible() {
      return this._visible;
    }

    get color() {
      return 0x000000;
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
      if (this.visible) {

        if (this.reDrawShape) {
          this.drawShape();
          this.reDrawShape = false;
        }

        if (this.onStage == false) {
          this.stage.addChild(this.rect);
          this.onStage = true;
        }

      } else if (this.onStage) {
        this.onStage = false;
        this.stage.removeChild(this.rect);
      }

    }

  }

  CellsJS.Pixel = Pixel;

})();
