trigger trigger_rest_delete on Account (before delete) {
    List<account> accs=[select id,name,(select id,firstname from contacts where accountid!=null) from account];
   
   for(Account a:trigger.old)
   {
       for(Account acc:accs)
    {
        system.debug('accounts is'+accs);
        for(contact cons: acc.contacts)
        {
            if(cons.AccountId!=null)
            {
                a.adderror('Account cannot be deleted as its a related list');
                system.debug('cons is '+cons);
            }    
            
        } 
    }
   }
        
    
    
}