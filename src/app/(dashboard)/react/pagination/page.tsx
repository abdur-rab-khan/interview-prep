import { getCodeFromPath } from "@/utils/utils";
import CodePreview from "@/components/code-preview/CodePreview";
import Pagination from "@/problems/react/pagination/Pagination";

const fetchDummyProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=300");

    if (!response.ok) {
      throw "Failed to fetch the products";
    }

    return (await response.json())?.products ?? [];
  } catch {
    console.error("❌ Something went wrong while fetching the products");
  }
};

async function PaginationPage() {
  const paginationCode = getCodeFromPath("/react/pagination/Pagination.tsx");

  const products = await fetchDummyProducts();

  return (
    <CodePreview
      code={paginationCode}
      title="Pagination"
      description="Pagination divides large content into smaller pages for easier navigation and better performance."
    >
      <Pagination products={products} />
    </CodePreview>
  );
}

export default PaginationPage;
