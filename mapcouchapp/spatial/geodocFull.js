/**
 * A simple spatial view that emits the GeoJSON plus the complete document.
 */
function(doc){
    if(doc["com.stemstorage.geodoc"]){
        doc.content.features.forEach(function (feat) { emit(feat.geometry, feat) });
    }
}
