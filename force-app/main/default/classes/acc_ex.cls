public class acc_ex {
@AuraEnabled
    public static List<Account> getAcc1()
    {
        List<Account> accs=[select Name,Phone,Industry from Account limit 5];
        return accs;
    }
}