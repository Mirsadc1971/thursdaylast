import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LincolnPark: React.FC = () => {
  useEffect(() => {
    document.title = 'Property Management Services in Lincoln Park, Chicago | Manage369';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional property management services in Lincoln Park, Chicago. Manage369 offers comprehensive HOA, condo, and rental property management solutions with 24/7 support.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://manage369.com/property-management-lincoln-park');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Property Management Services in Lincoln Park, Chicago
              </h1>
              <p className="text-xl mb-8">
                Comprehensive property management solutions for HOAs, condos, and rental properties in Lincoln Park. 
                Trust Manage369 for professional, reliable service with 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Free Quote
                </a>
                <a 
                  href="tel:224-647-5621" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Call (224) 647-5621
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Professional Property Management in Lincoln Park
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Lincoln Park is one of Chicago's most prestigious neighborhoods, known for its tree-lined streets, 
                    historic architecture, and proximity to Lincoln Park Zoo and Lake Michigan. As a trusted property 
                    management company serving Lincoln Park, Manage369 understands the sophisticated needs of this upscale area.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Our comprehensive property management services help property owners maximize their investments 
                    while ensuring residents enjoy well-maintained, professionally managed communities that reflect 
                    Lincoln Park's prestigious character and high standards.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Manage369?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Local Lincoln Park expertise
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      24/7 emergency support
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Comprehensive financial reporting
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Premium maintenance services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Lincoln Park Property Management Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">HOA Management</h3>
                  <p className="text-gray-700 mb-4">
                    Complete homeowners association management including board support, financial management, 
                    and community maintenance coordination for Lincoln Park's prestigious residential communities.
                  </p>
                  <a href="/services/hoa-management" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Condo Management</h3>
                  <p className="text-gray-700 mb-4">
                    Specialized condominium management services tailored to Lincoln Park's luxury high-rises 
                    and historic brownstone conversions.
                  </p>
                  <a href="/services/condo-management" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Townhome Management</h3>
                  <p className="text-gray-700 mb-4">
                    Professional townhome community management with focus on maintaining property values 
                    and the sophisticated lifestyle that defines Lincoln Park living.
                  </p>
                  <a href="/services/townhome-management" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ready to Get Started in Lincoln Park?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Contact Manage369 today for a free consultation about your Lincoln Park property management needs. 
                Our experienced team is ready to help you maximize your property investment.
              </p>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Phone:</strong> (224) 647-5621</p>
                      <p><strong>Email:</strong> Service@manage369.com</p>
                      <p><strong>Primary Office:</strong> 1400 Patriot Boulevard 357, Glenview, IL 60025</p>
                      <p><strong>Secondary Office:</strong> 5107 N Western Ave Suite 1S, Chicago, IL 60625</p>
                      <p><strong>Hours:</strong> Monday-Friday, 9 AM - 5 PM</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Your Free Quote</h3>
                    <p className="text-gray-700 mb-4">
                      Ready to experience professional property management? Contact us for a customized quote.
                    </p>
                    <a 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-colors"
                    >
                      Request Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LincolnPark;
