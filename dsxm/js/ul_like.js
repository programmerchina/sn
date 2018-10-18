(function(){

	var arr_img = [];
	var arr_p_text = [];
	var arr_price = [];

   for(var i = 0 ; i < 65 ; i++){

   var liobj = document.createElement('li');
   var imgobj = document.createElement('img');
   var aobj = document.createElement('a');
   var aobj_ = document.createElement('a');
   var pobj = document.createElement('p');
   var pobj_ = document.createElement('p');
   var spanobj = document.createElement('span');
   var ptext = document.createTextNode("33.80");
   aobj.className = 'like-a-one';
   imgobj.src = 'imgs/index/' + "234014076498700680667525_x.jpg";
   pobj.innerHTML = "绝艺 卤味小食 全荤大礼包20小包 344g(湖南特产肉类熟食网红零食)";
   spanobj.innerHTML = '￥';
   aobj_.innerHTML = "找相似";
   aobj_.className = "like-a-two";
   pobj_.appendChild(spanobj);
   pobj_.appendChild(ptext);
   aobj.appendChild(imgobj);
   aobj.appendChild(pobj);
   aobj.appendChild(pobj_);
   liobj.appendChild(aobj);
   liobj.appendChild(aobj_);
   my$('ul_like').appendChild(liobj);

}
}())

