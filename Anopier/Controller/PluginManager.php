<?php

namespace Anopier\Controller;

class PluginManager{

    const JS_PLUGIN_BASE = "Anopier/Javascript";

    /**
     * Gets a plugin and then returns it.
     *
     * @param $pluginName
     
     * @return string
     *
     * @remotable
     */
    public function getPlugin($pluginName){

        //1. Check that the plugin actually exists
        if (!$this->checkPluginExists($pluginName)){
            //The plugin doesn't exist, so throw an exception
            throw new \Exception(sprintf("The plugin %s does not exist", $pluginName));
        }
        
        //2. Check if we can use a cached version
        if (!$this->isPluginCached($pluginName)){
            //hasn't been cached, so create a one now
            $this->cachePlugin($pluginName);
        }
        
        //3. Return the cached version
        return $this->getCachedPlugin($pluginName);
        
    }
    
    private function checkPluginExists($pluginName){
        return file_exists(self::JS_PLUGIN_BASE . '/src/' . $pluginName);
    }
    
    private function isPluginCached($pluginName){
        return false; //disable caching
        return file_exists(self::JS_PLUGIN_BASE . '/bin/' . $pluginName . '.js');
    }
    
    private function cachePlugin($pluginName){
        $path = self::JS_PLUGIN_BASE.'/src/' . $pluginName;
        $aJsFile = $this->getAllJsFiles($path);
        
        //throw an error if this plugin doesn't have any files
        if (!count($aJsFile)){
            throw new \Exception("The plugin " . $pluginName . " does not have any files");
        }
        
        $fileContents = "";
        foreach ($aJsFile as $jsFile){
            //just double check that this file does exist
            $filePath = $path . '/' . $jsFile;
            if (file_exists($filePath)){
                $fileContents = $fileContents . "\n" . file_get_contents($filePath);
            }
        }
        
        //we now need to minify the file
        require_once("jsmin/jsmin.php");
        $fp = fopen(self::JS_PLUGIN_BASE . '/bin/' . $pluginName . '.js' , 'w');
        fwrite($fp, \JSMin::minify($fileContents));
        fclose($fp);
    }
    
    private function getAllJsFiles($path){
        $aJsFile = array();
        
        if ($handle = opendir($path)) {
            while (false !== ($file = readdir($handle))) {
                //if this file is a JS file, add it to the
                //list
                if (substr($file, strlen($file)-3) == '.js'){
                    //found a file
                    $aJsFile[] = $file;
                }
            }
            closedir($handle);
        }
        
        return $aJsFile;
    }
    
    private function getCachedPlugin($pluginName){
        $filePath = self::JS_PLUGIN_BASE . '/bin/' . $pluginName . '.js';
        
        if (file_exists($filePath)){
            return file_get_contents($filePath);
        }
        
        throw new \Exception("Could not load cache file for plugin " . $pluginName);
    }

}

?>