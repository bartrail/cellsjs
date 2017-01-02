/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 02.01.17
 * Time: 11:27
 */

class World {

  constructor(width, height) {
    this.width       = width;
    this.height      = height;
    this.coordinates = [];
  }

  createEnv(stage) {
    for (let x = 0; x < this.width; x += SCALE) {
      for (let y = 0; y < this.height; y += SCALE) {
        let soil = new Soil(x, y, Math.floor(Math.random() * ELEVATION_MAX) + 1);
        soil.render(stage);
        this.coordinates.push([x, y, soil]);
      }
    }
  }

}