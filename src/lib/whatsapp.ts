import { prisma } from './prisma';

export async function sendWhatsAppText(businessId:string,to:string,text:string){
  const account=await prisma.channelAccount.findFirst({where:{businessId,channel:'whatsapp',enabled:true}});
  if(!account) throw new Error('WhatsApp channel is not connected');
  const token=process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId=account.externalId;
  if(!token||!phoneNumberId) throw new Error('WhatsApp credentials are not configured');
  const version=process.env.WHATSAPP_GRAPH_VERSION||'v23.0';
  const res=await fetch(`https://graph.facebook.com/${version}/${phoneNumberId}/messages`,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({messaging_product:'whatsapp',to,type:'text',text:{body:text}})});
  if(!res.ok) throw new Error(`WhatsApp API returned ${res.status}`);
  return res.json();
}
