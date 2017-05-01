

    $("button").on("click", function() {
      var info = $(this).attr("data-info");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        info + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < 10; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var infoImage = $("<img>");
            infoImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(infoImage);

            $("#gifs").prepend(gifDiv);
          }
        });
    });