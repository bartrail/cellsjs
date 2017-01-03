/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 03.01.17
 * Time: 20:08
 */
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

  class EnergySoil extends CellsJS.Pixel {

    constructor(stage, x, y, energy) {
      super(stage, x, y);
      this.energy = energy;
    }

    set energy(energy) {
      if (energy > config.energyMax) {
        this._energy = config.energyMax;
      }
      if (energy < config.energyMin) {
        this._energy = config.energyMin;
      }
      if (energy != this._energy) {
        this._energy     = energy;
        this.reDrawShape = true;
      }
    }

    get energy() {
      return this._energy;
    }

    get color() {
      let parts     = 0.75 / config.energyMax;
      let luminance = parts * this.energy;
      return parseInt(ColorLuminance(config.colorEnergySoil, luminance), 16);
      // return 0xff00ff;
    }

  }

  CellsJS.EnergySoil = EnergySoil;

})();