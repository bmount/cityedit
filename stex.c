#include <simple-tiles/simple_tiles.h>
#include <simple-tiles/query.h>
#include <simple-tiles/layer.h>
#include <stdio.h>

void tile_by_coords (int x, int y, int zoom) 
{
  simplet_map_t *map = simplet_map_new();
  simplet_map_set_slippy(map, x, y, zoom);
  char fnametainer[500];
  //char *fna = "tile-%d-%d-%d";
  sprintf(fnametainer, "tile-%d-%d-%d.png", zoom, x, y);
  printf("%s\n", fnametainer);
  //return;
  //simplet_map_set_srs(map, "EPSG:900913");
  //simplet_map_set_srs(map, "EPSG:4326");
  simplet_map_set_bgcolor(map, "#ffffff");
  //simplet_map_set_bounds(map, -122.535, 37.64, -122.34, 37.833);
  //simplet_map_set_bounds(map, -585080.885134, 6849466.721081, 4161303.603672, 9587780.816356);
  //simplet_map_set_size(map, 1000, 1000);
  //simplet_layer_t *layer = simplet_map_add_layer(map, "/Users/bvm/Downloads/building_footprint/building_footprint.shp");
  //simplet_layer_t *layer = simplet_map_add_layer(map, "PG:dbname=bldgsf user=bvm host=/tmp");

  // The city lots dataset from datasf.org:
  simplet_layer_t *layer = simplet_map_add_layer(map, "PG:dbname=citylots host=/tmp");
  simplet_query_t *query = simplet_layer_add_query(layer, "select * from ogrgeojson");
  simplet_query_add_style(query, "stroke", "#a3e2fff6");
  simplet_query_add_style(query, "fill", "#bd6b6b66");
  simplet_query_add_style(query, "line-join", "round");
  simplet_query_add_style(query, "weight", ".1");

  // the building footprint dataset from datasf.org
  simplet_layer_t *layer2 = simplet_map_add_layer(map, "PG:dbname=bldgsf host=/tmp");
  simplet_query_t *query2 = simplet_layer_add_query(layer2, "select * from ogrgeojson");
  simplet_query_add_style(query2, "stroke", "#11111166");
  simplet_query_add_style(query2, "fill", "#ffffffff");
  //simplet_query_add_style(query2, "fill", "#11111166");
  simplet_query_add_style(query2, "line-join", "round");
  simplet_query_add_style(query2, "weight", "2");

  // Same as above
  simplet_layer_t *layer3 = simplet_map_add_layer(map, "PG:dbname=bldgsf host=/tmp");
  simplet_query_t *query3 = simplet_layer_add_query(layer3, "select * from ogrgeojson");
  //simplet_query_add_style(query3, "stroke", "#ffffffff");
  simplet_query_add_style(query2, "stroke", "#11111166");
  //simplet_query_add_style(query3, "fill", "#ffffffff");
  simplet_query_add_style(query3, "fill", "#bd915a66");
  simplet_query_add_style(query3, "line-join", "round");
  simplet_query_add_style(query3, "weight", ".5");

  simplet_map_render_to_png(map, fnametainer);
  simplet_map_free(map);
  return;
}

/*
 * 335409, 810675
 *        
 * 335414, 810680
 *          1286472
 */


//void tiles_by_extent (int zoom

int main () {
  int m, n;
  for (m = 167700; m <= 167730; m++) {
    for (n = 405390; n <= 405420; n++) {
      printf("printing i:%d j:%d", m, n);
      tile_by_coords(m, n, 20);
    }
  }
  return 0;
}

/*
int main () {
  tile_by_coords(167704, 405340, 20);
  return 0;
}
*/
