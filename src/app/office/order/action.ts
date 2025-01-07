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

export async function takeOrder(
  invoiceNumber: string,
  isOrder: boolean,
  isOrderTaken: boolean
) {
  try {
    const invoiceData = fs.readFileSync("invoice.json", "utf-8");
    const data: FormDataInterface[] = JSON.parse(invoiceData);
    const orderData = data.filter(
      (item: FormDataInterface) =>
        item.product_Details.isOrder === isOrder &&
        item.product_Details.isOrderTaken === isOrderTaken
    );
    const matchingOrder = orderData.find(
      (item: FormDataInterface) => item.invoice_Number === invoiceNumber
    );
    if (!matchingOrder) {
      throw new Error("Order not found");
    }
    matchingOrder.product_Details.isOrderTaken = true;
    matchingOrder.reject_Amount = "";
    matchingOrder.remaining_Amount = "";
    const updatedData = data.map((item) =>
      item.invoice_Number === invoiceNumber ? matchingOrder : item
    );
    fs.writeFileSync("invoice.json", JSON.stringify(updatedData, null, 2));
    return true;
  } catch (error) {
    console.error("Error reading order invoices:", error);
    return null;
  }
}
