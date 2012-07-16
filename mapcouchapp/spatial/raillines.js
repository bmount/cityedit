function (doc) {
  if (doc.geometry && doc.simplified01) emit (doc.geometry, doc) 
}
