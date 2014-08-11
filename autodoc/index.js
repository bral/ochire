/**
 * Two reversal methods: one interative the other recursive.
 */
(function(Reversal){
  /**
   * Reverse an array iteratively
   * @method reverseIterative
   * @param {Array} arr
   * @return {Array}
   * @public
   * @example
   * Reversal.reverseIterative([1,2,3]) // => [3,2,1]
   * Reversal.reverseIterative([{'a': '1'}, 'b', 3]) // => [3, 'b', {'a': '1'}]
   */
  Reversal.reverseIterative = function(arr) {
    var result = [];

    for(var i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }

    return result;
  }

  /**
   * Reverse an array recursively
   * @method reverseRecursive
   * @param {Array} arr
   * @return {Array}
   * @public
   * @example
   * Reversal.reverseRecursive([1,2,3,4]) // => [4,3,2,1]
   * @benchmarks
   * Reversal.reverseRecursive([1,2,3,4]) // => Recursive
   * Reversal.reverseIterative([1,2,3,4]) // => Iterative
   */
  Reversal.reverseRecursive = function(arr, i, result) {
    // variable define
    if (i === undefined || i === null) i = arr.length - 1;
    if (result === undefined || result === null) result = [];

    // base case
    if (i < 0) {
      return result;
    }

    // action
    result.push(arr[i]);

    return this.reverseRecursive(arr, i - 1, result);
  }

})(typeof module === 'object' ? (module.exports = {}) : (this.Reversal = {}));
