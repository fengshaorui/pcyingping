<?php
    include("../inc/dbconn.php");
    $type = $_POST["type"];
    $sql = "select * from scard where type='$type'";
    $result = $mysqli->query($sql);
    if ($result->num_rows > 0){
        while($row=$result->fetch_assoc()){
            $data[]=$row;
        }
    }
    echo (json_encode($data));


