<?php
    include("inc/dbconn.php");
    include("init.inc.php");


    $sql="select * from main where item='like' limit 5";

    $result=$mysqli->query($sql);
    if($result->num_rows>0){
        while($row = mysqli_fetch_assoc($result)){
            $data[]=$row;
        }

    }

    $smarty->assign("list",$data); 
    $smarty->display("index.html");
    
?>