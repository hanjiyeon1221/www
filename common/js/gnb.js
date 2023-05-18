//글로벌네비게이션 코드 작성

var smh=$('.visual').height();
var on_off=false;  // -> no오버  /  true: 오버

$('#headerArea').mouseenter(function(){
    // var scroll = $(window).scrollTop();
     $(this).css('background','#fff');
     $('.dropdownmenu li a').css('color','#333'); 
     $('.top_menu a').css('color','#666'); 
     $('.logo a').css('background-image','url(https://cjstkapfhddl.cafe24.com/common/images/logo_footer.png)'); 

     on_off=true;
 });

$('#headerArea').mouseleave(function(){
     var scroll = $(window).scrollTop();  //스크롤의 거리 (top 거리)
     
     if(scroll<smh-50 ){   //현재 스크롤의 위치가 비주얼 이미지가 보이는 위치면...
         $(this).css('background','none').css('border-bottom','none'); 
         $('.dropdownmenu li a').css('color','#fff');
         $('.top_menu a').css('color','#fff'); 
         $('.logo a').css('background-image','url(https://cjstkapfhddl.cafe24.com/common/images/logo01.png)'); 
     }else{   //메뉴가 비주얼 영역을 벗어 났다면...
         $(this).css('background','#fff'); 
         $('.dropdownmenu li a').css('color','#333');
         $('.top_menu a').css('color','#666'); 
         $('.logo a').css('background-image','url(https://cjstkapfhddl.cafe24.com/common/images/logo_footer.png)'); 
     }
    on_off=false;    
});

$(window).on('scroll',function(){     //스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
 //    console.log(scroll);

    if(scroll>smh-120){  //스크롤300까지 내리면
        $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
        $('.dropdownmenu li a').css('color','#333');
        $('.top_menu a').css('color','#666'); 
        $('.logo a').css('background-image','url(https://cjstkapfhddl.cafe24.com/common/images/logo_footer.png)'); 
    }else{      //스크롤 내리기 전 디폴트(마우스올리지않음)
       if(on_off==false){  //헤더에서 마우스가 벗어난 상태
            $('#headerArea').css('background','none').css('border-bottom','none');
            $('.dropdownmenu li a').css('color','#fff');
            $('.top_menu a').css('color','#fff'); 
            $('.logo a').css('background-image','url(https://cjstkapfhddl.cafe24.com/common/images/logo01.png)'); 
       }
    }; 
 });


 //2depth
 $('ul.dropdownmenu').hover(
    function() { 
       $('ul.dropdownmenu li ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
       $('#headerArea').animate({height:320},10).clearQueue();
    },function() {
       $('ul.dropdownmenu li ul').hide(); //모든 서브를 다 닫아라
       $('#headerArea').animate({height:120},'fast').clearQueue();
  });

  //1depth 효과
  $('.dropdownmenu>li h3 a').hover(
    function() { 
        $(this).css('color','#064f9e');
    },function() {
       $(this).css('color','#333');
  });

  $('.dropdownmenu>li ul li a').hover(
    function() { 
        $(this).css('color','#064f9e').css('font-weight',500);
    },function() {
       $(this).css('color','#333').css('font-weight',400);
  });

//tab 처리
$('.dropdownmenu>li h3 a').on('focus', function () {        
    $('.dropdownmenu>li ul').slideDown('normal');
    $('#headerArea').animate({height:320},'fast').clearQueue();
    $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
    $('.dropdownmenu li a').css('color','#333');
    $('.top_menu a').css('color','#666'); 
    $('.logo a').css('background-image','url(https://cjstkapfhddl.cafe24.com/common/images/logo_footer.png)'); 
    
 });

$('.dropdownmenu li.menu6 li:last').find('a').on('blur', function () {        
    $('.dropdownmenu>li ul').slideUp('fast');
    $('#headerArea').animate({height:120},'normal').clearQueue();
    $('#headerArea').css('background','none').css('border-bottom','none');
    $('.dropdownmenu li a').css('color','#fff');
    $('.top_menu a').css('color','#fff'); 
    $('.logo a').css('background-image','url(https://cjstkapfhddl.cafe24.com/common/images/logo01.png)'); 
});


//패밀리사이트 코드

$('.family .site_open').toggle(function(){
    $('.family .fList').slideDown('slow');	
    $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
},function(){
    $('.family .fList').slideUp('fast');
    $(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
});

//tab키 처리
$('.family .site_open').on('focus', function () {        
        $('.family .fList').slideDown('slow');	
});
$('.family .fList li:last a').on('blur', function () {        
        $('.family .fList').slideUp('fast');
});



// 상단이동 코드

            
    //   $('.topMove').hide();
   
     $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
          var scroll = $(window).scrollTop(); //스크롤의 거리
          var winh = $(window).height()/3;
         
          $('.text').text(scroll);

          if(scroll>winh){ //화면높이/3 이상의 거리가 발생되면
              $('.top_move').fadeIn('slow');  //top보여라~~~~
          }else{
              $('.top_move').fadeOut('fast');//top안보여라~~~~
          }
     });
   
      $('.top_move').click(function(e){
         e.preventDefault();
          //상단으로 스르륵 이동합니다.
         $("html,body").stop().animate({"scrollTop":0},1000); 
      });


//headersearch
$('#headerArea .header_inner .top_menu .search_open_btn').click(function(e){
    e.preventDefault();
    $('#headerSearch').slideDown();
})

$('#headerSearch .search_close_btn').click(function(e){
    e.preventDefault();
    $('#headerSearch').slideUp();
})
