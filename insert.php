<?php
$con=mysqli_connect("127.10.56.130","adminWYfCEtH","ZZY3aVfPagpe","wedding");
$name=$_POST["name"];
$messages=$_POST["message"];
$email=$_POST["email"];
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

mysqli_query($con,"INSERT INTO messages
VALUES ('".$name."', '".$email."','".$messages."')");


mysqli_close($con);
?>

