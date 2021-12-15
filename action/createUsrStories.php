<?php
require_once("config.php");
global $DB;
$DB = new mysqli(Config::DB_HOST, Config::DB_USER, Config::DB_PASSWORD, Config::DB_NAME);
$iddiv=$_GET["id"];
$sql="INSERT INTO `User_Stories`(`id`,`titre` ,`description`, `Avancement`) VALUES (NULL,'titres','Description de l\'user story','0')";
$DB->query($sql);
