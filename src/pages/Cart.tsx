import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//custom reuseable components
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/cartContext";

// Define TypeScript interface for recommended product items
interface RecommendedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Cart = () => {
  const { cartItems, addToCart, updateQuantity, removeItem, saveForLater, moveToCart, savedItems, showNotification } = useCart();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);

  const recommendedProducts: RecommendedProduct[] = [
    { id: 3, name: "Red Velvet Cake", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop", price: 3500 },    
    { id: 5, name: "Sourdough Loaf", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300&h=300&fit=crop", price: 6.50 },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingEstimate = subtotal >= 1500 ? 0 : 500; // Free shipping over rs. 1500
  const taxEstimate = (subtotal * 0.08).toFixed(2); // 8% tax
  const totalPrice = (subtotal + shippingEstimate + parseFloat(taxEstimate) - discount).toFixed(2);

  // Handle promo code 
  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "BAKERY10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  // Handle navigation to checkout
  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, discount } });
  };

  // Free shipping progress
  const freeShippingThreshold = 1500;
  const progressPercentage = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              Your <span className="text-primary italic">Cart</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Review your selections and proceed with confidence crafted quality, delivered with care.
            </p>
          </div>

          {cartItems.length === 0 && savedItems.length === 0 ? (
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Your cart is empty. Explore our delicious baked goods!
              </p>
              <Link to="/products">
                <Button variant="hero" size="lg" className="px-8">
                    Shop Now
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Cart Items and Saved for Later */}
              <div className="lg:col-span-2 space-y-8">
                {/* Cart Items */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-foreground">Items in Cart</h3>
                  {cartItems.map((item) => (
                    <Card key={item.id} className="group transition-smooth hover:shadow-elegant bg-card border-border overflow-hidden">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-md transition-smooth group-hover:scale-105"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-lg text-foreground">{item.name}</h4>
                          <p className="text-muted-foreground">Rs. {item.price.toFixed(2)} each</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2"
                            >
                              -
                            </Button>
                            <span className="text-foreground">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2"
                            >
                              +
                            </Button>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-muted-foreground mt-2"
                            onClick={() => saveForLater(item)}
                          >
                            Save for Later
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-foreground">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-destructive hover:text-destructive-foreground mt-2"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Saved for Later */}
                {savedItems.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-playfair font-bold text-foreground">Saved for Later</h3>
                    {savedItems.map((item) => (
                      <Card key={item.id} className="group transition-smooth hover:shadow-elegant bg-card border-border overflow-hidden">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="relative w-24 h-24 flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-md transition-smooth group-hover:scale-105"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-lg text-foreground">{item.name}</h4>
                            <p className="text-muted-foreground">Rs. {item.price.toFixed(2)}</p>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-muted-foreground mt-2"
                              onClick={() => moveToCart(item.id)}
                            >
                              Move to Cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Summary and Promo Code */}
              <div className="space-y-6 pt-12">
                {/* Free Shipping Progress */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-2">
                      {subtotal >= freeShippingThreshold 
                        ? "Congratulations! You qualify for free shipping."
                        : `Spend Rs. ${(freeShippingThreshold - subtotal).toFixed(2)} more for free shipping!`}
                    </p>
                    <div className="w-full bg-muted h-2 rounded-full">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>

                {/* Promo Code */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <Label htmlFor="promo-code" className="text-foreground font-medium">
                      Promo Code
                    </Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="promo-code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter promo code"
                        className="bg-input border-border"
                      />
                      <Button 
                        variant="outline" 
                        onClick={applyPromoCode}
                      >
                        Apply
                      </Button>
                    </div>
                    {discount > 0 && (
                      <p className="text-primary mt-2">Discount applied: -Rs. {discount.toFixed(2)}</p>
                    )}
                  </CardContent>
                </Card>

                {/* Order Summary */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">Rs. {subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping Estimate</span>
                        <span className="text-foreground">
                          {shippingEstimate === 0 ? "Free" : `Rs. ${shippingEstimate.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax Estimate</span>
                        <span className="text-foreground">Rs. {taxEstimate}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Discount</span>
                          <span className="text-primary">-Rs. {discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-foreground pt-2 border-t border-border">
                        <span>Total</span>
                        <span>Rs. {totalPrice}</span>
                      </div>
                    </div>
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full gold-gradient text-primary-foreground mt-6"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Recommended Products */}
          {cartItems.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                You Might Also Like
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {recommendedProducts.map((item) => (
                  <Card key={item.id} className="group transition-smooth hover:shadow-elegant bg-card border-border overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                          <Button 
                            variant="hero" 
                            size="sm"
                            onClick={() => addToCart({ id: item.id, name: item.name, image: item.image, price: item.price })}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium text-sm text-foreground text-center">{item.name}</h4>
                        <p className="text-muted-foreground text-center">Rs. {item.price.toFixed(2)}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Delivery Information */}
          {cartItems.length > 0 && (
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                Delivery Information
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Orders over Rs. 1500 qualify for free standard shipping. Estimated delivery: 2-5 business days.
                Need it faster? Choose express shipping at checkout.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;