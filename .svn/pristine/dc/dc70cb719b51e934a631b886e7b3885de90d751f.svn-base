<?php
//     header("content-type:text/html;charset=utf-8");
// $mysqli=new mysqli('localhost','root','root','section1tab');
// if($mysqli->connect_error){
//   die($mysqli->connect_error);
// }


include('../inc/dbconn.php');
$type=$_GET["type"];
// $img=$_GET[];
$mysqli->set_charset('utf8');


$sql="select * from main7tab where type='{$type}'";
$result=$mysqli->query($sql);
if($result->num_rows>0){
    while($row=mysqli_fetch_assoc($result)){
        $data[]=$row;
    }
}


echo json_encode($data);