<?php
    $username = "admin";
    $password = "admin123";

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $userName = $_POST['username'];
        $passWord = $_POST['password'];

        if ($username === $userName && $password === $passWord) {
            echo "<script>alert('Đăng nhập thành công');</script>";
            header("location: index.html");
            exit();
        } else {
            echo "<script>
            alert('Đăng nhập thất bại');
            window.location.href = 'login.html';
            </script>";
            exit();
        }
    }
?>