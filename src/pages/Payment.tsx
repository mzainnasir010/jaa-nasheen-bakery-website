import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//custom reuseable components
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useCart } from "../context/cartContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Define TypeScript interface for cart items
interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Payment = () => {
  const { cartItems } = useCart();
  const { state } = useLocation();
  const { discount = 0 } = state || {};
  const navigate = useNavigate();

  // Message for alerts
  const [message, setMessage] = useState<string | null>(null);

  // Form state for payment information
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    billingZip: "",
  });

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingEstimate = subtotal >= 1500 ? 0 : 150; // Free shipping over Rs. 1500
  const taxEstimate = (subtotal * 0.08).toFixed(2); // 8% tax
  const totalPrice = (subtotal + shippingEstimate + parseFloat(taxEstimate) - discount).toFixed(2);

  // Handle form input changes
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  // Handle payment submission with validation
  const handlePayNow = () => {
    const { cardNumber, cardHolder, expiryDate, cvv, billingZip } = paymentInfo;

    if (!cardNumber || !cardHolder || !expiryDate || !cvv || !billingZip) {
      setMessage("Please fill all the fields!");
      setTimeout(() => setMessage(""), 1500);
      return;
    }

    setMessage("Order placed successfully!");
    setTimeout(() => {
      navigate("/"); // go to home screen
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              <span className="text-primary italic">Secure Payment</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Complete your purchase with our secure and seamless payment process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                    Payment Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="cardNumber" className="text-foreground font-medium">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handlePaymentChange}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 bg-input border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardHolder" className="text-foreground font-medium">
                        Cardholder Name
                      </Label>
                      <Input
                        id="cardHolder"
                        name="cardHolder"
                        value={paymentInfo.cardHolder}
                        onChange={handlePaymentChange}
                        placeholder="Enter the name on your card here"
                        className="mt-1 bg-input border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="billingZip" className="text-foreground font-medium">
                        Billing ZIP Code
                      </Label>
                      <Input
                        id="billingZip"
                        name="billingZip"
                        value={paymentInfo.billingZip}
                        onChange={handlePaymentChange}
                        placeholder="12345"
                        className="mt-1 bg-input border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiryDate" className="text-foreground font-medium">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        value={paymentInfo.expiryDate}
                        onChange={handlePaymentChange}
                        placeholder="MM/YY"
                        className="mt-1 bg-input border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-foreground font-medium">
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        value={paymentInfo.cvv}
                        onChange={handlePaymentChange}
                        placeholder="123"
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
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
                    Order Summary
                  </h3>
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
                        <p className="font-medium text-foreground">
                          Rs. {(item.price * item.quantity).toFixed(2)}
                        </p>
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
                      className="w-full gold-gradient text-primary-foreground mt-6 rounded-md"
                      onClick={handlePayNow}
                    >
                      Pay Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center text-sm text-muted-foreground">
                <p>Secure payment powered by Stripe</p>
                <p>All transactions are encrypted and secure</p>
              </div>
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

export default Payment;
