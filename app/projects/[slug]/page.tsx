// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import ProjectDetailClient from './ProjectDetailClient';

// Sample project data (move this to a separate file or database)
const projectsData = [
    {
        id: '1',
        name: 'EVOS ALCHEMY',
        slug: 'evos-alchemy',
        description: 'Evos Alchemy, Nestled in Patia\'s posh neighbourhood and towering above the city at 42 storeys tall, Evos Alchemy is a gated community for the city\'s elite. The landmark exudes opulence with its upscale residences and lush greenery, thereby creating a harmonious enclave for those who appreciate the finer aspects of life. Step out of your lavish home and partake in immersive experiences that deliver a lifestyle par excellence.',
        location: 'Bhubaneswar',
        status: 'ongoing',
        features: [
            '6.9 acre estate with 70% open spaces',
            'Meticulously manicured gardens',
            'Scenic pathways amidst open spaces',
            'Verdant parks and water bodies'
        ],
        amenities: [
            'Social Pavillion',
            'Boulevard Bridge',
            'Well Being Garden',
            'Lifestyle Pool',
            'Floating Cabanas',
            'Therapy Pool',
            'Covered Parking',
            'High-speed Wi-Fi Zones'
        ],
        gallery: [
            '/images/projects/EVOS-ALCHEMY.jpg',
            '/images/projects/evos-alchemy-2.jpg',
            '/images/projects/evos-alchemy-3.jpg'
        ],
        facts: [
            { icon: '📍', text: '6.9 acre estate with 70% open spaces' },
            { icon: '🌿', text: 'Meticulously manicured gardens' },
            { icon: '🛤️', text: 'Scenic pathways amidst open spaces' },
            { icon: '🏞️', text: 'Verdant parks and water bodies' }
        ]
    },
    {
        id: '2',
        name: 'DIAMOND CITY',
        slug: 'diamond-city',
        description: 'Diamond City offers luxurious living with modern amenities and premium facilities. Located in the heart of Bhubaneswar, this project redefines urban living with its sophisticated design and world-class infrastructure. Experience the perfect blend of comfort, convenience, and contemporary architecture.',
        location: 'Bhubaneswar',
        status: 'ongoing',
        features: [
            'Premium residential towers',
            'Central park and recreation area',
            'Swimming pool and clubhouse',
            '24/7 security surveillance',
            'Modern architectural design',
            'Excellent connectivity to city centers'
        ],
        amenities: [
            'Swimming Pool',
            'Club House',
            'Gymnasium',
            'Children\'s Play Area',
            'Landscaped Gardens',
            'Power Backup',
            'Car Parking',
            'Shopping Complex',
            'Jogging Track',
            'Community Hall'
        ],
        gallery: [
            '/images/projects/Diamond-City.jpg',
            '/images/projects/diamond-city-2.jpg',
            '/images/projects/diamond-city-3.jpg'
        ],
        facts: [
            { icon: '🏢', text: 'Premium residential towers' },
            { icon: '🌳', text: 'Central park and recreation area' },
            { icon: '🏊', text: 'Swimming pool and clubhouse' },
            { icon: '🔒', text: '24/7 security surveillance' }
        ]
    },
    {
        id: '3',
        name: 'GRAND AWAS',
        slug: 'grand-awas',
        description: 'Grand Awas offers affordable luxury with modern amenities and comfortable living spaces. Perfect for families looking for a peaceful yet connected lifestyle. This project combines modern architecture with functional design to create homes that cater to your every need.',
        location: 'Bhubaneswar',
        status: 'completed',
        features: [
            'Spacious 2 & 3 BHK apartments',
            'Green surroundings',
            'Modern infrastructure',
            'Excellent connectivity',
            'Quality construction',
            'Family-friendly environment'
        ],
        amenities: [
            'Swimming Pool',
            'Gymnasium',
            'Community Hall',
            'Children\'s Play Area',
            'Landscaped Gardens',
            '24/7 Water Supply',
            'Power Backup',
            'Security',
            'Parking Facility',
            'Rain Water Harvesting'
        ],
        gallery: [
            '/images/projects/Grand-Awas.jpg',
            '/images/projects/grand-awas-2.jpg',
            '/images/projects/grand-awas-3.jpg'
        ],
        facts: [
            { icon: '🏠', text: 'Spacious 2 & 3 BHK apartments' },
            { icon: '🌳', text: 'Green surroundings' },
            { icon: '🏗️', text: 'Modern infrastructure' },
            { icon: '🚗', text: 'Excellent connectivity' }
        ]
    },
    {
        id: '4',
        name: 'KALINGA VILLA',
        slug: 'kalinga-villa',
        description: 'Kalinga Villa brings you the charm of traditional Odisha architecture combined with modern comforts. This residential project offers spacious villas surrounded by lush greenery, providing a perfect retreat from the hustle and bustle of city life while maintaining excellent connectivity.',
        location: 'Bhubaneswar',
        status: 'ongoing',
        features: [
            'Spacious independent villas',
            'Traditional Odisha architectural design',
            'Lush green surroundings',
            'Private gardens',
            'Modern amenities',
            'Peaceful neighborhood'
        ],
        amenities: [
            'Swimming Pool',
            'Club House',
            'Gymnasium',
            'Children\'s Play Area',
            'Landscaped Gardens',
            'Jogging Track',
            'Community Center',
            '24/7 Security',
            'Power Backup',
            'Water Treatment Plant'
        ],
        gallery: [
            '/images/projects/kalinga-villa.jpg',
            '/images/projects/kalinga-villa-2.jpg',
            '/images/projects/kalinga-villa-3.jpg'
        ],
        facts: [
            { icon: '🏡', text: 'Spacious independent villas' },
            { icon: '🏛️', text: 'Traditional Odisha architecture' },
            { icon: '🌲', text: 'Lush green surroundings' },
            { icon: '🔐', text: 'Gated community with security' }
        ]
    },
    {
        id: '5',
        name: 'ONE WORLD',
        slug: 'one-world',
        description: 'One World is a landmark mixed-use development that combines residential, commercial, and recreational spaces in one integrated community. This ambitious project aims to create a self-sufficient ecosystem where residents can live, work, and play without compromising on quality or convenience.',
        location: 'Bhubaneswar',
        status: 'ongoing',
        features: [
            'Mixed-use development',
            'High-rise residential towers',
            'Commercial complex',
            'Recreational facilities',
            'Smart city features',
            'Sustainable design'
        ],
        amenities: [
            'Shopping Mall',
            'Office Spaces',
            'Restaurants & Cafes',
            'Swimming Pool',
            'Fitness Center',
            'Sky Garden',
            'Amphitheater',
            'Children\'s Play Area',
            'Multipurpose Hall',
            'Underground Parking'
        ],
        gallery: [
            '/images/projects/one-world.jpg',
            '/images/projects/one-world-2.jpg',
            '/images/projects/one-world-3.jpg'
        ],
        facts: [
            { icon: '🌍', text: 'Mixed-use development' },
            { icon: '🏙️', text: 'High-rise residential towers' },
            { icon: '🛍️', text: 'Integrated commercial complex' },
            { icon: '♻️', text: 'Sustainable and eco-friendly' }
        ]
    },
    {
        id: '6',
        name: 'NAWAH 9 BOULEVARD',
        slug: 'nawah-9-boulevard',
        description: 'Nawah 9 Boulevard represents the pinnacle of luxury living in Bhubaneswar. With its contemporary design, premium finishes, and world-class amenities, this project caters to those who seek nothing but the best. Experience urban sophistication combined with serene living in this exclusive development.',
        location: 'Bhubaneswar',
        status: 'ongoing',
        features: [
            'Luxury apartments with premium finishes',
            'Panoramic city views',
            'Smart home features',
            'Energy-efficient design',
            'Premium location',
            'Exclusive community'
        ],
        amenities: [
            'Infinity Pool',
            'Rooftop Lounge',
            'State-of-the-art Gym',
            'Spa & Wellness Center',
            'Private Theater',
            'Business Center',
            'Concierge Services',
            'Landscaped Terraces',
            'Indoor Games Room',
            'Visitor Parking'
        ],
        gallery: [
            '/images/projects/NAWAH-BOULEVARD.jpg',
            '/images/projects/nawah-boulevard-2.jpg',
            '/images/projects/nawah-boulevard-3.jpg'
        ],
        facts: [
            { icon: '💎', text: 'Luxury apartments with premium finishes' },
            { icon: '🏙️', text: 'Panoramic city views' },
            { icon: '🏠', text: 'Smart home features' },
            { icon: '⚡', text: 'Energy-efficient design' }
        ]
    }
];

interface PageProps {
    params: {
        slug: string;
    };
}

export default function ProjectDetailPage({ params }: PageProps) {
    const { slug } = params;
    
    // Find the project by slug
    const project = projectsData.find(p => p.slug === slug);

    // If project not found, show 404
    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
    const { slug } = params;
    const project = projectsData.find(p => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found - HomeDeal',
        };
    }

    return {
        title: `${project.name} - HomeDeal`,
        description: project.description.substring(0, 160),
    };
}

// Generate static params for SSG
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}