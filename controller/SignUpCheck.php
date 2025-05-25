<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once('../Model/userModel.php'); 

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    echo "Form submitted!<br>";

    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    if ($username == "" || $password == "" || $email == "" || $confirm_password == "") {
        echo "All fields are required!";
        exit;
    }

    if ($password != $confirm_password) {
        echo "Passwords do not match!";
        exit;
    }

    $con = mysqli_connect('127.0.0.1', 'root', '', 'ecolab_db');
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // helpful for debugging

    $sql = "INSERT INTO user_table (user_name, user_email, user_password, user_role)
        VALUES ('$username', '$email', '$password', 'user')";

echo $sql; // ← ADD THIS LINE to debug
exit;


    if (mysqli_query($con, $sql)) {
        //header('Location: ../view/login.html');
        exit;
    } else {
        echo "Error: " . mysqli_error($con);
    }

    mysqli_close($con);
} else {
    header('Location: ../view/login.html');
    exit;
}
