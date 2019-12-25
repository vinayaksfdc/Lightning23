({
            fireComponentEvent : function(component, event, helper) { 
                
                var cmpEvent=component.getEvent(cmpEvent);
                cmpEvent.setParams({"message":"A component event fired at me"});
                cmpEvent.fire();
            }
		})