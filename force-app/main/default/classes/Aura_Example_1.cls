public class Aura_Example_1 {
            @AuraEnabled
            public static String callMe(){
                String name='Iam Invoked from Apex class';
                return name;
            }
        }