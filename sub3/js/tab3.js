// 상생협력 tab

 
    $('.growth').show(); // 첫번째 탭 내용만 열어라
    $('.with_tab .tab1').addClass('current'); //첫번째 탭메뉴 활성화
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      

    $('.with_tab .tab').click(function(e){
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
          var ind = $(this).parent().index();  // 클릭시 해당 index를 뽑아준다
          console.log(ind);
        

          $('.withBox').hide(); //모든 탭내용을 안보이게...
          $('.with'+(ind+1)).show(); //클릭한 해당 탭내용만 보여라
          $('.with_tab .tab').removeClass('current'); //모든 탭메뉴를 비활성화
          $(this).addClass('current'); // 클릭한 해당 탭메뉴만 활성화

     });


