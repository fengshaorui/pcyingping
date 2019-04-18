<?php
header('content-type:text/html;charset=utf-8');
$mysqli=new mysqli('localhost','root','root','addpic');
if($mysqli->connect_errno){
    die();
}

?>