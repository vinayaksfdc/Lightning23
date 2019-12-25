({
 
	doInit: function(component, event, helper) {
        //getting page reference from pageReference attribute supplied by lightning:isUrlAddressable interface
        var myPageRef = component.get("v.pageReference");
        console.log(myPageRef);
        //get parameter from state
        var recordId = myPageRef.state.c__recordId;
        console.log(recordId);
        
        var objectName = myPageRef.state.c__objectName;
        console.log(objectName);
        component.set("v.recordId", recordId);
		component.set("v.objectName", objectName);
        
    }
})