function (doc) {
    // if user has created 1 or more symbols, find first one
    // and emit that point, otherwise the first geojson coords
    if (doc['com.stemstorage.geodoc']) {
      try {
        for (var i = 0; i < doc.content.features.length; i++) {
          try {
            if (doc.content.features[i].geometry.type == "Point") {
              if (doc.content.features[i].properties.userData) {
                emit(doc.last_modified, [doc.title,
                  doc.content.features[i].geometry.coordinates]);
                return;
              }
            }
          } catch (e) {
            //
          }
        }
      } catch (e) {
        //
      }
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
