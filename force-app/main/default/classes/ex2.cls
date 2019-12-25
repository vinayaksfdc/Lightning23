public class ex2 {
    public list<string> namex2{set;get;}
    public  void def()
    {
         ex e=new ex();
         e.abc();
        namex2=e.names;
        system.debug('namex2 in ex2   '+namex2);
     } 
}