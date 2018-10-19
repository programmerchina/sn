
 var big = (function(){
        
          return {
            init: function() {
              // 获取最大的盒子
              this.$box = document.querySelector('.box');
              // 获取展示图片的盒子
              this.$showImage = this.$box.querySelector('.show-image');
              // 获取放大图片的盒子
              this.$showBigImage = this.$box.querySelector('.show-big-image');
              // 获取放大的图片
              this.$bigImage = this.$showBigImage.firstElementChild;
              // 获取小图片的盒子
              this.$ulbox = this.$box.querySelector('.img-box');
              // 获取每一张图片的li集合
              this.$liAll = this.$ulbox.children;
              // 获取移动的小黑块(放大镜)
              this.$filter = this.$showImage.querySelector('.filter');
              // 给每一li添加索引， 方便获取
              for(var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].index = i;
              }

              this.event();

            },
            event: function() {
              var _this = this;
              // 利用事件委托，给每一个li添加点击事件
              this.$ulbox.onclick = function(ev) {
                ev = ev || window.event;
                // 获取目标元素
                var target = ev.target || ev.srcElement;
                // 这里点击的是img
                if(target.nodeName == 'IMG') {
                  _this.showImage(target.parentNode.index);
                }

              }

              // 这里用onmouseenter： 子元素不触发事件
              this.$showImage.onmouseenter = function() {
                // 放大镜显示
                _this.$filter.style.display = 'block';
                // 展示大图片显示
                _this.$showBigImage.style.display = 'block';
                // 注意: 需要放大镜显示以后,才可以获取真正的放大镜尺寸
                _this.maxX = this.clientWidth - _this.$filter.offsetWidth;
                _this.maxY = this.clientHeight - _this.$filter.offsetHeight;
              }
              this.$showImage.onmouseleave = function() {
                _this.$filter.style.display = 'none';
                _this.$showBigImage.style.display = 'none';
              }
              // 在展示图片盒子里移动
              this.$showImage.onmousemove = function(ev) {
                // 计算放大镜的位置
//              debugger
                var x = ev.clientX -  _this.$filter.offsetWidth / 2 - _this.$showImage.offsetLeft;
                var y = ev.clientY - _this.$filter.offsetHeight / 2 - _this.$showImage.offsetTop;
                // 边界处理
                if(x < 0) {
                  x = 0;
                } else if(x > _this.maxX) {
                  x = _this.maxX;
                }
                if(y < 0) {
                  y = 0;
                } else if(y > _this.maxY) {
                  y = _this.maxY;
                }
                _this.$filter.style.left = x + 'px';
                _this.$filter.style.top = y + 'px';

                // 移动大图片
                _this.$bigImage.style.left = x * -3 + 'px';
                _this.$bigImage.style.top = y * -3 + 'px';

              }
              
            },
            showImage: function(index) {
              for(var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].removeAttribute('class');
              }
              this.$liAll[index].className = 'active';
              // 获取最小图片的地址
              var src = this.$liAll[index].firstElementChild.getAttribute("c_src");
              this.$showImage.firstElementChild.src = src.replace('small', 'big');
              this.$bigImage.src = src.replace('small', 'largest')
              console.log(src);
            }
            
          }
          
        }())
        big.init();
        
var pro = document.querySelector(".pro_ul");
var buy = document.querySelector(".ko");
for(var i = 0 ; i < pro.children.length ; i++){
        pro.children[i].onmouseenter = function(){
        
     	
     	this.onclick = function(){
             for(var i = 0 ; i < pro.children.length ; i++){
             	pro.children[i].firstElementChild.lastElementChild.style.display = "none";
             	
             }
            
     		this.firstElementChild.lastElementChild.style.display = "block";
            pro.setAttribute("pz",this.firstElementChild.firstElementChild.nextElementSibling.innerText);
//          console.log(pro.getAttribute("pz"));
            document.querySelector(".bt").innerHTML = `【12期免息+赠乐心手环】vivo NEX 6GB+128GB ${this.firstElementChild.firstElementChild.nextElementSibling.innerText} 零界全面屏AI双摄手机全网通4G手机 双卡双待`
     	}
     	
}
}
for(var i = 0 ; i < buy.children.length ; i++){
        buy.children[i].onmouseenter = function(){
     
     	
     	this.onclick = function(){
             for(var i = 0 ; i < buy.children.length ; i++){
             	buy.children[i].lastElementChild.style.display = "none";
             }
     
     		this.lastElementChild.style.display = "block";
     	}
     	
}
}
var lj = document.querySelector(".lj");
for(var i = 0 ; i < lj.children.length ; i++){
        lj.children[i].onmouseenter = function(){
     
     	
     	this.onclick = function(){
             for(var i = 0 ; i < lj.children.length ; i++){
             	lj.children[i].lastElementChild.style.display = "none";
             }
     
     		this.lastElementChild.style.display = "block";
     	}
     	
}
}
var fq = document.querySelector(".fq");
for(var i = 0 ; i < fq.children.length ; i++){
        fq.children[i].onmouseenter = function(){
     
     	
     	this.onclick = function(){
             for(var i = 0 ; i < fq.children.length ; i++){
             	fq.children[i].lastElementChild.style.display = "none";
             }
     
     		this.lastElementChild.style.display = "block";
     	}
  }  
 }
var jianhao = document.querySelector(".jianhao");
var jiahao = document.querySelector(".jiahao");
my$("js").onclick = function(e){
	e=e||window.event;
	var target = e.target||e.srcElement;
	if(target.nodeName == "A" && target.className=="jianhao"){
		if(Number(my$("buyn").value)>1){
			my$("buyn").value -= 1;
		}
		
	}else if(target.nodeName == "A" && target.className=="jiahao"){
		my$("buyn").value =Number(my$("buyn").value)+1;
		
	}
}

//localStorage.setItem(img,)

var red_buy = document.querySelector(".red_buy");
var obj = {};
red_buy.onclick = function(){
	var price = document.querySelector(".zh").innerText.replace(".00",'');
	var count = my$('buyn').value;
	var pz = document.querySelector(".pro_ul").getAttribute("pz");	 
	console.log(pz)
	var src = my$("im").src.split("/").slice(5).join("/");
	var name  = document.querySelector(".bt").innerText;
	var obj = {
	   	name:name,
	   	price:price,
	   	count:count,
	   	src:src,
	   	pz:pz,
	}
	console.log(obj);
    addShop(obj);
     
    
// *************   
	
}
 function addShop(obj){ 	
	   	var shopcar =localStorage.shopcar || "[]";
	   	console.log(localStorage.shopcar)
	   	shopcar =JSON.parse(shopcar);
	   
	   	console.log(obj);
	   	if(shopcar.length > 0){
		  	console.log(shopcar)
		   	for(var j = 0 ; j < shopcar.length ; j++){ 
			   	var arr = [];
			   	arr = shopcar;
		   		if(shopcar[j].pz == obj.pz){
					console.log(obj.count)
					arr[j].count = Number(arr[j].count) + parseInt(obj.count);
                    arr[j].price = "￥" + Number(obj.price.replace("￥ ",''))*arr[j].count;
					console.log(arr[j].price)
					console.log(Number(arr[j].count))
					shopcar = arr;
					break;
		   		}
		   		
		   	}
		   	if(j == shopcar.length){
         obj.price = "￥" + obj.price.replace("￥ ",'')*obj.count;
		   			console.log(1)
		 	        shopcar.unshift(obj);
		 	     
		   			
		   		}
		   		
		 }else {
		     obj.price = "￥" + obj.price.replace("￥ ",'')*obj.count;
		 	   shopcar.unshift(obj);
		 	  
		 }
		 
	   localStorage.shopcar=JSON.stringify(shopcar);
}
//	
//	
//	 	function addLocalStorage(){
//
//			   		//1.提取标题
//				   	var name=$('.proinfo-title h1').html().replace(/<[^>]+>/ig,'')
//				   	$('.add-name-text').html(name);//赋值弹出框成功内容
//				   	//2.提取配置
//				   	var pz=$('.d').html();
//				   	//3.提取价格
//				   	var price=$('.zh').html().replace(/[^\d.]/g,'')
//				   	//4.提取数量
//				   	var count=$('#buyn').val();
//				   	//5.获取图片
//				   	var src=$('.detais_body_left_bigImg img').attr('src');
//				   	var obj={
//				   		name:name,
////				   		goodsid:id,
//				   		price:price,
//				   		count:count,
//				   		src:src,
//				   		pz:pz
//				   	}
//				   	//判断是否存在localStorage 是否对象重复
//				   	var jsonStr='['+JSON.stringify(obj)+']';
//				   	var curStorage=localStorage.getItem('shopcar');
//				   	var shopcarArr=JSON.parse(curStorage);
//				   	if(curStorage){
//				   		//循环所有数组里的对象,如果没有商品重复则创建新的对象
//				   		var noRepeat=true;
//				   		for(var i=0;i<shopcarArr.length;i++){
//				   			//id和套餐相同则加数量
//				   			if(shopcarArr[i].name===obj.name){
//				   				// 发现重复添加数量
//				   				shopcarArr[i].count=Number(shopcarArr[i].count)+Number(obj.count);
//			   					localStorage.setItem('shopcar',JSON.stringify(shopcarArr))
//				   				noRepeat=false;//发现重复则,设置false,不执行添加对象
//				   				break;
//				   			}
//				   		}
//				   		if(noRepeat){//没有重复则添加对象
//			   				shopcarArr.push(obj);
//			   				console.log(obj)
//		   					localStorage.setItem('shopcar',JSON.stringify(shopcarArr))
//				   		}
//				   	}else{
//				   		//不存在localStorage,创建
//			   			localStorage.setItem('shopcar',jsonStr)
//				   	}
//				   	
//
//				   	// console.log(curStorage);
//
//				   	 console.log(name+','+price+','+count+','+src);
//			   	}
//	addLocalStorage();
//}
