// pages/blogs.tsx or components/BlogsPage.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';

export default function BlogsPage() {
  const blogPosts = [
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
    },
    {
      title: 'Commercial Real Estate Trends in Eastern India',
      image: '/images/blog1.jpg',
      tag: 'Insights',
      href: '/commercial-real-estate-trends-eastern-india',
      excerpt: 'Emerging opportunities in commercial property markets across Eastern India.'
    },
    {
      title: 'Understanding Home Loan Eligibility',
      image: '/images/blog2.jpg',
      tag: 'Guides',
      href: '/understanding-home-loan-eligibility',
      excerpt: 'Complete guide to home loan requirements and approval process.'
    },
    {
      title: 'Sustainable Living in Modern Apartments',
      image: '/images/blog3.jpg',
      tag: 'Insights',
      href: '/sustainable-living-modern-apartments',
      excerpt: 'How green building features are transforming urban living spaces.'
    },
    {
      title: 'Property Registration Process Simplified',
      image: '/images/blog4.jpg',
      tag: 'Guides',
      href: '/property-registration-process-simplified',
      excerpt: 'Step-by-step guide to hassle-free property registration.'
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Guides':
        return 'bg-blue-500 text-white';
      case 'Insights':
        return 'bg-green-500 text-white';
      case 'Announcements':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <>
      <Head>
        <title>Blogs - HomeDeal</title>
        <meta name="description" content="Explore our latest blogs, guides, and insights on real estate from HomeDeal Properties." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Banner with image + breadcrumb */}
      <header className="breadcrumb-hero relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/img-9.jpg" 
          alt="HomeDeal banner" 
          className="bc-img absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 bc-content relative z-10 text-center text-white">
          <p className="eyebrow text-lg mb-2 opacity-90">Insights</p>
          <h1 className="bc-title text-4xl md:text-5xl font-bold mb-2">Blogs</h1>
        </div>
      </header>

      {/* BLOGS GRID */}
      <section className="blogs-grid py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
        <div className=" mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Guides, insights, and stories</h2>
            <p className="text-gray-600 text-lg">Fresh thinking from the HomeDeal team.</p>
          </div>

          {/* Blog Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium transition-colors">
              All Posts
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-medium transition-colors">
              Guides
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-medium transition-colors">
              Insights
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-medium transition-colors">
              Announcements
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((blog, index) => (
              <Link 
                key={blog.title} 
                href={blog.href} 
                className="blog-card group block bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <figure className="blog-figure relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className={`blog-tag absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${getTagColor(blog.tag)}`}>
                    {blog.tag}
                  </span>
                </figure>
                <div className="blog-body p-4">
                  <h3 className="blog-title text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="blog-excerpt text-gray-600 text-sm line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Load More Articles
            </button>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-600 mb-6">Get the latest real estate insights delivered to your inbox</p>
            <div className="max-w-md mx-auto flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
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