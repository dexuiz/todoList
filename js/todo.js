$('ul').on("click","li",function(){
  console.log("toggle class");
  $(this).toggleClass("complete");
});

$('#enter').click(function(){
  var listItem = $('input').val();
  $("ul").append("<li>"+listItem+"</li>");
  $("input").val("");
});



$('ul').on("dblclick","li",function(){
  console.log("remove object");
  $(this).remove();
})
