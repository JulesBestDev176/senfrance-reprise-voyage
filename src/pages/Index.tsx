
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import MainServices from '@/components/home/MainServices';
import HousingOptions from '@/components/home/HousingOptions';
import Partners from '@/components/home/Partners';
import GuarantorSection from '@/components/home/GuarantorSection';
import StudentJob from '@/components/home/StudentJob';
import ServicesDiscovery from '@/components/home/ServicesDiscovery';
import DakarOffice from '@/components/home/DakarOffice';
import BlogPreview from '@/components/home/BlogPreview';
import Pricing from '@/components/home/Pricing';
import LukoPartnership from '@/components/home/LukoPartnership';
import Testimonials from '@/components/home/Testimonials';
import Services from '@/components/home/Services';

const Index = () => {
  // Trigger animations on first render with scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Main Services */}
      <MainServices />
      
      {/* Luko Partnership */}
      <LukoPartnership />

      {/* Housing Options */}
      <HousingOptions />

      {/* Partners */}
      <Partners />

      {/* Guarantor Section */}
      <GuarantorSection />

      {/* Student Job */}
      <StudentJob />

      {/* Services Discovery */}
      <ServicesDiscovery />

      {/* Testimonials */}
      <Testimonials/>

      {/* services */}
      <Services/>

      {/* Dakar Office */}
      <DakarOffice />

      {/* Blog Preview */}
      <BlogPreview />

      {/* Pricing */}
      <Pricing />
    </>
  );
};

export default Index;
