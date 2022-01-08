public with sharing class AccountController {
    @ AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords() {

        List<Account> res= [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
        return res;
    }
}
