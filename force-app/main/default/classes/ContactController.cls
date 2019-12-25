public with sharing class ContactController {

    @AuraEnabled
    public static List<Beer__c> findAll() {
        return [SELECT id, name FROM Beer__c LIMIT 50];
    }

    @AuraEnabled
    public static List<Beer__c> findByName(String searchKey) {
        String name = '%' + searchKey + '%';
        return [SELECT id, name FROM Beer__c WHERE name LIKE :name LIMIT 50];
    }

   /* @AuraEnabled
    public static Contact findById(String contactId) {
        return [SELECT id, name, title, phone, mobilephone, Account.Name
                    FROM Contact WHERE Id = :contactId];
    }
	*/	

}