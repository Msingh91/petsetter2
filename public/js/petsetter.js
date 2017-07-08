/* global moment */

// When user clicks add-btn
$("#owner-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newOwner = {
    first_name: $("#firstname").val().trim(),
    last_name: $("#lastname").val().trim(),
    email:$("#email").val().trim(),
    address:$("#address").val().trim(),
    service:$("#service").val().trim(),
    type:$("#type").val().trim(),
    size:$("#size").val().trim(),
    distance: $("#distance").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post("/api/owners", newOwner)
    // On success, run the following code
    .done(function() {
    console.log("done")
      // var row = $("<div>");
      // row.addClass("chirp");

      // row.append("<p>" + newChirp.author + " chirped: </p>");
      // row.append("<p>" + newChirp.body + "</p>");
      // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

      // $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});

/* global moment */

// When user clicks add-btn
$("#setter-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newSetter = {
    first_name: $("#firstname").val().trim(),
    last_name: $("#lastname").val().trim(),
    email:$("#email").val().trim(),
    password:$("#password").val().trim(),
    address:$("#address").val().trim(),
    experience:$("#years-input").val().trim(),
    service:$("#service").val().trim(),
    type:$("#type").val().trim(),
    size:$("#size").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post("/api/setters", newSetter)
    // On success, run the following code
    .done(function() {
      console.log("done")
      // var row = $("<div>");
      // row.addClass("chirp");

      // row.append("<p>" + newChirp.author + " chirped: </p>");
      // row.append("<p>" + newChirp.body + "</p>");
      // row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

      // $("#chirp-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});
