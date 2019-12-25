public class Example_1 {
                @AuraEnabled
                public static String getName(String lastName){
                    String name='Your Name :'+lastName;
                    return name;
                }

}