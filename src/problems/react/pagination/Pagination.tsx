"use client";
import Image from "next/image";
import { useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  tags: string[];
}

interface PaginationProps {
  pageNumber: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  onPageClick: (pageNumber: number) => void;
  onLimitChange: (limit: number) => void;
}

interface PaginationBtnProps {
  activePageNumber: number;
  currentPageNumber: number;
  onPageClick: (pageNumber: number) => void;
}

const DEFAULT_PAGE_LIMIT = 10;

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

const PaginationBtn = ({
  activePageNumber,
  currentPageNumber,
  onPageClick,
}: PaginationBtnProps) => {
  return (
    <button
      onClick={() => onPageClick(currentPageNumber)}
      className={`rounded-md border border-slate-500/50 px-3 py-1 ${activePageNumber === currentPageNumber && "bg-blue-500"}`}
    >
      {currentPageNumber}
    </button>
  );
};

const Pagination = ({
  pageNumber,
  totalPages,
  onNextPage,
  onPreviousPage,
  onPageClick,
  onLimitChange,
}: PaginationProps) => {
  // Prevent calculations if there is only 1 page
  if (totalPages <= 1) return null;

  // Calculate sliding window for middle pages
  let startPage = Math.max(2, pageNumber - 1);
  let endPage = Math.min(totalPages - 1, pageNumber + 1);

  // Keep a consistent 3-item middle window when near boundaries
  if (pageNumber <= 3) {
    startPage = 2;
    endPage = Math.min(totalPages - 1, 4);
  } else if (pageNumber >= totalPages - 2) {
    startPage = Math.max(2, totalPages - 3);
    endPage = totalPages - 1;
  }

  // Calculate exact total items to render in the middle array loop
  const totalMiddlePages = endPage - startPage + 1;

  return (
    <footer className="mt-4 flex min-h-12 items-center justify-center gap-x-8">
      <div className="flex items-center gap-x-1">
        <button
          disabled={pageNumber === 1}
          className="mr-3 flex items-center disabled:opacity-40"
          onClick={onPreviousPage}
        >
          <BiLeftArrow />
          Previous
        </button>

        {/* First Page */}
        <PaginationBtn
          currentPageNumber={1}
          activePageNumber={pageNumber}
          onPageClick={onPageClick}
        />

        {/* Left Ellipsis: Show if middle starts after page 2 */}
        {startPage > 2 && <span className="px-2">...</span>}

        {/* Middle Pages Loop */}
        {totalMiddlePages > 0 &&
          Array(totalMiddlePages)
            .fill(0)
            .map((_, idx) => (
              <PaginationBtn
                key={startPage + idx}
                activePageNumber={pageNumber}
                currentPageNumber={startPage + idx}
                onPageClick={onPageClick}
              />
            ))}

        {/* Right Ellipsis: Show if middle ends before the second-to-last page */}
        {endPage < totalPages - 1 && <span className="px-2">...</span>}

        <button
          disabled={pageNumber === totalPages}
          className="ml-3 flex items-center gap-x-1 disabled:opacity-40"
          onClick={onNextPage}
        >
          Next <BiRightArrow />
        </button>
      </div>
      <select
        className="bg-black"
        defaultValue={"10"}
        onChange={(e) =>
          onLimitChange(parseInt(e.target.value) ?? DEFAULT_PAGE_LIMIT)
        }
      >
        <option value={"10"}>10</option>
        <option value={"20"}>20</option>
        <option value={"30"}>30</option>
        <option value={"40"}>40</option>
        <option value={"50"}>50</option>
      </select>
    </footer>
  );
};

function PaginationContainer({ products }: { products: Product[] }) {
  const [limit, setLimit] = useState(DEFAULT_PAGE_LIMIT);
  const [pageNumber, setPageNumber] = useState(1);

  // ⭐ You were not able to find this solution.
  // So actually on pageNumber startIndex will be zero right,
  //    StartIndex:
  //                1 - 1 = 0 * 10 = 0;  --> Start at 0 t0 10 mean 0 to 9 products will shown
  //                2 - 1 = 1 * 10 = 10; --> Start at 10 to 20 mean 10 to 19 mean 10 more products
  //                3 - 1 = 2 * 10 = 20; --> Start at 20 to 30 mean 20 to 29 mean 10 more products

  //    EndIndex: (startIndex + limit)
  //              0 + limit (10) = 0 to 10
  //              10 + limit (10) = 10 to 20
  const startIndex = (pageNumber - 1) * limit;
  const endIndex = startIndex + limit;

  const totalPages = Math.ceil(products.length / limit);

  const handleLimitChange = (limit: number) => {
    setLimit(limit);
  };

  const handleGotoNextPage = () => {
    setPageNumber((prevPage) =>
      prevPage + 1 > totalPages ? prevPage : prevPage + 1,
    );
  };

  const handleGotoPreviousPage = () => {
    setPageNumber((prevPage) => (prevPage - 1 <= 0 ? prevPage : prevPage - 1));
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber <= 0 || pageNumber > totalPages) return;
    setPageNumber(pageNumber);
  };

  return (
    <section className="size-full">
      <Products products={products.slice(startIndex, endIndex)} />
      <Pagination
        pageNumber={pageNumber}
        totalPages={totalPages}
        onNextPage={handleGotoNextPage}
        onPreviousPage={handleGotoPreviousPage}
        onLimitChange={handleLimitChange}
        onPageClick={handlePageClick}
      />
    </section>
  );
}

export default PaginationContainer;
