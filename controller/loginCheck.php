<?php
error_reporting(E_ALL);
session_start();
require_once('../Model/userModel.php'); 

if (isset($_REQUEST['submit'])) {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if ($email == "" || $password == "") {
        echo "Null username/password!";
    } else {
        $loginData = ['email' => $email, 'password' => $password];
        $user = login($loginData); // now returns user data if match

        if ($user) {
            if ($user['user_role'] === 'admin') {
                $_SESSION['admin'] = $user['user_name'];
                setcookie('status', 'admin', time() + 3000, '/');
                header('location: ../view/admin_dashboard.php');
                exit();
            } elseif ($user['user_role'] === 'user') {
                $_SESSION['user'] = $user['user_name'];
                setcookie('status', 'user', time() + 3000, '/');
                header('location: ../view/Dashboard.php');
                exit();
            } else {
                echo "Unknown role!";
                header("Refresh: 2; URL=../view/login.html");
                exit();
            }
        } else {
            echo "Invalid email or password!";
            header("Refresh: 2; URL=../view/login.html");
            exit();
        }
    }
} else {
    header('location: ../view/login.html');
    exit();
}
