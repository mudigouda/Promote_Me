export const demoData={contacts:[{name:"Anita Traders",phone:"+919876543210",email:"anita@example.com",consent:true}],campaigns:[{name:"Welcome Offer",channel:"EMAIL",status:"DRAFT"}],tasks:[{title:"Follow up with Anita",status:"OPEN"}]};
export function resetDemoData(){return structuredClone(demoData);}
