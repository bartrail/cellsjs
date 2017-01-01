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
const RESOLUTION    = 16;
const ELEVATION_MAX = 16;
const ELEVATION_MIN = 0;
const COLOR_SOIL    = '735f47';

(function() {
  "use strict";
  let renderer = PIXI.autoDetectRenderer(RENDER_WIDTH, RENDER_HEIGHT);

  //Add the canvas to the HTML document
  document.body.appendChild(renderer.view);

  //Create a container object called the `stage`
  let stage = new PIXI.Container();

  var soil = new Soil(0,0, 10);
  soil.render(stage);
  var soil = new Soil(16,16, 16);
  soil.render(stage);

  // for (let i = 0; i < squares; i++) {
  //   for (let ii = 0; ii < squares; ii++) {
  //     var rectangle = new PIXI.Graphics();
  //     rectangle.lineStyle(4, 0xFF3300, 1);
  //     rectangle.beginFill(0x66CCFF);
  //     rectangle.drawRect(0, 0, RESOLUTION, RESOLUTION);
  //     rectangle.endFill();
  //     rectangle.x = i * RESOLUTION;
  //     rectangle.y = ii * RESOLUTION;
  //     stage.addChild(rectangle);
  //   }
  // }

  //Tell the `renderer` to `render` the `stage`
  renderer.render(stage);

})();
