"use server";

import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
//import { AddFormProps, InputProps } from './types';
import { Product, InputProps } from "@/app/products/types";
import { revalidatePath } from "next/cache";

export async function TableLoad(): Promise<Product[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("products")
    .select("id, created_at, description, product");

  if (error) {
    console.error("Error loading products:", error);
    return [];
  }

  return data || [];
}

export async function TableAdd(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

// CATCH DATA FROM FORM
  const product = formData.get("product") as string;
  const description = formData.get("description") as string;

  if (product == "" || description == "")
    throw new Error("Cannot insert null data");

// INSERT DATA IN PRODUCTS
  const { error } = await supabase
    .from("products")
    .insert([{ product, description }]);
  if (error) throw new Error(error.message)
// INSERT DATA IN PRODUCTS_COST
{/* 
  const { error : priceErr } = await supabase
    .from("products_cost")
    .insert([{ product, description }])

  if (priceErr) throw new Error(priceErr.message);

  */}
  revalidatePath("/products");
}
//------

export async function PriceTable(): Promise<Product[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {data, error} = await supabase.from("products_cost").select("*")

  if (error) {
    console.error('Error in Price Table: ' + error)
    return []
  }
  
  return data || []
}
