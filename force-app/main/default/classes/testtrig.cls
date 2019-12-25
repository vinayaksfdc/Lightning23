public class testtrig {
    public list<account> accs{set;get;}
	public testtrig()
    {
    	accs=[select id,name,(select id,firstname from contacts where accountid!=null) from account]; 
        for(Account acc:accs)
        {
            system.debug('accounts is'+accs);
            for(contact cons: acc.contacts)
            {
                system.debug('cons is '+cons);
            } 
        }    
 
    }   
    
}