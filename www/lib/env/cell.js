/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 02.01.17
 * Time: 18:43
 */
(function() {
  "use strict";

  class Cell extends CellsJS.Pixel {

    constructor(x, y) {
      super(x, y);
      this.energy = Math.randomInt(0, 100);
    }



    get color() {
      let parts     = 0.75 / config.elevationMax;
      let luminance = parts * this.elevation;
      return parseInt(ColorLuminance(config.colorSoil, luminance), 16);
    }

  }

  CellsJS.Cell = Cell;

})();