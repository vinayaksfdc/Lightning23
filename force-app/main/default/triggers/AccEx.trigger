trigger AccEx on Account (before insert) {
    List<account> accs=[select id,phone from account where id in : Trigger.old];
    for(Account a: Trigger.old)
    {
        system.debug('trigger old'+a.name);
        system.debug('trigger old'+a.phone);
        
    }     
     
}