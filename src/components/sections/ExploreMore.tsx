
import { useState } from "react";
import { Info, ShoppingCart } from "lucide-react";

//context fror cart items
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
  category: string;
}

const ExploreMore = () => {
  const { addToCart, showNotification } = useCart();
  const [activeCategory, setActiveCategory] = useState("Cake");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["Cake", "Muffins", "Croissant", "Bread", "Tart", "Favorite"];

  // Centralized product list to avoid duplication
  const products: Product[] = [
    {
      id: 1,
      name: "Chocolate Layer Cake",
      price: 3500,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
      description: "Rich chocolate layered cake with velvety ganache",
      category: "Cake",
    },
    {
      id: 2,
      name: "Berry Cheesecake",
      price: 4500,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop",
      description: "Creamy cheesecake topped with fresh mixed berries",
      category: "Cake",
    },
    {
      id: 3,
      name: "Red Velvet Slice",
      price: 380,
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=300&fit=crop",
      description: "Classic red velvet cake with cream cheese frosting",
      category: "Cake",
    },
    {
      id: 4,
      name: "Lemon Pound Cake",
      price: 3500,
      image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=300&h=300&fit=crop",
      description: "Zesty lemon-infused pound cake with a sugary glaze",
      category: "Cake",
    },
    {
      id: 5,
      name: "Strawberry Shortcake",
      price: 920,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop",
      description: "Light sponge cake layered with fresh strawberries and cream",
      category: "Cake",
    },
    {
      id: 6,
      name: "Chocolate Brownie",
      price: 300,
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=300&fit=crop",
      description: "Fudgy chocolate brownie with a crispy top",
      category: "Cake",
    },
    {
      id: 7,
      name: "Blueberry Muffin",
      price: 250,
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=300&fit=crop",
      description: "Moist muffin bursting with fresh blueberries",
      category: "Muffins",
    },
    {
      id: 8,
      name: "Chocolate Chip",
      price: 150,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
      description: "Soft muffin loaded with rich chocolate chips",
      category: "Muffins",
    },
    {
      id: 9,
      name: "Bran Muffin",
      price: 750,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
      description: "Hearty bran muffin with a touch of sweetness",
      category: "Muffins",
    },
    {
      id: 10,
      name: "Lemon Poppy",
      price: 260,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop",
      description: "Tangy lemon muffin with crunchy poppy seeds",
      category: "Muffins",
    },
    {
      id: 11,
      name: "Banana Nut",
      price: 150,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop",
      description: "Moist banana muffin with crunchy walnuts",
      category: "Muffins",
    },
    {
      id: 14,
      name: "Almond Croissant",
      price: 1200,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
      description: "Buttery croissant filled with sweet almond paste",
      category: "Croissant",
    },
    {
      id: 15,
      name: "Chocolate Filled",
      price: 1200,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop",
      description: "Croissant filled with rich chocolate ganache",
      category: "Croissant",
    },
    {
      id: 16,
      name: "Ham & Cheese",
      price: 1350,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop",
      description: "Savory croissant with ham and melted cheese",
      category: "Croissant",
    },
    {
      id: 18,
      name: "Fruit Danish",
      price: 1250,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
      description: "Sweet danish topped with mixed fruit preserves",
      category: "Croissant",
    },
    {
      id: 19,
      name: "Sourdough Loaf",
      price: 800,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop",
      description: "Crusty sourdough loaf with a tangy flavor",
      category: "Bread",
    },
    {
      id: 20,
      name: "Whole Wheat",
      price: 700,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
      description: "Hearty whole wheat bread with a nutty taste",
      category: "Bread",
    },
    {
      id: 21,
      name: "French Baguette",
      price: 600,
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop",
      description: "Classic French baguette with a crisp crust",
      category: "Bread",
    },
    {
      id: 23,
      name: "Multigrain",
      price: 900,
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
      description: "Nutritious multigrain bread with seeds",
      category: "Bread",
    },
    {
      id: 24,
      name: "Focaccia",
      price: 520,
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=300&fit=crop",
      description: "Soft focaccia with olive oil and herbs",
      category: "Bread",
    },
    {
      id: 25,
      name: "Fruit Tart",
      price: 980,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
      description: "Buttery tart filled with fresh seasonal fruits",
      category: "Tart",
    },
    {
      id: 27,
      name: "Chocolate Tart",
      price: 220,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop",
      description: "Rich chocolate ganache in a crisp tart shell",
      category: "Tart",
    },
    {
      id: 28,
      name: "Apple Tart",
      price: 390,
      image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=300&h=300&fit=crop",
      description: "Caramelized apple slices in a buttery tart",
      category: "Tart",
    },
    {
      id: 29,
      name: "Custard Tart",
      price: 200,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop",
      description: "Smooth vanilla custard in a flaky tart shell",
      category: "Tart",
    },
    {
      id: 30,
      name: "Pecan Tart",
      price: 220,
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=300&fit=crop",
      description: "Sweet pecan filling in a buttery tart crust",
      category: "Tart",
    },
    {
      id: 31,
      name: "Chocolate Layer Cake",
      price: 4000,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
      description: "Rich chocolate layered cake with velvety ganache",
      category: "Favorite",
    },
    {
      id: 33,
      name: "Artisan Bread",
      price: 400,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop",
      description: "Crusty sourdough loaf with a tangy flavor",
      category: "Favorite",
    },
    {
      id: 34,
      name: "Fresh Muffin",
      price: 300,
      image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=300&fit=crop",
      description: "Moist muffin bursting with fresh blueberries",
      category: "Favorite",
    },
    {
      id: 36,
      name: "Special Pastry",
      price: 550,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop",
      description: "Rich chocolate ganache in a crisp tart shell",
      category: "Favorite",
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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Explore More
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of artisanal baked goods by category
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "hero" : "ghost"}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter((product) => product.category === activeCategory)
            .map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer transition-smooth hover:shadow-elegant bg-card border-border"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-25 object-cover transition-smooth group-hover:scale-105"
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
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
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
              </Card>
            ))}
        </div>

        {/* Single Modal */}
        <QuickViewModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default ExploreMore;