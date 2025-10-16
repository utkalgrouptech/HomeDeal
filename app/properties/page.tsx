'use client';

import { useState } from 'react';
import PropertyCard from '../../components/PropertyCard';

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Palm Jumeirah",
      location: "Dubai, UAE",
      price: "$2,500,000",
      beds: 5,
      baths: 4,
      area: "4500 sq ft",
      image: "/images/property1.jpg",
      type: "Villa"
    },
    {
      id: 2,
      title: "Modern Apartment Downtown",
      location: "New York, USA",
      price: "$1,200,000",
      beds: 3,
      baths: 2,
      area: "1800 sq ft",
      image: "/images/property2.jpg",
      type: "Apartment"
    },
    {
      id: 3,
      title: "Seaside Family Home",
      location: "Miami, USA",
      price: "$1,800,000",
      beds: 4,
      baths: 3,
      area: "3200 sq ft",
      image: "/images/property3.jpg",
      type: "House"
    },
    {
      id: 4,
      title: "Penthouse with City Views",
      location: "London, UK",
      price: "$3,200,000",
      beds: 4,
      baths: 3,
      area: "2800 sq ft",
      image: "/images/property4.jpg",
      type: "Penthouse"
    },
    {
      id: 5,
      title: "Suburban Family Residence",
      location: "Austin, USA",
      price: "$950,000",
      beds: 4,
      baths: 2,
      area: "2400 sq ft",
      image: "/images/property5.jpg",
      type: "House"
    },
    {
      id: 6,
      title: "Lakeside Retreat",
      location: "Seattle, USA",
      price: "$1,500,000",
      beds: 3,
      baths: 2,
      area: "2000 sq ft",
      image: "/images/property6.jpg",
      type: "Cabin"
    },
    {
      id: 7,
      title: "Urban Loft Apartment",
      location: "Chicago, USA",
      price: "$750,000",
      beds: 2,
      baths: 2,
      area: "1200 sq ft",
      image: "/images/property7.jpg",
      type: "Apartment"
    },
    {
      id: 8,
      title: "Mountain View Estate",
      location: "Denver, USA",
      price: "$2,100,000",
      beds: 5,
      baths: 4,
      area: "3800 sq ft",
      image: "/images/property8.jpg",
      type: "Villa"
    },
  ];

  const filters = [
    { id: 'all', label: 'All Properties' },
    { id: 'villa', label: 'Villas' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'house', label: 'Houses' },
    { id: 'penthouse', label: 'Penthouses' },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesFilter = activeFilter === 'all' || property.type.toLowerCase() === activeFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Property</h1>
            <p className="text-xl text-blue-100">
              Browse our extensive collection of premium properties across various locations and budgets.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by location or property name..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="w-full lg:w-auto">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by: Newest</option>
                <option>Sort by: Price Low to High</option>
                <option>Sort by: Price High to Low</option>
                <option>Sort by: Area</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredProperties.length} Properties Found
            </h2>
            <div className="text-gray-600">
              Showing {filteredProperties.length} of {properties.length} properties
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                  delay={index * 0.1}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fadeIn">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters</p>
              <button 
                className="btn-primary text-white px-6 py-2 rounded-lg font-medium"
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredProperties.length > 0 && (
            <div className="flex justify-center mt-12 animate-fadeIn">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our expert agents help you find the perfect property that matches your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-white px-8 py-3 rounded-lg font-semibold text-lg">
              Contact an Agent
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}