import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProducts = async (searchTerm: string, categoryUrl?: string) => {
  const url = categoryUrl || "https://dummyjson.com/products";
  const { data } = await axios.get(url);
  return searchTerm
    ? data.products.filter((product: any) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data.products;
};

const fetchCategories = async () => {
  const { data } = await axios.get("https://dummyjson.com/products/categories");
  return data;
};

export const useProducts = (searchTerm: string, categoryUrl?: string) => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", searchTerm, categoryUrl],
    queryFn: () => fetchProducts(searchTerm, categoryUrl),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return { products, categories, isLoading };
};
