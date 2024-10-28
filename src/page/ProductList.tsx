import ProductCard from "../components/ProductCard";
import React, { Fragment, useCallback, useState } from "react";
import debounce from "lodash/debounce";
import { useProducts } from "../hooks/useProducts";
import { useAuth } from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  category: string;
  thumbnail: string;
};

type Category = {
  slug: string;
  name: string;
  url: string;
};

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { handleUnauthorizedAction, isAuthenticated } = useAuth();
  const { products, categories, isLoading } = useProducts(
    debouncedSearch,
    selectedCategory
  );

  const debounceSearch = useCallback(
    debounce((term: string) => setDebouncedSearch(term), 500),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    debounceSearch(searchTerm);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex gap-4 mb-4 flex-col sm:flex-row">
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
          className="border rounded-lg px-4 py-2 w-full"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">All Categories</option>
          {categories?.map((category: Category, index: number) => (
            <option key={index} value={category.url}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : products?.length === 0 ? (
        <p className="text-gray-500 font-semibold sm:text-lg">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product: Product) => (
            <Fragment key={product.id}>
              <ProductCard
                product={product}
                handleUnauthorizedAction={handleUnauthorizedAction}
                isAuthenticated={isAuthenticated}
              />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
