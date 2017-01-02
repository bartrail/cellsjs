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

      this.terrainMap = new CellsJS.MapLayer();
      this.energyMap  = new CellsJS.MapLayer();
      this.plantMap   = new CellsJS.MapLayer();

      for (let x = 0; x < this.width; x += config.scale) {
        for (let y = 0; y < this.height; y += config.scale) {


          // let soil = new CellsJS.Soil(x, y, Math.randomInt(0, config.elevationMax));
          // soil.render(stage);
          // this.coordinates.push([x, y, soil]);
        }
      }
    }

  }

  CellsJS.World = World;

})();