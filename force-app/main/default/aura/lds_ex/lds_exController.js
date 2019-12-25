({
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
                                   
                               }
                           });
        $A.enqueueAction(action);
    },
    doinit : function(component, event, helper) {
        var action=component.get("c.instAcc");
        var accs=component.get("v.acc");
        action.setParams({accs:accs});
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
    
    
})