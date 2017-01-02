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

    createEnv(terrainStage, energyStage) {

      this.terrainMap = new CellsJS.MapLayer(terrainStage);
      // this.energyMap  = new CellsJS.MapLayer();
      // this.plantMap   = new CellsJS.MapLayer();

      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          let soil = new CellsJS.Soil(
            terrainStage,
            x,
            y,
            Math.randomInt(0, config.elevationMax)
          );
          this.terrainMap.set(x, y, soil);
          // this.coordinates.push([x, y, soil]);
        }
      }
    }

  }

  CellsJS.World = World;

})();