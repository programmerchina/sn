var leftobj = my$('l');
var rightobj = my$('r');
var self = 1;
leftobj.onmouseenter = change;
rightobj.onmouseenter = change;
leftobj.onmouseleave = leave;
rightobj.onmouseleave = leave;
function change(){
  if(!this.style.color){

  this.style.color = '#f60';
  this.flag = true;

  }

  this.onclick = function(){
     this.flag = false;

  	 if(this == leftobj){
  	 	my$('run').style.left = '16%';
  	 	this.style.color = '#f60';
  	 	rightobj.removeAttribute('style');
      my$('body').style.display = 'block';
      my$('body2').style.display = 'none';
      my$('rig').style.height = '410px';
  	 }else{
  	 	my$('run').style.left = '66%';
  	 	this.style.color = '#f60';
  	 	leftobj.removeAttribute('style');
      my$('body').style.display = 'none';
      my$('body2').style.display = 'block';
      my$('rig').style.height = '468px';


  	 }
  }


};
function leave(){
  // console.log(this.flag);
  
  if(this.flag){
  	this.removeAttribute('style');
  }
}
// *********************
// *********************
// 二维码
var divobj = 0;
my$('two').onmouseenter = function(e){
  e = e || window.event;
  divobj = my$('two').getElementsByTagName('div');
  divobj[0].style.left = '10%';
  my = divobj[0];
  var timeid = setTimeout(function(){
  if(getOffset() == 36){
  divobj[1].style.display = 'block';


   }
 },500)

my$('two').onmouseleave = function(){

  
  var divobj = my$('two').getElementsByTagName('div');
  divobj[1].style.display = 'none';
  // console.log(divobj[0].offsetLeft)

  divobj[0].style.left = '33%';

  

  }
     
}
  

  function getOffset(){
    // console.log(divobj[0].offsetLeft)

    return divobj[0].offsetLeft;
  }
// *****************
var us = document.querySelector('.us');
var pa = document.querySelector('.pa');
var x = document.querySelector('.x');
var y = document.querySelector('.y');
var dl = document.querySelector('.end');
var prompt = document.querySelector('.prompt');
var flag = false;
my$('user').onfocus = function(){
  this.placeholder = '';
  us.style.backgroundPosition = "-82px -67px";
  this.onkeyup =function(){
  this.value==""?x.style.display = 'none':x.style.display = 'block';  
  x.onclick = function(){
     my$('user').value='';
     my$('user').value==""?x.style.display = 'none':x.style.display = 'block'; 
    }  
  }
  this.onblur =function(){
    this.placeholder = "用户名/手机/邮箱/门店会员卡号";
    us.removeAttribute('style');
 
  
  }
}
my$('pass').onfocus = function(){
  this.placeholder = '';
    pa.style.backgroundPosition = "-41px -67px";
    this.onkeyup =function(){
    this.value==""?y.style.display = 'none':y.style.display = 'block';
    y.onclick = function(){
     my$('pass').value='';
     my$('pass').value==""?y.style.display = 'none':y.style.display = 'block'; 
    } 
  }
  this.onblur =function(){
    this.placeholder = "密码";
    pa.removeAttribute('style');
 
  
}
}
var spanobj = document.createElement('span');
var text = '';
dl.onclick = function(){
  if(prompt.children.length == 2){
    prompt.lastElementChild.remove();
  }


  if(my$('pass').value==""||my$('pass').value.length<6||my$('pass').value.length>20){
    text='请输入6-20位密码！';
//  self = 0;
  }else if(my$('user').value==""&&my$('pass').value!=""){
    text='请输入用户名/邮箱/手机号！';
//  self = 0;
  }else if(my$('user').value!=""&&my$('pass').value!=""){
//  self = 1;
    text='为了你的账户安全，请拖动滑块完成验证。';

    
    if(flag){

//   if(self==1){
    	
    	 var xhr = new XMLHttpRequest();
         var url = `js/login.php?username=${my$('user').value}&password=${my$('pass').value}&${Date.now()}`;
         console.log(url);
         xhr.open('GET', url, true);
         xhr.send(null);
         xhr.onreadystatechange = function () {


                if (xhr.readyState == 4 && xhr.status == 200) {


                 console.log(xhr.responseText)
                 callback(xhr.responseText);
                    
     

                }

            }
//  }

 
    }
  }
  spanobj.innerHTML = text;
  prompt.appendChild(spanobj);
  prompt.style.display = 'block';

  }

  



var run = document.querySelector('.run');
var moveobj = document.querySelector('.move');
run.onmousedown = function(e){
  e=e||window.event;
  run.removeAttribute('style');
  my$('on').removeAttribute('style');
  var x = e.offsetX;
  var _this = this;
  
  document.onmousemove = function(e){
    console.log(_this.offsetLeft)
     var __x = e.pageX;
     var ___x = my$('rig').offsetLeft + 26; 

     var k = __x - x - ___x;
      if(k < 0){
        k = 0;
      }
      if(k >= 278){
        k = 278;
      }
      my$('on').style.width = k + 'px';
      run.style.left = k + 'px';
     
  }
}
document.onmouseup = function(){
    document.onmousemove=null;
    run.style.transition = "all .5s";
    my$('on').style.transition = "all .5s";
    if(run.offsetLeft < 277){
      run.style.left = '0px';
      my$('on').style.width = '0px';
    }else{
    run.onmousedown = null;
    run.style.backgroundPosition = '-28px -263px';
    my$('txt').innerHTML = "验证通过";
    my$('txt').style.color = "#fff";
    flag = true;


    }
    
}
function callback(num){
//	debugger
	if(num == 200){
		location.href='register.html';
	}
text=`该账户名或密码不存在，<a href='' style='color: #2272c8'>忘记账户名</a>或<a href="" style='color: #2272c8'>注册新账号?</a>`;
                        
  spanobj.innerHTML = text;
  prompt.appendChild(spanobj);
  prompt.style.display = 'block';
}
    





 












