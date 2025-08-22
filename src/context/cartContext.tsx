import { createContext, useContext, useState, ReactNode } from "react";

// Define TypeScript interface for cart items
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

// Define context shape
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: { id: number; name: string; image: string; price: number }) => void;
  updateQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  saveForLater: (item: CartItem) => void;
  moveToCart: (id: number) => void;
  savedItems: CartItem[];
  showNotification: boolean;
  setShowNotification: (value: boolean) => void;
}

// Create context with default values
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart provider component
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [savedItems, setSavedItems] = useState<CartItem[]>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);


  // Add item to cart
  const addToCart = (product: { id: number; name: string; image: string; price: number }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 500);
  };

  // Update item quantity
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Save item for later
  const saveForLater = (item: CartItem) => {
    setSavedItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    removeItem(item.id);
  };

  // Move item back to cart
  const moveToCart = (id: number) => {
    const item = savedItems.find((item) => item.id === id);
    if (item) {
      setCartItems((prevItems) => [...prevItems, item]);
      setSavedItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, saveForLater, moveToCart, savedItems, showNotification, setShowNotification }}>
      {children}
      {showNotification && (
        <div className="fixed top-24 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-elegant font-playfair z-50">
          Item added to cart successfully!
        </div>
      )}
    </CartContext.Provider>
  );
};

export default CartProvider;