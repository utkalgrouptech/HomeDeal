// pages/index.tsx or components/HomePage.tsx
"use client";
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  TrendingUp, 
  Cpu, 
  Globe, 
  Wand2, 
  ThumbsUp, 
  Network,
  Store,
  Package,
  Heart,
  Zap,
  MessageCircle,
  CalendarCheck2
} from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    // Bootstrap and custom script initialization would go here
    // You might want to use a useEffect to handle dynamic imports
  }, []);

  return (
    <>
      <Head>
        <title>HomeDeal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="50x50" href="/images/favicon.png" />
        
        {/* Bootstrap Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" 
        />
      </Head>



      {/* Hero Section */}
      <header className="hero relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="/assets/poster.html"
        >
          <source src="/images/7021935_Up_Looking_3840x2160.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Center content */}
        <div className="hero-copy text-center text-white relative z-10 container mx-auto px-4">
          <div className="eyebrow text-lg mb-4 opacity-90">HomeDeal Properties</div>
          <h1 className="headline text-4xl md:text-6xl font-bold mb-6">
            Turning Real Estate <strong>Challenges</strong> Into <strong>Opportunities</strong>
          </h1>
          <p className="subhead text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            With a <strong>new team</strong>, a <strong>new platform,</strong> and <strong>new energy,</strong> 
            HomeDeal delivers strategies built for today and tomorrow.
          </p>
        </div>
      </header>

      {/* Walkthrough Section */}
      <section id="walkthrough" className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className="mx-auto px-4">
          <div className="row flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Text Column */}
            <div className="col w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome To <br /><strong>HomeDeal </strong>
              </h2>
              <h5 className="text-xl mb-4 text-gray-700">Built on Expertise. Driven by Innovation. Inspired by Nature.</h5>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Homedeal is a fresh new platform in real estate, professionals with over a decade of expertise 
                to help you buy, sell, lease, or rent residential and commercial properties across Eastern India...
              </p>
              <Link href="/about" className="btn-brand bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block transition-colors">
                Know More
              </Link>
            </div>

            {/* Video Thumbnail Column */}
            <div className="col w-full lg:w-1/2">
              <div className="video-thumb relative cursor-pointer group">
                <img 
                  src="/images/detail-img.jpg" 
                  alt="HomeDeal company reel" 
                  className="thumb-img w-full rounded-lg shadow-lg"
                />
                <div className="play-btn absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/25 rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="overview" className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className="mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Can We Help You?</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We deliver a 360° suite of real estate solutions across residential and commercial mandates...
          </p>

          {/* Residential Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Residential Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { 
                  name: 'Sales & Marketing Solutions', 
                  icon: TrendingUp, 
                  id: 'svc-sales',
                  color: 'text-blue-600'
                },
                { 
                  name: 'Technology Solutions', 
                  icon: Cpu, 
                  id: 'svc-tech',
                  color: 'text-purple-600'
                },
                { 
                  name: 'Digital Services', 
                  icon: Globe, 
                  id: 'svc-digital',
                  color: 'text-green-600'
                },
                { 
                  name: 'Creative Agency', 
                  icon: Wand2, 
                  id: 'svc-creative',
                  color: 'text-pink-600'
                },
                { 
                  name: 'Post Sales Services', 
                  icon: ThumbsUp, 
                  id: 'svc-postsales',
                  color: 'text-orange-600'
                },
                { 
                  name: 'APN Portal', 
                  icon: Network, 
                  id: 'svc-apn',
                  color: 'text-indigo-600'
                }
              ].map((service) => (
                <div 
                  key={service.id} 
                  className="feature group text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Floating background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon with floating animation */}
                  <div className="relative z-10">
                    <div className={`${service.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon 
                        size={48} 
                        className="mx-auto animate-float"
                      />
                    </div>
                    <div className="feature-title font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                      {service.name}
                    </div>
                  </div>
                  
                  {/* Subtle hover border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Commercial Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { 
                  name: 'Commercial & Retail', 
                  icon: Store, 
                  id: 'com-retail',
                  color: 'text-blue-600'
                },
                { 
                  name: 'Warehousing & Industrial', 
                  icon: Package, 
                  id: 'com-warehousing',
                  color: 'text-amber-600'
                },
                { 
                  name: 'Leisure & Hospitality', 
                  icon: Heart, 
                  id: 'com-leisure',
                  color: 'text-red-600'
                },
                { 
                  name: 'Emerging Businesses', 
                  icon: Zap, 
                  id: 'com-emerging',
                  color: 'text-yellow-600'
                }
              ].map((service) => (
                <div 
                  key={service.id} 
                  className="feature group text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Floating background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon with floating animation */}
                  <div className="relative z-10">
                    <div className={`${service.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon 
                        size={48} 
                        className="mx-auto animate-float"
                      />
                    </div>
                    <div className="feature-title font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                      {service.name}
                    </div>
                  </div>
                  
                  {/* Subtle hover border */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-gray-600">Explore what we're building and what we've delivered.</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">All</button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
              Ongoing Projects
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors">
              Previous Projects
            </button>
          </div>

          {/* Projects Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { 
      name: 'EVOS ALCHEMY', 
      image: '/images/EVOS-ALCHEMY.jpg', 
      slug: 'evos-alchemy' 
    },
    { 
      name: 'Diamond City', 
      image: '/images/Diamond-City.jpg', 
      slug: 'diamond-city' 
    },
    { 
      name: 'Grand Awas', 
      image: '/images/Grand-Awas.jpg', 
      slug: 'grand-awas' 
    },
    { 
      name: 'Kalinga Villa', 
      image: '/images/kalinga-villa.jpg', 
      slug: 'kalinga-villa' 
    },
    { 
      name: 'One World', 
      image: '/images/one-world.jpg', 
      slug: 'one-world' 
    },
    { 
      name: 'Nawah 9 Boulevard', 
      image: '/images/NAWAH-BOULEVARD.jpg', 
      slug: 'nawah-9-boulevard' 
    }
  ].map((project) => (
    <Link 
      key={project.slug} 
      href={`/projects/${project.slug}`}
      className="project-card group"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
          <span className="project-name font-semibold">{project.name}</span>
        </div>
      </div>
    </Link>
  ))}
</div>

          <div className="text-center mt-8">
            <Link href="/ongoing-projects" className="btn-blog-more border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg inline-block transition-colors">
              View more
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Image */}
            <div className="w-full lg:w-1/2">
              <img 
                src="/images/hands-holding-puzzle-business-problem-solving-concept.jpg" 
                alt="City skyline — our partner ecosystem" 
                className="w-full h-96 lg:h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2">
              <header className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnerships & Networks</h2>
                <p className="text-gray-600 text-lg">
                  With our zest for perfection, we have garnered trust and established long term partnerships with reputed real estate developers.
                </p>
              </header>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="partner-card bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
                    <img 
                      src={`/images/partner${num}.png`} 
                      alt={`Partner ${num}`}
                      className="max-w-full max-h-12 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className="mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blogs</h2>
            <p className="text-gray-600">Guides, insights, and stories from the HomeDeal team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '5 Key Factors to Consider Before Buying Your First Home',
                image: '/images/service-img-1.jpg',
                tag: 'Guides',
                href: '/5-Key-Factors-to-Consider-Before-Buying-Your-First-Home',
                excerpt: 'Access, zoning, and spec fit that drive occupancy and yields.'
              },
              {
                title: 'Top Real Estate Investment Strategies for 2025',
                image: '/images/service-img-3.jpg',
                tag: 'Guides',
                href: '/Top-Real-Estate-Investment-Strategies-for-2025',
                excerpt: 'Eligibility, budgeting, and site-visit essentials.'
              },
              {
                title: 'How to Spot a Good Deal in Real Estate',
                image: '/images/single-img-2.jpg',
                tag: 'Insights',
                href: '/How-to-Spot-a-Good-Deal-in-Real-Estate',
                excerpt: 'Recovery patterns and rollout implications.'
              },
              {
                title: 'Why Staging Your Home Can Help You Sell Faster',
                image: '/images/single-img-4.jpg',
                tag: 'Announcements',
                href: '/Why-Staging-Your-Home-Can-Help-You-Sell-Faster',
                excerpt: 'Lead routing, SLAs, and dashboards that close deals.'
              }
            ].map((blog, index) => (
              <Link key={blog.title} href={blog.href} className="blog-card group">
                <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded ${
                      blog.tag === 'Guides' ? 'bg-blue-500 text-white' :
                      blog.tag === 'Insights' ? 'bg-green-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {blog.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blogs" className="btn-blog-more border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg inline-block transition-colors">
              View more
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Left: Content */}
            <div className="w-full lg:w-1/2">
              <div className="text-blue-600 font-semibold mb-2">Locations</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Office</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Visit us at our Bhubaneswar headquarters for project discussions and partnership opportunities.
                <br /><br />
                <strong>Address:</strong><br />
                Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur,<br />
                Kalinga Vihar, Patrapada, Bhuabneswar,<br />
                 Dist- Khurda, Odisha, India-751019.<br /><br />
                <strong>Call:</strong> <a href="tel:+919668848999" className="text-blue-600 hover:underline">+91 9668848999</a>
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
                ></iframe>
              </div>
            </div>
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
        <a href="#contact" className="flex-1 py-3 text-center text-blue-600 hover:bg-blue-50 transition-colors flex flex-col items-center gap-1">
          <i className="bi bi-calendar2-check"></i>
          <span className="text-xs">Book Consultation</span>
        </a>
        <a href="https://wa.me/9198XXXXXXXX?text=Hi%20I%27m%20interested%20in%20HomeDeal" target="_blank" rel="noopener" className="flex-1 py-3 text-center text-green-600 hover:bg-green-50 transition-colors flex flex-col items-center gap-1">
          <i className="bi bi-whatsapp"></i>
          <span className="text-xs">WhatsApp</span>
        </a>
      </div>
    </>
  );
}