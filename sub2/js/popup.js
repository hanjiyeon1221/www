// 소형배터리 popup

//객체배열
// var memo = [
//     {
//       title: "Laptop",
//       contxt: "삼성SDI의 노트북용 배터리는 노트북의 성능을 더욱 향상시키면서 이동성을 개선하고, 보다 얇고 가벼운 디자인을 가능하게 합니다.",
//       sub1: "사용 시간 증대",
//       sub2: "울트라 슬림 노트북 디자인 구현",
//       sub3: "고품질의 안전한 배터리",
//     },
//     {
//       title: "Mobile Phone",
//       contxt: "삼성SDI의 가벼운 고용량 배터리는 휴대폰 사용자의 더욱 높아진 요구를 충족시켜 드릴 수 있습니다.",
//       sub1: "사용 시간 증대",
//       sub2: "얇고 가벼운 디자인",
//       sub3: "안전성 및 품질 개선",
//     },
//     {
//       title: "Wearable Device",
//       contxt: "삼성SDI의 기술력으로 웨어러블 기기 시장의 무한한 가능성을 열어드립니다.",
//       sub1: "사용 시간 연장 및 다양한 디자인 구현",
//       sub2: "Mini cell을 위한 최적화 생산 공정",
//       sub3: "더욱 강화된 안전성",
//     },
//     {
//       title: "Power Bank",
//       contxt: "삼성SDI의 파워 뱅크로 언제 어디서나 모바일 생활을 즐길 수 있습니다.",
//       sub1: "다양한 파워 뱅크 셀/팩 라인업",
//       sub2: "세계 최고의 배터리 라이프 사이클",
//       sub3: "검증된 안전성 및 품질",
//     },
//     {
//       title: "Power Tool",
//       contxt: "삼성SDI의 리튬 이온 배터리는 전동 공구를 더욱 강하게 만들어 줍니다.",
//       sub1: "사용 시간 연장 및 가벼운 무게",
//       sub2: "다양한 제품 라인업",
//       sub3: "안전성 및 품질 향상",
//     },
//     {
//       title: "E-Bike",
//       contxt: "삼성SDI의 리튬 이온 배터리로 차별화된 전기 자전거를 경험할 수 있습니다.",
//       sub1: "주행거리 연장",
//       sub2: "디자인 유연성의 향상",
//       sub3: "품질 및 안전성 개선",
//     },
//   ];



//전역변수로 빼기

// console.log(total1);


$.ajax({
  url: './data/sub2_1.json',
  dataType: 'json',
  success: function(data){
      var useData = data.small;  // 객체배열이 저장된다
      var txt2='';
      var ind1 = 0;
      var total1 = useData.length; // 총 6개
      //console.log(total1);
        var txt = '<div class="modal_box"></div>';
        txt+= '<div class="pop_btn">';
        txt+=     '<a class="pre" href="#"><span class="hidden">이전</span><i class="fa-solid fa-chevron-left"></i></a>';
        txt+=     '<a class="next" href="#"><span class="hidden">다음</span><i class="fa-solid fa-chevron-right"></i></a>';
        txt+= '</div>';
        txt+= '<div class="popup">';
        txt+=    '<img src="./images/content1/pop01.png" alt="">';
        txt+=    '<div class="txt">';

        txt+=    '</div>';
        txt+=    '<a href="#" class="close_btn">';
        txt+=         '<span class="material-symbols-outlined">close</span>';
        txt+=    '</a>';
        txt+= '</div>';
  
        $('.sbattery_application .pop').html(txt);

        
      function dataPrint(){
              

              //for(var i=0; i<useData.length; i++){}   ↓ for in문
             
                  var $title = useData[ind1].title;  //담아두고 써도되고, 그대로 써도 되고~
                  var $contxt = useData[ind1].contxt;
                  var $sub1 = useData[ind1].sub1;
                  var $sub2 = useData[ind1].sub2;
                  var $sub3 = useData[ind1].sub3;


                 

                  $(".pop .popup img").attr("src","./images/content1/pop0" + (ind1 + 1) + ".png");
                  
                  txt2 = "<dl>";
                  txt2 += "<dt>" + $title + "</dt>";
                  txt2 += "<dd>" + $contxt + "</dd>";
                  txt2 += "<dd><span>제품 특징</span>";
                  txt2 += "<ul><li>" + $sub1 + "</li>";
                  txt2 += "<li>" + $sub2 + "</li>";
                  txt2 += "<li>" + $sub3 + "</li></ul></dd>";
                  txt2 += "<dd class='pop_bt'><span>사용 배터리 종류</span></dd>";
                  txt2 += "</dl>";
                  // $(".pop .popup .txt").html(txt);
                  
                  $('.sbattery_application .txt').html(txt2);
                  $(".popup .pop_bt").css("background-image","url(./images/content1/pop_bt0" + (ind1 + 1) + ".jpg)");
              
              // console.log(txt);
      };

   
   

      //버튼 이벤트
      $(".sbattery_application .app_box a").click(function (e) {
        e.preventDefault();
    
        ind1 = $(this).index(".sbattery_application .app_box a"); // 0 1 2 3 4 5 
    
        $('.pop_btn').fadeIn('slow');
        $(".pop .modal_box").fadeIn("fast");
        $(".pop .popup").fadeIn("slow");
        $('body').css('overflow','hidden');
        dataPrint();
      });
    
      $(".close_btn,.pop .modal_box").click(function (e) {
        e.preventDefault();
        $(".pop .modal_box").fadeOut("fast");
        $(".pop .popup").fadeOut("fast");
        $('.pop_btn').fadeOut('fast')
        $('body').css('overflow','initial');


      });
     
      $('.pop_btn a').click(function(e){
        e.preventDefault();
    
        $('.pop .popup').hide().fadeIn('slow');
    
        if($(this).hasClass('pre')){
          if(ind1==0)ind1=total1;    // 5 4 3 2 1 0 5 4 3 2 1 0...
          ind1--;
          dataPrint();
        }else if($(this).hasClass('next')){
          if(ind1==total1-1)ind1=-1;   // 0 1 2 3 4 5 0 1 2 3 4 5...
          ind1++;
          dataPrint();
        }
    
      });


  } 
});


//바뀌는 부분만
  // function popchange() {
  //   $(".pop .popup img").attr(
  //     "src",
  //     "./images/content1/pop0" + (ind1 + 1) + ".png"
  //   );
  //   txt = "";
  //   txt += "<dl>";
  //   txt += "<dt>" + memo[ind1].title + "</dt>";
  //   txt += "<dd>" + memo[ind1].contxt + "</dd>";
  //   txt += "<dd><span>제품 특징</span>";
  //   txt += "<ul><li>" + memo[ind1].sub1 + "</li>";
  //   txt += "<li>" + memo[ind1].sub2 + "</li>";
  //   txt += "<li>" + memo[ind1].sub3 + "</li></ul></dd>";
  //   txt += "<dd class='pop_bt'><span>사용 배터리 종류</span></dd>";
  //   txt += "</dl>";
  //   $(".pop .popup .txt").html(txt);

  //   $(".popup .pop_bt").css("background-image","url(./images/content1/pop_bt0" + (ind1 + 1) + ".jpg)");

  // }

 
  // $(".sbattery_application .app_box a").click(function (e) {
  //   e.preventDefault();

  //   ind1 = $(this).index(".sbattery_application .app_box a"); // 0 1 2 3 4 5 

  //   $('.pop_btn').fadeIn('slow');
  //   $(".pop .modal_box").fadeIn("fast");
  //   $(".pop .popup").fadeIn("slow");

  //   popchange();
  // });

  // $(".close_btn,.pop .modal_box").click(function (e) {
  //   e.preventDefault();
  //   $(".pop .modal_box").fadeOut("fast");
  //   $(".pop .popup").fadeOut("fast");
  //   $('.pop_btn').fadeOut('fast')
  // });
 
  // $('.pop_btn a').click(function(e){
  //   e.preventDefault();

  //   $('.pop .popup').hide().fadeIn('slow');

  //   if($(this).hasClass('pre')){
  //     if(ind1==0)ind1=total1;    // 5 4 3 2 1 0 5 4 3 2 1 0...
  //     ind1--;
  //     popchange();
  //   }else if($(this).hasClass('next')){
  //     if(ind1==total1-1)ind1=-1;   // 0 1 2 3 4 5 0 1 2 3 4 5...
  //     ind1++;
  //     popchange();
  //   }

  // });



// 자동차배터리 popup

//전역변수로 빼기
var ind2 = 0;
var txt2 = "";
var total2 = $('.automotive li').size(); // 총 6개
// console.log(total2);

// $('.pop_btn').hide();
// $('.pop .modal_box').hide();
// $('.pop .popup').hide();

$('.automotive .app_box a').click(function (e) {
  e.preventDefault();

  ind2 = $(this).index('.automotive .app_box a'); // 0 1 2 3 
  // console.log(ind2);

  $('.pop_btn').fadeIn('slow');
  $('.pop .modal_box').fadeIn("fast");
  $('.pop .popup:eq('+ind2+')').fadeIn("slow");

});

$('.close_btn,.pop .modal_box').click(function (e) {
  e.preventDefault();

  $('.pop_btn').fadeOut('fast')
  $('.pop .modal_box').fadeOut("fast");
  $('.pop .popup').fadeOut("fast");
  
});


