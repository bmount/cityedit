var po = org.polymaps;

var map = po.map()
  .container(document.body.appendChild(po.svg("svg")))
  .center({lat: 37.76, lon: -122.44})
  .zoom(13)
  .add(po.interact())
  .add(po.hash())

function loadBounds (f) {
  for (var i = 0; i < f.features.length; i++) {
    var feat = f.features[i]
    feat.element.setAttribute("fill", "yellow")
    feat.element.setAttribute("stroke", "yellow")
    feat.element.setAttribute("opacity", ".2")
  }
}


map.add(po.image()
  .url(po.url('http://tile.stamen.com/terrain/{Z}/{X}/{Y}.jpg')))

map.add(po.geoJson().url("existing_tile_bounds.json").on('load', loadBounds))

map.add(po.interact())
map.add(po.compass())

