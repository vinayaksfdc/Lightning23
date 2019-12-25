public class ex {
   public List<string> names{set;get;}
    
   
    public void abc()
    {
        names=new List<string>{'one','two','three'};
        //{ "one", "two", "three" }
        system.debug('names in ex  is'+names);
     }
}