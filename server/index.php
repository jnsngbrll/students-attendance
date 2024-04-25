<?php
include("config.php");

$result = mysqli_query($conn, "SELECT * FROM students");

$students = [];

while ($record = mysqli_fetch_assoc($result)) {
    $students[] = $record;
}

echo json_encode($students);

mysqli_close($conn);
?>