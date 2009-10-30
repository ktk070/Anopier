/*
 * Anopier
 * Copyright(c) 2008-2009, KTK.
 * licensing@anopier.com
 * 
 * http://www.anopier.co.uk
 */

Anopier.LoginWindow = function(){
	
	var formPanel = new Ext.form.FormPanel({
		border: false,
		padding: '5 5 5 5',
		defaultType: 'textfield',
		items:[{
			fieldLabel: 'Username',
			id: 'anopier-loginWindow-username',
			value: 'aroberts'
		},{
			fieldLabel: 'Password',
			inputType: 'password',
			id: 'anopier-loginWindow-password',
			value: 'opaljaguar33'
		}]
	});
	
	Anopier.LoginWindow.superclass.constructor.call(
		this,
		{
			buttons:[{
				text:'Login',
				handler: this.doLogin,
				scope: this
			},{
				text:'New Account',
				handler: this.showNewAccountWindow,
				scope: this
			}],
			closable: false,
			constrain: true,
			shadow: true,
			title: 'Anopier Login',
			width: 300,
			height: 125,
			modal: true,
			items:[formPanel],
			id: 'anopier-loginWindow'
		}
	);
	
	this.addEvents({loggedIn:true});
}

Ext.extend(Anopier.LoginWindow, Ext.Window, {
	doLogin: function(){
		//Get the username and password
		var username = Ext.getCmp('anopier-loginWindow-username');
		var password = Ext.getCmp('anopier-loginWindow-password');
		
		Anopier.User.authenticate(username.getValue(), password.getValue(), function(result, e){
			if (result == 'false'){
				alert("Incorrect username or password.");
			} else {
				alert("Correct");
			}
		});
	},
	
	doLoginCallback: function(data){

	},
	
	showNewAccountWindow: function(){
		//ensure that we have the new account window first
		Anopier.PluginManager.loadPlugin("NewAccountWindow", function(){
			var oNewAccWin = new Anopier.NewAccountWindow();
			oNewAccWin.show();
		});
	}
	
});