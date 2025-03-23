import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { Product } from "../types";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text-center text-gray-500">Загрузка...</p>;

  return (
    <ProductList products={products} />
  );
}

export default HomePage;