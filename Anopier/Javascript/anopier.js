Ext.onReady(function() {
	Anopier.main();
});

/* This is the main function, only used for init
 * then
 */
Anopier.main = function(){
	//the first thing we need to do is get a few plugins..after this point,
	//plugins will be loaded using the PluginManager.
	Anopier.PluginManager.getPlugin("PluginManager", function(result, e){
		eval(result);
		
		//Load the event manager
		Anopier.PluginManager.loadPlugin("EventManager", function(){
			//Now we have loaded the initial plugins, we can start the application
			Anopier.run();
		});
		
	});
}

Anopier.run = function(){
	//the first we need to do is to display the login form.
	//we may not have got it yet, so we need to check
	Anopier.PluginManager.loadPlugin("LoginWindow", function(){
		var win = new Anopier.LoginWindow();
		win.show();
	});
	
}
