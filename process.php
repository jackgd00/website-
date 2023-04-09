<?php
$username = $_POST['user'];
$password = $_POST['pass'];

$con = new mysqli("localhost","root","","test");
if($con->connect_error) {
die("Failed to connect : ".$con->connect_error);
}
else{
    $stmt = $con->prepare("select * from registration where username = ?");
    $stmt ->bind_param("s", $username);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows>0) {
        $data = $stmt_result->fetch_assoc();
        if($data['password'] === $password) {
            echo "<h2>Login successfully!! Welcome</h2>";
        }
    else {
        echo "<h2>Invalid Username ot password</h2>";
    } 
}
    else 
    {
        echo "<h2>Invalid Username ot password</h2>";
    }
}


?>
