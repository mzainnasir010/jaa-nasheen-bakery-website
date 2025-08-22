import { useState } from "react";
import { Info, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

//context for cart items
import { useCart } from "../../context/cartContext";

//custom reuseable components
import QuickViewModal from "../ui/QuickViewModal";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const TopProducts = () => {
  const { addToCart, showNotification } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products: Product[] = [
    {
      id: 1,
      name: "Artisan Sourdough",
      price: 400,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop&crop=center",
      description: "Traditional sourdough with perfect crust",
    },
    {
      id: 2,
      name: "Honey Wheat Roll",
      price: 350,
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&h=400&fit=crop&crop=center",
      description: "Sweet honey glazed wheat rolls",
    },
    {
      id: 3,
      name: "Chocolate Eclair",
      price: 300,
      image: "https://images.pexels.com/photos/28657096/pexels-photo-28657096.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Rich chocolate filled pastry",
    },
    {
      id: 4,
      name: "Rustic Country Loaf",
      price: 450,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop&crop=center",
      description: "Hearty whole grain country bread",
    },
    { id: 5, 
      name: "Chocolate Croissant", 
      price: 450, 
      image: "https://images.pexels.com/photos/31688615/pexels-photo-31688615.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", 
      description: "Buttery French brioche",
    },
    {
      id: 6,
      name: "Seeded Bagel",
      price: 720,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop&crop=center",
      description: "Everything bagel with mixed seeds",
    },
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Top Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved artisanal creations, baked fresh daily with premium ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer transition-smooth hover:shadow-elegant bg-card border-border">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <Button variant="hero" size="sm" className="shadow-warm" onClick={() => openModal(product)}>
                      Quick View
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair font-semibold text-lg text-foreground">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">Rs. {product.price}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Info className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <Button 
                    variant="bakery" 
                    className="w-full"
                    onClick={() => addToCart({ id: product.id, name: product.name, image: product.image, price: product.price })}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
              <QuickViewModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={closeModal}
              />
            </Card>
            
          ))}
        </div>
        
        <div className="text-center mt-12">
        <Link to="/products">
          <Button variant="outline" size="lg" className="text-lg px-8">
            View All Treats 
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;