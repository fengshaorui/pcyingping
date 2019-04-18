<?php
    include("../inc/dbconn.php");
    $id = $_GET["id"];
    $sql = "delete from usershop where id=$id";
    $res = $mysqli->query( $sql );
    if( $res ){
        echo "删除成功";
    }else{
        echo "删除失败";
    }
