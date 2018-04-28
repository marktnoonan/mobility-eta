<?php 
if (strtolower($_POST['providedUsername']) === 'test' && $_POST['providedPassword'] === 'test') {
$trips = file_get_contents('example-trips.json');
echo json_encode($trips);
}