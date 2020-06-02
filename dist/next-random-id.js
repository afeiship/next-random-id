/*!
 * name: @feizheng/next-random-id
 * description: Random short string.
 * homepage: https://github.com/afeiship/next-random-id
 * version: 1.0.0
 * date: 2020-06-02T05:24:08.467Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.randomId = function (inLength) {
    var str = Math.random().toString(36);
    var len = str.length;
    var count = inLength || 6;
    return str.substring(len - count);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.randomId;
  }
})();

//# sourceMappingURL=next-random-id.js.map
