// pages/previous-projects.tsx
"use client";
import { CalendarCheck2, MessageCircle } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function PreviousProjectsPage() {
  const previousProjects = [
    {
      name: 'Grand Awas',
      image: '/images/projects1.jpeg',
      href: '/grand-awas',
      location: 'Bhubaneswar',
      status: 'Completed',
      year: '2023'
    },
    {
      name: 'Evos Sea Roses',
      image: '/images/evosrose.jpg',
      href: '/evos-sea-roses',
      location: 'Bhubaneswar',
      status: 'Completed',
      year: '2022'
    },
    {
      name: 'Silver Oak Residency',
      image: '/images/project2.jpg',
      href: '/silver-oak-residency',
      location: 'Bhubaneswar',
      status: 'Completed',
      year: '2021'
    },
    {
      name: 'Royal Gardens',
      image: '/images/project3.jpg',
      href: '/royal-gardens',
      location: 'Bhubaneswar',
      status: 'Completed',
      year: '2020'
    },
    {
      name: 'Lakeview Apartments',
      image: '/images/project4.jpeg',
      href: '/lakeview-apartments',
      location: 'Bhubaneswar',
      status: 'Completed',
      year: '2019'
    },
    {
      name: 'City Center Mall',
      image: '/images/project5.jpeg',
      href: '/city-center-mall',
      location: 'Bhubaneswar',
      status: 'Completed',
      year: '2018'
    },
    {
      name: 'Tech Park One',
      image: '/images/project6.jpg',
      href: '/tech-park-one',
      location: 'Bhubaneswar',
      status: 'Completed',
      year: '2017'
    },
    {
      name: 'Heritage Homes',
      image: '/images/project7.jpeg',
      href: '/heritage-homes',
      location: 'Bhubaneswar',
      status: 'Completed',
      year: '2016'
    }
  ];

  return (
    <>
      <Head>
        <title>Previous Projects - HomeDeal</title>
        <meta name="description" content="Explore our successfully completed real estate projects by HomeDeal Properties in Bhubaneswar and Eastern India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Banner with image + breadcrumb */}
      <header className="breadcrumb-hero relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/img-9.jpg" 
          alt="HomeDeal Completed Projects" 
          className="bc-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 bc-content relative z-10 text-center text-white">
          <p className="eyebrow text-lg mb-2 opacity-90">Projects</p>
          <h1 className="bc-title text-4xl md:text-5xl font-bold mb-2">Previous Projects</h1>
        </div>
      </header>

      {/* Projects Grid Section */}
      <section className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className=" mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Successfully Delivered</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Take a look at our portfolio of completed projects that have transformed communities 
              and created lasting value for our clients across Eastern India.
            </p>
          </div>

          {/* Year Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium transition-colors">
              All Years
            </button>
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
              2023
            </button>
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
              2022
            </button>
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
              2021
            </button>
            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
              2020 & Earlier
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {previousProjects.map((project, index) => (
              <Link 
                key={project.name} 
                href={project.href}
                className="project-card group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                aria-label={`View ${project.name} project`}
              >
                <figure className="project-figure relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="proj-tag absolute top-3 left-3 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                  <figcaption className="project-caption absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                    <span className="project-name block text-lg font-semibold mb-1">{project.name}</span>
                    <div className="project-meta text-sm opacity-90 flex justify-between items-center">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        {project.year}
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>

          {/* Legacy Stats */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="text-center mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">What Our Clients Say</h3>
            <blockquote className="text-gray-600 italic mb-4 max-w-2xl mx-auto">
              "HomeDeal delivered our dream home ahead of schedule with exceptional quality. 
              Their attention to detail and customer service throughout the process was outstanding."
            </blockquote>
            <div className="font-semibold text-gray-800">- Mr. Sharma, Grand Awas Resident</div>
          </div>
        </div>
      </section>

      {/* Sticky CTAs */}
      <div className="sticky-ctas hidden md:flex flex-col fixed right-6 bottom-6 gap-3 z-40">
        <a href="#contact" className="cta-btn bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
          <CalendarCheck2 className="w-5 h-5" />
          <span className="hidden">Book Consultation</span>
        </a>
        <a href="https://wa.me/9198XXXXXXXX?text=Hi%20I%27m%20interested%20in%20HomeDeal" target="_blank" rel="noopener" className="cta-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span className="hidden">WhatsApp</span>
        </a>
      </div>

      {/* Mobile bottom CTA bar */}
      <div className="mobile-cta-bar md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex z-40">
        <a href="/contact" className="flex-1 py-3 text-center text-blue-600 hover:bg-blue-50 transition-colors flex flex-col items-center gap-1">
          <i className="bi bi-calendar2-check"></i>
          <span className="text-xs">Portfolio</span>
        </a>
        <a href="https://wa.me/919668848999?text=Hi%20I%27m%20interested%20in%20HomeDeal%20completed%20projects" target="_blank" rel="noopener" className="flex-1 py-3 text-center text-green-600 hover:bg-green-50 transition-colors flex flex-col items-center gap-1">
          <i className="bi bi-whatsapp"></i>
          <span className="text-xs">WhatsApp</span>
        </a>
      </div>
    </>
  );
}