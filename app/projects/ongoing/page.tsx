// pages/ongoing-projects.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';

export default function OngoingProjectsPage() {
  const ongoingProjects = [
    {
      name: 'EVOS ALCHEMY',
      image: '/images/EVOS-ALCHEMY.jpg',
      slug: 'evos-alchemy',
      location: 'Bhubaneswar',
      status: 'Ongoing'
    },
    {
      name: 'Kalinga Villa',
      image: '/images/kalinga-villa.jpg',
      slug: 'kalinga-villa',
      location: 'Bhubaneswar',
      status: 'Ongoing'
    },
  ];

  return (
    <>
      <Head>
        <title>Ongoing Projects - HomeDeal</title>
        <meta name="description" content="Explore our ongoing real estate projects by HomeDeal Properties in Bhubaneswar and Eastern India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Banner with image + breadcrumb */}
      <header className="breadcrumb-hero relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/img-9.jpg" 
          alt="HomeDeal Projects" 
          className="bc-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 bc-content relative z-10 text-center text-white">
          <p className="eyebrow text-lg mb-2 opacity-90">Projects</p>
          <h1 className="bc-title text-4xl md:text-5xl font-bold mb-2">Ongoing Projects</h1>
        </div>
      </header>

      {/* Projects Grid Section */}
      <section className="py-12 md:py-20 main-container">
        <div className=" mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Developments</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our ongoing projects that are shaping the future of real estate in Eastern India. 
              Each development is crafted with precision and designed for modern living.
            </p>
          </div>

          {/* Projects Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium transition-colors">
              All Projects
            </button>
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
              Residential
            </button>
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
              Commercial
            </button>
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
              Mixed Use
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ongoingProjects.map((project, index) => (
              <Link 
                key={project.slug} 
                href={`/projects/${project.slug}`}
                className="project-card group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                aria-label={`View ${project.slug} project`}
              >
                <figure className="project-figure relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="proj-tag absolute top-3 left-3 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                  <figcaption className="project-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <span className="project-name block text-lg font-semibold mb-1">{project.name}</span>
                    <span className="project-meta text-sm opacity-90 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </span>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-600 font-medium">Active Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Happy Families</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">On-Time Delivery</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Interested in Our Projects?</h3>
            <p className="text-gray-600 mb-6">Get in touch with our team to schedule a site visit or learn more about our ongoing developments.</p>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky CTAs */}
      <div className="sticky-ctas hidden md:flex flex-col fixed right-6 bottom-6 gap-3 z-40">
        <a href="/contact" className="cta-btn bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
          <i className="bi bi-calendar2-check"></i>
          <span className="hidden">Book Site Visit</span>
        </a>
        <a href="https://wa.me/919668848999?text=Hi%20I%27m%20interested%20in%20HomeDeal%20projects" target="_blank" rel="noopener" className="cta-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
          <i className="bi bi-whatsapp"></i>
          <span className="hidden">WhatsApp</span>
        </a>
      </div>

      {/* Mobile bottom CTA bar */}
      <div className="mobile-cta-bar md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex z-40">
        <a href="/contact" className="flex-1 py-3 text-center text-blue-600 hover:bg-blue-50 transition-colors flex flex-col items-center gap-1">
          <i className="bi bi-calendar2-check"></i>
          <span className="text-xs">Site Visit</span>
        </a>
        <a href="https://wa.me/919668848999?text=Hi%20I%27m%20interested%20in%20HomeDeal%20projects" target="_blank" rel="noopener" className="flex-1 py-3 text-center text-green-600 hover:bg-green-50 transition-colors flex flex-col items-center gap-1">
          <i className="bi bi-whatsapp"></i>
          <span className="text-xs">WhatsApp</span>
        </a>
      </div>
    </>
  );
}