
var mySwiper = new Swiper ('.wang', {

    autoplay: { 
    	delay: 3000,
    	disableOnInteraction: false
    },
    loop: true,
    effect: 'fade',

    pagination: {
          el: '.swiper-pagination',
//        type: 'fraction',
          clickable :true,
},
//  renderBullet: function (index, circle_a) {
//        return '<span class="' + className + '">' + (index + 1) + '</span>';
//      },
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})


$(function () {
        var settimes;
        var $this = $(".scrollNews");
  
        function scrollNews(nature) {
            var scroll = nature.find("ul:first");
            var lineHeight = scroll.find("li:first").height();
            scroll.animate({ "margin-top": -lineHeight + "px" }, 600, function () {
                scroll.css({ "margin-top": "0px" }).find("li:first").appendTo(scroll);
            });
        }
       
        $this.hover(function () {
            clearInterval(settimes);
        }, function () {
            settimes = setInterval(function () {
                scrollNews($this);
            }, 3000);
        }).trigger("mouseout")

        var x = 10; 
        var y = 20;
        $(".tooltip").mouseover(function (e) {  
            this.MyTitle = this.title;        
        
            var $add = "<div id='tooltip'>" + this.MyTitle + "</div>";
    
            $("body").append($add);
         
            $("#tooltip").css(
                {
                    "top": (e.pageY + y) + "px",
                    "left": (e.pageX + x) + "px"
                }
                ).show("fast");   
        }).mouseout(function () {   
            this.title = this.MyTitle;
            $("#tooltip").remove();
        }).mousemove(function (e) {
            $("#tooltip").css({    
 
                "top": (e.pageY + y) + "px",
                "left": (e.pageX + x) + "px"
            });
        });
    })
 
var mySwiper = new Swiper ('.buying-bottom-left', {

   autoplay: { 
    	delay: 3000,
    	disableOnInteraction: false
    },
    loop: true,
    slidesPerView : 4,

     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

//var thumbsSwiper = new Swiper ('.vio', {
//autoplay: { 
//  	delay: 3000,
//  	disableOnInteraction: false
//  },
//  loop: true,
//  slidesPerView : 1,
//
//})
////
//var mySwiper = new Swiper('.boo',{
// autoplay: { 
//  	delay: 3000,
//  	disableOnInteraction: false
//  },
//  loop: true,
//  slidesPerView: 3,
//})


var mySwiper = new Swiper('.boo', {

    loop: true,
    slidesPerView : 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    });


//var ab = my$("fixr").children;
//for(var i = 0 ; i < ab.length ; i++){
//	ab[i].index = i;
//	ab[i].onmouseenter = function(){
//		this.style = "background-color: #FFAA01!important;";
//		this.removeAttribute("class")	
//	}
//	ab[i].onmouseleave = function(){
//		switch(this.index){	
//			case 0:this.className = "ppp";break;
//			case 2:this.className = "ggg";break;
//			case 3:this.className = "aaa";break;
//			case 4:this.className = "bbb";break;
//			case 5:this.className = "ccc";break;
//			case 6:this.className = "ddd";break;
//			case 7:this.className = "eee";break;
//			case 8:this.className = "rrr";break;
//			case 9:this.className = "jjj";break;	
//		}
//		this.removeAttribute("style");	
//		
//	}
//}




var mySwiper = new Swiper ('.purchase-right-body', {

  loop: true,
  slidesPerView: 'auto',
  loopedSlides: 6,
  centeredSlides: true,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
