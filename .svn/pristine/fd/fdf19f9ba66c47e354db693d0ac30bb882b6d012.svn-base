<?php
    include("../inc/dbconn.php");
    $imgUrl = $_POST["imgUrl"];
    $count = $_POST["count"];
    $price = $_POST["price"];
    $info = $_POST["info"];
    $user = $_POST["user"];
    $sqlPrev = "select * from usershop where user='$user'";
    $res = $mysqli->query( $sqlPrev );
    $flag = true;
    if( $res->num_rows ){
        while( $item = $res->fetch_assoc() ){
            if( $item["imgUrl"] == $imgUrl && $item["user"] == $user ){
                $num = intval( $item["count"] ) + intval( $count );
                $sqlUp = "update usershop set count=$num where user='$user' and imgUrl='$imgUrl'";
                $mysqli->query( $sqlUp );
                $flag = false;
            }
        }
    }
    if( $flag ){
        $sql = "insert into usershop(imgUrl, count, price, info, user) values('$imgUrl', $count, $price, '$info', '$user')";
        $result = $mysqli->query( $sql );
        if( $result ){
            echo "执行成功";
        }
    }
   
    