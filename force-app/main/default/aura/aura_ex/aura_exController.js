({
    
    onchange : function(component, event, helper) {
        var action=component.get("c.instAcc");
        
        var accs=component.get("v.acc");
        var Count=component.find("country").get("v.value");
        
        alert(component.find("country").get("v.value"));
         console.log('Count is'+Count);
        
        var Stte=component.get("v.Atate");
        console.log('Count is'+Count);
        console.log('Accs is '+accs);
        console.log(JSON.stringify(accs));
        action.setParams({accs:accs});
        action.setParams({Count:Count});
        action.setCallback(this,function(response)
                           {
                               var state=response.getState();
                               if (state === "SUCCESS") 
                               {
                                   var result=response.getReturnValue();
                               }
                           });
        $A.enqueueAction(action);
    },
    doInit: function (component, event, helper) {    
    	console.log('distance ' + component.find("distance").get("v.value"));

        component.find("distance").set("v.value","IND");

 },
    
     
init: function (component, event, helper) {
    
    	console.log('distance ' + component.find("distance").get("v.value"));

    },
    
    onchange: function (component, event, helper) {
    	var selectedPicklistValue=component.get("v.ltngSelectedvalue");
        console.log(selectedPicklistValue);
        var action=component.get('c.serverEcho');
        action.setParams({ firstName : component.get("v.ltngSelectedvalue") });
        
        action.setCallback(this,function(response)
                           {
                               var state=response.getState();
                               if (state === "SUCCESS") 
                               {
                                   var result=response.getReturnValue();
								   var myJSON = JSON.stringify(result);
                                   //alert(myJSON);
                                   component.set('v.ltngSelectedvalue1',result);
                                   component.set('v.acc.State__C',result);
                                  
						
                               }
                           });
        $A.enqueueAction(action);
    }
 
    
  

})