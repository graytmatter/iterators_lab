var iterators = {
   max: function (numList) {
    var max = -Infinity;
    for (var i = 0; i < numList.length; i++) {
      if (numList[i] > max) {
        max = numList[i];
      }
    }
    return max;
  },
  min: function(numList) {
    var min = Infinity;
    for (var i = 0; i < numList.length; i++) {
      if (numList[i] < min) {
        min = numList[i];
      }
    }
    return min;
  },


  each: function (items, callback) {
    for(var i = 0; i < items.length; i++){
       callback(items[i]);
    }
  },

  map : function (items, callback) {
    var newList = [];
      for(var i = 0; i < items.length; i++){
        newList.push(callback(items[i]));
      }
    return newList;
  },

  filter : function (items, test) {
    var newList = [];
      for(var i = 0; i < items.length; i++){
        if(test(items[i])){
          newList.push(items[i]);
        }
      }
    return newList;  
  },
  reduce : function (items, combine) {
    var k = items[0];
      for(var i = 1; i < items.length; i++){
        k  = combine(k, items[i]);
      }
    return k;  
  },
  reject : function (items, test) {
    var newList = [];
      for(var i = 0; i < items.length; i++){
        if(!test(items[i])){
          newList.push(items[i]);
        }
      }
    return newList;  
  },
};

module.exports = iterators;