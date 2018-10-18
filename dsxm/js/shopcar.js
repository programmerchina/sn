
(function(){
	var car = document.querySelector(".cartBox");
	console.log(JSON.parse(localStorage.shopcar));
	var p = document.querySelectorAll(".p");
	console.log(p)
	for(var i = 0 ; i < JSON.parse(localStorage.shopcar).length ; i++){

    zx();
    (function(){
    var mr = document.querySelectorAll(".mr");

    for(var i = 0 ; i < mr.length; i++){ 
	

    mr[i].onclick = function(){
    	mr = document.querySelectorAll(".mr");
    	mr.length -= 1;
    	
//  	*********** 
         var shopcar =localStorage.shopcar || "[]";
	   	shopcar =JSON.parse(shopcar);  
//	   	debugger
		   	for(var j = 0 ; j < shopcar.length ; j++){ 

		   		if(shopcar[j].pz == this.parentElement.parentElement.parentElement.getAttribute("pz")){

//					console.log(shopcar[j])
					shopcar.splice(j,1);
//					console.log(shopcar[j])
					localStorage.shopcar=JSON.stringify(shopcar);
					break;
		   		}
		   		
		   	}
//  	***********
	    console.log(mr.length)
		if(mr.length < 2){
	    my$("ssr").style.display = "none";		
		document.querySelector(".kong").style.display = "block";
		}
}
    
    




}}());
    function zx(){
    	
    var op = document.createElement("div");
	op.className = "order_content";
	op.innerHTML = `<div class="order_content" style="margin-bottom: 20px;">
		        <ul class="cart-list order_lists">
		            <li class="list_chk">
                        <input type="checkbox" id="checkbox_2 ch" class="son_check" style="opacity: 0;">
                        <label for="checkbox_2" class="shop" ></label>
                    </li>
                    <li class="list_con">
                        <div class="list_img">
                        	<a href="javascript:;">
                        		<img src="${JSON.parse(localStorage.shopcar)[i]["src"]}" alt="">
                        	</a>
                        </div>
                        <div class="list_text">
                        	<a href="javascript:;">${JSON.parse(localStorage.shopcar)[i]["name"]}</a>
                        </div>
                        <div class="shoping">
                        	<a href="" class="zz">选购增值服务</a>
                        	<i class="arr"></i>
                        	<span class="sn">惠</span>
                        </div>
                    </li>
                    <li class="list_info">
                        <p class="p">颜色：<span class="jp">${JSON.parse(localStorage.shopcar)[i]["pz"]}</span></p>
                        <p>版本：6GB+64GB</p>
                    </li>
                    <li class="list_price">
                        <p class="price">￥2799.00</p>
                    </li>
                    <li class="list_amount">
                        <div class="amount_box">
                            <a href="javascript:;" class="reduce reSty">-</a>
                            <input type="text" value="${JSON.parse(localStorage.shopcar)[i]["count"]}" class="sum">
                            <a href="javascript:;" class="plus">+</a>
                        </div>
                        <div class="amount_msg">最多可买</div>
                        <div class="amo">99件</div>
                    </li>
                    <li class="list_sum">
                        <p class="sum_price">${JSON.parse(localStorage.shopcar)[i]["price"]}.00</p>
                    </li>
                    <li class="list_op" pz="${JSON.parse(localStorage.shopcar)[i]["pz"]}">
                        <p class="sc"><a href="javascript:;" class="scBtn">移入收藏</a></p> 	
                        <p class="del"><a href="javascript:;" class="delBtn">删除</a></p>
                           <section class="my_model" style="display: none;">
                           	    <span class="closeModel"></span>
						        <p class="my_model_p"><i class="qd"></i>确定要删除此商品吗？</p>
						        <div class="opBtn">
								        <a href="javascript:;" class="dialog-sure mr">确定</a>
								        <a href="javascript:;" class="dialog-close">关闭</a>
			                    </div>
                           </section>
                    </li>
		        </ul>
		        <div class="zenp">
		        	<span class="icon-promo">限量赠</span>
		        	<a href="">【赠品】中国电信流量卡1元1GB</a>
		        </div>`;
		        car.appendChild(op);
		       }
    	
   }
	
     }())
