$('li').click(function(){
  console.log("toggle class");
  $(this).toggleClass("complete");
});

$('#enter').click(function(){
  var listItem = $('input').val();
  $("ul").append("<li>"+listItem+"</li>");
  $("input").val("");
});



$('h2').dblclick(function(){
  console.log("remove object");
  $(this).remove();
})
