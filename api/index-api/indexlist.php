<?php
    include("../../inc/dbconn.php");


    $type=$_POST["type"];
    $sql="select * from main where item='$type'";
    $result=$mysqli->query($sql);
    if($result->num_rows>0){
        while($row = mysqli_fetch_assoc($result)){
            $data[]=$row;
        }
        echo json_encode($data);
    }
    
?>