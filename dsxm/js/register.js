

var reg_one = /^1[34578]\d{9}$/;
var reg_two = /^[\d]{6}$/;

var _self_ = 0;
console.log(_self_)
my$('tel').onblur = function(){
    if(this.value==''){
 	  this.placeholder = "请输入手机号";

    }

    if(reg_one.test(my$('tel').value) == true){

		my$('gou').style.display = 'block'
		  if(_self_ == 0){
                   _self_++;
                   }else{_self_ == 1};


	}else if(my$('tel').value != ''){
		_self_ = 0;
		my$("tel").nextElementSibling.innerHTML = "格式不正确，请您输入正确的手机号。";
		
	}
}
	my$('tel').onfocus = function(){
		if(this.value==''){
 		this.placeholder = '';
 	  }

		my$('gou').style.display = 'none';
		my$("tel").nextElementSibling.innerHTML = '';

	}
// }
 my$('code').onblur = coder;

 function coder(){
 	  if(my$('code').value==''){
 	  my$('code').placeholder = "请输入手机验证码";
      
 
    }

    if(reg_two.test(my$('code').value) ==true){

       my$("code").nextElementSibling.nextElementSibling.innerHTML = '参数不正确';

	}else if(my$('code').value != ''){
		my$("code").nextElementSibling.nextElementSibling.innerHTML = "请输入6位数字验证码。";
	}
	
}
   my$('code').onfocus = function(){

		if(this.value==''){
 		this.placeholder = '';
 	  }

		my$("code").nextElementSibling.nextElementSibling.innerHTML = '';
		this.onkeyup = function(){
			if(this.value.length == 6){
  
              coder();

			}else if(my$('code').value==''){
 	          // my$('code').placeholder = "请输入手机验证码";
              my$("code").nextElementSibling.nextElementSibling.innerHTML = '';
      
 
             }else {

              my$("code").nextElementSibling.nextElementSibling.innerHTML = '';

			}


			  

		}
	}

 var reg_three = /^(?!\d+$)(?![a-zA-Z]+$)(?![@#$%^&]+$)[a-zA-Z@#$%^&\d]{6,20}$/;
 var zero = /^(?!\d+$)(?![a-zA-Z]+$)[a-zA-Z\d]{6,20}$/;
 var one = /^(?![a-zA-Z]+$)(?![@#$%^&]+$)[a-zA-Z@#$%^&]{6,20}$/;
 var two = /^(?!\d+)(?![@#$%^&]+$)[\d@#$%^&]{6,20}$/;
 var reg_four = /^[a-zA-Z]{6,20}$/;
 var reg_five = /^[\d]{6,20}$/;
 var reg_six = /^[@#$%^&]{6,20}$/;
 my$('pass').onblur = function(){
 	if(my$('pass').value==''){
 	  my$('pass').placeholder = "请输入密码";
	  my$("pass").nextElementSibling.nextElementSibling.innerHTML = '';
    }else if(this.value.length<6||this.value.length>20){
	  my$("pass").nextElementSibling.nextElementSibling.innerHTML = '请输入6-20位密码！';
	  my$("pass").nextElementSibling.nextElementSibling.style.color = "red";
    }else if(reg_four.test(this.value)){
	  my$("pass").nextElementSibling.nextElementSibling.style.color = "red";
	  my$("pass").nextElementSibling.nextElementSibling.innerHTML = "不能为纯字母！";

 	}else if(reg_five.test(this.value)){
	  my$("pass").nextElementSibling.nextElementSibling.style.color = "red";
	  my$("pass").nextElementSibling.nextElementSibling.innerHTML = "不能为纯数字！";	
 	}else if(reg_six.test(this.value)){
	  my$("pass").nextElementSibling.nextElementSibling.style.color = "red";
	  my$("pass").nextElementSibling.nextElementSibling.innerHTML = "不能为纯字符！";	
 	}else {
      my$("pass").nextElementSibling.nextElementSibling.style.display = 'none';
      document.querySelector('.self').style.bottom = '-24px';
      if(_self_ == 0){
          _self_++;
      	
      }else{_self_ == 1};

 	}
 	
}
 
my$('pass').onfocus = function(){
        document.querySelector('.self').style.bottom = '-48px';
		if(this.value==''){
 		this.placeholder = '';
 	  }
        my$("pass").nextElementSibling.nextElementSibling.style.display = 'block';
	    my$("pass").nextElementSibling.nextElementSibling.style.color = "#999";
		my$("pass").nextElementSibling.nextElementSibling.innerHTML = "6-20个字符，由字母，数字和符号的两种以上组合。<a href=''>密码设置建议</a>";
		this.onkeyup = function(){
			var index = 0;
			if(this.value!=''){
              my$('eyes').style.display = "block";
              if(this.value.length>=6&&this.value.length<=20){
              	document.querySelector('.self').style.display = 'block';
//            	debugger
                reg_four.test(this.value)==true?index=1:'';
                reg_six.test(this.value)==true?index=1:'';
                reg_five.test(this.value)==true?index=1:'';
                reg_three.test(this.value)==true?index=3:'';           
                one.test(this.value)==true?index=2:'';
                two.test(this.value)==true?index=2:'';
                zero.test(this.value)==true?index=2:'';


              	switch(index){
              	case 1:{
              	   my$('d').style.background = "";
	               my$('z').style.background = "";
	               my$('g').style.background = "";
	               my$('d').style.background = "#fa0";
	               break;
                  }
              	case 2:{
              	   my$('d').style.background = "";
	               my$('z').style.background = "";
	               my$('g').style.background = "";
	               my$('d').style.background = "#fa0";
	               my$('z').style.background = "#fa0";
	               if(_self_ == 1){
                   _self_++;
                   }else{_self_ == 0};

	               
	               break;
	              }
              	case 3:{
              	   my$('d').style.background = "";
	               my$('z').style.background = "";
	               my$('g').style.background = "";
              	   my$('d').style.background = "#fa0";
	               my$('z').style.background = "#fa0";
	               my$('g').style.background = "#fa0";
	               break;
              	  }

              	}

              	
              }else{

	               document.querySelector('.self').style.display = 'none';

              }
          

			}else{
             // debugger
	            my$('eyes').style.display = "none";		
	            document.querySelector('.self').style.display = 'none';


			}

		}
	}
var f = true;
my$('eyes').onclick = function(){


    if(f){
      f=false;
      my$('pass').style.fontSize = "12px";
      this.style.backgroundPosition = "-25px -93px";
      my$('pass').type = 'text';
    }else{
      my$('pass').removeAttribute('style');
      this.style.backgroundPosition = "-50px -93px";
	  my$('pass').type = 'password';
	  f=true;


    }
     
}


//***************
my$('btn').onclick = function(){
//	debugger
	if(my$('tel').value == ''){
		my$("tel").nextElementSibling.innerHTML = "请输入注册手机！";		
	}
	console.log(_self_)
    if(_self_ == 2){
console.log(_self_)
    	 var xhr = new XMLHttpRequest();
         var url = `js/ajax.php?username=${my$('tel').value}&password=${my$('pass').value}&${Date.now()}`;
         console.log(url);
         xhr.open('GET', url, true);
         xhr.send(null);
         xhr.onreadystatechange = function () {
         	console.log(xhr.readyState);

                if (xhr.readyState == 4 && xhr.status == 200) {



                 callback(xhr.responseText);
                    
                   

                }

            }
    }
//  _self_ = 0;

}

function callback(num){
	alert(num);
};
