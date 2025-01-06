"use server";
import fs from "fs";
import { FormDataInterface } from "@/app/form/form";

const invoice_Data: FormDataInterface = {
  id: 1,
  customer_Name: "",
  mobile_Number: "",
  address: "",
  purchase_date: "",
  product_Details: {
    product_Type: "",
    product_Name: "",
    purity_16: "",
    purity_15: "",
    purity_14: "",
    purity_14_2: "",
    weight: {
      row1: [],
      row2: [],
      row3: [],
      row4: [],
      row5: [],
      row6: [],
    },
    handWidth: "",
    length: "",
    isOrder: false,
  },
  total_Amount: "",
  reject_Amount: "",
  remaining_Amount: "",
  appointment_Date: "",
  invoice_Number: "",
  signature: "",
};
const invoice_Data_Array: FormDataInterface[] = [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createInvoice(formData: any) {
  // destructure the form data
  const customer_Name = formData.get("customer_Name");
  const mobile_Number = formData.get("mobile_Number");
  const address = formData.get("address");
  const purchase_date = formData.get("purchase_date");
  const product_Name = formData.get("product_Name");
  const purity_16 = formData.get("purity_16");
  const purity_15 = formData.get("purity_15");
  const purity_14 = formData.get("purity_14");
  const purity_14_2 = formData.get("purity_14_2");
  const handWidth = formData.get("handWidth");
  const length = formData.get("length");
  const product_Type = formData.get("product_Type");
  const isOrder = formData.get("isOrder") === "on";
  const total_Amount = formData.get("total_Amount");
  const reject_Amount = formData.get("reject_Amount");
  const remaining_Amount =
    Number(reject_Amount) === 0
      ? ""
      : (Number(total_Amount) - Number(reject_Amount)).toString();
  const appointment_Date = formData.get("appointment_Date");
  const invoice_Number = formData.get("invoice_Number");
  const signature = formData.get("signature");

  const ပေးရွှေချိန်_1 = formData.get("ပေးရွှေချိန်-1");
  const ပေးရွှေချိန်_2 = formData.get("ပေးရွှေချိန်-2");
  const ပေးရွှေချိန်_3 = formData.get("ပေးရွှေချိန်-3");
  const ပေးရွှေချိန်_4 = formData.get("ပေးရွှေချိန်-4");

  const စိုက်ရွှေချိန်_1 = formData.get("စိုက်ရွှေချိန်-1");
  const စိုက်ရွှေချိန်_2 = formData.get("စိုက်ရွှေချိန်-2");
  const စိုက်ရွှေချိန်_3 = formData.get("စိုက်ရွှေချိန်-3");
  const စိုက်ရွှေချိန်_4 = formData.get("စိုက်ရွှေချိန်-4");

  const ရွှေအလေးချိန်_1 = formData.get("ရွှေအလေးချိန်-1");
  const ရွှေအလေးချိန်_2 = formData.get("ရွှေအလေးချိန်-2");
  const ရွှေအလေးချိန်_3 = formData.get("ရွှေအလေးချိန်-3");
  const ရွှေအလေးချိန်_4 = formData.get("ရွှေအလေးချိန်-4");

  const အလျော့တွက်_1 = formData.get("အလျော့တွက်-1");
  const အလျော့တွက်_2 = formData.get("အလျော့တွက်-2");
  const အလျော့တွက်_3 = formData.get("အလျော့တွက်-3");
  const အလျော့တွက်_4 = formData.get("အလျော့တွက်-4");

  const ကျောက်ချိန်_1 = formData.get("ကျောက်ချိန်-1");
  const ကျောက်ချိန်_2 = formData.get("ကျောက်ချိန်-2");
  const ကျောက်ချိန်_3 = formData.get("ကျောက်ချိန်-3");
  const ကျောက်ချိန်_4 = formData.get("ကျောက်ချိန်-4");

  const ရွှေ_ကျောက်_ချိန်_1 = formData.get("ရွှေ+ကျောက်-1");
  const ရွှေ_ကျောက်_ချိန်_2 = formData.get("ရွှေ+ကျောက်-2");
  const ရွှေ_ကျောက်_ချိန်_3 = formData.get("ရွှေ+ကျောက်-3");
  const ရွှေ_ကျောက်_ချိန်_4 = formData.get("ရွှေ+ကျောက်-4");

  // set the form data to the invoice data
  invoice_Data.customer_Name = customer_Name;
  invoice_Data.mobile_Number = mobile_Number;
  invoice_Data.address = address;
  invoice_Data.purchase_date = purchase_date;
  invoice_Data.product_Details.product_Name = product_Name;
  invoice_Data.product_Details.purity_16 = purity_16;
  invoice_Data.product_Details.purity_15 = purity_15;
  invoice_Data.product_Details.purity_14 = purity_14;
  invoice_Data.product_Details.purity_14_2 = purity_14_2;
  invoice_Data.product_Details.isOrder = isOrder;
  invoice_Data.product_Details.product_Type = product_Type;
  invoice_Data.product_Details.weight.row1 = [
    Number(ပေးရွှေချိန်_1),
    Number(ပေးရွှေချိန်_2),
    Number(ပေးရွှေချိန်_3),
    Number(ပေးရွှေချိန်_4),
  ];
  invoice_Data.product_Details.weight.row2 = [
    Number(စိုက်ရွှေချိန်_1),
    Number(စိုက်ရွှေချိန်_2),
    Number(စိုက်ရွှေချိန်_3),
    Number(စိုက်ရွှေချိန်_4),
  ];
  invoice_Data.product_Details.weight.row3 = [
    Number(ရွှေအလေးချိန်_1),
    Number(ရွှေအလေးချိန်_2),
    Number(ရွှေအလေးချိန်_3),
    Number(ရွှေအလေးချိန်_4),
  ];
  invoice_Data.product_Details.weight.row4 = [
    Number(အလျော့တွက်_1),
    Number(အလျော့တွက်_2),
    Number(အလျော့တွက်_3),
    Number(အလျော့တွက်_4),
  ];
  invoice_Data.product_Details.weight.row5 = [
    Number(ကျောက်ချိန်_1),
    Number(ကျောက်ချိန်_2),
    Number(ကျောက်ချိန်_3),
    Number(ကျောက်ချိန်_4),
  ];
  invoice_Data.product_Details.weight.row6 = [
    Number(ရွှေ_ကျောက်_ချိန်_1),
    Number(ရွှေ_ကျောက်_ချိန်_2),
    Number(ရွှေ_ကျောက်_ချိန်_3),
    Number(ရွှေ_ကျောက်_ချိန်_4),
  ];
  invoice_Data.product_Details.handWidth = handWidth;
  invoice_Data.product_Details.length = length;
  invoice_Data.total_Amount = total_Amount;
  invoice_Data.reject_Amount = reject_Amount;

  invoice_Data.remaining_Amount =
    Number(reject_Amount) === 0 ? "0" : remaining_Amount;
  invoice_Data.remaining_Amount = remaining_Amount;

  invoice_Data.appointment_Date = appointment_Date;
  invoice_Data.invoice_Number = invoice_Number;
  invoice_Data.signature = signature;
  console.log(invoice_Data);
  console.log("Is This order : " + isOrder);

  const isExit = fs.existsSync("invoice.json");
  if (isExit) {
    const data = fs.readFileSync("invoice.json", "utf-8");
    const invoice_Data_Array_FromJson = JSON.parse(data);
    const length = invoice_Data_Array_FromJson.length;
    invoice_Data.id = length + 1;
    invoice_Data_Array_FromJson.push(invoice_Data);
    fs.writeFileSync(
      "invoice.json",
      JSON.stringify(invoice_Data_Array_FromJson)
    );
  } else {
    invoice_Data_Array.push(invoice_Data);
    fs.writeFileSync("invoice.json", JSON.stringify(invoice_Data_Array));
  }
}
