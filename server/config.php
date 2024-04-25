<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "your username";
$password = "your password";
$dbname = "school-attendance";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
