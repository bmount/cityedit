

Try the canvas based symbol editor at branch canvassymbols or:

http://h.sfgeo.org/cedev/_design/maps/_show/editor

svg imagery by @chromakode see embedded cc license for reuse
public domain clip art http://colouringbook.org/tag/colouringbook-org/page/89/


app for cityedit based on Metakaolin (@natevw) and Simple Tiles (propublica/jeff larson)

(see branch `canvassymbols` for some in-progress symbology stuff.)

the way it works now is that there is a planning meeting where they hand out fliers with
well-thought-out pictures like this:

![Cesar Chavez design proposal](http://sf.streetsblog.org/wp-content/uploads/2010/11/Picture-10.jpg)

but you can't watch the meeting, becuase it is not available on the internet channel. the 
people who do go to the meeting are mostly cranky about the consequences of the ideas under 
discussion as they relate to street parking. even if you could go, what would be left for 
sharing and advocacy after the fact?

we need to move the urban planning process online, and we need to figure out ways for
good ideas to become popular enough that political leaders can be persuaded to ignore the
cranks (of all stripes.) we also need to figure out what the good ideas are. like this
[amazing little park](http://missionlocal.org/2010/04/guerrero-park-blossoms-in-a-sea-of-concrete/).

or like my idea of putting a hexagonal fountain and 2 tonayenses at the intersection of Mission and Cesar Chavez (which they left out above):

![hexagonal intersection fountain with tonayenses](http://h.sfgeo.org/a300mphach/withmorestuff/hexagonalfountain-w-tonayenses.png)

or, if you prefer, [draw something else here](http://cityedit.sfgeo.org/cityedit/_design/maps/_show/editor#20.00/37.74817/-122.41807). 

Try also the in-progress symbology editor [here](http://cityedit.sfgeo.org/cedev/_design/maps/_show/editor#20.00/37.74817/-122.41807), including support for Tonayenses in the San Jose Ave Park:

![san jose guerrero park with tonayenses](http://h.sfgeo.org/a300mphach/withmorestuff/cityedit-withstuff.png)

to install this application (and about 10 megabytes of map images), get a free database here:

`http://iriscouch.com`

then go to `http://thenameyoupicked.iriscouch.com/_utils`

choose "replication" in the right-hand menu, then replicate `from` `http://c.sfgeo.org/cityedit` `to`
whatever name you prefer in the 'to' field, something like 'cityedit'.

To deploy your modifications, clone this repo and push to your new database like so:

`pip install couchapp`

Go to the directory `mapcouchapp`, then:

`couchapp push http://yourname:yourpassword@thenameyoupicked.iriscouch.com/cityedit`

If you have node couchapp installed globally from npm, change the name of the executable
from the pip install to something like `/usr/local/bin/couchappy` and reinstall node couchahpp.
