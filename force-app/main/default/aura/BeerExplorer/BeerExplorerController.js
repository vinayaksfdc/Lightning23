({
    handleCompEvent : function(component, event, helper) {
        var searchParam=event.getParam('searchText');
      var action=component.get("c.searchBeer");
        action.setParams({
            searchText : searchParam 
        });
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state==='SUCCESS')
            {
                var result=response.getReturnValue();
                component.set("v.BeerList",result);
                console.log(result);
                 var res1=JSON.stringify(component.get("v.BeerList"));
                console.log('result is '+res1);
                 
            }
            else
            {
                console.log('State failed');
            } 
        });
        $A.enqueueAction(action);
        
    }
})