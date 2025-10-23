"use client";

import { TableAdd } from "@/components/data-tableDB";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AddForm() {
  const [isOpen, setOpen] = useState(false);
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{
    product?: string;
    description?: string;
  }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: { product?: string; description?: string } = {};

    if (!product.trim()) newErrors.product = "Product name is required";
    if (!description.trim()) newErrors.description = "Description is required";

    setErrors(newErrors);

    // If there are no errors, proceed
    if (Object.keys(newErrors).length === 0) {
      console.log("Submitting:", { product, description });

      setOpen(false);
      setProduct("");
      setDescription("");
    }
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {/* Trigger Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="text-sm px-3 py-1.5 rounded-lg border-gray-300 hover:bg-gray-100 transition"
      >
        Add +
      </Button>

      {/* Floating Form */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/30 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            action={TableAdd}
            className="
              bg-white/80 border border-gray-200 rounded-xl shadow-md 
              p-4 w-[90%] max-w-sm space-y-3
              text-sm font-normal text-gray-800
              animate-fadeIn
            "
          >
            <h2 className="text-base font-semibold text-center text-gray-700">
              Add Product
            </h2>

            {/* Inputs */}
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Product name"
                  name="product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className={`
                    w-full border bg-gray-50 rounded-lg px-3 py-2 text-gray-800 text-sm 
                    focus:outline-none focus:ring-2 
                    ${
                      errors.product
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }
                    transition-all
                  `}
                />
                {errors.product && (
                  <p className="text-xs text-red-500 mt-1">{errors.product}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`
                    w-full border bg-gray-50 rounded-lg px-3 py-2 text-gray-800 text-sm 
                    focus:outline-none focus:ring-2 
                    ${
                      errors.description
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }
                    transition-all
                  `}
                />
                {errors.description && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="
                  flex-1 bg-blue-600 hover:bg-blue-700 
                  text-white text-sm font-medium py-2 rounded-lg
                  shadow-sm hover:shadow transition-all
                "
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex-1 bg-gray-100 hover:bg-red-100 hover:text-red-600 
                  text-gray-600 text-sm font-medium py-2 rounded-lg
                  border border-gray-200 transition-all
                "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
