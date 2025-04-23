<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Sample response (You can replace this with a database query)
$response = array(
    "station_id" => "120365",
    "location" => "Wele Handiya, Kaduwela",
    "images" => [
        "station.jpg",
        "tanker.jpg",
        "fueling.jpg"
    ]
);

echo json_encode($response);
?>
