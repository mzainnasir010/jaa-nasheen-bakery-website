import { Calendar, User, Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// custom reusable components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";

// import reusable variants
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../animations/variant";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "The Art of Sourdough: A Master Class in Traditional Bread Making",
    excerpt:
      "Discover the secrets behind our signature sourdough, from starter cultivation to the perfect crust. Join us on a journey through time-honored techniques.",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&h=400&fit=crop",
    category: "Techniques",
    author: "Jibran Khalil",
    date: "December 15, 2024",
    readTime: "8 min read",
  };

  const blogPosts = [
    {
      id: 2,
      title: "Seasonal Ingredients: Winter Flavors in Our Holiday Menu",
      excerpt:
      "Explore how we incorporate seasonal ingredients like cinnamon, nutmeg, and cranberries into our winter specialties.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
      category: "Seasonal",
      author: "Fareed Sikander",
      date: "December 10, 2024",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Behind the Scenes: A Day in the Life at Keithston Bakery",
      excerpt:
      "From 4 AM prep work to evening cleanup, see what it takes to bring fresh baked goods to your table every day.",
      image:
        "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=300&fit=crop",
      category: "Behind the Scenes",
      author: "Mahnoor Saeed",
      date: "December 5, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Perfect Croissant: French Techniques Meet Local Ingredients",
      excerpt:
      "Learn about the 72-hour process that goes into creating our buttery, flaky croissants using locally sourced butter.",
      image:
        "https://images.pexels.com/photos/31688615/pexels-photo-31688615.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      category: "Techniques",
      author: "Fareed Sikander",
      date: "November 28, 2024",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Community Spotlight: Supporting Local Farmers",
      excerpt:
      "Meet the local farmers who supply our organic flour, fresh eggs, and seasonal fruits that make our products special.",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
      category: "Community",
      author: "Jibran Khalil",
      date: "November 20, 2024",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Holiday Catering: Making Your Celebrations Special",
      excerpt:
      "From corporate events to family gatherings, discover our catering options that bring bakery-fresh quality to your special occasions.",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
      category: "Catering",
      author: "Mahnoor Saeed",
      date: "November 15, 2024",
      readTime: "5 min read",
    },
  ];

  const categories = ["All", "Techniques", "Seasonal", "Behind the Scenes", "Community", "Catering"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="pt-40 pb-16 hero-gradient"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
              Our <span className="text-primary italic">Blog</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Stories from our kitchen, baking tips from our masters, and insights into the art of traditional bread making.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Search & Categories */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-8 bg-card border-b border-border"
      >
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <motion.div variants={fadeInLeft} className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </motion.div>

            {/* Categories */}
            <motion.div variants={fadeInRight} className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "hero" : "outline"}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Article */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-background"
      >
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden bg-card border-border shadow-elegant">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <motion.div variants={fadeInLeft} className="relative h-64 lg:h-full">
                    <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInRight} className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="outline">{featuredPost.category}</Badge>
                      <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                        <Calendar className="w-4 h-4 text-muted-foreground ml-3" />
                        <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                      </div>
                      <Button variant="hero">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-card"
      >
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Latest Articles
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest baking insights, seasonal recipes, and behind-the-scenes stories
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp} custom={index}>
                <Card className="group cursor-pointer transition-smooth hover:shadow-elegant bg-background border-border overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/90 text-foreground">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <h3 className="font-playfair font-semibold text-lg text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Button variant="outline" size="lg">Load More Articles</Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-background"
      >
        <div className="w-full px-4 sm:px-6 lg:px-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border">
            <CardContent className="p-8 md:p-12 text-center">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-6xl font-playfair font-bold text-foreground mb-4">
                Never Miss a Recipe
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter for the latest baking tips, seasonal recipes, and exclusive behind-the-scenes content.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email address" className="flex-1" />
                <Button variant="hero">Subscribe</Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Blog;