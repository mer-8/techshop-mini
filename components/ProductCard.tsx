// components/ProductCard.tsx
import { Product } from '../types/product';

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onAdd }: Props) {
  return (
   <div className="border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-xs text-gray-400">Precio por kg: ${product.pricePerKilo}</p>
      <button 
        onClick={() => onAdd(product)}
        className="bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
      >
        Agregar
      </button>
    </div>
  );
}