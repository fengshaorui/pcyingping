<?php
header('content-type:text/html;charset=utf-8');
$mysqli=new mysqli('localhost','root','root','mymusicweb');
if($mysqli->connect_errno){
    die();
}
$type=$_POST["type"];
$type1=$_POST["type1"];
$paga = $_POST["paga"];
$paga1=($paga-1)*3;
$sql = "select * from pic where type='$type1'limit $paga1,3";
$sql1 = "select * from pic where type='$type'limit $paga1,3";
$result = $mysqli->query($sql);
$result1 = $mysqli->query($sql1);
if($result->num_rows>0){
    while($row=mysqli_fetch_assoc($result)){
        $list1[]=$row;
    }
    $data[1]=$list1;
}
if($result1->num_rows>0){
    while($row1=mysqli_fetch_assoc($result1)){
        $list2[]=$row1;
    }
    $data[2]=$list2;
}  
echo json_encode($data);
?>