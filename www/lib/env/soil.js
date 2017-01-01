/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 01.01.17
 * Time: 23:21
 */

class Soil {

  constructor(x, y, elevation) {
    this.x         = x;
    this.y         = y;
    this.elevation = elevation;
  }

  set elevation(elevation) {
    if (elevation > ELEVATION_MAX) {
      throw new Error('Elevation too High')
    }
    if (elevation < ELEVATION_MIN) {
      throw new Error('Eleation too Low');
    }
    this._elevation = elevation;
  }

  get elevation() {
    return this._elevation;
  }

  get color() {
    let parts     = 0.75 / ELEVATION_MAX;
    let luminance = parts * this.elevation;
    return parseInt(ColorLuminance(COLOR_SOIL, luminance), 16);
  }

  /**
   *
   * @param {PIXI.Stage} stage
   */
  render(stage) {
    let rectangle = new PIXI.Graphics();
    rectangle.beginFill(this.color);
    rectangle.drawRect(0, 0, RESOLUTION, RESOLUTION);
    rectangle.endFill();
    rectangle.x = this.x;
    rectangle.y = this.y;
    stage.addChild(rectangle);
  }
}