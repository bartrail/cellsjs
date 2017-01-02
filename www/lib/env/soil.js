/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 01.01.17
 * Time: 23:21
 */

(function() {
  "use strict";

  class Soil extends CellsJS.Pixel {

    constructor(x, y, elevation, energy) {
      super(x, y);
      this.elevation = elevation;
      this.energy    = energy;
    }

    set elevation(elevation) {
      if (elevation > config.elevationMax) {
        elevation = config.elevationMax;
      }
      if (elevation < config.elevationMin) {
        elevation = config.elevationMin;
      }
      if (elevation != this._elevation) {
        this._elevation  = elevation;
        this.reDrawShape = true;
      }
    }

    get elevation() {
      return this._elevation;
    }

    get color() {
      let parts     = 0.75 / config.elevationMax;
      let luminance = parts * this.elevation;
      return parseInt(ColorLuminance(config.colorSoil, luminance), 16);
    }

  }

  CellsJS.Soil = Soil;

})();