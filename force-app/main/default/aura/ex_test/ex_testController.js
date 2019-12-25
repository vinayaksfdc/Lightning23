({
    echo : function(component, event, helper) 
    {  
        var action=component.get("c.callMe");  
         action.setCallback(this,function(response){
            var state=response.getState();
        if(state==='SUCCESS')
        {
            console.log('Sucess');
            var res=response.getReturnValue();
            component.set("v.result",res);
            console.log("Result is :"+result);
        }
        else
        {
            console.log('failure');
        }
        });
      //  $A.enqueueAction(action);
                                 $A.enqueueAction(action);
    }
})