app for cityedit based on Metakaolin (@natevw) and Simple Tiles (propublica/jeff larson)

the way it works now is that there is a planning meeting where they hand out fliers with
well-thought-out pictures like this:

![Cesar Chavez design proposal](http://sf.streetsblog.org/wp-content/uploads/2010/11/Picture-10.jpg)

but you can't watch the meeting, becuase it is not available on the internet channel. the 
people who do go to the meeting are mostly cranky about the consequences of the ideas under 
discussion as they relate to street parking. even if you could go, what would be left for 
sharing and advocacy after the fact? We need to figure out ways for good ideas to become 
popular enough that political leaders can be persuaded to ignore the cranks (of all stripes.) 
we also need to figure out what the good ideas are. like this [amazing little park](http://missionlocal.org/2010/04/guerrero-park-blossoms-in-a-sea-of-concrete/).

Cityedit idea/implementation so far is:

Start with a street layout/ public right-of-way somewhere between GIS and architectural plans:

![mission cesar chavez](http://h.sfgeo.org/a300mphach/withmorestuff/start-cesar-mission.png)

Optionally, load up the current street lines (curbs and medians)

![show curbs](http://h.sfgeo.org:5984/a300mphach/withmorestuff/add-curbs.png)

Change stuff! ie, propose a design to tighten a wide, fast turning radius:

![tigten turn](http://h.sfgeo.org:5984/a300mphach/withmorestuff/tighten-turning-radius.png)

Then add trees and taco trucks:

![final bulb](http://h.sfgeo.org/a300mphach/withmorestuff/finalbulbtonayense.png)

or, if you prefer, [draw something else here](http://cityedit.sfgeo.org/cityedit/_design/maps/_show/editor#20.00/37.74817/-122.41807). 

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
