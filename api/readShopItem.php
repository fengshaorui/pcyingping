<?php
    include("../inc/dbconn.php");
    $user = $_POST["user"];
    $sql = "select * from usershop where user='$user'";
    $res = $mysqli->query( $sql );
    if( $res->num_rows ){
        while( $item = $res->fetch_assoc() ){
            $arr[] = $item;
        }
        $result = array("flag"=>0, "list"=>$arr);
    }else{
        $result = array("flag"=>1);
    }
    echo json_encode( $result );