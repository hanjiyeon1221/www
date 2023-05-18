$('.tab_menu li:eq(0)').addClass('current');
    //첫번째 서브메뉴 활성화
    
// $('.history_wrap div:eq(0)').addClass('boxMove1');
//첫번째 내용글 애니메이션 처리
var smh= $('.content_area').offset().top + $('.content_area p').height(); // 1041
// console.log(smh);
var h1= $('.history_wrap div:eq(0)').offset().top-100 ;
var h2= $('.history_wrap div:eq(1)').offset().top-100 ;
var h3= $('.history_wrap div:eq(2)').offset().top-100 ;
var h4= $('.history_wrap div:eq(3)').offset().top-100 ;

    //스크롤의 좌표가 변하면.. 스크롤 이벤트
$(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        // $('.text').text(scroll);
        //스크롤 좌표의 값을 찍는다.
        
        // menu tab sticky 처리
        if(scroll > smh){   //스크롤의 거리가 1041px 이상이면 서브메뉴 고정
            $('.tabBox').addClass('navOn');
            $('header').hide();
            $('.history_wrap').css('margin-top',200)
            $('.tab_menu li a').removeClass('current');
        }else{                 //스크롤의 거리가 1041px 보다 작으면 서브메뉴 원래 상태로
            $('.tabBox').removeClass('navOn');
            $('header').show();
            $('.history_wrap').css('margin-top',0);
            $('.tab_menu li:eq(0) a').addClass('current');
        }
        
        
        $('.tab_menu li').removeClass('current');
        //모든 서브메뉴 비활성화
        
         //스크롤의 거리의 범위를 처리
        if(scroll >= 0 && scroll < h2-150){
            $('.tab_menu li:eq(0)').addClass('current');
            //첫번째 서브메뉴 활성화

        }else if(scroll >= h2-150 && scroll < h3-150){
            $('.tab_menu li:eq(1)').addClass('current');
            //두번째 서브메뉴 활성화
            
        }else if(scroll >= h3-150 && scroll < h4-150){
            $('.tab_menu li:eq(2)').addClass('current');
            //세번째 서브메뉴 활성화
            

        }else if(scroll >= h4-150){
            $('.tab_menu li:eq(3)').addClass('current');
            //네번째 서브메뉴 활성화
            
        }
        
        //연혁 fixed
        $('.history_wrap .year').removeClass('current');
        
        if(scroll > smh+100 && scroll < h2-150){
            $('.year:eq(0)').addClass('current');
        } else if(scroll >= h2-150 && scroll < h3-150){
            $('.year:eq(1)').addClass('current');
        } else if(scroll >= h3-150 && scroll < h4-150){
            $('.year:eq(2)').addClass('current');
        } else if(scroll > h4-150){
            $('.year:eq(3)').addClass('current');
        } else {
            //$('.year').removeClass('current');
        }
 
        
    });
   
        
