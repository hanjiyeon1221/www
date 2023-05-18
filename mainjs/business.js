var cnt=0;  // 0 1 2 3  
var total=0;  // 4
$('.business .business_box li:eq(0)').fadeIn('slow');
$('.business .business_img img:eq(0)').fadeIn('slow');
total=$('.business .business_img img').size();  // 4

// console.log(total);

$('.btnNext').click(function(e){
    e.preventDefault();

    cnt++;  // 0 1 2 3 ...카운트 증가
    if(cnt==total){
    cnt=0;
    }
    $('.business .business_box li').hide();
    $('.business .business_box li:eq('+cnt+')').fadeIn('slow');

    $('.business .business_img img').hide();
    $('.business .business_img img:eq('+cnt+')').fadeIn('slow'); 
    
});

$('.btnPrev').click(function(e){
    e.preventDefault();

    cnt--;  // 3 2 1 0 ...카운트 감소
    if(cnt==-1){
    cnt=total-1;  // 3
    }
    $('.business .business_box li').hide();  
    $('.business .business_box li:eq('+cnt+')').fadeIn('slow');

    $('.business .business_img img').hide(); 
    $('.business .business_img img:eq('+cnt+')').fadeIn('slow');
});