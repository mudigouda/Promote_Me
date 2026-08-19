import {createContact} from "./contact-service";
import {createLead} from "./lead-service";
import {createDeal} from "./deal-service";
import {createTask} from "./task-record";
export function sampleCrmData(){const contact=createContact({name:"Sample Business",email:"sample@example.com",phone:"+10000000000",company:"Sample Co",source:"SAMPLE"});const lead=createLead({contactId:contact.id,stage:"QUALIFIED",score:75,value:5000,source:"SAMPLE"});const deal=createDeal({contactId:contact.id,name:"Sample Deal",stage:"OPEN",value:5000,probability:.5});const task=createTask({title:"Follow up with sample lead",contactId:contact.id,leadId:lead.id,dealId:deal.id,priority:"HIGH"});return {contact,lead,deal,task};}
