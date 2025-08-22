import { ShoppingCart } from "lucide-react";

//custom reuseable components
import { Button } from "@/components/ui/button";

//context for cart items
import { useCart } from "../../context/cartContext";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal = ({ product, isOpen, onClose }: QuickViewModalProps) => {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card rounded-2xl max-w-lg w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-foreground text-lg font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h3 className="font-playfair font-bold text-2xl text-foreground mb-2">
          {product.name}
        </h3>

        <p className="text-primary font-bold text-xl mb-4">${product.price}</p>

        <p className="text-muted-foreground mb-6">{product.description}</p>

        <Button
          variant="bakery"
          className="w-full"
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
            });
            onClose();
          }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default QuickViewModal;
