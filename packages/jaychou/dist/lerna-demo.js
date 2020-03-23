/*!
 * jaychou v0.0.1
 * (c) 2020-2020 Vicen Law <vicenlaw@gmail.com>
 * Github https://github.com/VicenLaw/lerna-demo
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global['@vicenlaw/lerna-demo'] = factory());
}(this, (function () { 'use strict';

    var src = lernaDemo;

    function lernaDemo() {
      // TODO
      console.log('Jay Chou');
    }

    return src;

})));
