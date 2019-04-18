<?php
    include("../inc/dbconn.php");
    $group = $_POST['group'];
    $sql = "select * from goods where group='$group'";
    $result = $mysqli->query($sql);
    if ($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }
    }
    echo (json_encode($data));