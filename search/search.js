$(function () {
  var e = location.search.replace(/^\?.*s=([^&]+)/, "$1"),
    r = $("#search"),
    t = $("input[type=text]", r),
    a = $("#search-results").height(0),
    r = $(
      '<iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" allowTransparency="true"></iframe>'
    );
  a.length &&
    (r
      .attr({
        src: "search/results.php?s=" + e,
      })
      .appendTo(a),
    t.val(decodeURI(e))),
    (window._resize = function (e) {
      a.height(e);
    });
});
const joinButton = document.querySelector(".join-button");

// Add hover effect using JavaScript
joinButton.addEventListener("mouseover", () => {
  joinButton.style.backgroundColor = "#fff"; // Button background changes to white
  joinButton.style.color = "#FF8C00"; // Text changes to orange
  joinButton.style.borderColor = "#FF8C00"; // Border stays orange
});

joinButton.addEventListener("mouseout", () => {
  joinButton.style.backgroundColor = "#FF8C00"; // Button background reverts to orange
  joinButton.style.color = "#fff"; // Text reverts to white
  joinButton.style.borderColor = "#FF8C00"; // Border stays orange
});

// Sample data for featured courses
// Initialize featured courses dynamically
