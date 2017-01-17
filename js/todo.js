$('ul').on("click","li",function(){
  console.log("toggle class");
  $(this).toggleClass("complete");
});

$('input').keypress(function(event){
  if(event.which == 13){
    var listItem = $('input').val();
    $("ul").append("<li>"+listItem+"</li>");
    $("input").val("");
  }
});

$('ul').on("dblclick","li",function(){
  console.log("remove object");
  $(this).remove();
})

$('i').click(function(){
  $('input').slideToggle(100);
})
