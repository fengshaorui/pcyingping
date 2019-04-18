<?php

    include("../../inc/dbconn.php");
    $user=$_POST["user"];
    $pwd=$_POST["pwd"];

    $sql="insert into user(username,password) values('{$user}','{$pwd}')";
    $result=$mysqli->query($sql);
    if($mysqli->affected_rows>0){
        $data["code"]=1;
    }else{
        $data["code"]=0;
    }

    echo json_encode($data);
?>