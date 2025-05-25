<?php
    //include('db.php');
    //include_once('db.php');
    //require('db.php');
    require_once('db.php');

function login($user){
    $con = getConnection();
    $sql = "SELECT * FROM user_table WHERE user_email='{$user['email']}' AND user_password='{$user['password']}'";
    $result = mysqli_query($con, $sql);

    if (!$result) {
        die("SQL Error: " . mysqli_error($con));
    }

    if (mysqli_num_rows($result) == 1) {
        return mysqli_fetch_assoc($result); // return full user data including role
    } else {
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