<?php
class database{
private $host = "localhost";
private $db_name = "revpanda";
private $username = "root";
private $password = "";
private $conn = null;

public function getConnection(){
    try {
        $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        $this->conn->exec("set names utf8");
    } catch(PDOException $exception){
        echo "Connection error: " . $exception->getMessage();
    }
    return $this->conn;
}
}


?>