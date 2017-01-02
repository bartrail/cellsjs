/**
 * cells
 * Created by PhpStorm.
 * File:
 * User: con
 * Date: 01.01.17
 * Time: 23:32
 */

(function() {
  "use strict";
  /**
   *
   * @param hex
   * @param lum
   * @returns {string}
   * @constructor
   */
  window.ColorLuminance = function(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    let rgb = "", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  };

  Math.randomInt = function(min, max) {
    "use strict";
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /**
   * parses obj data in a string, within those elements :text: {text} __text__
   * "peter is {age} years old and likes :pet: the most because of their __something__".parse({
   *   age       : 23,
   *   pet       : 'cats',
   *   something : 'tails'
   * })
   * @param obj
   * @returns {string}
   */
  String.prototype.parse = function(obj) {
    let getValueAsString = function(v) {
      return v === null ? '' : v;
    };
    return this.toString().replace(/\{([^}]+)\}/g, function(m, g) {
      return getValueAsString(obj[g]);
    }).replace(/:([a-zA-Z0-9]+):/g, function(m, g) {
      return getValueAsString(obj[g]);
    }).replace(/__([a-zA-Z0-9]+)__/g, function(m, g) {
      return getValueAsString(obj[g]);
    });
  };

  (function() {
    let onEachFrame;
    if(window.requestAnimationFrame) {
      onEachFrame = function(cb) {
        let _cb = function() { cb(); requestAnimationFrame(_cb); };
        _cb();
      };
    }else if (window.webkitRequestAnimationFrame) {
      onEachFrame = function(cb) {
        let _cb = function() { cb(); webkitRequestAnimationFrame(_cb); };
        _cb();
      };
    } else if (window.mozRequestAnimationFrame) {
      onEachFrame = function(cb) {
        let _cb = function() { cb(); mozRequestAnimationFrame(_cb); };
        _cb();
      };
    } else {
      onEachFrame = function(cb) {
        setInterval(cb, 1000 / 60);
      }
    }

    window.onEachFrame = onEachFrame;
  })();

})();
