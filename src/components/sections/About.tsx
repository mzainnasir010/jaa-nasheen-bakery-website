import { Award, Users, Clock, Heart } from "lucide-react";
import {Link} from "react-router-dom"

//custom reuseable components
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const About = () => {
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "25+" },
    { icon: Users, label: "Happy Customers", value: "10K+" },
    { icon: Clock, label: "Fresh Daily", value: "6AM" },
    { icon: Heart, label: "Handcrafted", value: "100%" },
  ];

  return (
    <section className="py-20 warm-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-accent rounded-full"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              About <span className="text-primary italic">Our Story</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Since 1995, JaaNasheen Bakery has been a cornerstone of artisanal baking, 
              combining traditional techniques with innovative flavors. Our passion for 
              quality ingredients and time-honored methods creates the perfect harmony 
              of taste and craftsmanship.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every morning before dawn, our master bakers begin their work, kneading, 
              shaping, and baking with the same dedication that has made us a beloved 
              part of the community for over two decades.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Read Our Story
              </Button>
            </Link>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-elegant">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop"
                  alt="Master baker kneading dough in traditional bakery"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-xl text-foreground mb-2">
                    Master Craftsmanship
                  </h3>
                  <p className="text-muted-foreground">
                    Our experienced bakers bring decades of expertise to every loaf, 
                    ensuring consistent quality and exceptional taste.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 gold-gradient rounded-full flex items-center justify-center shadow-warm">
              <Award className="w-12 h-12 text-primary-foreground" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-elegant">
              <span className="font-semibold">Est. 1995</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;