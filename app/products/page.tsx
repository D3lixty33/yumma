import TableProducts from "@/components/data-table";
import { SidebarWrapper } from "@/components/sidebar-wrapper";
import { AddForm } from "./addform-wrapper";
import PriceDB from "./tb-prices/price-db";

const Products = () => {
  return (
    <div className="flex">
      <div>
        <SidebarWrapper />
      </div>
      <div className="flex-col w-auto h-auto">
        <div className="flex flex-row w-auto h-auto">
          <div>
            <TableProducts />
            <PriceDB />
          </div>
          <div className="mt-8">
            <AddForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
