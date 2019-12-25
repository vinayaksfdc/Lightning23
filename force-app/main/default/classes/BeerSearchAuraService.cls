public class BeerSearchAuraService {
    @AuraEnabled
    public static List<Beer__c> searchBeer(String searchParam)
    { 
        String likeParam='%'+searchParam+'%'; 
        if(searchParam!=null)
        {
            List<Beer__c> beerList=[select id,Name from Beer__C where Name like :likeParam];  
            return beerList;
        }
        else
        {
            List<Beer__c> beerList=[select id,Name from Beer__C ];
            return beerList;
        }
    }
}