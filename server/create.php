<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $course = $_POST["course"];

    $sql = "INSERT INTO students (firstname, lastname, course) VALUES ('$firstname', '$lastname', '$course')";

    if (mysqli_query($conn, $sql)) {
        echo "Record created successfully";
    } else {
        echo "Error creating record: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>