function (head, req) {
    var ddoc = this,
        fs = require('lib/flatstache');
    provides("html", function () {
        var app_url = fs.to_html("/{{{db}}}/{{{id}}}", {db:req.info.db_name, id:ddoc._id});
        var row, documents = "", template = "<li><a href='{{app_url}}/_show/editor/{{id}}#20/{{Yi}}/{{Xi}}'>{{ title }}</a></li>";
        while (row = getRow()) {
            documents += fs.to_html(template, {app_url:app_url, id:row.id, title:row.value[0], 
              Xi:row.value[1][0].toString(), Yi:row.value[1][1].toString()});
        }
        return fs.to_html(ddoc.templates.summary, {app_url:app_url, documents:documents});
    });
}
