<?php
// Get the username and password from the form
$username = $_POST['username'];
$password = $_POST['password'];

// Connect to the database
$db = new mysqli('host', 'username', 'password', 'database');

// Check the user's credentials against the database
$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $db->query($query);

// If the login is successful, redirect the user to the welcome page
if ($result->num_rows > 0) {
  session_start();
  $_SESSION['username'] = $username;
  header('Location: welcome.php');
}
// Otherwise, display an error message
else {
  echo 'Invalid username or password. Please try again.';
}