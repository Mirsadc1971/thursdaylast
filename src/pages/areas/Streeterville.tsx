import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { allServiceAreasData } from '../../data/serviceAreas'

const Streeterville = () => {
  const serviceArea = allServiceAreasData.find(sa => sa.slug === 'streeterville')
  
  if (!serviceArea) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Area Not Found</h1>
          <p className="text-gray-600 mb-8">The service area you're looking for doesn't exist.</p>
          <Link to="/service-areas" className="btn-primary">
            View All Service Areas
          </Link>
        </div>
      </div>
    )
  }

  const capitalizedName = serviceArea.name
  const isChicagoNeighborhood = serviceArea.type === 'neighborhood'
  const locationContext = isChicagoNeighborhood ? 'Chicago neighborhood' : 'suburban community'

  return (
    <>
      <Helmet>
        <title>{capitalizedName} Property Management | Manage369 HOA & Condo Experts</title>
        <meta name="description" content={`Exclusive property management in ${capitalizedName}. Manage369 serves condominiums, HOAs, and townhomes with luxury service since 2007.`} />
        <link rel="canonical" href={`https://www.manage369.com/property-management-${serviceArea.slug}`} />
        <meta property="og:title" content={`${capitalizedName} Property Management | Manage369`} />
        <meta property="og:description" content={`Professional property management services in ${capitalizedName}. Expert HOA, condo, and townhome management since 2007.`} />
        <meta property="og:url" content={`https://www.manage369.com/property-management-${serviceArea.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding pt-24">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-6 text-white">
                Property Management in {capitalizedName} with Manage369
              </h1>
              <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
                Manage369 provides exclusive property management services in {capitalizedName}, serving condominium associations, 
                HOAs, and townhome communities with professional excellence since 2007. Our boutique approach ensures your 
                {locationContext} receives the personalized attention it deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                  Get Free Consultation
                </Link>
                <a href="tel:224-647-5621" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
                  Call (224) 647-5621
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <p className="body-large text-gray-700 mb-6">
                {capitalizedName} represents one of {isChicagoNeighborhood ? "Chicago's most distinctive neighborhoods" : "the area's premier suburban communities"}, 
                featuring diverse property types from {serviceArea.propertyTypes.slice(0, 2).join(' to ')}. 
                This vibrant {locationContext} attracts residents who value {serviceArea.keyFeatures?.toLowerCase() || 'quality living'} 
                and {serviceArea.keyFeatures?.toLowerCase() || 'community amenities'}.
              </p>
              <p className="body-text text-gray-600 mb-8">
                Manage369 understands the unique character of {capitalizedName} and provides property management services 
                tailored to your community's specific needs. Our local expertise in HOA management {capitalizedName}, 
                condominium management, and townhome oversight ensures your property investment is protected while 
                maintaining the high standards your residents expect.
              </p>
            </div>
          </div>
        </section>

        {/* Tailored Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 mb-8 text-center">Tailored Property Management Services in {capitalizedName}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="body-text text-gray-700 mb-6">
                    Our {capitalizedName} property management services are designed specifically for local condominium boards, 
                    HOA leadership, and townhome associations. We provide comprehensive support that reduces board workload 
                    while ensuring professional oversight of your community's operations.
                  </p>
                  <p className="body-text text-gray-600">
                    From financial management to maintenance coordination, Manage369 delivers the expertise your 
                    {capitalizedName} community needs to thrive.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Our {capitalizedName} Specialties:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Board governance and meeting support
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Financial reporting and budget management
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Maintenance and vendor coordination
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      24/7 emergency response services
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <Link to="/services" className="btn-primary">
                  Explore All Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Manage369 */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 mb-12 text-center">Why {capitalizedName} Communities Choose Manage369</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Boutique Service Excellence</h3>
                      <p className="text-gray-600 text-sm">Personalized attention with dedicated account management for your {capitalizedName} community</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Legal Compliance Expertise</h3>
                      <p className="text-gray-600 text-sm">IDFPR licensed professionals ensuring full regulatory compliance for Illinois associations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Complete Transparency</h3>
                      <p className="text-gray-600 text-sm">Clear financial reporting and open communication with your board and residents</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Advanced Technology Portals</h3>
                      <p className="text-gray-600 text-sm">Modern resident and board portals for seamless communication and document access</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Professional Vendor Oversight</h3>
                      <p className="text-gray-600 text-sm">Rigorous contractor management and quality control for all maintenance and improvement projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 mb-8 text-center">Local Expertise That Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="body-text text-gray-700 mb-6">
                    {capitalizedName} is known for its {serviceArea.keyFeatures?.toLowerCase() || 'distinctive character'} and 
                    {serviceArea.keyFeatures?.toLowerCase() || 'quality amenities'}. This {locationContext} attracts 
                    {serviceArea.marketInsights?.toLowerCase().includes('family') ? ' families and long-term residents' : ' professionals and residents'} 
                    who value community standards and property maintenance.
                  </p>
                  <p className="body-text text-gray-600 mb-6">
                    Manage369's deep understanding of {capitalizedName}'s unique characteristics allows us to provide 
                    property management services that align with your community's specific needs and expectations. 
                    We recognize the importance of {serviceArea.keyFeatures?.toLowerCase() || 'maintaining community standards'} 
                    while ensuring efficient operations.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{capitalizedName} Community Insights:</h3>
                  <ul className="space-y-3">
                    {serviceArea.marketInsights.slice(0, 3).map((insight, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                        <span className="text-sm">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 mb-12 text-center">Comprehensive Services for {capitalizedName} Associations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Condominium Management */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    <Link to="/services/condominium-management" className="hover:text-primary-600">
                      Condominium Management
                    </Link>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Board governance and meeting support</li>
                    <li>• Financial management and reporting</li>
                    <li>• Building maintenance coordination</li>
                    <li>• Reserve fund planning</li>
                    <li>• Legal compliance oversight</li>
                  </ul>
                  <Link to="/services/condominium-management" className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                    Learn More →
                  </Link>
                </div>

                {/* Townhome Management */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    <Link to="/services/townhome-management" className="hover:text-secondary-600">
                      Townhome Management
                    </Link>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Exterior maintenance programs</li>
                    <li>• Landscaping coordination</li>
                    <li>• Community amenity management</li>
                    <li>• Architectural review support</li>
                    <li>• Neighbor relations assistance</li>
                  </ul>
                  <Link to="/services/townhome-management" className="text-secondary-500 hover:text-secondary-600 font-medium text-sm">
                    Learn More →
                  </Link>
                </div>

                {/* HOA Management */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">🏘️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    <Link to="/services/hoa-management" className="hover:text-accent-600">
                      HOA Management
                    </Link>
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Covenant enforcement</li>
                    <li>• Community event coordination</li>
                    <li>• Vendor management</li>
                    <li>• Assessment collection</li>
                    <li>• Dispute resolution</li>
                  </ul>
                  <Link to="/services/hoa-management" className="text-accent-500 hover:text-accent-600 font-medium text-sm">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner CTA */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-max text-center">
            <h2 className="heading-2 mb-4 text-white">Partner with Manage369 in {capitalizedName}</h2>
            <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
              Ready to experience professional property management that understands {capitalizedName}? 
              Contact Manage369 today for a free consultation about your community's needs.
            </p>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-xl mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
              <div className="space-y-2 text-blue-100">
                <p><strong>Phone:</strong> <a href="tel:224-647-5621" className="text-yellow-300 hover:underline">(224) 647-5621</a></p>
                <p><strong>Email:</strong> <a href="mailto:service@manage369.com" className="text-yellow-300 hover:underline">service@manage369.com</a></p>
                <p><strong>Office:</strong> Glenview, IL</p>
                <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
              <a href="tel:224-647-5621" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
                Call (224) 647-5621
              </a>
            </div>
            
            <div className="mt-8 text-sm text-blue-200">
              <p>Serving {capitalizedName} and surrounding communities since 2007</p>
              <p>Licensed & Insured Illinois Property Management Company</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Schaumburg