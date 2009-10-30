<?php
require_once("config.php");
 
session_start();
 
// Include ExtDirect PHP Helpers
require_once('ExtDirect/API.php');
require_once('ExtDirect/CacheProvider.php');
 
// disable caching for development, enable for production
//$cache = new ExtDirect_CacheProvider('cache/api_cache.txt');
$api = new ExtDirect_API();
 
$api->setRouterUrl('router.php'); // default
 
// disable caching for development, enable for production
//$api->setCacheProvider($cache);
 
$api->setNamespace('Anopier');
$api->setDescriptor('Anopier.API');
$api->setDefaults(array(
    'autoInclude' => true,
    'basePath' => 'Anopier\Controller'
));
 
$api->add(
    array(
        'User',
        'PluginManager'
    )
);

$api->output();
 
$_SESSION['ext-direct-state'] = $api->getState();
 
// eof
?>