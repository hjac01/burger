console.log("loaded");

$(function() {
$(".button").on("click",function(event) {
  event.preventDefault();
console.log("submitted");
var input = $("#burger").val()
console.log(input)

// var newBurger = {
//     burger_name: input,
//     devoured: $("[name=devoured]:checked").val().trim()
  var newDevoured = {
    devoured: newDevoured
  };


$.ajax("/api/burgers/" + id, {
  type: "PUT",
  data: newDevoured
}).then(
  function() {
    console.log("devoured", newDevoured);
    location.reload();
  }
);

$(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    burger_name: $("#burger").val().trim(),
    devoured: $("[name=devoured]:checked").val().trim()
  };
  $.ajax("/api/burger", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("new burger");
      location.reload();
    } 
  );
  });
  
});





});
