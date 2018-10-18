//var timer = setInterval(function(){
//	var date = Date();
//	date = date.split(' ');
//  date = date[4].split(':');
//  var spanobj = my$('time').getElementsByClassName('time');
//	for (var i = 0 ; i < spanobj.length ; i++) {
//		spanobj[i].innerHTML = date[i];
//	}
//},1000)

//    localStorage.hour = 0;
//	  localStorage.min = 0;
//	  localStorage.s = 9;
(function(){
	if(!localStorage.hour){
	  localStorage.hour = 24;
	  localStorage.min = 59;
	  localStorage.s = 59;
	}
	  var spanobj = my$('time').getElementsByClassName('time');
	  var timeid = setInterval(function(){
	        localStorage.s--;
	        if(localStorage.s<0){
	        	localStorage.min -= 1;
	        	localStorage.s = 59;
	        }
	        if(localStorage.min<0){
	        	localStorage.hour -= 1;
	        	localStorage.min = 59;
	        }
	        if(localStorage.hour==0&&localStorage.s==0&&localStorage.min==0){
	        	spanobj[0].innerHTML = "0" + localStorage.hour;
	        	localStorage.removeItem('hour');
	        	spanobj[1].innerHTML = "0" + localStorage.min;	        	
	        	localStorage.removeItem('min');
	        	spanobj[2].innerHTML = "0" + localStorage.s;	        	
	        	localStorage.removeItem('s');
	        	clearInterval(timeid);
	        	return;
	        }
	        for (var i = 0 ; i < spanobj.length ; i++) {
				if(i==0){
					localStorage.hour < 10?spanobj[i].innerHTML = "0" + localStorage.hour:spanobj[i].innerHTML = localStorage.hour;
					
				}
				if(i==1){
					localStorage.min < 10?spanobj[i].innerHTML = "0" + localStorage.min:spanobj[i].innerHTML = localStorage.min;
				}
				if(i==2){
					localStorage.s < 10?spanobj[i].innerHTML = "0" + localStorage.s:spanobj[i].innerHTML = localStorage.s;
					
				}
			 }
	 },1000)			
}())
