global class Batch_Example implements Database.Batchable<sobject>
{
    global Database.queryLocator start(Database.Batchablecontext bc)
    {
        String query='select id,name,industry,phone from Account where industry=null';
        return Database.getQueryLocator(query);
        
    }
    global void execute(Database.Batchablecontext bc,List<Account> accs)
    {
        for(Account a: accs)
        {
            a.Industry='agriculture';
        }
        update accs;
    }
    global void finish(Database.Batchablecontext bc)
    {
        
    } 
}