import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//custom reuseable components
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useCart } from "../context/cartContext";


// Define TypeScript interface for cart items
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Checkout = () => {
    const [message, setMessage] = useState<string | null>(null);
    const { cartItems } = useCart();
    const { state } = useLocation();
    const { discount = 0 } = state || {};
    const navigate = useNavigate();

    // Form state for billing and shipping
    const [billingInfo, setBillingInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
    });

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingEstimate = subtotal >= 1500 ? 0 : 500; // Free shipping over Rs. 1500, else Rs. 150
  const taxEstimate = (subtotal * 0.08).toFixed(2); // 8% tax
  const totalPrice = (subtotal + shippingEstimate + parseFloat(taxEstimate) - discount).toFixed(2);

  // Handle form input changes
  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

    const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone } = billingInfo;
    const { address, city, state, zip, country } = shippingInfo;

    if (!name || !email || !phone || !address || !city || !state || !zip || !country) {
        setMessage("⚠️ Please fill all the fields!");
        setTimeout(() => setMessage(""), 700); // clear after 3s
        return;
    }

    setMessage("Response recorded successfully!");

    // navigate to payment after showing confirmation
    setTimeout(() => {
        navigate("/payment", { state: { cartItems, discount } });
    }, 700);
    };


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              <span className="text-primary italic">checkout</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
               Secure your order by entering your details below.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Billing Information */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Billing Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={billingInfo.name}
                        onChange={handleBillingChange}
                        placeholder="Your full name here"
                        className="mt-1 bg-input border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={billingInfo.email}
                        onChange={handleBillingChange}
                        placeholder="Enter your mail here "
                        className="mt-1 bg-input border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={billingInfo.phone}
                        onChange={handleBillingChange}
                        placeholder="(123) 456-7890"
                        className="mt-1 bg-input border-border"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Information */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="address" className="text-foreground font-medium">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={shippingInfo.address}
                          onChange={handleShippingChange}
                          placeholder="Enter your address here"
                          className="mt-1 bg-input border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city" className="text-foreground font-medium">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={shippingInfo.city}
                          onChange={handleShippingChange}
                          placeholder="Enter your city here"
                          className="mt-1 bg-input border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-foreground font-medium">Province</Label>
                        <Input
                          id="state"
                          name="state"
                          value={shippingInfo.state}
                          onChange={handleShippingChange}
                          placeholder="Enter your province/state name here"
                          className="mt-1 bg-input border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip" className="text-foreground font-medium">ZIP Code</Label>
                        <Input
                          id="zip"
                          name="zip"
                          value={shippingInfo.zip}
                          onChange={handleShippingChange}
                          placeholder="Enter your area zip code here"
                          className="mt-1 bg-input border-border"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-foreground font-medium">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          value={shippingInfo.country}
                          onChange={handleShippingChange}
                          placeholder="Enter your country name here "
                          className="mt-1 bg-input border-border"
                        />
                      </div>
                    </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">Order Summary</h3>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          <p className="text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-medium text-foreground">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                    <div className="space-y-2 pt-4 border-t border-border">
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
                      onClick={handlePlaceOrder}
                    >
                      Place Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {message && (
        <div className="fixed top-24 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-elegant font-playfair z-50">
            {message}
        </div>
        )}
      <Footer />
    </div>
  );
};

export default Checkout;