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

    constructor(stage) {
      this.stage = stage;
      this.emptyMap();
    }

    emptyMap() {
      this.values = [];
      for (let x = 0; x < config.renderWidth; x++) {
        let row = [];
        for (let y = 0; y < config.renderHeight; y++) {
          row.push(null);
        }
        this.values.push(row);
      }
    }

    draw() {
      this.all(function(item) {
        item.draw();
      });
    }

    all(callback) {
      this.values.forEach(function(row, rowIdx) {
        row.forEach(function(item, colIdx) {
          callback(item, rowIdx, colIdx);
        });
      });
    };

    get(x, y) {
      try {
        this._validXY(x, y);
        return this.values[x][y];
      } catch (e) {
        return null;
      }
    }

    set(x, y, value) {
      this._validXY(x, y);
      this.values[x][y] = value;
    }

    _validXY(x, y) {
      if (x < 0 || x > config.renderWidth) {
        throw new Error('Out of Range access on X: {x}'.parse({x : x}));
      }
      if (y < 0 || y > config.renderHeight) {
        throw new Error('Out of Range access on Y: {y}'.parse({y : y}));
      }
    }
  }

  CellsJS.MapLayer = MapLayer;

})();