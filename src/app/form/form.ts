export interface weight_Details {
  row1: number[];
  row2: number[];
  row3: number[];
  row4: number[];
  row5: number[];
  row6: number[];
}

export interface ProductDetails {
  product_Name: string;
  purity_16: string;
  purity_15: string;
  purity_14: string;
  weight: weight_Details;
  handWidth: string;
  length: string;
}
export interface FormDataInterface {
  id: number;
  customer_Name: string;
  mobile_Number: string;
  address: string;
  purchase_date: string;
  product_Details: ProductDetails;
  total_Amount: string;
  reject_Amount: string;
  remaining_Amount: string;
  appointment_Date: string;
  invoice_Number: string;
  signature: string;
}
