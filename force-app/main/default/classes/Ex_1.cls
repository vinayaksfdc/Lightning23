public class Ex_1 {

    @AuraEnabled
    Public static string getName(String lastname,String firstname)
    {
        String name='YOur name is :'+lastname+firstname;
        return name;
        
    } 
}