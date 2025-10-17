// pages/about.tsx or components/AboutPage.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us - HomeDeal</title>
        <meta name="description" content="Learn more about HomeDeal Properties - your trusted real estate partner in Eastern India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>



      {/* Breadcrumb Hero Section */}
      <section className="breadcrumb-hero relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/img-9.jpg" 
          alt="HomeDeal banner" 
          className="bc-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 bc-content relative z-10 text-center text-white">
          <p className="eyebrow text-lg mb-2 opacity-90">About Us</p>
          <h1 className="bc-title text-4xl md:text-5xl font-bold mb-2">Smart Solutions for Every Real Estate Challenge.</h1>

        </div>
      </section>

      {/* Company Introduction Section */}
      <section id="walkthrough" className="walkthrough-section py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className=" mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Text Column */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome To <br /><strong>HomeDeal Properties</strong>
              </h2>
              <h5 className="text-xl mb-4 text-gray-700">
                Built on Expertise. Driven by Innovation. Inspired by Nature.
              </h5>
<p className="text-gray-600 mb-6 leading-relaxed text-justify">
  HomeDeal is a new-age real estate platform built on over a decade of industry expertise. We help you buy, sell, lease, or rent residential and commercial properties across Eastern India. Our approach brings a fresh beginning to property discovery—transparent, tech-driven, and designed to move beyond heavy brokerage and endless site visits. Whether it’s your dream home, a premium plot, or a modern commercial space, our experienced team makes every step seamless. With 10+ years of experience and a renewed vision, our mission is simple: to be Bhubaneswar’s most trusted partner in property investment, leasing, and financing.
</p>

            </div>

            {/* Image Column */}
            <div className="w-full lg:w-1/2">
              <div className="video-thumb relative cursor-pointer group">
                <img 
                  src="/images/img-1.jpg" 
                  alt="HomeDeal company reel" 
                  className="thumb-img w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="walkthrough-section py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className=" mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Vision Column */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="video-thumb relative cursor-pointer group">
                <img 
                  src="/images/1719806544698.png" 
                  alt="HomeDeal vision" 
                  className="thumb-img w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Mission Column */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Our vision is to create value beyond transactions and shape the future of how our clients Work, Live & Play; with our years of dedication and experience combined with deep market knowledge.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-8">Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                Our mission is to impress existing and potential clients through unflinching customer service with the intent that all who come into contact with us are pleased and proud to recommend us to their professional network, business partners, families, their friends and their colleagues without hesitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections can be added here */}
      {/* Values Section */}
      <section className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className=" mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at HomeDeal Properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Transparency</h3>
              <p className="text-gray-600">
                We believe in building relationships based on honesty and clear communication with our clients.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Leveraging technology to provide smarter, more efficient real estate solutions for modern needs.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We go above and beyond to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTAs */}
      <div className="sticky-ctas hidden md:flex flex-col fixed right-6 bottom-6 gap-3 z-40">
        <a href="#contact" className="cta-btn bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
          <i className="bi bi-calendar2-check"></i>
          <span className="hidden">Book Consultation</span>
        </a>
        <a href="https://wa.me/919668848999?text=Hi%20I%27m%20interested%20in%20HomeDeal" target="_blank" rel="noopener" className="cta-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
          <i className="bi bi-whatsapp"></i>
          <span className="hidden">WhatsApp</span>
        </a>
      </div>

      {/* Mobile bottom CTA bar */}
      <div className="mobile-cta-bar md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex z-40">
        <a href="#contact" className="flex-1 py-3 text-center text-blue-600 hover:bg-blue-50 transition-colors flex flex-col items-center gap-1">
          <i className="bi bi-calendar2-check"></i>
          <span className="text-xs">Book Consultation</span>
        </a>
        <a href="https://wa.me/919668848999?text=Hi%20I%27m%20interested%20in%20HomeDeal" target="_blank" rel="noopener" className="flex-1 py-3 text-center text-green-600 hover:bg-green-50 transition-colors flex flex-col items-center gap-1">
          <i className="bi bi-whatsapp"></i>
          <span className="text-xs">WhatsApp</span>
        </a>
      </div>
    </>
  );
}