/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 01.01.17
 * Time: 22:35
 */

const RENDER_WIDTH  = 128;
const RENDER_HEIGHT = 128;
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

  let game = CellsJS.Game.factory();

  // window.onEachFrame(function() {
  //   game.run();
  // });

  window.requestAnimationFrame(CellsJS.Game.run);

  window.addEventListener("keydown", function(event) {
    if (event.keyCode == 32) {
      game.world.terrainMap.all(function(item) {
        item.visible = false;
      });
    }
  }, false);
  window.addEventListener("keyup", function(event) {
    if (event.keyCode == 32) {
      game.world.terrainMap.all(function(item) {
        item.visible = true;
      });
    }
  }, false);

})();
