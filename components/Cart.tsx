
// components/Cart.tsx
import { Product } from '../types/product';

interface Props {
  cart: Product[];
  onRemove: (id: number) => void; // Recibimos la función
}

export default function Cart({ cart, onRemove }: Props) {
  const total = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <button 
                onClick={() => onRemove(item.id)} 
                className="text-red-500 hover:text-red-700 ml-4"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 font-bold text-lg border-t pt-2">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}