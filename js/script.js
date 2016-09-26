$(document).ready(function(){

  // toggle and delete
  // $('.course').on('click', function(){
  //   $(this).find('.detail').slideToggle();
  // });

  // $('.course .delete').on('click', function(){
  //   alert("about to delete");
  // });

  //stop propagation
  $('.detail').hide();
  $('.course').on('click', function(){
    $(this).find('.detail').slideToggle();
  });

  $('.course .delete').on('click', function(event){
    alert("about to delete");
    event.stopPropagation();
    $(this).parent().hide();
  });
});