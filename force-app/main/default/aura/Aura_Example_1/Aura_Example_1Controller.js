({
	showMe : function(component, event, helper) {
        
        var abc=component.get("c.callMe");
        abc.setCallback(this,function(response){
            var state=response.getState();
            if(state=== 'SUCCESS')
            {
               	var result=response.getReturnValue();
                component.set("v.result",result);
                console.log("result "+result);
            }
            else{
                console.log('state failed');
            }
        });
         $A.enqueueAction(abc);
    }
})