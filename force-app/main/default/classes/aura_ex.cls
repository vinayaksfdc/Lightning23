public class aura_ex {
    @AuraEnabled
    public static string instAcc(String Count){
        system.debug('Account '+Count);
        Map<string,string> accmp=new Map<string,string>();
        
        system.debug('Account '+ Count);
        
        return Count;
        
        
    }
    
    @AuraEnabled
    public static String serverEcho(String firstName) {
        
        system.debug(firstName);
        Map<string,string> accmp=new Map<string,string>();
        accmp.put('IND','TN');
        accmp.put('US','Mex');
        accmp.put('Uk','LON');
        String code2 = accmp.get('IND');
        return code2;
        
        
    }
    
    
}