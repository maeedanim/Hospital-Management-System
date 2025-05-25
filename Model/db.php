<?php
$host = "127.0.0.1";
$dbname = "ecolab_db";
$dbuser = "root";
$dbpass = "";
$dbemail = ""; // You can assign a value later as needed

function getConnection()
{
    global $dbname, $dbuser, $dbpass, $dbemail;

    $con = mysqli_connect($GLOBALS['host'], $dbuser, $dbpass, $dbname);
    return $con;
}


?>