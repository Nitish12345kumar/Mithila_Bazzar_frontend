import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FlashSales from "@/components/FlashSales";
import Categories from "@/components/Categories";
import EcommerceFooter from "@/components/EcommerceFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <FlashSales />
      <Categories />
      <EcommerceFooter />
    </div>
  );
};

export default Index;
