import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about JRA Law Firm - our history, values, and commitment to providing exceptional legal services.',
};

export default function About() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-6">About JRA Law Firm</h1>
          <p className="text-xl text-gray-600">
            With a legacy of excellence and a commitment to justice, we have been
            serving clients with integrity and dedication for years.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                JRA Law Firm was founded with a simple mission: to provide
                exceptional legal services that make a real difference in our
                clients' lives. Over the years, we have built a reputation for
                excellence, integrity, and results.
              </p>
              <p>
                Our team of experienced attorneys brings together diverse
                expertise across multiple practice areas, allowing us to offer
                comprehensive legal solutions tailored to each client's unique
                needs.
              </p>
              <p>
                We believe that every client deserves personalized attention and
                dedicated representation. That's why we take the time to
                understand your goals, concerns, and circumstances, ensuring that
                our legal strategies align with your best interests.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16 bg-gray-50 py-12 rounded-lg">
          <div className="container-custom">
            <h2 className="heading-2 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'We conduct ourselves with the highest ethical standards in all our interactions.',
                },
                {
                  title: 'Excellence',
                  description: 'We strive for excellence in every case, no matter how big or small.',
                },
                {
                  title: 'Client Focus',
                  description: 'Your success is our priority. We are committed to achieving the best outcomes for you.',
                },
                {
                  title: 'Innovation',
                  description: 'We embrace modern legal strategies and technology to serve you better.',
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="heading-3 text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'John Smith',
                  role: 'Senior Partner',
                  bio: 'With over 20 years of experience in corporate law, John brings extensive expertise to complex business matters.',
                },
                {
                  name: 'Jane Doe',
                  role: 'Partner',
                  bio: 'Jane specializes in family law and has helped hundreds of families navigate difficult legal situations.',
                },
                {
                  name: 'Robert Johnson',
                  role: 'Associate Attorney',
                  bio: 'Robert focuses on real estate law and has a proven track record in property transactions and disputes.',
                },
                {
                  name: 'Sarah Williams',
                  role: 'Associate Attorney',
                  bio: 'Sarah is an expert in employment law, protecting both employee and employer rights.',
                },
              ].map((member, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h3 className="heading-3 text-xl mb-2">{member.name}</h3>
                  <p className="text-primary-700 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

