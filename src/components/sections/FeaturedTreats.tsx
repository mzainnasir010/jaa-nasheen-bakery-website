import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

//custom reuseable components
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import QuickViewModal from "../ui/QuickViewModal";

//context for cart items
import { useCart } from "../../context/cartContext";

interface Treat {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}

const FeaturedTreats = () => {
  const { addToCart, showNotification } = useCart(); 
  const [selectedProduct, setSelectedProduct] = useState<Treat | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // always use unique IDs to avoid conflicts with TopProducts (Section)
  const treats: Treat[] = [
    {
      id: 7, 
      name: "Puff Pastry",
      price: 480,
      image: "https://www.piesandtacos.com/wp-content/uploads/2024/10/puff-pastry-dough-30-scaled.jpg",
      rating: 4.9,
      description: "Buttery, flaky layers of perfection",
    },
    {
      id: 8,
      name: "Doughnuts",
      price: 380,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
      rating: 4.8,
      description: "Glazed to sweet perfection",
    },
    {
      id: 9,
      name: "Brownies",
      price: 300,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop",
      rating: 4.9,
      description: "Rich, fudgy chocolate indulgence",
    },
    {
      id: 10,
      name: "Muffin",
      price: 380,
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=300&fit=crop",
      rating: 4.9,
      description: "Muffin with chocolate chips",

    },
  ];
  
  const openModal = (product: Treat) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Our <span className="text-primary italic">Specials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our signature creations, each one crafted with love and premium ingredients
          </p>
        </div>

        <div className="w-full grid md:grid-cols-4 gap-8">
          {treats.map((treat) => (
            <Card key={treat.id} className="group cursor-pointer transition-smooth hover:shadow-elegant bg-background border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={treat.image}
                    alt={treat.name}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-primary fill-current" />
                    <span className="text-sm font-medium text-foreground">{treat.rating}</span>
                  </div>
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Button variant="bakery" size="sm" onClick={() => openModal(treat)}>
                      Quick View
                    </Button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                    {treat.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {treat.description}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-1xl font-bold text-primary">RS {treat.price}</span>
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="shadow-warm"
                      onClick={() => addToCart({ id: treat.id, name: treat.name, image: treat.image, price: treat.price })}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
              <QuickViewModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreats;