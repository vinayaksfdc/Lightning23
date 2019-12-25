public class AccountController {
	
	@AuraEnabled
    public static List<Contact> getContactList(List<Id> accountIds) {
        // Getting the list of contacts from where Id is in accountIds
                List<Contact> contactList = [SELECT Id, Name, Email, Phone, AccountId FROM Contact WHERE AccountId in :accountIds];
                // Returning the contact list
        return contactList;
    }
    
	@AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT
               Id, Name, Phone, Rating,   Active__c
               FROM Account LIMIT 10];
    }

}