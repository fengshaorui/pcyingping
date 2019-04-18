<?php
    include("../../inc/dbconn.php");


    $page=$_POST["page"];
    $start=$page*5;
    $sql="select * from main where item='like' limit $start,5";

    $result=$mysqli->query($sql);
    if($result->num_rows>0){
        while($row = mysqli_fetch_assoc($result)){
            $data[]=$row;
        }
        echo json_encode($data);
    }
?>