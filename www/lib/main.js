/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 01.01.17
 * Time: 22:35
 */

const RENDER_WIDTH      = 128;
const RENDER_HEIGHT     = 128;
const SCALE             = 4;
const ELEVATION_MAX     = 16;
const ELEVATION_MIN     = 0;
const ENERGY_MAX        = 100;
const ENERGY_MIN        = 0;
const COLOR_SOIL        = '735f47';
const COLOR_ENERGY_SOIL = '3d734e';
const SEED              = 1234567890;

let config = {
  renderWidth     : RENDER_WIDTH,
  renderHeight    : RENDER_HEIGHT,
  scale           : SCALE,
  elevationMax    : ELEVATION_MAX,
  elevationMin    : ELEVATION_MIN,
  energyMax       : ENERGY_MAX,
  energyMin       : ENERGY_MIN,
  colorSoil       : COLOR_SOIL,
  colorEnergySoil : COLOR_ENERGY_SOIL,
  seed            : SEED
};

(function() {
  "use strict";

  Math.seedrandom(config.seed);

  let game = CellsJS.Game.factory();

  window.onEachFrame(CellsJS.Game.run);

  window.addEventListener("keydown", function(event) {
    switch (event.keyCode) {
      case 32: // space
        game.showTerrain(0.5);
        break;
    }
  }, false);
  window.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
      case 32: //space
        game.showTerrain(1);
        break;
    }
  }, false);

})();
