const express = require('express');

class BubbleSort {
  constructor() {
    this.express = express();
    this.bubbleSort = bubbleSort();
    this.swapp();
  }

  swapp(arr, first, secund, swapp) {
    if (arr[first] > arr[secund]) {
      var temp = arr[first];
      arr[first] = arr[secund];
      arr[secund] = temp;
      swapp = true;
    }
  }

  bubbleSort(a) {
    var swapp;
    var n = a.length - 1;
    var x = a;
    do {
      swapp = false;
      for (var i = 0; i < n; i++) {
        this.swapp(x, i, i + 1, swapp);
      }
      n--;
    } while (swapp);
    return a;
  }
}

module.exports = new BubbleSort().express;
