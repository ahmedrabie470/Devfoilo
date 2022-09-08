let aboutOffset =  $('#ABOUT').offset().top; 
$(window).scroll(function()
{
let wScroll = $(window).scrollTop();
if ( wScroll > aboutOffset -90)
{
  $('#main-nav').css('backgroundColor' , 'black')
}
else
{
  $('#main-nav').css('backgroundColor' , 'transparent')
}
})


$('#main-nav a').click(function (e) {
  let x = $(e.target).attr('href')
  $('html,body').animate({scrollTop:$(x).offset().top},100 , function(){
    
  })
  $('#main-nav a').click(function(e){
    $(e.target).css('color','orange')
   $(e.target).parent().siblings().Children().css('color','orange')

  })
})


new WOW().init();


var typed = new Typed('.element', {
  strings: ["i'm morgan freman | ", "i'm Web Developer |"],
  typeSpeed:40 ,
  backSpeed:40,
  showCursor: false,  
  fadeOut: true,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  smartBackspace: true ,// Default value
  
});