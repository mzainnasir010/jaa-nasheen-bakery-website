import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ShoppingCart, Heart, Star } from "lucide-react";

//custom reuseable components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useCart } from "../context/cartContext";

//Import reusable animation variants
import { fadeInUp, staggerContainer } from "../animations/variant";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  rating?: number;
  inStock?: boolean;
}

const Products = () => {
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    { value: "all", label: "All Products" },
    { value: "bread", label: "Artisan Breads" },
    { value: "pastry", label: "Pastries" },
    { value: "cake", label: "Cakes" },
    { value: "cookie", label: "Cookies" },
    { value: "muffin", label: "Muffins" },
  ];

  const products = [
    { id: 1, name: "Sourdough Loaf", price: 850, category: "bread", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop", rating: 4.9, inStock: false },
    { id: 2, name: "Chocolate Croissant", price: 450, category: "pastry", image: "https://images.pexels.com/photos/31688615/pexels-photo-31688615.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.8, inStock: true },
    { id: 3, name: "Red Velvet Cake", price: 3500, category: "cake", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop", rating: 4.9, inStock: true },    
    { id: 5, name: "Chocolate Chip Cookie", price: 2200, category: "cookie", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop", rating: 4.6, inStock: true },
    { id: 6, name: "French Baguette", price: 650, category: "bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop", rating: 4.8, inStock: true },
    { id: 7, name: "Apple Tart", price: 180, category: "pastry", image: "https://images.pexels.com/photos/15794928/pexels-photo-15794928.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop", rating: 4.9, inStock: true },
    { id: 8, name: "Banana Bread", price: 220, category: "bread", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop", rating: 4.5, inStock: true },
    { id: 9, name: "Artisan Sourdough", price: 400, category: "bread", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop&crop=center", rating: 4.2, inStock: true },
    { id: 11, name: "Chocolate Eclair", price: 300, category: "cookie", image: "https://images.pexels.com/photos/28657096/pexels-photo-28657096.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"},
    { id: 12, name: "Rustic Country Loaf", price: 450,  category: "bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop&crop=center" },
    { id: 13, name: "Seeded Bagel", price: 720,  category: "muffin",image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop&crop=center",  },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "rating": return (b.rating ?? 0) - (a.rating ?? 0);
      default: return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-40 pb-12 hero-gradient"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              Our <span className="text-primary italic">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of artisanal baked goods, made fresh daily with premium ingredients
            </p>
          </div>
        </div>
      </motion.section>

      {/* Filters Section */}
      <motion.section 
        className="py-8 bg-card border-b border-border"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section 
        className="py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {sortedProducts.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Card className="group cursor-pointer transition-smooth hover:shadow-elegant bg-card border-border overflow-hidden">
                  <CardContent className="p-0">
                    <motion.div 
                      className="relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Stock Badge */}
                      <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${
                        product.inStock 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </div>

                      {/* Wishlist Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 h-8 w-8 bg-background/80 hover:bg-background"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>

                      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                        <Button 
                          variant="hero" size="sm" 
                          className="shadow-warm" 
                          disabled={!product.inStock}
                          onClick={() => addToCart({ id: product.id, name: product.name, image: product.image, price: product.price })}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {product.inStock ? "Add to Cart" : "Out of Stock"}
                        </Button>
                      </div>
                    </motion.div>
                    
                    <div className="p-4">
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-4 h-4 text-primary fill-current" />
                        <span className="text-sm text-muted-foreground">{product.rating}</span>
                      </div>
                      
                      <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">Rs. {product.price}</span>
                        <Button variant="bakery" size="sm" disabled={!product.inStock} onClick={() => addToCart({ id: product.id, name: product.name, image: product.image, price: product.price })}>
                          {product.inStock ? "Order" : "Sold Out"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {sortedProducts.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Products;
