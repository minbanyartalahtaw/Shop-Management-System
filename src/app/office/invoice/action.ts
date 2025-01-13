"use server";

import getClient from "@/app/libs/mongodb";

export async function getInvoice() {
  const client = await getClient();
  const invoiceCollection = client.collection("invoice");
  const data = await invoiceCollection.find({}).toArray();
  const invoiceData = JSON.parse(JSON.stringify(data));
  return invoiceData;
}
