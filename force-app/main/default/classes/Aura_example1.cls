public class Aura_example1 {
@AuraEnabled
    public static List<Opportunity> myData(String stage)
    {
        List<Opportunity> opty=[select Name,stageName,closeDate,Amount from Opportunity where stageName=:stage limit 5];
        return opty;
    }
}