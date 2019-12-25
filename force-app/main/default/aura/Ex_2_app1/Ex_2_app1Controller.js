({
	invoke : function(component, event, helper) {
     
        var action=component.get("c.myData");
        
        action.setCallback(this,function(response){
           var state=response.getState();
            if(state === 'SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.optyList",result);
                console.log('Result is '+ result);
            }
            else
            {
                console.log('State failed');
            }
            
        });
        $A.enqueueAction(action);
		
	}
})