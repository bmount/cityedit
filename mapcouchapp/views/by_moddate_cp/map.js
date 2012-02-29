function (doc) {
    if (doc['com.stemstorage.geodoc']) {
      var cp = doc.content.features[0].geometry,
      getCoordinatesArray = function (obj) {
        for (var k in cp) {
          if (k === 'coordinates') {
            return obj[k];
          }
          if (typeof obj === 'object') {
            getCoordinatesArray (obj[k]);
          }
        }
        return false;
      }
      cp = getCoordinatesArray(cp);
      (function firstcoords (lst) {
        if (typeof lst[0] === 'number') {
          emit(doc.last_modified, [doc.title, lst]);
          return;
        } else if (lst.length) {
          firstcoords(lst[0]);
        } else {
          return false;
        }
      })(cp)
    }
}
