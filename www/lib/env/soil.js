/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 01.01.17
 * Time: 23:21
 */

class Soil extends Pixel {

  constructor(x, y, elevation) {
    super(x, y);
    this.elevation = elevation;
    this.reRender  = true;
  }

  set elevation(elevation) {
    if (elevation > ELEVATION_MAX) {
      elevation = ELEVATION_MAX;
    }
    if (elevation < ELEVATION_MIN) {
      elevation = ELEVATION_MIN;
    }
    this._elevation = elevation;
    this.reRender   = true;
  }

  get elevation() {
    return this._elevation;
  }

  get color() {
    let parts     = 0.75 / ELEVATION_MAX;
    let luminance = parts * this.elevation;
    return parseInt(ColorLuminance(COLOR_SOIL, luminance), 16);
  }

}