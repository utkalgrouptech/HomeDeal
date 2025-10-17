// app/career/[slug]/page.tsx
import { notFound } from 'next/navigation';
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

interface PageProps {
    params: {
        slug: string;
    };
}

export default function JobDetailPage({ params }: PageProps) {
    const { slug } = params;
    
    // Find the job by slug
    const job = jobOpenings.find(j => j.slug === slug);

    // If job not found, show 404
    if (!job) {
        notFound();
    }

    return (
        <>

            {/* Hero Banner */}
            <header className="breadcrumb-hero relative h-96 flex items-center justify-center overflow-hidden">
                <img 
                    src="/images/img-9.jpg" 
                    alt={`${job.title} - HomeDeal Careers`}
                    className="bc-img absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                
                <div className="container mx-auto px-4 bc-content relative z-10 text-center text-white">
                    <p className="eyebrow text-lg mb-2 opacity-90 tracking-widest uppercase font-semibold">Career Opportunity</p>
                    <h1 className="bc-title text-4xl md:text-5xl font-bold mb-2">{job.title}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb flex justify-center gap-2 mb-0 text-sm md:text-base">
                            <li className="breadcrumb-item">
                                <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link href="/career" className="hover:text-blue-300 transition-colors">Career</Link>
                            </li>
                            <li className="breadcrumb-item text-blue-300" aria-current="page">{job.title}</li>
                        </ol>
                    </nav>
                </div>
            </header>

            <main className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Job Details */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Job Description</h2>
                                    <p className="text-gray-600 mb-6">{job.description}</p>
                                    
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Key Responsibilities</h3>
                                        <ul className="space-y-2">
                                            {job.responsibilities.map((responsibility, index) => (
                                                <li key={index} className="flex items-start text-gray-600">
                                                    <span className="text-blue-500 mr-2">•</span>
                                                    {responsibility}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Requirements</h3>
                                        <ul className="space-y-2">
                                            {job.requirements.map((requirement, index) => (
                                                <li key={index} className="flex items-start text-gray-600">
                                                    <span className="text-blue-500 mr-2">•</span>
                                                    {requirement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Job Summary & Apply */}
                            <div className="lg:col-span-1">
                                <div className="bg-blue-50 rounded-2xl p-6 sticky top-6">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Job Summary</h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <span className="block text-sm text-gray-600 font-medium">Department</span>
                                            <span className="text-gray-800">{job.department}</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-600 font-medium">Location</span>
                                            <span className="text-gray-800">{job.location}</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-600 font-medium">Job Type</span>
                                            <span className="text-gray-800">{job.type}</span>
                                        </div>
                                        <div>
                                            <span className="block text-sm text-gray-600 font-medium">Experience</span>
                                            <span className="text-gray-800">{job.experience}</span>
                                        </div>
                                    </div>

                                    <Link 
                                        href="/contact"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 text-center block"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = params;
    const job = jobOpenings.find(j => j.slug === slug);

    if (!job) {
        return {
            title: 'Job Not Found - HomeDeal',
        };
    }

    return {
        title: `${job.title} - HomeDeal Careers`,
        description: job.description,
    };
}

export async function generateStaticParams() {
    return jobOpenings.map((job) => ({
        slug: job.slug,
    }));
}