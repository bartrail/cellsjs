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

(function() {
  "use strict";

  let renderer = PIXI.autoDetectRenderer(RENDER_WIDTH, RENDER_HEIGHT);
  //Add the canvas to the HTML document
  document.body.appendChild(renderer.view);
  //Create a container object called the `stage`
  let stage = new PIXI.Container();

  var soil;

  function setUp() {

    var game = new Game(stage);
    gameLoop();
  }


  function gameLoop() {

    //Loop this function 60 times per second
    requestAnimationFrame(gameLoop);

    // soil.x += 1;
    //
    // if (soil.x > 100) {
    //   soil.elevation += 1;
    // }
    // soil.draw();

    //Render the stage
    renderer.render(stage);
  }

  setUp();

})();
