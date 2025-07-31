import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LakeForest: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Property Management Lake Forest IL | Manage369</title>
        <meta name="description" content="Professional property management services in Lake Forest, Illinois. HOA management, condo management, and townhome management by Manage369." />
        <link rel="canonical" href="https://manage369.com/property-management-lake-forest" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Property Management in Lake Forest, Illinois
              </h1>
              <p className="text-xl mb-8">
                Professional HOA, condo, and townhome management services for Lake Forest communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:224-647-5621" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Call (224) 647-5621
                </a>
                <a href="mailto:Service@manage369.com" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Lake Forest Property Management Services</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">HOA Management</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive homeowners association management for Lake Forest communities, including board support, financial management, and compliance oversight.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Board meeting coordination</li>
                    <li>• Financial reporting</li>
                    <li>• Vendor management</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Condo Management</h3>
                  <p className="text-gray-600 mb-6">
                    Specialized condominium management services tailored to Lake Forest's upscale residential properties and luxury developments.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Maintenance coordination</li>
                    <li>• Reserve fund management</li>
                    <li>• Owner communications</li>
                    <li>• Emergency response</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">Townhome Management</h3>
                  <p className="text-gray-600 mb-6">
                    Professional townhome community management focusing on maintaining property values and enhancing resident satisfaction in Lake Forest.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Common area maintenance</li>
                    <li>• Landscaping oversight</li>
                    <li>• Assessment collection</li>
                    <li>• Community events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Lake Forest Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Property Management in Lake Forest</h2>
              <p className="text-lg text-gray-600 mb-6">
                Lake Forest, Illinois is known for its beautiful lakefront properties, historic estates, and upscale residential communities. 
                Our property management services are designed to meet the unique needs of this prestigious North Shore community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With extensive experience managing luxury properties and high-end developments, Manage369 understands the expectations 
                of Lake Forest residents and property owners. We provide white-glove service that maintains the elegance and value 
                of your community.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Contact Manage369 for Lake Forest Property Management</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Primary Office</h3>
                  <p className="mb-2">1400 Patriot Boulevard 357</p>
                  <p className="mb-4">Glenview, Illinois 60025</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Chicago Office</h3>
                  <p className="mb-2">5107 N Western Ave Suite 1S</p>
                  <p className="mb-4">Chicago, Illinois 60625</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xl mb-2">Phone: <a href="tel:224-647-5621" className="text-orange-400 hover:text-orange-300">(224) 647-5621</a></p>
                <p className="text-xl">Email: <a href="mailto:Service@manage369.com" className="text-orange-400 hover:text-orange-300">Service@manage369.com</a></p>
              </div>

              <a href="tel:224-647-5621" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
                Call Now for Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default LakeForest;
