"use server";
import fs from "fs";
export async function getInvoice() {
  const data = fs.readFileSync("invoice.json", "utf-8");
  const invoiceDataArray = JSON.parse(data);
  return invoiceDataArray;
}
