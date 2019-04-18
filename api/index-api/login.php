<?php

    include("../../inc/dbconn.php");
    

    $user=$_POST["user"];
    $pwd=$_POST["pwd"];
    $sql="select * from user where username='$user' and password='$pwd'";
    $result=$mysqli->query($sql);
    if($mysqli->affected_rows){
        $data["code"]=0;
    }else{
        $data["code"]=1;
    }
    echo json_encode($data);
    
?>