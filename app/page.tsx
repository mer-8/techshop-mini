'use client';
import { useState, useEffect } from 'react'; 
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]); 
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);


  const handleAdd = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeProduct = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
   <main className="max-w-5xl mx-auto p-6 md:p-12">
  <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center tracking-tight">
    mini market
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
          <ProductCard key={item.id} product={item} onAdd={handleAdd} />
        ))}
      </div>

      <Cart cart={cart} onRemove={removeProduct} />
      
      <div className="mt-10 border-t pt-4">
        <h2 className="text-xl font-bold">Carrito ({cart.length} productos diferentes)</h2>
      </div>
    </main>
  );   
}