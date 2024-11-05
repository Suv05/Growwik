import HeroSection from "@/components/Home/HeroSection";
import LatestWorks from "@/components/Home/LatestWorks";
import AboutUs from "@/components/Home/AboutUs";
import ServicePage from "@/components/Home/ServicePage";
import Platform from "@/components/Home/Platfrom";
import Creators from "@/components/Home/Creators";
import WhyChooseUse from "@/components/Home/WhyChooseUs";
import OurClients from "@/components/Home/OurClients";
import ContactForm from "@/components/Home/ContactForm";
import Review from "@/components/Home/Review";

export default function Home() {
  return (
    <>
    <HeroSection />
    <LatestWorks />
    <AboutUs />
    <ServicePage />
    <Platform />
    <Creators />
    <WhyChooseUse />
    <Review />
    <OurClients />
    <ContactForm />
    </>
  );
}
