console.log("loaded");
$(function() {
$(".button").on("click",function(event) {
    event.preventDefault();
console.log("submitted");
var input = $("#burger").val()
console.log(input)
var newBurger = {
    burger_name: input,
    devoured: 0,
}
$.ajax("/api/burger", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );

})
})
