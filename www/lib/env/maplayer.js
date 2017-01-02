/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 02.01.17
 * Time: 19:35
 */

(function() {
  "use strict";

  class MapLayer {

    constructor() {
      this.values = [];
    }

    get(x, y) {
      if (x >= 0 && y >= 0) {
        return this.values[x][y];
      }
      return null;
    }

  }

  CellsJS.MapLayer = MapLayer;

})();