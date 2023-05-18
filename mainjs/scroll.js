var smh= $('.main_visual').height();  //메인 비주얼의 높이
var h0= $('#content section:eq(0)').offset().top-600 ;
var h1= $('#content section:eq(1)').offset().top-600 ;
var h2= $('#content section:eq(2)').offset().top-600 ;
var h3= $('#content section:eq(3)').offset().top-600 ;
var h4= $('#content section:eq(4)').offset().top-600 ;

//스크롤 이벤트
$(window).on('scroll',function(){
var scroll = $(window).scrollTop();  //스크롤top의 좌표를 담는다

// $('.text').text(scroll);
//스크롤 좌표의 값을 찍는다.


    //스크롤의 거리의 범위를 처리
if(scroll>=h0 && scroll<h1){

    $('#content>section:eq(0)').addClass('boxMove1');
    //첫번째 내용 콘텐츠 애니메이션

}else if(scroll>=h1 && scroll<h2){

        $('#content>section:eq(1)').addClass('boxMove2');

}else if(scroll>=h2 && scroll<h3){
    
        $('#content>section:eq(2)').addClass('boxMove3');

}else if(scroll>=h3 && scroll<h4-50){
     
        $('#content>section:eq(3)').addClass('boxMove4');
}else if(scroll>=h4-50){
    
    $('#content>section:eq(4)').addClass('boxMove5');
} 

});
