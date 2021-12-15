<?php
require_once("config.php");
global $DB;
$DB = new mysqli(Config::DB_HOST, Config::DB_USER, Config::DB_PASSWORD, Config::DB_NAME);

function get_all_user_stories() : array {
    global $DB;
    $sql = "SELECT * FROM `%s`";
    $sql = sprintf($sql, Config::TABLE_USER_STORIES);
    $result = $DB->query($sql);
    $list=array();
    while ($row = mysqli_fetch_object($result)) {
        array_push($list,$row);
    }
    mysqli_free_result($result);
    return $list;
}
$testTab=get_all_user_stories();
$array=array();
foreach($testTab as $objet){
    //$objet=$objet->description;
    json_encode($objet);
    array_push($array,$objet);
}
//var_dump($array);
echo json_encode($array);
//echo $testTab[0]->description;
//echo $testTab[0]->Avancement;
