import { useState, useEffect } from "react";
import axios from "axios";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import Product from "./types/product.type";
import { getAll } from "./services/product.service";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAll()
      .then(response => {
        console.log(response);
        setProducts(response.data);
      });
  }, []);

  const addNewProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  }

  return (
    <div className="container">
      <ProductList products={products} />
      <AddProduct onAddNewProduct={addNewProduct}/>
    </div>
  )
}
