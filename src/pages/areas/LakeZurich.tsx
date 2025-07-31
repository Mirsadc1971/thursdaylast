import React from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LakeZurich: React.FC = () => {
  useEffect(() => {
    document.title = 'Property Management Services in Lake Zurich, Illinois | Manage369';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional property management services in Lake Zurich, Illinois. Manage369 offers comprehensive HOA, condo, and rental property management solutions with 24/7 support.'
      );
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://manage369.com/property-management-lake-zurich');
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
                Property Management Services in Lake Zurich, Illinois
              </h1>
              <p className="text-xl mb-8">
                Comprehensive property management solutions for HOAs, condos, and rental properties in Lake Zurich. 
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
                Professional Property Management in Lake Zurich
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-700 mb-6">
                    Lake Zurich is a charming suburban community in Lake County, known for its excellent schools, 
                    family-friendly atmosphere, and beautiful lake access. As a trusted property management company 
                    serving Lake Zurich, Manage369 understands the unique needs of this growing community.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Our comprehensive property management services help property owners maximize their investments 
                    while ensuring residents enjoy well-maintained, professionally managed communities that enhance 
                    Lake Zurich's desirable suburban lifestyle.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Manage369?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Local Lake Zurich expertise
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
                      Family-focused maintenance services
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
                Our Lake Zurich Property Management Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">HOA Management</h3>
                  <p className="text-gray-700 mb-4">
                    Complete homeowners association management including board support, financial management, 
                    and community maintenance coordination for Lake Zurich's family-oriented neighborhoods.
                  </p>
                  <a href="/services/hoa-management" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Condo Management</h3>
                  <p className="text-gray-700 mb-4">
                    Specialized condominium management services tailored to Lake Zurich's residential 
                    properties and lakefront communities.
                  </p>
                  <a href="/services/condo-management" className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </a>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Townhome Management</h3>
                  <p className="text-gray-700 mb-4">
                    Professional townhome community management with focus on maintaining property values 
                    and family-friendly environments in this desirable area.
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
                Ready to Get Started in Lake Zurich?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Contact Manage369 today for a free consultation about your Lake Zurich property management needs. 
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

export default LakeZurich;
