<?php
    error_reporting(E_ALL);
    session_start();
    
    if(isset($_REQUEST['submit'])){
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
        $email = trim($_POST['email']);

        if($username == "" || $password == "" || $email == ""){
            echo "Null username/password/email!";
        }else{
            $con = mysqli_connect('127.0.0.1', 'root', '', 'ecolab_db');
            $sql = "insert into users values(null, '{$username}', '{$password}','{$email}')";
            if(mysqli_query($con, $sql)){
                header('location: ../view/login.html');
            }else{
                header('location: ../view/login.html');
            }

        }
    }else{
         header('location: ../view/login.html');
    }

?>