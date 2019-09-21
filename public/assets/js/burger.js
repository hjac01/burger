console.log("loaded");
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("ul").on("click", ".change-devoured", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log("click")
  

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log(id);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("new burger created");
        location.reload();
      }
    );
  });

});
