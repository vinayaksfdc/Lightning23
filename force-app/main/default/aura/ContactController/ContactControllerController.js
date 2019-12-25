({
    doinit : function(component, event, helper) {
        var action=component.get("c.findAll");
        action.setCallback(this,function(response)
        {
        var state = response.getState();    
		if(state==='SUCCESS')
        {
            console.log('Success');
             component.set("v.beers",response.getReturnValue());
        }
        else 
        {
            console.log('failure');
        }  
                         
                              
                           });
        $A.enqueueAction(action);
    },
    searchKeyChange : function(component, event, helper) {
        var searchKey=event.getParam("searchKey");
        var action=component.get("c.findByName");
        action.setParams({"searchKey":searchKey});
        action.setCallback(this,function(response)
        {
        var state = response.getState();    
		if(state==='SUCCESS')
        {
            console.log('Success');
             component.set("v.beers",response.getReturnValue());
            console.log(response.getReturnValue());
        }
        else 
        {
            console.log('failure');
        }  
       });
        $A.enqueueAction(action);
    },

})