({
	call : function(component, event, helper) {
		var opt=component.get("v.opt");
        console.log('selected is '+opt);
        component.set("v.steps",opt);
	}
})