<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'core.php';


$back = new backendfunctions();
if(isset($_GET['a']) && isset($_GET['b']) && isset($_GET['c']))
{
    $back->inputdata($_GET['a'],$_GET['b'],$_GET['c']);
}
else if(isset($_GET['read'])){
    if($_GET['read']=='a')
    {
        $back->selecta();
    }
    else if($_GET['read']=='b')
    {
        $back->selectb();
    }
    else if($_GET['read']=='c')
    {
        $back->selectc();
    }
    
}