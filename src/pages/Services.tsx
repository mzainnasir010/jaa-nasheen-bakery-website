import { Calendar, Clock, Users, Truck, ChefHat, Heart, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// custom reusable components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FAQ from "../components/sections/FAQ";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

// animations
import { fadeInUp, staggerContainer } from "../animations/variant";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Custom Cakes",
      description: "Personalized cakes for all occasions",
      features: ["Wedding cakes", "Birthday cakes", "Corporate events", "Custom designs"],
      price: "Starting from Rs. 2500",
      popular: true
    },
    {
      icon: Users,
      title: "Event Catering",
      description: "Full-service catering for any event size",
      features: ["Corporate meetings", "Parties & celebrations", "Holiday events", "Breakfast & lunch"],
      price: "Starting from Rs. 1500/person",
      popular: false
    },
    {
      icon: Calendar,
      title: "Wedding Services",
      description: "Complete wedding bakery solutions",
      features: ["Wedding cakes", "Dessert tables", "Cupcake towers", "Tasting sessions"],
      price: "Custom pricing",
      popular: false
    },
    {
      icon: Truck,
      title: "Delivery & Setup",
      description: "Professional delivery and event setup",
      features: ["Same-day delivery", "Event setup", "Temperature control", "Professional handling"],
      price: "From Rs. 500",
      popular: true
    },
    {
      icon: Heart,
      title: "Subscription Box",
      description: "Weekly or monthly bakery deliveries",
      features: ["Seasonal treats", "Exclusive items", "Flexible scheduling", "Gift options"],
      price: "From Rs. 3000/month",
      popular: false
    },
    {
      icon: Star,
      title: "Baking Classes",
      description: "Learn from our master bakers",
      features: ["Hands-on learning", "Small groups", "Take home treats", "All skill levels"],
      price: "From Rs. 7000/class",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consultation",
      description: "Discuss your vision, preferences, and requirements with our team"
    },
    {
      step: "2", 
      title: "Design & Quote",
      description: "Receive a detailed proposal with design concepts and pricing"
    },
    {
      step: "3",
      title: "Confirmation",
      description: "Finalize details, timeline, and secure your booking with deposit"
    },
    {
      step: "4",
      title: "Creation & Delivery",
      description: "We craft your order with care and deliver it fresh and on time"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-12 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-4">
              Our <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From custom wedding cakes to corporate catering, we bring artisanal excellence to every occasion
            </p>
            <Button variant="hero" size="lg" className="shadow-warm">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              What We <span className="text-primary italic">Offer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional bakery services tailored to your needs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="relative group hover:shadow-elegant transition-smooth bg-card border-border overflow-hidden">
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="font-playfair text-xl text-foreground">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              How It <span className="text-primary italic">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-2xl ">
              Our simple 4-step process ensures your perfect bakery experience
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16">
        <div className="w-full px-4 sm:px-6 lg:px-16 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">
              Ready to Get <span className="text-primary italic">Started?</span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-8">
              Contact us today to discuss your bakery needs and receive a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="shadow-warm px-8 py-6 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg"
              >
                <Clock className="w-5 h-5 mr-2" />
                Get Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
