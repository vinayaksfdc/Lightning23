({
	show : function(component, event, helper) {
		var amount=component.get("v.amount");
            var year=component.get("v.year");
                var rate=component.get("v.rate");
                var intrest=((amount*rate*year)/100);
         component.set("v.intrest",intrest);
        console.log("amount is "+ amount);
        console.log("yr is "+ year);
        console.log("intrest is "+ intrest);
        console.log("rate  is "+ rate);
	}
})