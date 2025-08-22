import { useState } from "react";
import { Gift, Clock } from "lucide-react";

//custom reusable components
import { Button } from "../ui/button";

const Promotion = () => {
  const [claimed, setClaimed] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleOnClick = () => {
    setClaimed(true);
    setShowMessage(true);

    // auto-hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-card">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="bg-gradient-to-r from-secondary/20 to-primary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-32 h-32 border border-primary rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-secondary rounded-full"></div>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gift className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Special Offer</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
                <span className="text-primary">20% Off</span> Your<br />
                First Order
              </h2>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Welcome to our bakery family! Enjoy a special discount on your first purchase.
                Valid on all fresh breads, pastries, and signature treats.
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Limited time offer</span>
                </div>
                <div className="text-sm text-primary font-medium">
                  Code: WELCOME20
                </div>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="text-lg px-8"
                onClick={handleOnClick}
                disabled={claimed}
              >
                {claimed ? "Claimed" : "Claim Offer"}
              </Button>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="gold-gradient rounded-2xl p-8 text-center">
                <div className="text-6xl font-playfair font-bold text-primary-foreground mb-2">
                  20%
                </div>
                <div className="text-primary-foreground/80 text-lg">
                  DISCOUNT
                </div>
                <div className="text-primary-foreground/60 text-sm mt-2">
                  On your first order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Notification */}
      {showMessage && (
        <div className="fixed top-24 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-elegant font-playfair z-50 transition-opacity">
          Offer Claimed You can use promo code <b>WELCOME20</b> while ordering.
        </div>
      )}
    </section>
  );
};

export default Promotion;
