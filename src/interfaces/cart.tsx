export interface Product {
    id: number;
    title: string;
    quantity: number;
    price: number;
    image: string;
  }
  

  export interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
  }

  export interface CartProps {
    open: boolean;
    onClose: () => void;
    products: Product[];
    onClearCart: () => void;
    onClearItem: (productId: number) => void;
  }
  