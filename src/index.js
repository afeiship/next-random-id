(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

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
