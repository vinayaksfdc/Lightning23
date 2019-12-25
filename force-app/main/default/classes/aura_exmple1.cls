public class aura_exmple1 {
    				@AuraEnabled
	                public static String getName(String lastName,String firstName)
                    {
                    String name='Your Name :'+lastName+':'+firstName;
                    return name;
               		 }

}