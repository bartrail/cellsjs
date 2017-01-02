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
      PIXI.settings.SCALE_MODE = 'NEAREST';

      this.showTerrain  = true;
      this.showEnergy   = true;
      this.terrainStage = new PIXI.Container();
      this.energyStage  = new PIXI.Container();
      this.terrainStage.scale.set(config.scale);
      this.energyStage.scale.set(config.scale);

      this.world = new CellsJS.World(config.renderWidth, config.renderHeight);
      this.world.createEnv(this.terrainStage, this.energyStage);
      this.world.terrainMap.renderLayer();

      this.renderer.resize(config.renderWidth * config.scale, config.renderHeight * config.scale);

    }

    update() {
      console.log((new Date).getTime());
      console.log(this.world.terrainMap.get(0,0).visible);
    }

    draw() {
      this.renderer.render(this.terrainStage);
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

  CellsJS.Game = Game;

})();