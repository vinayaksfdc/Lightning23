({
    echo : function(cmp, event, helper) 
    {
        var action=cmp.get("c.rx");
        action.setCallback(this,function(response)
                           {
                               var state=response.getState();
                               if(state==='Success')
                               {
                                   var result=response.getReturnValue();
                                   cmp.set("v.firstname",result);
 								  console.log('value is true');
                                  }
                               else
                               {
                                   console.log('value is false');
                               }
                               
                           });
        
        
        $A.enqueueAction(action);
    }
})