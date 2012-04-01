function (doc, req) {
    var ddoc = this;
    var fs = require('lib/flatstache');
    if (!doc) {
        doc = {'com.stemstorage.geodoc':true};
        if (req.id) doc._id = req.id;
        else doc._id = 'geodoc-' + req.uuid;
        doc.created = new Date().toISOString();
    } else if (!doc['com.stemstorage.geodoc']) {
        throw Error("Not a map document.");
    }
    
    doc.last_modified = new Date().toISOString();
    doc.title = req.form.title || "<untitled>";
    doc.content = JSON.parse(req.form.content);
    
    var appURL = '/' + req.info.db_name + '/' + ddoc._id,
        docListURL = appURL + '/_list/summary/by_moddate_cp';
      return [doc, { 
        headers: {'Location': docListURL}, code: 303,
        body: ""
    }];
}
