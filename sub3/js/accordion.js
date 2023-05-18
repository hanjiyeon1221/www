// 상생협력 추진과제 (아코디언)
// $('.task ul li:eq(0)').addClass('current');

$('.task ul li span').mouseenter(function(event){
   var $target = $(event.target); 

  $('.task span').css('width',600);
  $('.task ul li').removeClass('current');
  $(this).parent().addClass('current');

    if($target.is('.task_btn01')){  //첫번째 버튼에 마우스 오버되면
        $('.task .img02').animate({left:[600,'easeOutQuad']},500).clearQueue(); 
        $('.task .img03').animate({left:[900,'easeOutQuad']},500).clearQueue();

    }else if($target.is('.task_btn02')){
        $('.task .img02').animate({left:[300,'easeOutQuad']},500).clearQueue();
        $('.task .img03').animate({left:[900,'easeOutQuad']},500).clearQueue();
        
    }else if($target.is('.task_btn03')){
        $('.task .img02').animate({left:[300,'easeOutQuad']},500).clearQueue();
        $('.task .img03').animate({left:[600,'easeOutQuad']},500).clearQueue();
       
    }

});

$('.task ul li span').mouseleave(function(event){
         $('.task .img02').animate({left:[400,'easeOutQuad']},500).clearQueue(); 
         $('.task .img03').animate({left:[800,'easeOutQuad']},500).clearQueue();

         $('.task ul li').removeClass('current');
     
    });


