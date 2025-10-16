// pages/contact.tsx or components/ContactPage.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - HomeDeal</title>
        <meta name="description" content="Get in touch with HomeDeal Properties. Visit our office or contact us for real estate solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      {/* Page Hero with Breadcrumb */}
      <header className="page-hero">
        {/* Banner with image + breadcrumb */}
        <section className="breadcrumb-hero relative h-96 flex items-center justify-center overflow-hidden">
          <img 
            src="/images/img-9.jpg" 
            alt="HomeDeal banner" 
            className="bc-img absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="container mx-auto px-4 bc-content relative z-10 text-center text-white">
            <p className="eyebrow text-lg mb-2 opacity-90">Contact Us</p>
            <h1 className="bc-title text-4xl md:text-5xl font-bold mb-2">
              Turning Real Estate Challenges Into Opportunities
            </h1>
          </div>
        </section>
      </header>

      {/* Contact Form Section */}


      {/* Location Section */}
      <section id="location" className="location-section py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className=" mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Left: Copy */}
            <div className="w-full lg:w-1/2">
              <div className="text-blue-600 font-semibold mb-2">Locations</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Office</h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Visit us at our Bhubaneswar headquarters for project discussions and partnership opportunities.  
                <br /><br />
                <strong>Address:</strong><br />
                Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor,<br />
                Mouza-Subudhi Pur, Kalinga Vihar, Patrapada,<br />
                Bhubaneswar, Dist- Khurda, Odisha, India-751019<br /><br />
                <strong>Call:</strong> <a href="tel:+919668848999" className="text-blue-600 hover:underline">+91 9668848999</a>
                <br />
                <strong>Email:</strong> <a href="mailto:info@homedeal.co.in" className="text-blue-600 hover:underline">info@homedeal.co.in</a>
              </p>
            </div>

            {/* Right: Map */}
            <div className="w-full lg:w-1/2">
              <div className="map-card rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin" 
                  width="100%" 
                  height="350" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HomeDeal Office Location"
                ></iframe>
              </div>
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