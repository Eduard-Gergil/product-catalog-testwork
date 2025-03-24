import { useEffect } from "react";
import ProductList from "../components/ProductList";
import { useProductStore } from "../store/products";

const HomePage = () => {
  const { products, fetchProducts, loading, searchQuery, currectCategories, priceRange, ratingRange } = useProductStore()

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
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

  if (loading) return <p className="text-center text-gray-500">Загрузка...</p>;

  return (
    <ProductList
      products={filteredProducts}
      loading={loading}
    />
  );
}

export default HomePage;