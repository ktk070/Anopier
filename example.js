/**
 * Mastering Ext.Direct example script
 *
 * @author     Ing. Jozef Sakalos
 * @copyright  (c) 2009, by Ing. Jozef Sakalos
 * @date       16. September 2009
 * @version    1.0
 * @revision   $Id$
 */
 
Ext.BLANK_IMAGE_URL='ext/resources/images/default/s.gif';
 
Ext.onReady(function() {
    /**
     * This function is called when Ext.Direct request
     * response arrives from the server.
     *
     * @param {String/Object/Array/Null} response 
     * That what is returned by server method
     * @param {Ext.Direct.RemotingEvent/Ext.Direct.ExceptionEvent} e 
     */
    var callback = function(response, e) {
 
        // uncomment if you want to inspect arguments in Firebug Console
//        console.log(response, e);
 
        var status = '<b>Success</b>'
        var text = '';
 
        // success handling - e.status is success flag: 
        // true is success, false is failure
        if(true === e.status) {
            // response argument is same as e.result
            text = response;
        }
 
        // failure handling
        else {
            status = '<b><i>Failure</i></b>'
 
            // in the case of an exception, we don't have response but message
            text = e.message;
        }
 
        // grab the center body
        var body = win.items.itemAt(1).body;
 
        // display the response
        body.createChild({
             tag:'div'
            ,cls:'response'
            ,html:status + ': ' + text
        });
 
        // scroll down
        body.scrollTo('top', 100000, true);
    };
 
 
    // create Ext.Direct test window
    var win = new Ext.Window({
         title:'Mastering Ext.Direct by Saki'
        ,width:600
        ,height:400
        ,closable:false
        ,layout:'border'
        ,border:false
        ,items:[{
            // west region with buttons
             region:'west'
            ,width:160
            ,minSize:160
            ,split:true
            ,defaults:{minWidth:120}
            ,layout:'table'
            ,bodyStyle:'padding:20px'
            ,layoutConfig:{columns:1, tableAttrs:{style:{width:'100%'}}}
            ,items:[{
                 xtype:'button'
                ,text:'Car.start()'
 
                // a delegate is needed if we want to pass arguments
                ,handler:Anopier.Car.start.createDelegate(null, [callback])
            },{
                 xtype:'button'
                ,text:'Car.go(80)'
 
                // a delegate is needed if we want to pass arguments
                ,handler:Anopier.Car.go.createDelegate(null, [80, callback])
            },{
                 xtype:'button'
                ,text:'Car.go(250)'
 
                // a delegate is needed if we want to pass arguments
                ,handler:Anopier.Car.go.createDelegate(null, [250, callback])
            },{
                 xtype:'button'
                ,text:'Car.stop()'
 
                // a delegate is needed if we want to pass arguments
                ,handler:Anopier.Car.stop.createDelegate(null, [callback])
            },{
                 xtype:'button'
                ,text:'Send All'
 
                // another option is inline function that executes calls
                ,handler:function() {
 
                    // the following calls will be combined in one request
                    Anopier.Car.start(callback);
                    Anopier.Car.go(80, callback);
                    Anopier.Car.go(250, callback);
                    Anopier.Car.stop(callback);
                }
            }]
        },{
            // responses are displayed here
             region:'center'
            ,autoScroll:true
            ,tbar:['->', {
                text:'Clear'
               ,handler:function(){win.items.itemAt(1).body.update('')}
            }]
        }]
    });
    win.show();
 
});
 
// eof