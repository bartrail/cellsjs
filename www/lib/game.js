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

      this.mainStage    = new PIXI.Container();
      this.mainStage.scale.set(config.scale);

      this.terrainStage = new PIXI.Container();
      this.energyStage  = new PIXI.Container();
      this.mainStage.addChild(this.energyStage);
      this.mainStage.addChild(this.terrainStage);

      this.world = new CellsJS.World(config.renderWidth, config.renderHeight);
      this.world.createTerrain(this.terrainStage);
      this.world.createEnergyMap(this.energyStage);

      this.renderer.resize(config.renderWidth * config.scale, config.renderHeight * config.scale);

    }

    showTerrain(show) {
      this.terrainStage.alpha = show;
    }

    update() {
      // console.log((new Date).getTime());
      // console.log(this.world.terrainMap.get(0, 0).visible);
    }

    draw() {
      if(this.terrainStage.visible) {
        this.world.terrainMap.draw();
      }
      if(this.energyStage.visible) {
        this.world.energyMap.draw();
      }
      this.renderer.render(this.mainStage);
    }
  }

  Game.fps          = 60;
  Game.maxFrameSkip = 10;
  Game.skipTicks    = 1000 / Game.fps;
  Game.instance     = null; // static reference to created game instance

  // use factory to create game
  Game.factory = function() {
    let game      = new Game();
    Game.instance = game;
    return game;
  };

  Game.run = (function() {
    let loops        = 0,
        skipTicks    = 1000 / Game.fps,
        maxFrameSkip = 10,
        nextGameTick = (new Date).getTime();

    return function() {
      loops = 0;

      while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
        Game.instance.update();
        nextGameTick += skipTicks;
        loops++;
      }

      Game.instance.draw();
    }.bind(this);
  })();

  CellsJS.Game = Game;

})();