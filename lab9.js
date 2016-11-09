$(document).ready(function(){

	$(".li").slideDown(2000);
    $(".li").mouseover(function(){
	$(this).fadeTo("fast",0.7).css("color", "#808080");
});
    $(".li").mouseout(function(){
    $(this).fadeTo("fast",1).css("color", "black");
    });

    $('.li').click(function(){
    $(this).css("background-color", "#d4ded7");
    $(this).append('<br/> clicked!');
  });

});