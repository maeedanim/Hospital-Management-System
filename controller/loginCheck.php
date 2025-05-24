<?php
    error_reporting(E_ALL);
    session_start();
    require_once('../Model/userModel.php'); 
    if(isset($_REQUEST['submit'])){
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);


        if($email == "" || $password == ""){
            echo "Null username/password!";
        }else{
            $user = ['email'=> $email, 'password'=>$password ];
            $status = login($user);
            

            if($status){
                setcookie('status', 'true', time()+3000, '/');
                header('location: ../view/Dashboard.php');
            }else{
                header('location: ../view/login.html');
            }
         }
    }
    else{
        header('location: ../view/login.html');
    }


?>



