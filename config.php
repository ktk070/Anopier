<?php
// switch it to false if you do not want to use FirePHP
// $useFirePHP would be false also for a production system
$useFirePHP = true;
 
// require FirePHP files
if($useFirePHP) {
	require_once("firephp/lib/FirePHPCore/FirePHP.class.php");
	require_once("firephp/lib/FirePHPCore/fb.php");
}
 
// define empty fb() function so code does not break 
// on any forgotten fb() calls later
else {
	function fb() {};
}
 
// eof
?>