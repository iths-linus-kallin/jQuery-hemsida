$("a:not(.mail)").click(function( event ) {
        $("section").hide();
        let target = $("a").index(event.target);
        $($("section").get(target)).fadeIn(800);
});

$(document).ready(function(){
    $(".line").animate({
    width: '20vw'
    }, 1200);
  });