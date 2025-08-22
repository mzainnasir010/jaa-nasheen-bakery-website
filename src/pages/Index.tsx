//custom reuseable components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

//section components
import Hero from "../components/sections/Hero";
import TopProducts from "../components/sections/TopProducts";
import Promotion from "../components/sections/Promotion";
import ExploreMore from "../components/sections/ExploreMore";
import About from "../components/sections/About";
import FeaturedTreats from "../components/sections/FeaturedTreats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedTreats />
        <TopProducts />
        <Promotion />
        <ExploreMore />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
