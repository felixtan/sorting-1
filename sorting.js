var bubbleSort = function(array) {
  if(array.length <= 1) {
    return array;
  }

  var num_swaps = 0;

  for(var i = 1; i < array.length; i++) {
    if(array[i] < array[i-1]) {
      // swap
      var temp = array[i];
      array[i] = array[i-1];
      array[i-1] = temp;
      num_swaps++;
    }

    // if number of swaps wasn't 0, recursively call bubbleSort
    if(num_swaps > 0)
      bubbleSort(array);
  }

  return array;
};

var merge = function(array1, array2) {
  var concatArray = array1.concat(array2);
  var result = [];
  var min_index = 0;

  // create sorted array
  while(concatArray.length > 0) {
    concatArray_min = Math.min.apply(Math,concatArray);
    result.push(concatArray_min);
    min_index = concatArray.indexOf(concatArray_min);
    concatArray.splice(min_index, 1);
  }

  return result;
};

var split = function(array) {
    var left_array = [];
    var right_array = [];

    var mid = Math.floor(array.length/2 );

    for(var i = 0; i < mid; i++) {
        left_array.push(array[i]);
    }

    for(var j = mid; j < array.length; j++) {
        right_array.push(array[j]);
    }

    return [left_array, right_array];
};

var mergeSort = function(array) {
  if(array.length <= 1) {
    return array;
  }
  else {
    var left_array = split(array)[0];
    var right_array = split(array)[1];
    mergeSort(left_array);
    mergeSort(right_array);
    return merge(left_array, right_array);
  }
};