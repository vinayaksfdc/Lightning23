public class Aura_Example_2 {
                @AuraEnabled
                public static String getName(String lastName){
                    String name='Your Name :'+lastName;
                    return name;
                }
			}