import React from 'react';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const LakeZurich: React.FC = () => {
  useEffect(() => {
    document.title = 'Property Management Services in Lake Zurich, Illinois | Manage369';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional property management services in Lake Zurich, Illinois. Manage369 offers comprehensive HOA, condo, and rental property management solutions with 24/7 support.');
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Property Management Services in Lake Zurich, Illinois</h1>
              <p className="text-xl mb-8">Comprehensive property management solutions for HOAs, condos, and rental properties in Lake Zurich. Trust Manage369 for professional, reliable service with 24/7 support.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Get Free Quote</a>
                <a href="tel:224-647-5621" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Call (224) 647-5621</a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Get Started in Lake Zurich?</h2>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Phone:</strong> (224) 647-5621</p>
                      <p><strong>Email:</strong> Service@manage369.com</p>
                      <p><strong>Primary Office:</strong> 1400 Patriot Boulevard 357, Glenview, IL 60025</p>
                      <p><strong>Secondary Office:</strong> 5107 N Western Ave Suite 1S, Chicago, IL 60625</p>
                    </div>
                  </div>
                  <div>
                    <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-colors">Request Free Quote</a>
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

