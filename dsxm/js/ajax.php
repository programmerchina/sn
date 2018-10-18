<?php

    header("Content-Type: text/html; charset=UTF-8");

    $coon = new mysqli('localhost', 'root', '', 'yh', '3306');

    $coon -> query("SET CHARACTER SET 'utf8'");//读库 
    $coon -> query("set names 'utf8'");//写库

    $_GET['username'] = empty($_GET['username']) ? '' : $_GET['username'];
    $_GET['password'] = empty($_GET['password']) ? '' : $_GET['password'];
    $username = $_GET['username'];
    $password = $_GET['password'];

	$sql = 'SELECT username from user';
	$sq = "INSERT into user (username, password) values ('$username','$password')";
    $result = $coon -> query($sql);
    $rows = $result -> fetch_all();
    $flag = true;
    for($i=0;$i<count($rows);$i++){
    if($rows[$i][0] == $username){
    $flag = false;	  
      }
    }
    if($flag){
    	
       if($coon -> query($sq)){
       	
       	 echo "注册成功!";

       };
 
      
    }else {
       
         echo "用户名已存在!";
    
      
            
    }
    






?>