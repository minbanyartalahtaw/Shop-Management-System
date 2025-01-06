"use server";

import { FormDataInterface } from "@/app/form/form";
import fs from "fs";

export async function getOrderInvoice(): Promise<FormDataInterface[]> {
  try {
    const invoiceData = fs.readFileSync("invoice.json", "utf-8");
    const data: FormDataInterface[] = JSON.parse(invoiceData);
    const orderData = data.filter(
      (item: FormDataInterface) => item.product_Details.isOrder === true
    );
    return orderData;
  } catch (error) {
    console.error("Error reading order invoices:", error);
    return [];
  }
}
