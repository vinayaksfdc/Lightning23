public class srv_ex {
    @AuraEnabled
    public static string test(String lastName)
    {
        String name='SrK '+lastName+' is hero';
        return name;
    }
}