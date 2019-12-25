public class Displaycontacts {
@AuraEnabled
    public static List<beer__c> getAcc1(String lastName)
    {
        return [select id,Name from Beer__c where Name Like :'%'+lastName+'%'];
    }
}