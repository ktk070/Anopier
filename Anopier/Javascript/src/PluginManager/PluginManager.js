Anopier.PluginManager.aLoadedPlugin = new Array();

Anopier.PluginManager.loadPlugin = function(pluginName, callback){
	//check if this plugin has already been loaded first
	var found = false;
	for(var x=0;x<Anopier.PluginManager.aLoadedPlugin.length;x++){
		if (Anopier.PluginManager.aLoadedPlugin[x] == pluginName){
			found = true;
		}
	}
	if (!found) {
		Anopier.PluginManager.getPlugin(pluginName, function(result, e){
			eval(result);
			Anopier.PluginManager.aLoadedPlugin.push(pluginName);
			callback();
		});
	}
}
