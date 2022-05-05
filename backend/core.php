<?php
include 'database.php';
class backendfunctions{

    private $conn;
    private $con;
    function __construct()
    {
        $this->conn = new database();
        $this->con = $this->conn->getConnection();
    }
    public function inputdata($a,$b,$c)
    {
        $sql = "INSERT INTO `tablea`(`A`) VALUES ('$a');
                INSERT INTO `tableb`(`B`) VALUES ('$b');
                INSERT INTO `tablec`(`c`) VALUES ('$c')";
        $res = $this->con->prepare($sql);
        if(!($res->execute())){
            echo "Error";
        }
    }
    public function selecta()
    {
        $sql = "SELECT * FROM tablea";
        $res = $this->con->prepare($sql);
        if($res->execute())
        {
            $vls = $res->fetchAll(PDO::FETCH_ASSOC);
            print_r(json_encode($vls));
        }
        else{
            echo " error ";
        }
    }
    public function selectb()
    {
        $sql = "SELECT * FROM tableb";
        $res = $this->con->prepare($sql);
        if($res->execute())
        {
            $vls = $res->fetchAll(PDO::FETCH_ASSOC);
            print_r(json_encode($vls));
        }
        else{
            echo " error ";
        }
        
    }
    public function selectc()
    {
        $sql = "SELECT * FROM tablec";
        $res = $this->con->prepare($sql);
        if($res->execute())
        {
            $vls = $res->fetchAll(PDO::FETCH_ASSOC);
            print_r(json_encode($vls));
        }
        else{
            echo " error ";
        }
    }

}
?>
