import Product from "@/components/render-products";
import { DashboardPage } from "./dashboard/page";

export default async function Page() {
  return (
    <>
      <Product />
      <DashboardPage />
    </>
  );
}
