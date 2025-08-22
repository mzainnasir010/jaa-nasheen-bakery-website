import { motion, useReducedMotion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
//custom reuseable components
import { Button } from "@/components/ui/button";

//image for hero Section
import heroImg from "../../assets/heroImg.png";

// Variants for staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const buttonHover: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const scrollIndicatorVariants: Variants = {
  bounce: {
    y: [0, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  },
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Artisanal bakery background with fresh breads and pastries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 lg:px-32 flex items-center justify-center md:justify-start w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl text-center md:text-left">
          <motion.p
            className="text-lg text-primary font-medium mb-4 tracking-wide"
            variants={itemVariants}
          >
            Delicious Cafe
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-foreground leading-tight mb-8 md:mb-24"
            variants={itemVariants}
          >
            <span className="block text-primary">Sweet Treats,</span>
            <span className="block italic text-primary">Perfect Eats</span>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div
              variants={!shouldReduceMotion ? buttonHover : {}}
              whileHover="hover"
            >
            <Link to="/products">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Shop Now
              </Button>
            </Link>
            </motion.div>
            <motion.div
              variants={!shouldReduceMotion ? buttonHover : {}}
              whileHover="hover"
            >
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={!shouldReduceMotion ? scrollIndicatorVariants : {}}
        animate="bounce"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={!shouldReduceMotion ? { scaleY: [1, 1.5, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;