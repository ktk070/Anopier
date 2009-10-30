<?php
session_start();

require_once('ExtDirect/API.php');
require_once('ExtDirect/Router.php');

// this should alwasy be set but if its not, then execute api.php without outputting it
if(!isset($_SESSION['ext-direct-state'])) {
    ob_start();
    include('api.php');
    ob_end_clean();
}

$api = new ExtDirect_API();
$api->setState($_SESSION['ext-direct-state']);
  
$router = new ExtDirect_Router($api);
$router->dispatch();
$router->getResponse(true); // true to print the response instantly