import { LightningElement,wire } from 'lwc';
import {getAccountRecords} from '@salesforce/apex/AccountController.getAccountRecords';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

 const c=[{label:'Account Name',fieldName:NAME_FIELD.fieldApiName,type:'text'},
    
{
    label: 'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName, type: 'currency'     
},{
    label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text'
}];

export default class AccountList extends LightningElement {

   
    COL=c;
    @wire(getAccountRecords)
    accounts;

}
