import { PriceTable } from "@/components/data-tableDB";
import Price from "./price";
import { Product } from "@/app/products/types";

export default async function PriceDB() {

    const products : Product[] = await PriceTable()

    return <Price products={products} />
}