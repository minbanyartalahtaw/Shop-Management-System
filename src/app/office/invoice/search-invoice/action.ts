"use server";
import { FormDataInterface } from "@/app/form/form";
import fs from "fs";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function searchInvoice(formData: any) {
  // destructure the form data
  const searchType = formData.get("searchType");
  const searchValue: string = formData.get("query");

  if (searchType === "InvoiceID") {
    // search by invoice id
    const invoiceArray: string = fs.readFileSync("invoice.json", "utf-8");
    const invoiceData: FormDataInterface[] = JSON.parse(invoiceArray);
    for (let i = 0; i < invoiceData.length; i++) {
      if (invoiceData[i].invoice_Number.split("-")[1] === searchValue) {
        return invoiceData[i];
      } else {
        console.log("Invoice not found");
      }
    }
  } else {
    // search by purchase date
    console.log("Searching by purchase date:", searchValue);
  }
}
