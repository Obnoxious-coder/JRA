import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive legal services across various practice areas. Corporate law, real estate, family law, criminal defense, and more.',
};

const services = [
  {
    title: 'Corporate Law',
    description: 'We provide comprehensive legal services for businesses of all sizes. From entity formation to complex mergers and acquisitions, our corporate law team helps you navigate the legal landscape of business.',
    features: [
      'Business formation and structuring',
      'Contract drafting and negotiation',
      'Mergers and acquisitions',
      'Corporate governance',
      'Compliance and regulatory matters',
    ],
  },
  {
    title: 'Real Estate Law',
    description: 'Our real estate practice covers all aspects of property law, from residential transactions to commercial real estate development and property disputes.',
    features: [
      'Property transactions',
      'Real estate contracts',
      'Title examination',
      'Property disputes',
      'Landlord-tenant matters',
    ],
  },
  {
    title: 'Family Law',
    description: 'We handle sensitive family legal matters with compassion and professionalism. Our family law attorneys help you navigate divorce, custody, and other family-related legal issues.',
    features: [
      'Divorce and separation',
      'Child custody and support',
      'Alimony and spousal support',
      'Prenuptial agreements',
      'Adoption and guardianship',
    ],
  },
  {
    title: 'Criminal Defense',
    description: 'If you\'re facing criminal charges, our experienced defense attorneys will protect your rights and work tirelessly to achieve the best possible outcome for your case.',
    features: [
      'DUI/DWI defense',
      'Drug crimes',
      'White-collar crimes',
      'Assault and violent crimes',
      'Traffic violations',
    ],
  },
  {
    title: 'Employment Law',
    description: 'We represent both employees and employers in employment-related matters, ensuring compliance with labor laws and protecting workplace rights.',
    features: [
      'Employment contracts',
      'Discrimination claims',
      'Wrongful termination',
      'Wage and hour disputes',
      'Workplace harassment',
    ],
  },
  {
    title: 'Estate Planning',
    description: 'Secure your family\'s future with comprehensive estate planning. We help you create wills, trusts, and other estate planning documents tailored to your needs.',
    features: [
      'Wills and trusts',
      'Estate administration',
      'Probate proceedings',
      'Power of attorney',
      'Estate tax planning',
    ],
  },
];

export default function Services() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-6">Our Legal Services</h1>
          <p className="text-xl text-gray-600">
            We offer comprehensive legal services across multiple practice areas.
            Our experienced attorneys are here to help you navigate complex legal
            matters with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <section
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <h2 className="heading-2 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-primary-700 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full lg:w-auto">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-8 h-64 flex items-center justify-center">
                  <span className="text-6xl opacity-50">⚖️</span>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 bg-primary-700 text-white rounded-lg p-12 text-center">
          <h2 className="heading-2 text-white mb-4">Need Legal Assistance?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your legal needs and learn how we can help.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}

