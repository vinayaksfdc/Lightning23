({
	myAction : function(component, event, helper) {
		
        var sal=component.get("v.sal");
        var exp=component.get("v.exp");
        var bonus=0;
        if(exp>4)
	        {
    		bonus=sal*0.4;
        	}
        else {
            bonus=sal*0.1;
        	}
	
    component.set("v.bonus",bonus);
    console.log('sal is' + sal);
          console.log('bonus is '+ bonus);
          console.log('exp is ' + exp);
          console.log('sal is ' + sal);
    
    }
    
})