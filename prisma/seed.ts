import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

async function main() {
  let business = await prisma.business.findFirst();
  if (!business) business = await prisma.business.create({ data: { name: "Promote_Me Demo Business" } });
  const companies = [
    { name: "ABC Retail", industry: "Retail", city: "Bengaluru" },
    { name: "Northstar Foods", industry: "Food", city: "Mysuru" },
    { name: "Bright Dental", industry: "Healthcare", city: "Bengaluru" },
    { name: "Urban Studio", industry: "Design", city: "Hyderabad" },
  ];
  for (const c of companies) await prisma.company.create({ data: { businessId: business.id, ...c } });
  const companyRows = await prisma.company.findMany({ where: { businessId: business.id } });
  const people = [["Priya","Sharma","+919876543210","Bengaluru","ABC Retail"],["Rahul","Kumar","+919988711223","Mysuru","Northstar Foods"],["Anita","Rao","+919845055667","Bengaluru","Bright Dental"],["Vikram","Singh","+919000012345","Hyderabad","Urban Studio"]];
  for (const [firstName,lastName,phone,city,companyName] of people) {
    const company = companyRows.find(c => c.name === companyName);
    await prisma.contact.create({ data: { businessId: business.id, firstName, lastName, phone, city, companyId: company?.id, consent: true, consentSource: "demo", consentAt: new Date() } });
  }
  const contacts = await prisma.contact.findMany({ where: { businessId: business.id } });
  const stages = ["NEW","CONTACTED","QUALIFIED","PROPOSAL","WON"] as const;
  const dealNames = ["Acme Retail","Northstar Foods","Green Leaf","Nova Tech","Sunrise Hotel"];
  const values = [240000,120000,310000,290000,110000];
  for (let i=0;i<stages.length;i++) await prisma.deal.create({ data: { businessId: business.id, name: dealNames[i], value: values[i], stage: stages[i], contactId: contacts[i % contacts.length]?.id } });
  const campaigns = [["Weekend Sale","WhatsApp + Instagram","scheduled"],["Bengaluru Re-engagement","WhatsApp","running"],["New Product Launch","Email + Facebook","completed"]] as const;
  for (const [name,channel,status] of campaigns) await prisma.campaign.create({ data: { businessId: business.id, name, channel, message: "Demo campaign — review and connect an official provider before sending.", status } });
  await prisma.activity.createMany({ data: [{ businessId: business.id, type: "WHATSAPP", subject: "Priya requested a callback", contactId: contacts[0]?.id },{ businessId: business.id, type: "CAMPAIGN", subject: "Weekend Sale scheduled" },{ businessId: business.id, type: "NOTE", subject: "New lead from Business Finder" }] });
  console.log(`Seeded ${business.name} (${business.id})`);
  console.log(`Add DEFAULT_BUSINESS_ID=${business.id} to .env`);
}
main().finally(async () => { await prisma.$disconnect(); await pool.end(); });
