"use client";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  tags: string[];
}

const ProductsCard = ({ product }: { product: Product }) => {
  return (
    <div className="max-w-62 rounded-lg border border-white/30 p-2">
      <Image
        alt={product.title}
        src={product?.thumbnail}
        height={200}
        width={200}
      />
      <span className="text-lg font-semibold">{product.title}</span>
      <p className="text-xs">{product.description}</p>
    </div>
  );
};

const Products = ({ products }: { products: Product[] }) => (
  <div
    className={`flex flex-wrap gap-2 ${products.length === 0 && "items-center justify-center"}`}
  >
    {!products.length
      ? "No Products Found"
      : products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
  </div>
);

function Pagination({ products }: { products: Product[] }) {
  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const startIndex = (pageNumber - 1) * limit;
  const endIndex = startIndex + limit;

  const totalPages = Math.ceil(products.length / limit);

  const handleLimitChange = (value: string) => {
    setLimit(parseInt(value) ?? 10);
  };

  const handleUpdatePage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };

  return (
    <section className="size-full">
      <Products products={products.slice(startIndex, endIndex)} />
      <footer className="mt-4 flex min-h-12 items-center justify-center gap-x-8">
        <div className="flex items-center gap-x-2">
          {Array(totalPages)
            .keys()
            .map((_, idx) => (
              <button key={idx} onClick={() => handleUpdatePage(idx + 1)}>
                {idx + 1}
              </button>
            ))}
        </div>
        <select
          className="bg-black"
          defaultValue={"10"}
          onChange={(e) => handleLimitChange(e.target.value)}
        >
          <option value={"10"}>10</option>
          <option value={"20"}>20</option>
          <option value={"30"}>30</option>
          <option value={"40"}>40</option>
          <option value={"50"}>50</option>
        </select>
      </footer>
    </section>
  );
}

export default Pagination;
