$.get("/api/setters", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("setter");

      row.append("<p>" + data[i].first_name + "" + data[i].last_name + "</p>");
      row.append("<p>" + data[i].address + "</p>");
      row.append("<p>" + data[i].type  + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#full-setter-list").prepend(row);

    }

  }

});