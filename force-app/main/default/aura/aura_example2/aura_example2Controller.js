({
		handleClick : function(component, event, helper) {
		var btnClicked=event.getSource();
            console.log('btnClicked is'+btnClicked);
       
        var btnMessage=btnClicked.get("v.label");
             console.log(btnMessage);
        component.set("v.message is",btnMessage);
	},
      handleClick2: function(component, event, helper) {
        var newMessage = event.getSource().get("v.label");
          
        console.log("handleClick2: Message: " + newMessage);
        component.set("v.message", newMessage);
    }
})