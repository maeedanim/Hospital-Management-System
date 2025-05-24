<?php
    //include('db.php');
    //include_once('db.php');
    //require('db.php');
    require_once('db.php');

function login($user){
    $con = getConnection();
    $sql = "select * from user_table where user_email='{$user['email']}' and user_password='{$user['password']}'";
    $result = mysqli_query($con, $sql);
    
    if (!$result) {
        // If query failed, print the error and return false
        die("SQL Error: " . mysqli_error($con));
    }
    $count = mysqli_num_rows($result);

    if($count == 1){
        return true;
    }else{
        return false;
    }

}

function getUserById($id){

}

function getAllUser(){

}

function deleteUser($id){

}

function addUser($user){

}

?>