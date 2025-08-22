import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

// custom reusable components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

// animations
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../animations/variant";

const Contact = () => {
  const [message, setMessage] = useState<null | string>(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Bakery",
      details: ["Round Market", "F-6, Islamabad"],
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "Mon-Sat: 6AM - 8PM"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@JaaNasheen.com", "orders@JaaNasheen.com"],
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Store Hours",
      details: ["Mon-Fri: 6AM - 8PM", "Sat-Sun: 7AM - 6PM"],
      action: "View Calendar",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)
      .value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const messageText = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    if (!firstName || !lastName || !email || !subject || !messageText) {
      setMessage("Please fill all the fields!");
    } else {
      setMessage("Response recorded successfully!");
      form.reset(); // clear the form
    }

    // auto-hide after 3s
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Get in <span className="text-primary italic">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions about our products,
              want to place a custom order, or just want to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card">
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-background border-border hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-lg text-foreground mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                    <Button variant="outline" size="sm" className="mt-4">
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground">
                          First Name
                        </Label>
                        <Input id="firstName" name="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground">
                          Last Name
                        </Label>
                        <Input id="lastName" name="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input id="email" name="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground">
                        Subject
                      </Label>
                      <Input id="subject" name="subject" placeholder="What is this regarding?" />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="bg-card border-border">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive map coming soon</p>
                      <p className="text-sm text-muted-foreground">Round Market, F-6, Islamabad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours & Additional Info */}
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-playfair font-semibold text-xl text-foreground mb-4">
                    Visit Our Bakery
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Store Hours</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>6:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>7:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>7:00 AM - 6:00 PM</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">Parking</h4>
                      <p className="text-sm text-muted-foreground">
                        Free parking available in front of the store and in the adjacent lot.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2">Accessibility</h4>
                      <p className="text-sm text-muted-foreground">
                        Our bakery is fully wheelchair accessible with an entrance ramp and wide aisles.
                      </p>
                    </div>
                  </div>

                  <Button variant="bakery" className="w-full mt-6">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Notification */}
      {message && (
        <div className="fixed top-24 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-elegant font-playfair z-50">
          {message}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
