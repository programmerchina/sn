//function() {
//var e = a(this);
//clearTimeout(c), c = setTimeout(function() {
//  b.hasClass("lazy-bar-box") && !d.toolbarDataFlag && (d.toolbarDataFlag = !0, d.getToolbarData()), e.find("a.ng-bar-node").addClass("ng-bar-node-hover").siblings(".ng-d-box").slideDown(100)
//}, 150)
//}

(function(){
	var navmenu = document.querySelectorAll(".navmenu");
	for(var i = 0 ; i < navmenu.length ; i++){
		navmenu[i].onmouseenter = function(){
			this.lastElementChild.removeAttribute("style");
			this.onmouseleave = function(){
			this.lastElementChild.style = "height: 0; border: 0";
			
		    }
		}
	}
}())


//***********
//$('#span-btn').click(function(){
//	$('.top').toggle();
//})
//$('.bod').children("li").mouseenter(function(){
//	$(this).css({"background":"#fff","color":"#000"});
//	$(this).children("a").css({"color":"#f60"});
//	$(this).children("div").css({"width":"1000px","opacity":"1","border": "1px solid #382516"})
//})
//$('.bod').children("li").mouseleave(function(){
//	$(this).children("div").css({"width":"","opacity":"0","border-top": "1px solid #382516"})
//	$(this).css({"background":"","color":"#fff"});
//	$(this).children("a").css({"color":"#FFF"})
//})
//$('.bod').children("li").children("a").mouseenter(function(){
//		$(this).css({"color":"#f60"});
//	})
//$('.bod').children("li").children("a").mouseleave(function(){
//		$(this).css({"color":"#000"});
//	})
//
//$('.a').mouseenter(function(){
//	 $('.btnn-bx').animate({width:'toggle'},350);
//})
//$('.b').mouseenter(function(){
//	 $('.live').animate({width:'toggle'},350);
//})
//$('.c').mouseenter(function(){
//	 $('.btnn-kt').animate({width:'toggle'},350);
//})
//
//
//$('.a').mouseleave(function(){
//	 $('.btnn-bx').animate({width:'toggle'},350);
//})
//$('.b').mouseleave(function(){
//	 $('.live').animate({width:'toggle'},350);
//})
//$('.c').mouseleave(function(){
//	 $('.btnn-kt').animate({width:'toggle'},350);
//})
//var ul_1 = document.querySelector(".ul_1");
//var ul_2 = document.querySelector(".ul_2");
//for(var i=0;i<ul_1.children.length;i++){
//	ul_1.children[i].index = i;
//	ul_2.children[i].index = i;
//}
//var index = 0;
//ul_1.onmouseenter = function(e){
//	e=e||window.event;
//	var target = e.target||e.srcElement;
//	if(target.nodeName == "LI"){
//		index = target.index
//	}
//	ul_2.style.display = "block";
//	  ul_2.children[index].lastElementChild.removeAttribute("style");
//	  ul_2.children[index].firstElementChild.style.display = "none";
//     ul_2.onmouseenter = function(e){
//     	 e=e||window.event;
//      	var target = e.target||e.srcElement;
//      	  
// }
//}
//********************
//fix-top
var fix_ = document.querySelector(".fix-top-one");
var obj = document.querySelector(".bod");
fix_.onmouseenter = function(){
	this.style.height = '440px';
	obj.removeAttribute('style');
}
fix_.onmouseleave = function(){
	this.removeAttribute('style');
	obj.style.display = 'none';
}
//滚动事件
var fix_top = document.querySelector(".fix_top");
var fix_left = document.querySelector(".fix_left");
var liobj = fix_left.lastElementChild.children;
window.document.onscroll = function(){
	var doc = document.documentElement.scrollTop;
	console.log(doc)
    doc >= 1500?fix_top.removeAttribute('style'):fix_top.style.display = "none";
    if(doc >= 2500){
    	 fix_left.removeAttribute('style');
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[0].className = 'hover';
	     liobj[0].lastElementChild.style.color = "#fff";
	}else{
		 fix_left.style.display = "none";
	}
    if(doc >= 3300){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[1].className = 'hover';
	     liobj[1].lastElementChild.style.color = "#fff";
	}
    if(doc >= 4000){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[2].className = 'hover';
	     liobj[2].lastElementChild.style.color = "#fff";     
	}
   if(doc >= 4700){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[3].className = 'hover';
	     liobj[3].lastElementChild.style.color = "#fff";  
	}
    if(doc >= 5300){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[4].className = 'hover';
	     liobj[4].lastElementChild.style.color = "#fff";  
	}
     if(doc >= 5900){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[5].className = 'hover';
	     liobj[5].lastElementChild.style.color = "#fff";  
	}
      if(doc >= 6400){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[6].className = 'hover';
	     liobj[6].lastElementChild.style.color = "#fff";  
	}
       if(doc >= 7000){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[7].className = 'hover';
	     liobj[7].lastElementChild.style.color = "#fff";  
	}
        if(doc >= 7600){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[8].className = 'hover';
	     liobj[8].lastElementChild.style.color = "#fff";  
	}
         if(doc >= 8000){
	     for(var i = 0 ; i < liobj.length-1 ; i++){
	     liobj[i].removeAttribute("class");
	     liobj[i].lastElementChild.removeAttribute('style');
	    }
	     liobj[9].className = 'hover';
	     liobj[9].lastElementChild.style.color = "#fff";  
	}
         

}
document.querySelector(".fix_left_bot").onclick = function(){
	document.documentElement.scrollTop = 0;
}



//ob.onmouseenter = function(e) {
//	e = e || window.event;	
//	var target = e.target||e.srcElement;
//	if(target.nodeName == "LI"){
//		console.log(1)
//	}
//}
(function(){
       var ob = document.querySelector(".small");
       var sm = document.querySelector(".sm"); 
       var bi = document.querySelector(".bi");
	   for(var i = 0 ; i < ob.children.length ; i++){
	   	ob.children[i].onmouseenter = function(){
	   		sm.innerHTML = this.lastElementChild.lastElementChild.innerText;
	   		bi.src = this.lastElementChild.firstElementChild.src;
	   	}
	   }
}())
