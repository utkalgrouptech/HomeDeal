// app/projects/[slug]/ProjectDetailClient.tsx
"use client";
import { useState } from 'react';

interface Project {
    id: string;
    name: string;
    slug: string;
    description: string;
    location: string;
    status: string;
    features: string[];
    amenities: string[];
    gallery: string[];
    facts: { icon: string; text: string }[];
}

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        consent: true
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here (API call, etc.)
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form
        setFormData({ name: '', phone: '', email: '', consent: true });
    };

    return (
        <>

            {/* Hero Banner */}
            <header className="breadcrumb-hero relative h-96 flex items-center justify-center overflow-hidden">
                <img
                    src="/images/img-9.jpg"
                    alt={project.name}
                    className="bc-img absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto px-4 bc-content relative z-10 text-center text-white">
                    <p className="eyebrow text-lg mb-2 opacity-90 tracking-widest uppercase font-semibold">Our</p>
                    <h1 className="bc-title text-4xl md:text-5xl font-bold mb-2">{project.name}</h1>
                </div>
            </header>

            <main className="project-page bg-[#fffef6] text-[#152126] font-sans">
                {/* Description / Quick facts */}
                <section className="pd-summary py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                            {/* Project Details */}
                            <div className="w-full lg:w-7/12">
                                <p className="eyebrow tracking-widest uppercase font-semibold text-[#6a7a82] mb-2">About the project</p>
                                <h2 className="title text-3xl md:text-4xl font-semibold text-[#2a3587] mb-4">{project.name}</h2>
                                <p className="sub text-[#2b2f2c] text-lg leading-relaxed mb-6 text-justify">
                                    {project.description}
                                </p>

                                {/* Project Facts */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                    {project.facts.map((fact, index) => (
                                        <div key={index} className="fact flex items-center gap-3">
                                            <span className="text-[#2a3587] text-lg">{fact.icon}</span>
                                            <span className="text-[#2b2f2c]">{fact.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enquiry Form */}
                            <div className="w-full lg:w-5/12">
                                <div className="enquiry-wrap bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                                    <h3 className="title text-2xl font-semibold text-[#2a3587] mb-2">Enquire Now</h3>
                                    <p className="sub text-[#2b2f2c] mb-4">Share your details and we'll call you back shortly.</p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    pattern="[0-9+\-\s]{7,}"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="consent"
                                                checked={formData.consent}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label className="ml-2 text-sm text-gray-700">
                                                I agree to be contacted by HomeDeal.
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200"
                                        >
                                            Request Call Back
                                        </button>
                                    </form>

                                    {isSubmitted && (
                                        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                            Thanks! Our team will reach out shortly.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Amenities */}
                <section className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
                    <div className=" mx-auto px-4">
                        <p className="eyebrow tracking-widest uppercase font-semibold text-[#6a7a82] mb-2 text-center">Amenities</p>
                        <h2 className="title text-3xl md:text-4xl font-semibold text-[#2a3587] mb-8 text-center">Designed for everyday comfort</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {project.amenities.map((amenity, index) => (
                                <div
                                    key={index}
                                    className="amenity-card bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                                >
                                    <div className="amenity-icon w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                        <span className="text-lg">🏢</span>
                                    </div>
                                    <div className="amenity-name font-semibold text-[#152126]">{amenity}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Photo Gallery */}
                <section className="pd-gallery py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
                    <div className=" mx-auto px-4">
                        <p className="eyebrow tracking-widest uppercase font-semibold text-[#6a7a82] mb-2 text-center">Gallery</p>
                        <h2 className="title text-3xl md:text-4xl font-semibold text-[#2a3587] mb-8 text-center">See what life looks like here</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.gallery.map((image, index) => (
                                <div
                                    key={index}
                                    className="g-item relative block overflow-hidden rounded-xl bg-gray-100 group cursor-pointer"
                                >
                                    <img
                                        src={image}
                                        alt={`${project.name} - Image ${index + 1}`}
                                        className="w-full h-64 object-cover group-hover:scale-105 group-hover:saturate-110 transition-all duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Sticky CTAs */}
            <div className="sticky-ctas hidden md:flex flex-col fixed right-6 bottom-6 gap-3 z-40">
                <a href="#enquiry" className="cta-btn bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
                    <span>📞</span>
                    <span className="hidden">Enquire Now</span>
                </a>
                <a href="https://wa.me/919668848999?text=Hi%20I%27m%20interested%20in%20HomeDeal%20projects" target="_blank" rel="noopener" className="cta-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
                    <span>💬</span>
                    <span className="hidden">WhatsApp</span>
                </a>
            </div>
        </>
    );
}