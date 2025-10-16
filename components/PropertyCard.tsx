'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PropertyCard({ property, delay = 0 }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="property-card bg-white rounded-xl shadow-lg overflow-hidden animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse-slow flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 22V12h6v10" />
            </svg>
          </div>
        )}
        <img
          src={property.image}
          alt={property.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.type}
        </div>
        <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md">
          Featured
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{property.location}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-blue-600">{property.price}</div>
          <div className="text-sm text-gray-500">{property.area}</div>
        </div>
        
        <div className="flex justify-between text-gray-600 border-t border-gray-200 pt-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{property.baths} Baths</span>
          </div>
        </div>
        
        <Link 
          href={`/properties/${property.id}`}
          className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-lg font-medium mt-4 hover:bg-gray-200 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}