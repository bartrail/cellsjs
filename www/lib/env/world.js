/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 02.01.17
 * Time: 11:27
 */

(function() {
  "use strict";

  class World {

    constructor(width, height) {
      this.width  = width;
      this.height = height;
    }

    createTerrain(stage) {

      this.terrainMap = new CellsJS.MapLayer(stage);

      // todo terrain generator

      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          let soil = new CellsJS.Soil(
            stage,
            x,
            y,
            Math.randomInt(config.elevationMin, config.elevationMax)
          );
          this.terrainMap.set(x, y, soil);
        }
      }
    }

    createEnergyMap(stage) {
      this.energyMap = new CellsJS.MapLayer(stage);

      // todo terrain generator

      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          let energy = new CellsJS.EnergySoil(
            stage,
            x,
            y,
            Math.randomInt(config.energyMin, config.energyMax)
          );
          this.energyMap.set(x, y, energy);
        }
      }
    }

  }

  CellsJS.World = World;

})();