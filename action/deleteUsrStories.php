<?php
require_once("config.php");
include("alterUsrStories.php");
global $DB;
$DB = new mysqli(Config::DB_HOST, Config::DB_USER, Config::DB_PASSWORD, Config::DB_NAME);


updateAll();
$id=$_GET["id"];
$sql='DELETE FROM `User_Stories` WHERE id='.$id;
$result = $DB->query($sql);
updateAll();