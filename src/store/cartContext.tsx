import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { CartContextType, Product } from '../interfaces/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);


export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += product.quantity;
      setCartItems(updatedCartItems);
      toast("Item added to cart!", {
        position: "top-center"
      })
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      toast("Item added to cart!", {
        position: "top-center"
      })

    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    toast("Item removed from cart!", {
      position: "top-center"
    })
  };

  const clearCart = () => {
    setCartItems([]);
    toast("Cart cleared!", {
      position: "top-center"
    })
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
