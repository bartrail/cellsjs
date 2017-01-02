/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 01.01.17
 * Time: 22:35
 */

const RENDER_WIDTH  = 512;
const RENDER_HEIGHT = 512;
const SCALE         = 4;
const ELEVATION_MAX = 16;
const ELEVATION_MIN = 0;
const COLOR_SOIL    = '735f47';
const SEED          = 1234567890;

let config = {
  renderWidth  : RENDER_WIDTH,
  renderHeight : RENDER_HEIGHT,
  scale        : SCALE,
  elevationMax : ELEVATION_MAX,
  elevationMin : ELEVATION_MIN,
  colorSoil    : COLOR_SOIL,
  seed         : SEED
};

(function() {
  "use strict";

  Math.seedrandom(config.seed);

  let game = new CellsJS.Game();
  window.requestAnimationFrame(game.run());

})();
