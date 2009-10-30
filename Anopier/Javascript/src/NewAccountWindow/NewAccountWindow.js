/*
 * Anopier
 * Copyright(c) 2008-2009, KTK.
 * licensing@anopier.com
 * 
 * http://www.anopier.co.uk
 */

Anopier.NewAccountWindow = function(){
	
	var formPanel = new Ext.form.FormPanel({
		border: false,
		padding: '5 5 5 5',
		defaultType: 'textfield',
		items:[{
			fieldLabel: 'Username',
			id: 'anopier-newAccountWindow-username'
		},{
			fieldLabel: 'Password',
			inputType: 'password',
			id: 'anopier-newAccountWindow-password'
		},{
			fieldLabel: 'Verify Password',
			inputType: 'password',
			id: 'anopier-newAccountWindow-verifyPassword'
		},{
			fieldLabel: 'First Name',
			id: 'anopier-newAccountWindow-firstName',
		},{
			fieldLabel: 'Last Name',
			id: 'anopier-newAccountWindow-lastName'
		},{
			fieldLabel: 'Email',
			id: 'anopier-newAccountWindow-email'
		}, {
			fieldLabel: 'Company Name',
			id: 'anopier-newAccountWindow-companyName'
		}]
	});
	
	Anopier.NewAccountWindow.superclass.constructor.call(
		this,
		{
			buttons:[{
				text:'Create Account',
				handler: this.createAccountClicked,
				scope: this
			},{
				text:'Cancel'
			}],
			closable: false,
			constrain: true,
			shadow: true,
			title: 'Anopier - New Account',
			width: 300,
			height: 255,
			modal: true,
			items:[formPanel],
			id: 'anopier-newAccountWindow'
		}
	);
}

Ext.extend(Anopier.NewAccountWindow, Ext.Window, {

	createAccountClicked: function(){
		//Get all the content
		var oUserData = [];
		oUserData.username = Ext.getCmp('anopier-newAccountWindow-username');
		oUserData.password = Ext.getCmp('anopier-newAccountWindow-password');
		oUserData.verifyPassword = Ext.getCmp('anopier-newAccountWindow-verifyPassword');
		oUserData.firstName = Ext.getCmp('anopier-newAccountWindow-firstName');
		oUserData.lastName = Ext.getCmp('anopier-newAccountWindow-lastName');
		oUserData.email = Ext.getCmp('anopier-newAccountWindow-email');
		oUserData.companyName = Ext.getCmp('anopier-newAccountWindow-companyName');
		
		//Send the data off
		Anopier.User.createNewAccount(oUserData, function(result, e){
			if (result == 'true'){
				//user account has been created
			} else {
				//user account has not been created
			}
		});
	},
	
	createAccountCallback : function(data){
		this.close();
	}
	
});
