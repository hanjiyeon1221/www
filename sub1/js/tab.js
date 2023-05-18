// 지도맵 tab
// $('.tab_map li:eq(0) a').addClass('current');

// $('.tab_map li').click(function(){
//     $('.tab_map li a').removeClass('current');
//     $(this).children().addClass('current');
// });

 
    $('.map .map1').show(); // 첫번째 탭 내용만 열어라
    $('.map .tab1').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      


    $('.map .tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).parent().index();  // 클릭시 해당 index를 뽑아준다
        //   console.log(ind);
          // $('.map_area .mapbox').css('overflow','visible').css('height','auto');

          $('.maps').hide(); //모든 탭내용을 안보이게...
          $('.map .map'+(ind+1)).show(); //클릭한 해당 탭내용만 보여라
          $('.map .tab').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });

     var eventstop = false; //false(동작전-페이지로딩시) / true(스크롤이 동작했을 때)
     $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>0 && eventstop == false){
            $(".map .map2").hide();
            $(".map .map3").hide();
            eventstop = true;

            // $(window).off('scroll');  
            // 이벤트 1번 실행 후 제거 (중복된 scroll이벤트가 있다면 깨질 수 있음)
            // 위처럼 변수 생성한 방법을 추천함
        }
    });
   



// 연혁 tab (클릭시 css효과)

  $('.tab_menu li:eq(0) a').addClass('current');

//   $('.tab_menu li').click(function(){
//       $('.tab_menu li a').removeClass('current');
//       $(this).children().addClass('current');
//   });


  // 연혁 tab  (클릭시 해당 콘텐츠로 스스륵~~~ 이동)

$('.tab_menu a').click(function(e){
    e.preventDefault(); //href="#" 속성을 막아주는..메소드

    var value=0; //이동할 스크롤의 거리

    if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
        value= $('.history_wrap #y2000').offset().top-100;  // 해당 콘테츠의 상단의 거리~~
    }else if($(this).hasClass('link2')){
        value= $('.history_wrap #y1990').offset().top-100; // 코드에서의 offset은 거리를 뜻한다.
    }else if($(this).hasClass('link3')){
        value= $('.history_wrap #y1980').offset().top-100; 
    }else if($(this).hasClass('link4')){
        value= $('.history_wrap #y1970').offset().top-100; 
    }
    
  $("html,body").stop().animate({"scrollTop":value},1000);
});
