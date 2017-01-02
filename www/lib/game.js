/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 02.01.17
 * Time: 11:42
 */

(function() {
  "use strict";

  class Game {

    constructor() {
      this.renderer = PIXI.autoDetectRenderer(config.renderWidth, config.renderHeight);
      document.body.appendChild(this.renderer.view);
      this.stage = new PIXI.Container();

      this.world = new CellsJS.World(config.renderWidth, config.renderHeight);
      this.world.createEnv(this.stage);
    }

    update() {

    }

    draw() {
      this.renderer.render(this.stage);
    }

    run() {
      let loops        = 0,
          skipTicks    = 1000 / Game.fps,
          maxFrameSkip = 10,
          nextGameTick = (new Date).getTime();

      return function() {
        loops = 0;

        while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
          this.update();
          nextGameTick += skipTicks;
          loops++;
        }

        this.draw();
      }.bind(this);
    }

  }

  Game.fps          = 60;
  Game.maxFrameSkip = 10;
  Game.skipTicks    = 1000 / Game.fps;

  Game.run = (function() {

  })();

  CellsJS.Game = Game;

})();