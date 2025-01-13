"use server";

import getClient from "@/app/libs/mongodb";
export async function searchInvoice(code: string) {
  // call mongo client
  // destructure the form data
  const searchValue: string = code;
  // search by invoice id
  const client = await getClient();
  const invoiceCollection = client.collection("invoice");
  const data = await invoiceCollection
    .find({ invoice_Number: searchValue })
    .toArray();
  {
    /* if invoice not found return null  */
  }
  if (data.length === 0) return null;
  const invoiceData = JSON.parse(JSON.stringify(data))[0];
  return invoiceData;
}
