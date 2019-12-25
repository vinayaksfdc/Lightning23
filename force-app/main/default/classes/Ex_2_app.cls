public class Ex_2_app {
	@AuraEnabled
    public static List<Opportunity> myData()
    {
        List<Opportunity> opty=[select Name,stageName,closeDate,Amount from Opportunity limit 5];
        return opty;
    }
    
}