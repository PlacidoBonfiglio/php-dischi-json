<?php 
require_once __DIR__ . "/functions/functions.php";

$content = json_encode(file_get_contents("api/dischi.json"), true);

var_dump($content);
?>