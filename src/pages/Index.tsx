import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CertificateSection } from "@/components/CertificateSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CompositionSection } from "@/components/CompositionSection";
import { UsageSection } from "@/components/UsageSection";
import { ProductInfoSection } from "@/components/ProductInfoSection";
import { BottomOrderSection } from "@/components/BottomOrderSection";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Arthriflex – Situs Resmi Indonesia</title>
        <meta 
          name="description" 
          content="Krim pendukung kesehatan sendi dengan kolagen peptida & herbal alami. Harga diskon Rp 390.000. Situs resmi Indonesia." 
        />
        <meta name="keywords" content="Arthriflex, krim sendi, kolagen peptida, herbal alami, kesehatan sendi" />
        <link rel="canonical" href="https://arthriflex.id" />
      </Helmet>
      
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        <main>
          <HeroSection />
          <CertificateSection />
          <BenefitsSection />
          <CompositionSection />
          <UsageSection />
          <ProductInfoSection />
          <BottomOrderSection />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </>
  );
};

export default Index;
