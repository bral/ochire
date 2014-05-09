/**
 * Define a function which will accept an array and return it reversed
 * Do not use the native javascript reverse method
 *
 * @param {Array} arr
 * @returns {Array}
 */

var arr = [1,2,3,'hi',{'a': 'b'}];

(function reverse(arr) {
	var result = [];

	for(var i = arr.length - 1; i >= 0; i--) {
		result.push(arr[i]);
	}

	console.log('loop ', result);
}(arr));

(function reverse(arr, i, result) {
	// variable define
	if (i === undefined || i === null) i = arr.length - 1;
	if (result === undefined || result === null) result = [];
	// base case
	if (i < 0) {
		console.log('recursive ', result);
		return;
	}
	// action
	result.push(arr[i]);

	return reverse(arr, i - 1, result);
}(arr));
