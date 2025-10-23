"use client";

import {
  TABLE_CAPTION_1,
  TABLE_CAPTION_2,
  TABLE_CAPTION_3,
  TABLE_CAPTION_4,
  TABLE_CAPTION_5,
} from "@/lib/utils";
import { DropdownMenuLst } from "./dropdown";
import { Product, TableProductsClientProps } from "@/app/products/types";

export function DataTB({ products }: TableProductsClientProps) {
  function handleClick(p: Product) {
    console.log(p)
  }

  return (
    <div className="flex items-center justify-center m-8 font-inter">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider">
            <tr>
              <th className="p-4 text-left font-semibold border-b border-gray-200">
                {TABLE_CAPTION_1}
              </th>
              <th className="p-4 text-left font-semibold border-b border-gray-200">
                {TABLE_CAPTION_2}
              </th>
              <th className="p-4 text-left font-semibold border-b border-gray-200">
                {TABLE_CAPTION_3}
              </th>
              <th className="p-4 text-left font-semibold border-b border-gray-200">
                {TABLE_CAPTION_4}
              </th>
              <th className="p-4 text-left font-semibold border-b border-gray-200">
                {TABLE_CAPTION_5}
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-sm divide-y divide-gray-100">
            {products.map((p, i) => {
              const date = p.created_at.toString().split("T")[0];
              const hour = p.created_at.toString().substring(11, 16);

              return (
                <tr
                  key={p.id}
     //             onDoubleClick={() => handleClick(p)}
                  className={`transition-colors hover:bg-gray-50 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="p-4 font-medium text-gray-900">{p.product}</td>
                  <td className="p-4 text-gray-600">{date}</td>
                  <td className="p-4 text-gray-600">{hour}</td>
                  <td className="p-4 font-medium text-gray-900">
                    {p.description}
                  </td>
                  <td className="p-4 text-right">
                    <DropdownMenuLst />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
