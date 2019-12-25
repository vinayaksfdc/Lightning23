({
    myAction : function(component, event, helper) {
        var action=component.get("c.getAcc1");
           var lname=component.find("lname").get("v.value");
        action.setCallback(this,function(response){
            action.setParams({"lastName":lname});           
            var state=response.getState();
            if(state==='SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.empName",result);
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