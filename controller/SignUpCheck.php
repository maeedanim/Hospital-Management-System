<?php
    session_start();

    if (isset($_POST['submit'])) {
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
        $confirmPassword = trim($_POST['confirm_password']); // extra field for confirmation

        if ($username == "" || $password == "" || $confirmPassword == "") {
            echo "All fields are required!";
        } else if ($password !== $confirmPassword) {
            echo "Passwords do not match!";
        } else {
            // Simulate successful signup
            setcookie('status', 'true', time() + 3000, '/');
            header('location: home.php');
        }
    } else {
        // Redirect if form wasn't submitted
        header('location: signup.html');
    }
?>
