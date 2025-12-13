import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'JRA Law Firm - Expert legal services with integrity and dedication. Trusted attorneys committed to delivering exceptional results.',
};

export default function Home() {
  const recentPosts = getBlogPosts().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white section-padding relative overflow-hidden min-h-[500px] flex items-center">
        {/* Flickering Grid Background */}
        <div className="absolute inset-0 z-0">
          <FlickeringGrid
            className="absolute inset-0 w-full h-full"
            squareSize={4}
            gridGap={6}
            color="rgb(255, 255, 255)"
            maxOpacity={0.15}
            flickerChance={0.1}
          />
        </div>
        
        {/* Decorative diagonal lines */}
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-white/10 transform rotate-45 origin-bottom-left z-10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/10 transform -rotate-45 origin-bottom-right z-10"></div>
        
        <div className="container-custom relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Heading */}
            <div>
              <h1 className="text-white mb-0 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Custom <span className="lowercase">legal</span> Solutions
              </h1>
            </div>
            
            {/* Right side - Text and Button */}
            <div className="flex flex-col justify-center">
              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-md">
                Offering comprehensive legal services with a personal touch and unwavering commitment, 
                addressing your unique legal needs with empathy, expertise, and dedication.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-gray-900 px-8 py-4 font-semibold text-center hover:bg-gray-100 transition-colors duration-200 w-fit uppercase tracking-wide"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Sections */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image - Team Photo */}
        <div className="relative h-[500px] lg:h-[600px] overflow-hidden bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="text-center text-white p-8 z-10">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-semibold mb-2">Our Expert Team</h3>
              <p className="text-white/80">Diverse professionals dedicated to your success</p>
            </div>
          </div>
          {/* When you have the team image, uncomment and use: */}
          {/* 
          <Image 
            src="/images/team-photo.jpg" 
            alt="Our legal team"
            fill
            className="object-cover"
            priority
          /> 
          */}
        </div>
        
        {/* Right Image - Client Meeting */}
        <div className="relative h-[500px] lg:h-[600px] overflow-hidden bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
            <div className="text-center text-white p-8 z-10">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-2">Client Consultation</h3>
              <p className="text-white/80">Personalized legal guidance for your needs</p>
            </div>
          </div>
          {/* When you have the client meeting image, uncomment and use: */}
          {/* 
          <Image 
            src="/images/client-meeting.jpg" 
            alt="Client consultation"
            fill
            className="object-cover"
            priority
          /> 
          */}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Practice Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive legal services across various practice areas
              to meet all your legal needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Corporate Law',
                description: 'Expert guidance for businesses of all sizes, from startups to established corporations.',
                icon: '🏢',
              },
              {
                title: 'Real Estate Law',
                description: 'Comprehensive real estate services including transactions, disputes, and property management.',
                icon: '🏠',
              },
              {
                title: 'Family Law',
                description: 'Sensitive and professional handling of family legal matters including divorce and custody.',
                icon: '👨‍👩‍👧‍👦',
              },
              {
                title: 'Criminal Defense',
                description: 'Experienced defense representation to protect your rights and interests.',
                icon: '⚖️',
              },
              {
                title: 'Employment Law',
                description: 'Protecting employee and employer rights in the workplace.',
                icon: '💼',
              },
              {
                title: 'Estate Planning',
                description: 'Comprehensive estate planning to secure your family\'s future.',
                icon: '📜',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-3 text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose JRA Law Firm</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence and client satisfaction sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experienced Team',
                description: 'Our attorneys bring decades of combined experience to every case.',
              },
              {
                title: 'Client-Focused',
                description: 'Your success is our priority. We work closely with you to achieve your goals.',
              },
              {
                title: 'Proven Results',
                description: 'Track record of successful outcomes for clients across various practice areas.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="heading-3 text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Latest Legal Insights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed with our latest articles and legal updates.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/blog" className="btn-primary">
                View All Blog Posts
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and let us help you with your legal needs.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

