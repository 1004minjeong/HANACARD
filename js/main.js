 //event_box2 slider

 $('.eb_slider_list').slick({
   arrows: false,
   dots: true,
   autoplay: true,
   pauseOnDotsHover: false, //마우스를 올렸을때 autoplay가 멈추는 기능 해제
 });
 //재생/정지버튼

 $('.event_box2 .page_act .btn_stop').click(function (e) {
   e.preventDefault();
   if ($('.event_box2 .page_act').hasClass("on")) {
     $('.event_box2 .page_act').removeClass("on");
     $('.eb_slider_list').slick('slickPause');

   }
 })


 $('.event_box2 .page_act .btn_play').click(function (e) {
   e.preventDefault();
   $('.event_box2 .page_act').addClass("on");
   $('.eb_slider_list').slick('slickPlay');
 })


 /* card */

 let card = $('.card');
 card.slick({
   arrows: false,
   dots: true,
   autoplay: true,
   pauseOnHover: false,
 });

 $('.event_box3 .pagn_act .btn_stop').click(function (e) {
   e.preventDefault();
   if ($('.event_box3 .pagn_act').hasClass("on")) {
     $('.event_box3 .pagn_act').removeClass("on")
     card.slick('slickPause');
   }

 })

 $('.event_box3 .pagn_act .btn_play').click(function (e) {
   e.preventDefault();
   $('.event_box3 .pagn_act').addClass("on")
   card.slick('slickPlay');
 })

 // life 踰꾪듉
let tab=$('.life_menu ul li');
let menu=$('.life_style li');

tab.mouseover(function(){
    let target = $(this);
    let index = target.index();
    console.log(index)//index=태생적으로 태어날때 가지고나온 번호를 추출하는방법
    menu.css({opacity:0})
    menu.eq(index).css({opacity:1})
    

});