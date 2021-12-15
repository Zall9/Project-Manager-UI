<?php
require_once("config.php");
include("alterUsrStories.php");
global $DB;
$DB = new mysqli(Config::DB_HOST, Config::DB_USER, Config::DB_PASSWORD, Config::DB_NAME);


$id=$_GET["id"];
$message=$_GET["message"];
$titre=$_GET["title"];


echo "</br>";

echo "</br>";

echo "</br>";
$sql="UPDATE `User_Stories` SET `titre`=\"".$titre."\" ,`description`=\"".$message."\" WHERE id=".$id;

$DB->query($sql);
//



