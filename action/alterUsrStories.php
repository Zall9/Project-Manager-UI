<?php
require_once("config.php");
global $DB;
$DB = new mysqli(Config::DB_HOST, Config::DB_USER, Config::DB_PASSWORD, Config::DB_NAME);
function updateAll(){
    global $DB;
    $i=0;
    $sql = "SELECT * FROM `%s`";
    $sql = sprintf($sql, Config::TABLE_USER_STORIES);
    $result = $DB->query($sql);
    $list=array();
    while ($row = mysqli_fetch_assoc($result)) {
        $row["id_div"]=$i;
        $i++;
        array_push($list,$row);   
    }
    foreach($list as $row){
        $result2="";
        $sql2Part1="UPDATE `User_Stories` SET `id_div`=";
        $sql2Part2 =" WHERE `id`= ";
        $sql2Part1=$sql2Part1.(strval($row["id_div"]));
        $sql2Part2=$sql2Part2.$row['id'];
        $result2=$sql2Part1.$sql2Part2;
        $DB->query($result2);

    }
}
updateAll();