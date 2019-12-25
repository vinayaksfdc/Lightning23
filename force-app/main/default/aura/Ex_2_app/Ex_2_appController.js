({
	invoke : function(component, event, helper) {
		        var action=component.get("c.myData");
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=== 'SUCCESS')
            {
                component.set("v.optyList",response.getReturnValue());
            }
            else{
                console.log('state failed');
            }
        });
         $A.enqueueAction(action);
    }
})