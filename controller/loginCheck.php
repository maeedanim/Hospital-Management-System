<?php
    session_start();
    
    if(isset($_REQUEST['submit'])){
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);


        if($email == "" || $password == ""){
            echo "Null username/password!";
        }else if($email == $password){
            //echo "valid user!";
            // $_SESSION['status'] = true;
            setcookie('status', 'true', time()+3000, '/');
            header('location: ../view/Dashboard.php');
        }else{
            echo "invalid user!";
        }
    }else{
        //echo "invalid request! please submit the form frist!";
        header('location: ../view/login.html');
    }

?>