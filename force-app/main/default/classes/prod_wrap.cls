public class prod_wrap {
    public List<prod> Lineitem{set;get;}
    public integer rowno {set;get;}
    public prod_wrap()
    {
       Lineitem=new List<prod>();  
      	add();
    }
        public void add()
        {
    	       for(integer i=0;i<=3;i++)
               {
        		 prod pr=new prod(); 
                 Lineitem.add(pr);
               }    
        }
}