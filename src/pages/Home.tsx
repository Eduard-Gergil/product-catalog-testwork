import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { useProductStore } from "../store/products";
import { Product } from "../types";

const HomePage = () => {
  const { products, setProducts, searchQuery, currectCategories, priceRange, ratingRange } = useProductStore()
  const [loading, setLoading] = useState(true);
  // const debounce = useDebounce(searchQuery, 500);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterInited, setFilterInited] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки товаров:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!filterInited && products.length === 0) return
    filterProducts()
    setFilterInited(false)
  }, [products]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      filterProducts()
    }, 700);

    return () => {
      clearTimeout(timeout);
    };
  }, [products, searchQuery, currectCategories, priceRange, ratingRange]);

  const filterProducts = () => {
    const filtered = products.filter(
      (product) => {
        if (!product.title.toLowerCase().includes(searchQuery.toLowerCase())) return
        if (priceRange[0] !== 0 && product.price <= priceRange[0]) return
        if (priceRange[1] !== 0 && product.price >= priceRange[1]) return
        if (product.rating.rate <= ratingRange[0]) return
        if (product.rating.rate >= ratingRange[1]) return
        if (currectCategories.length !== 0 && !currectCategories.includes(product.category)) return
        return product
      }
    )
    setFilteredProducts(filtered);
  }

  if (loading) return <p className="text-center text-gray-500">Загрузка...</p>;

  return (
    <ProductList products={filteredProducts} loading={loading} />
  );
}

export default HomePage;