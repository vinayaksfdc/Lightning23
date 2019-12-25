({
    showMe : function(component, event, helper) {
        var action=component.get("c.test");
        var lname=component.find("lname").get("v.value");
        action.setParams({"lastName":lname});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS')
            {
                console.log('SUCCESS'); 
                var res1=response.getReturnValue();
                component.set("v.firstname",res1);
                 console.log('value is '+res1); 
            }
            else
            {
                console.log('Failure');
            }    
            
        });
        $A.enqueueAction(action);
    }
})