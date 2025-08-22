import { Award, Users, Clock, Heart, Target, Leaf, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// custom reuseable components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

// animation variants (reusable)
import { fadeInUp, staggerContainer } from "../animations/variant";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description:
        "Every product is crafted with love and attention to detail, using only the finest ingredients.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "We source locally and use eco-friendly packaging to minimize our environmental impact.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "We're proud to serve our community and support local farmers and suppliers.",
    },
    {
      icon: Target,
      title: "Excellence Always",
      description:
        "Our commitment to excellence drives us to continuously improve and innovate.",
    },
  ];

  const team = [
    {
      name: "Jibran Khalil",
      role: "Head Baker & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      description:
        "With 25 years of baking experience, Jibran founded JaaNasheen with a vision of bringing artisanal quality to everyday life.",
    },
    {
      name: "Fareed Sikander",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      description:
        "Sikander brings creativity and precision to our pastry department, having trained in Islamabad and Multan.",
    },
    {
      name: "Mahnoor Saeed",
      role: "Bread Artisan",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      description:
        "Mahnoor specializes in traditional bread-making techniques, ensuring every loaf meets our high standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="pt-40 pb-16 hero-gradient"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            About <span className="text-primary italic">JaaNasheen</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 1995, we've been more than just a bakery. We're a cornerstone
            of the community, bringing families together through the simple joy
            of freshly baked goods.
          </p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="py-16 bg-card"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop"
            alt="Historic bakery interior with vintage equipment"
            className="w-full h-80 object-cover rounded-2xl shadow-elegant"
            variants={fadeInUp}
          />
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              What started as a small neighborhood bakery has grown into a
              beloved institution. Our founder, Jibran khalil, began with a
              simple dream: to create the kind of bakery that would bring the
              community together, one fresh loaf at a time.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Today, we continue that tradition with the same commitment to
              quality, authenticity, and the belief that the best things in life
              are made by hand, with care and patience.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Visit Our Bakery
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="py-16 bg-background"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4"
              variants={fadeInUp}
            >
              Our Values
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              These principles guide everything we do, from sourcing ingredients
              to serving customers
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card border-border hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-playfair font-semibold text-lg text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-16 warm-gradient"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4"
              variants={fadeInUp}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              The passionate artisans behind every delicious creation
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
                    />
                    <h3 className="font-playfair font-semibold text-xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-background"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {[
              { icon: Award, label: "Years of Excellence", value: "25+" },
              { icon: Users, label: "Happy Customers", value: "15K+" },
              { icon: Clock, label: "Hours Baking Daily", value: "12+" },
              { icon: Globe, label: "Products Made Daily", value: "500+" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default About;
