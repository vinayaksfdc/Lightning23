public class ex_test {
             @AuraEnabled
            public static String callMe(){
                String name='Iam Invoked from Apex class';
                return name;
            }

}