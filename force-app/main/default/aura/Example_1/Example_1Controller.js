({
	invoke : function(component, event, helper) {
		var lname=component.find("lname").get("v.value");
        
        var action=component.get("c.getName");
        action.setParams({"lastName":lname});
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state === 'SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.empName",result);
                console.log(result);
            }
            else
                {
                    console.log('error ');
                }
        });
        
        $A.enqueueAction(action);
	},
    doInit : function(component, event, helper) {
		var lname=component.get("v.empName");
        console.log('name of contact is'+lname);
        component.set("v.empid",lname);
        
        
	}
    
})