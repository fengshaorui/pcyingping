<?php
    header("content-type:text/html;charset=utf-8");   // 设置编码, 针对查询结果中的中文
    date_default_timezone_set('PRC'); //设置中国时区 
    $mysqli = new mysqli("localhost", "root", "root", "mymusicweb");
    $mysqli->set_charset("utf8");
    if( $mysqli->connect_errno ){
        die( "连接失败".$mysqli->connect_error );
    };
    $val = $_POST["val"];
    // echo ( $val );
    $sql = "select * from tabq where type='$val'";
    $result = $mysqli->query($sql);
    if ($result->num_rows > 0){
        while($row=$result->fetch_assoc()){
            $num[]=$row;
        }
    }
    echo (json_encode($num));
?>
