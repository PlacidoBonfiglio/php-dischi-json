<?php 
require_once __DIR__ . "/functions/functions.php";

$content = json_decode(file_get_contents("api/dischi.json"), true);

header("content-type: application/json");

echo $content;
?>