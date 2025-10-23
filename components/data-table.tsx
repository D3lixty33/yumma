import { TableLoad } from "./data-tableDB";
import { DataTB } from "./data-tableUI"; // ✅ client component
import { Product } from "@/app/products/types";

export async function TableProducts() {
  // Load products from db
  const products: Product[] = await TableLoad();

  // Render the client-side table
  return <DataTB products={products} />;
}

export default TableProducts;
