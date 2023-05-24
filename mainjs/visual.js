var timeonoff;   //타이머 처리
var imageCount=$('.gallery li').size();   //이미지 총개수
var v_cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....
var onoff=true; // true: 타이머 동작, false: 타이머 중지


//첫번째 버튼 활성
$('.mbutton').removeClass('on'); // 모든 버튼 off
$('.btn'+v_cnt).addClass('on'); // 해당 버튼만 on
$('.btn1').css('width','150px');
$('.gallery .link1').fadeIn('slow');  //첫번째 이미지 활성

function moveg(){
    v_cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
   
  //  for(var i=1;i<=imageCount;i++){
  //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
  //  }
  
   $('.gallery li').hide(); //모든 안보이기
   $('.gallery .link'+v_cnt).fadeIn('slow'); //카운터된 자신만 보이기
    // $('.gallery li:eq('+v_cnt-1+')').fadeIn('slow');                    

    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼 색 비활성
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
    
    $('.mbutton').removeClass('on'); //모든 버튼 비활성
    $('.mbutton').css('width','100px'); // 모든 버튼 원래의 너비
    $('.btn'+v_cnt).addClass('on');   //자신만 활성
    $('.btn'+v_cnt).css('width','150px');   //활성화된 버튼의 너비만
    // $('.dock span:eq('+v_cnt-1+')')css('속성','값');  

     if(v_cnt==imageCount)v_cnt=0;  //카운트 초기화 0
}


timeonoff= setInterval( moveg , 5000);// 타이머를 동작, 1~5이미지를 순서대로 자동 처리

//var 변수 = setInterval( function(){처리코드} , 4000);  //변수에 정보 담아두기
//clearInterval(변수); -> setInterval 중지



$('.mbutton').click(function(event){  //각각의 버튼 클릭시
  var $target=$(event.target); //클릭한 버튼 $target == $(this)
  clearInterval(timeonoff); //타이머 중지     

 //  for(var i=1;i<=imageCount;i++){
 //      $('.gallery .link'+i).hide(); //모든 이미지 안보이게
 //    } 

 $('.gallery li').hide(); //모든 이미지 안보이게

 if($target.is('.btn1')){  //첫번째 버튼 클릭
    v_cnt=1;  //클릭한 해당 카운트를 담아두기
 }else if($target.is('.btn2')){  
    v_cnt=2; 
 }else if($target.is('.btn3')){ 
    v_cnt=3; 
 }

 $('.gallery .link'+v_cnt).fadeIn('slow');  //자기 자신만 이미지가 보이게
 
 // for(var i=1;i<=imageCount;i++){
 //   $('.btn'+i).css('background','#00f'); //버튼 모두 비활성
 //   $('.btn'+i).css('width','16');
 // }

 $('.mbutton').removeClass('on'); //버튼 모두 비활성
 $('.mbutton').css('width','100px');
 $('.btn'+v_cnt).addClass('on'); 
 $('.btn'+v_cnt).css('width','150px'); //자신 버튼만 활성
 
 if(v_cnt==imageCount)v_cnt=0;  //카운트 초기화

 timeonoff= setInterval( moveg , 5000); //타이머 부활

 if(onoff==false){ //타이머가 중지상태라면
       onoff=true; //타이머 동작
       $('.ps').css('background-image','url(./images/stop.png)');
 }
 
});

//stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
  if(onoff==true){ // 타이머가 동작 중이면,
      clearInterval(timeonoff);   //타이머 강제 중지
      $(this).css('background-image','url(./images/play.png)');
      onoff=false;  //타이머 중지
  }else{  // false 타이머가 중지상태면,
    timeonoff= setInterval( moveg , 5000); //타이머 재동작, play버튼 클릭시 부활
    $(this).css('background-image','url(./images/stop.png)');
    onoff=true; //타이머 동작
  }
});	

