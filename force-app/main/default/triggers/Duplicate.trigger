trigger Duplicate on Account (before insert) {
    Set<string> name= new Set<string>();
      for(Account a:trigger.new){
      name.add(a.Name);
    }
    List<account> accs=[select id,name from account where name in :name];
    
    for(Account a1:trigger.new){
     if(accs.size()>1)
     {
         a1.adderror('duplicate error');
     }
    }
}