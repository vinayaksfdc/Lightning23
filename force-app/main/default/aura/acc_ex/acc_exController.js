({
	myAction : function(component, event, helper) {
        var action=component.get("c.getAcc1");
        action.setParams();
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.accList",result);
              console.log(result);
            }
            else
            {
                console.log('State failed');
            } 
        });
        $A.enqueueAction(action);
	}
})