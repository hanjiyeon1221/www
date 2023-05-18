var timeonoff;   //타이머 처리  홍길동 정보
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
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
    
    $('.mbutton').removeClass('on'); //버튼불다꺼!!
    $('.mbutton').css('width','100px'); // 버튼 원래의 너비
    $('.btn'+v_cnt).addClass('on');   //자신만 불켜
    $('.btn'+v_cnt).css('width','150px');   
    // $('.dock span:eq('+v_cnt-1+')')css('속성','값');  

     if(v_cnt==imageCount)v_cnt=0;  //카운트의 초기화 0
}


timeonoff= setInterval( moveg , 5000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리

//var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
//clearInterval(변수); -> 살인마/사이코패스/살인청부업자



$('.mbutton').click(function(event){  //각각의 버튼 클릭시
  var $target=$(event.target); //클릭한 버튼 $target == $(this)
  clearInterval(timeonoff); //타이머 중지     

 //  for(var i=1;i<=imageCount;i++){
 //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
 //    } 

 $('.gallery li').hide(); //모든 이미지 안보인다.

 if($target.is('.btn1')){  //첫번째 버튼 클릭
    v_cnt=1;  //클릭한 해당 카운트를 담아놓는다
 }else if($target.is('.btn2')){  
    v_cnt=2; 
 }else if($target.is('.btn3')){ 
    v_cnt=3; 
 }

 $('.gallery .link'+v_cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
 
 // for(var i=1;i<=imageCount;i++){
 //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
 //   $('.btn'+i).css('width','16');
 // }

 $('.mbutton').removeClass('on'); //버튼 모두불꺼
 $('.mbutton').css('width','100px');
 $('.btn'+v_cnt).addClass('on'); 
 $('.btn'+v_cnt).css('width','150px'); //자신 버튼만 불켜 
 
 if(v_cnt==imageCount)v_cnt=0;  //카운트 초기화

 timeonoff= setInterval( moveg , 5000); //타이머의 부활!!!

 if(onoff==false){ //중지상태냐??
       onoff=true; //동작~~
       $('.ps').css('background-image','url(./images/stop.png)');
 }
 
});

//stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
  if(onoff==true){ // 타이머가 동작 중이면,
      clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
      $(this).css('background-image','url(./images/play.png)');
      onoff=false;   
  }else{  // false 타이머가 중지 상태냐??
    timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
    $(this).css('background-image','url(./images/stop.png)');
    onoff=true; 
  }
});	

