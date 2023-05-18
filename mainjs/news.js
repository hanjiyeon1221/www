var position=0;  //최초위치
    var movesize=341; //이미지 하나의 너비 (마진포함)
    // var movesize=$('.news_gallery ul li').width(); //boxsizing:border-box 때문에 직접 수치로 적음
    // console.log(movesize);
    var timeonoff2;
   
    $('.news_box_wrap ul').after($('.news_box_wrap ul').clone());
 
    function moveG() {
        position-=movesize;  // 352씩 감소
        $('.news_box_wrap').animate({left:position}, 'fast',  //콜백으로 행동넣어줘야 애니메이션 동작 후에 행동이 정상 작동된다. 
            function(){							              //좌표를 콜백함수로 넣어줌↑
            if(position<=-1364){
                $('.news_box_wrap').css('left',0);
                position=0;
            }
        }).clearQueue();
    }

     timeonoff2= setInterval(moveG, 3000);
  
    
        //슬라이드 겔러리를 한번 복제
 
  $('.news_btn').click(function(e){
     e.preventDefault();

     clearInterval(timeonoff2);
     
     if($(this).is('.prev')){  //이전버튼 클릭
         
          position-=movesize;  // 352씩 감소
         $('.news_box_wrap').animate({left:position}, 'fast',function(){
            if(position<=-1364){
                position=0;
                $('.news_box_wrap').css('left',0);
             }
         }).clearQueue();  

     }else if($(this).is('.next')){  //다음버튼 클릭
           if(position>=0){
                $('.news_box_wrap').css('left',-1364);
                position=-1364;
            }
 
            position+=movesize; // 150씩 증가
            $('.news_box_wrap').animate({left:position}, 'fast',
                function(){							
                    if(position>=0){
                        $('.news_box_wrap').css('left',-1364);
                        position=-1364;
                    }
                }).clearQueue();
  
      }
   });