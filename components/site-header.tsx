// components/Header.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="topbar fixed top-0 left-0 right-0 z-50 py-3 px-4 flex justify-between items-center main-container">
        {/* Logo */}
        <Link href="/" className="brand bg-white p-2 rounded-lg shadow-md">
          <img src="/logo2.png" alt="HomeDeal Logo" className="h-8" />
        </Link>

        {/* Right: CTA + Menu */}
        <div className="top-actions flex items-center gap-4">
          <Link href="#contact" className="btn-visit bg-yellow-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Enquire Now
          </Link>

          {/* Sidebar trigger */}
          <button 
            className="menu-btn flex flex-col gap-1 w-6 h-6 relative"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="menu-icon w-full h-0.5 bg-gray-800 rounded"></span>
            <span className="menu-icon w-full h-0.5 bg-gray-800 rounded"></span>
            <span className="menu-icon w-full h-0.5 bg-gray-800 rounded"></span>
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={closeAllMenus}
          />
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-gray-900 text-white p-6 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h5 className="text-xl font-semibold">Menu</h5>
              <button 
                className="text-white text-2xl hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
                            <Link 
                href="/about" 
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                About Us
              </Link>

              {/* Projects */}
              <div className="group">
                <button 
                  className="flex justify-between items-center w-full text-lg hover:text-blue-400 transition-colors"
                  onClick={() => toggleSubmenu('projects')}
                  aria-expanded={openSubmenu === 'projects'}
                >
                  <span>Projects</span>
                  <i className={`bi bi-chevron-right transition-transform duration-300 ${
                    openSubmenu === 'projects' ? 'rotate-90' : ''
                  }`}></i>
                </button>
                <div className={`ml-4 mt-2 flex flex-col gap-2 transition-all duration-300 overflow-hidden ${
                  openSubmenu === 'projects' 
                    ? 'opacity-100 max-h-96' 
                    : 'opacity-0 max-h-0'
                }`}>
                  <Link 
                    href="/projects/previous" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Previous Projects
                  </Link>
                  <Link 
                    href="/projects/ongoing" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Ongoing Projects
                  </Link>
                </div>
              </div>


                            {/* Residential Services */}
              <div className="group">
                <button 
                  className="flex justify-between items-center w-full text-lg hover:text-blue-400 transition-colors"
                  onClick={() => toggleSubmenu('residential')}
                  aria-expanded={openSubmenu === 'residential'}
                >
                  <span>Residential Services</span>
                  <i className={`bi bi-chevron-right transition-transform duration-300 ${
                    openSubmenu === 'residential' ? 'rotate-90' : ''
                  }`}></i>
                </button>
                <div className={`ml-4 mt-2 flex flex-col gap-2 transition-all duration-300 overflow-hidden ${
                  openSubmenu === 'residential' 
                    ? 'opacity-100 max-h-96' 
                    : 'opacity-0 max-h-0'
                }`}>
                  <Link 
                    href="/sales-marketing-solution" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Sales & Marketing Solutions
                  </Link>
                  <Link 
                    href="/technology-solution" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Technology Solutions
                  </Link>
                  <Link 
                    href="/digital-services" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Digital Services
                  </Link>
                  <Link 
                    href="/creative-agency" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Creative Agency
                  </Link>
                  <Link 
                    href="/post-sales-services" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Post Sales Services
                  </Link>
                  <Link 
                    href="#" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    APN Portal
                  </Link>
                </div>
              </div>

              {/* Commercial Services */}
              <div className="group">
                <button 
                  className="flex justify-between items-center w-full text-lg hover:text-blue-400 transition-colors"
                  onClick={() => toggleSubmenu('commercial')}
                  aria-expanded={openSubmenu === 'commercial'}
                >
                  <span>Commercial Services</span>
                  <i className={`bi bi-chevron-right transition-transform duration-300 ${
                    openSubmenu === 'commercial' ? 'rotate-90' : ''
                  }`}></i>
                </button>
                <div className={`ml-4 mt-2 flex flex-col gap-2 transition-all duration-300 overflow-hidden ${
                  openSubmenu === 'commercial' 
                    ? 'opacity-100 max-h-96' 
                    : 'opacity-0 max-h-0'
                }`}>
                  <Link 
                    href="/commercial-retail" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Commercial & Retail
                  </Link>
                  <Link 
                    href="/warehousing-industrial" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Warehousing & Industrial
                  </Link>
                  <Link 
                    href="/leisure-hospitality" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Leisure & Hospitality
                  </Link>
                  <Link 
                    href="/emerging-businesses" 
                    className="text-sm hover:text-blue-400 transition-colors"
                    onClick={closeAllMenus}
                  >
                    Emerging Businesses
                  </Link>
                </div>
              </div>
              <Link 
                href="/blogs" 
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Blogs
              </Link>
              <Link 
                href="/career" 
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Career
              </Link>
              <Link 
                href="/contact" 
                className="text-lg hover:text-blue-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact Us
              </Link>
            </nav>

            <hr className="my-8 opacity-50" />

            <div className="mt-auto">
              <Link 
                href="#contact" 
                className="btn-brand bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg text-center block transition-colors"
                onClick={closeAllMenus}
              >
                Enquire Now
              </Link>
              <p className="text-sm text-center mt-3 mb-0 opacity-75">
                Call us: +91 9668848999
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}