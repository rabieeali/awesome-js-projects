const KEY = "AIzaSyBrEoKKZJruUxQ1rinKLW6Hg10VupukLpI";

// Searchbar Handler

$(function () {
  var searchField = $("#query");
  var icon = $("#search-btn");

  // Focus Event Handler
  $(searchField).on("focus", function () {
    $(this).animate(
      {
        width: "100%",
      },
      500
    );

    $(icon).animate(
      {
        right: "2px",
      },
      500
    );
  });

  // Blur Event Handler
  $(searchField).on(
    "blur",
    function () {
      $(this).animate(
        {
          width: "45%",
        },
        500
      );
      $(icon).animate(
        {
          right: "348px",
        },
        500
      );
    },
    function () {}
  );

  $("#search-form").submit(function (e) {
    e.preventDefault();
  });
});
// Search Function
function search() {
  // Clear Results

  $("#results").html("");
  $("buttons").html("");

  // Get Form Input

  q = $("query").val();

  // Run Get Request on API
  $.get(
    "https://googleapis.com/youtube/v3/",
    {
      part: "snippet , id",
      q: q,
      type: "video",
      key: KEY,
    },
    function (data) {
      console.log(data);
    }
  );
}
