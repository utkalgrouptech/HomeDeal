
import ServiceCard from '../../components/ServiceCard';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Property Buying",
      description: "Find your dream home with our extensive property listings and expert guidance throughout the buying process.",
      icon: "🏠",
      features: ["Personalized Property Search", "Property Tours & Viewings", "Market Analysis & Pricing", "Negotiation Support", "Legal & Documentation Assistance"],
      details: "Our buying service is designed to make your property search efficient and successful. We understand that buying a property is one of life's biggest decisions, and we're here to ensure you make the right choice with confidence."
    },
    {
      id: 2,
      title: "Property Selling",
      description: "Maximize your property value with our marketing expertise, wide network, and proven sales strategies.",
      icon: "💰",
      features: ["Comprehensive Market Analysis", "Professional Photography & Staging", "Multi-Channel Marketing", "Qualified Buyer Screening", "Expert Negotiation"],
      details: "We employ strategic marketing techniques and leverage our extensive network to attract qualified buyers and secure the best possible price for your property. Our transparent process keeps you informed every step of the way."
    },
    {
      id: 3,
      title: "Rental Properties",
      description: "Discover perfect rental properties for your needs with flexible terms and professional management.",
      icon: "🔑",
      features: ["Verified Rental Listings", "Tenant Screening Services", "Lease Agreement Preparation", "Property Management", "Maintenance Coordination"],
      details: "Whether you're looking to rent or list your property for rent, our rental services provide comprehensive solutions with professional management and reliable tenant placement."
    },
    {
      id: 4,
      title: "Property Valuation",
      description: "Get accurate property valuations based on comprehensive market analysis and current trends.",
      icon: "📊",
      features: ["Detailed Market Research", "Comparative Analysis", "Property Condition Assessment", "Future Value Projection", "Official Valuation Report"],
      details: "Our valuation services provide you with accurate, data-driven property assessments to inform your buying, selling, or investment decisions with confidence."
    },
    {
      id: 5,
      title: "Investment Consulting",
      description: "Make informed real estate investment decisions with our expert market insights and analysis.",
      icon: "📈",
      features: ["Market Trend Analysis", "Investment Opportunity Identification", "ROI Projections", "Portfolio Diversification Advice", "Risk Assessment"],
      details: "Our investment consulting service helps both new and experienced investors navigate the real estate market, identify profitable opportunities, and build sustainable investment portfolios."
    },
    {
      id: 6,
      title: "Legal Assistance",
      description: "Navigate property transactions with confidence using our legal expertise and documentation support.",
      icon: "⚖️",
      features: ["Contract Review & Preparation", "Title Verification", "Legal Compliance Check", "Documentation Management", "Closing Support"],
      details: "We provide comprehensive legal support to ensure all your property transactions are legally sound, properly documented, and completed without complications."
    },
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We begin with understanding your needs, preferences, and budget to create a personalized plan.",
      icon: "💬"
    },
    {
      step: 2,
      title: "Property Search",
      description: "Our experts curate a selection of properties that match your criteria and arrange viewings.",
      icon: "🔍"
    },
    {
      step: 3,
      title: "Evaluation",
      description: "We conduct thorough property evaluations and market analysis to ensure you make informed decisions.",
      icon: "📝"
    },
    {
      step: 4,
      title: "Transaction",
      description: "We handle negotiations, documentation, and legal processes to ensure a smooth transaction.",
      icon: "🤝"
    },
    {
      step: 5,
      title: "After-Sale Support",
      description: "Our relationship continues with post-transaction support and property management services.",
      icon: "🔧"
    },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive real estate solutions designed to meet your unique needs and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From buying your first home to managing investment properties, we provide end-to-end real estate services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure every client receives exceptional service and achieves their real estate goals.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div 
                key={step.step}
                className={`flex flex-col md:flex-row items-center mb-12 last:mb-0 animate-fadeIn`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4 md:mb-0 md:mr-8">
                  {step.icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contact us today to discuss how we can help you with your real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}