<?php
    include("../../inc/dbconn.php");

    $user=$_POST["user"];
    $sql="select * from usershop where user='{$user}'";

    $result=$mysqli->query($sql);  

   if($result->num_rows>0){
        while($row = mysqli_fetch_assoc($result)){
            $data[]=$row;
        }
    }

    echo json_encode($data);
?>