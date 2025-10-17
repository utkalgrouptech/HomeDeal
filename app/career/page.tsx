// app/career/page.tsx
import Link from 'next/link';

const jobOpenings = [
    {
        id: '1',
        title: 'Real Estate Sales Executive',
        department: 'Sales & Marketing',
        location: 'Bhubaneswar',
        type: 'Full-time',
        experience: '2-5 years',
        slug: 'real-estate-sales-executive',
        description: 'We are looking for dynamic Sales Executives to join our growing team. The ideal candidate should have excellent communication skills and a passion for real estate.',
        responsibilities: [
            'Generate leads and convert them into sales',
            'Build and maintain client relationships',
            'Conduct site visits and property presentations',
            'Achieve sales targets and objectives'
        ],
        requirements: [
            'Graduate in any discipline',
            'Excellent communication and negotiation skills',
            'Knowledge of local real estate market',
            'Proven track record in sales'
        ]
    },
    {
        id: '2',
        title: 'Property Consultant',
        department: 'Consulting',
        location: 'Bhubaneswar',
        type: 'Full-time',
        experience: '1-3 years',
        slug: 'property-consultant',
        description: 'Join our consulting team to help clients make informed property decisions. Provide expert advice on residential and commercial properties.',
        responsibilities: [
            'Provide property consultation to clients',
            'Market research and property valuation',
            'Client relationship management',
            'Stay updated with real estate trends'
        ],
        requirements: [
            'Degree in Real Estate, Business, or related field',
            'Good understanding of property markets',
            'Excellent analytical skills',
            'Customer service orientation'
        ]
    },
    {
        id: '3',
        title: 'Digital Marketing Specialist',
        department: 'Marketing',
        location: 'Bhubaneswar',
        type: 'Full-time',
        experience: '2-4 years',
        slug: 'digital-marketing-specialist',
        description: 'We need a creative Digital Marketing Specialist to drive our online presence and lead generation efforts.',
        responsibilities: [
            'Manage social media channels',
            'Create and execute digital campaigns',
            'SEO and content marketing',
            'Analyze campaign performance'
        ],
        requirements: [
            'Degree in Marketing or related field',
            'Experience with SEO, SEM, and social media',
            'Knowledge of analytics tools',
            'Creative thinking and problem-solving skills'
        ]
    },
    {
        id: '4',
        title: 'Site Engineer',
        department: 'Construction',
        location: 'Bhubaneswar',
        type: 'Full-time',
        experience: '3-6 years',
        slug: 'site-engineer',
        description: 'Looking for a qualified Site Engineer to oversee construction projects and ensure quality standards.',
        responsibilities: [
            'Supervise construction activities',
            'Ensure quality control and safety standards',
            'Coordinate with contractors and vendors',
            'Monitor project progress'
        ],
        requirements: [
            'B.Tech in Civil Engineering',
            'Experience in real estate construction',
            'Knowledge of construction software',
            'Strong leadership skills'
        ]
    },
    {
        id: '5',
        title: 'Customer Relationship Manager',
        department: 'Customer Service',
        location: 'Bhubaneswar',
        type: 'Full-time',
        experience: '3-5 years',
        slug: 'customer-relationship-manager',
        description: 'Manage client relationships and ensure customer satisfaction throughout their journey with HomeDeal.',
        responsibilities: [
            'Handle customer inquiries and complaints',
            'Maintain client databases',
            'Coordinate post-sales services',
            'Gather customer feedback'
        ],
        requirements: [
            'Degree in Business Administration or related',
            'Excellent communication skills',
            'Experience in customer service',
            'Problem-solving abilities'
        ]
    },
    {
        id: '6',
        title: 'Business Development Executive',
        department: 'Business Development',
        location: 'Bhubaneswar',
        type: 'Full-time',
        experience: '2-4 years',
        slug: 'business-development-executive',
        description: 'Drive business growth by identifying new opportunities and building strategic partnerships.',
        responsibilities: [
            'Identify new business opportunities',
            'Build partner relationships',
            'Market analysis and strategy',
            'Achieve business targets'
        ],
        requirements: [
            'MBA in Marketing or related field',
            'Strong networking skills',
            'Knowledge of real estate industry',
            'Excellent presentation skills'
        ]
    }
];

const benefits = [
    {
        icon: '💰',
        title: 'Competitive Salary',
        description: 'Attractive compensation package with performance incentives'
    },
    {
        icon: '🏥',
        title: 'Health Insurance',
        description: 'Comprehensive health coverage for you and your family'
    },
    {
        icon: '📚',
        title: 'Training & Development',
        description: 'Continuous learning opportunities and skill development'
    },
    {
        icon: '🎯',
        title: 'Career Growth',
        description: 'Clear career progression paths and growth opportunities'
    },
    {
        icon: '🏖️',
        title: 'Paid Time Off',
        description: 'Generous leave policy and holiday benefits'
    },
    {
        icon: '🚗',
        title: 'Travel Allowance',
        description: 'Convenient travel and fuel allowances'
    }
];

export default function CareerPage() {
    return (
        <>
          

            {/* Hero Banner */}
            <header className="breadcrumb-hero relative h-96 flex items-center justify-center overflow-hidden">
                <img 
                    src="/images/img-9.jpg" 
                    alt="HomeDeal Careers"
                    className="bc-img absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                
                <div className="container mx-auto px-4 bc-content relative z-10 text-center text-white">
                    <p className="eyebrow text-lg mb-2 opacity-90 tracking-widest uppercase font-semibold">Join Our Team</p>
                    <h1 className="bc-title text-4xl md:text-5xl font-bold mb-2">Career Opportunities</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb flex justify-center gap-2 mb-0 text-sm md:text-base">
                            <li className="breadcrumb-item">
                                <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
                            </li>
                            <li className="breadcrumb-item text-blue-300" aria-current="page">Career</li>
                        </ol>
                    </nav>
                </div>
            </header>

            <main className="py-12 md:py-20 main-container" style={{ backgroundColor: '#FFFDF5' }}>
                <div className="mx-auto px-4">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Career With HomeDeal</h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Join our dynamic team and be part of Eastern India's leading real estate company. 
                            We offer exciting opportunities for growth, learning, and professional development.
                        </p>
                    </div>

                    {/* Why Work With Us Section */}
                    <section className="mb-16">
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Work With HomeDeal?</h3>
                            <p className="text-gray-600">We believe in nurturing talent and providing a supportive environment for professional growth.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <div 
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="text-3xl mb-4">{benefit.icon}</div>
                                    <h4 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h4>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Current Openings */}
                    <section className='main-container' style={{ backgroundColor: '#FFFDF5' }}>
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Current Openings</h3>
                            <p className="text-gray-600">Explore our current job opportunities and find your perfect role.</p>
                        </div>

                        {/* Department Filter */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium transition-colors">
                                All Departments
                            </button>
                            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
                                Sales & Marketing
                            </button>
                            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
                                Consulting
                            </button>
                            <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-full font-medium transition-colors">
                                Construction
                            </button>
                        </div>

                        {/* Jobs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobOpenings.map((job) => (
                                <Link 
                                    key={job.id} 
                                    href={`/career/${job.slug}`}
                                    className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
                                >
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                                {job.title}
                                            </h4>
                                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                                                {job.type}
                                            </span>
                                        </div>
                                        
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center text-sm text-gray-600">
                                                <span className="font-medium">Department:</span>
                                                <span className="ml-2">{job.department}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <span className="font-medium">Location:</span>
                                                <span className="ml-2">{job.location}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <span className="font-medium">Experience:</span>
                                                <span className="ml-2">{job.experience}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {job.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-blue-600 font-medium text-sm group-hover:underline">
                                                View Details
                                            </span>
                                            <svg 
                                                className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="mt-16 rounded-2xl p-8 main-container" style={{ backgroundColor: '#FFFDF5' }}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
                                <div className="text-gray-600 font-medium">Team Members</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">6+</div>
                                <div className="text-gray-600 font-medium">Departments</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">25+</div>
                                <div className="text-gray-600 font-medium">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">5+</div>
                                <div className="text-gray-600 font-medium">Years Experience</div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="text-center mt-12">
                        <div className="bg-blue-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Don't See a Perfect Role?</h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                            </p>
                            <Link 
                                href="/contact" 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
                            >
                                Send Your Resume
                            </Link>
                        </div>
                    </section>
                </div>
            </main>

            {/* Sticky CTAs */}
            <div className="sticky-ctas hidden md:flex flex-col fixed right-6 bottom-6 gap-3 z-40">
                <a href="#openings" className="cta-btn bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
                    <span>💼</span>
                    <span className="hidden">View Jobs</span>
                </a>
                <a href="/contact" className="cta-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-colors">
                    <span>📧</span>
                    <span className="hidden">Contact HR</span>
                </a>
            </div>

            {/* Mobile bottom CTA bar */}
            <div className="mobile-cta-bar md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex z-40">
                <a href="#openings" className="flex-1 py-3 text-center text-blue-600 hover:bg-blue-50 transition-colors flex flex-col items-center gap-1">
                    <span>💼</span>
                    <span className="text-xs">View Jobs</span>
                </a>
                <a href="/contact" className="flex-1 py-3 text-center text-green-600 hover:bg-green-50 transition-colors flex flex-col items-center gap-1">
                    <span>📧</span>
                    <span className="text-xs">Contact HR</span>
                </a>
            </div>
        </>
    );
}

export const metadata = {
    title: 'Career Opportunities - HomeDeal',
    description: 'Join HomeDeal Properties and build your career in real estate. Explore current job openings and growth opportunities.',
};