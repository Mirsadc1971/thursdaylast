import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import CanonicalLink from '../components/CanonicalLink'
import { allServiceAreasData } from '../data/serviceAreas'

const ServiceAreas = () => {
  // Use centralized service area data (already sorted)
  const sortedServiceAreas = allServiceAreasData.map(area => ({
    name: area.name,
    slug: area.slug,
    type: area.type
  }))

  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/service-areas" />
      {/* Local Business Schema for Service Areas Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Manage369 - Chicago Property Management",
          "description": "Professional property management services throughout Chicago and suburbs. Condominium management, townhome management, and HOA management.",
          "url": "https://manage369.com/service-areas",
          "telephone": "+1-847-834-4131",
          "email": "service@manage369.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5107 North Western Avenue, Suite 1S",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "postalCode": "60625",
            "addressCountry": "US"
          },
          "areaServed": sortedServiceAreas.map(area => ({
            "@type": "City",
            "name": area.name,
            "addressRegion": "IL"
          }))
        })}
      </script>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding pt-24">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Manage369 Property Management Service{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Areas
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Premier Property Management in Chicago and the North Shore
              Since 2007, Manage369 has been the trusted choice for condominium, townhome, and HOA communities. We proudly manage more than 50 properties and 2,450+ units across Chicago and its suburbs, delivering tailored solutions that combine professionalism, transparency, and 24/7 accessibility.
              
              Discover why boards across Chicago choose Manage369 for reliable, concierge‑level property management.
            </p>
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">All Manage369 Property Management Service Areas</h2>
            <p className="body-large max-w-3xl mx-auto">
              Manage369 provides professional property management services throughout {sortedServiceAreas.length}+ 
              Chicago neighborhoods and suburban communities. Click any area below to learn about our specialized 
              property management services in that location.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sortedServiceAreas.map((area, index) => (
              <Link 
                key={index}
                to={`/property-management-${area.slug}`} 
                className="block bg-white border border-gray-200 p-6 rounded-lg text-center hover:bg-blue-50 hover:shadow-xl hover:scale-102 transition-all duration-200 flex flex-col justify-between min-h-[160px] shadow-lg group cursor-pointer"
              >
                <div>
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-4 h-4 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary-600 transition-colors duration-200">{area.name}</h3>
                </div>
                <div className="mt-2">
                  <span className="text-sm text-primary-500 hover:text-primary-600 font-medium inline-flex items-center">
                    View Services
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="body-text mb-6">
              Don't see your area listed? We're continuously expanding our service coverage.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Inquire About Your Area
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Manage369 Service Coverage</h2>
            <p className="body-large max-w-3xl mx-auto">
              Chicago's premier property management service company serving property owners and associations throughout the greater Chicago metropolitan area.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏙️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Chicago City</h3>
                <p className="text-gray-600">All major neighborhoods and districts within the city limits</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Suburban Communities</h3>
                <p className="text-gray-600">Cook, DuPage, Lake, and Kane County suburbs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌆</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Metro Area</h3>
                <p className="text-gray-600">Extended coverage throughout Chicagoland region</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Ready to Get Started in Your Area?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
           Contact Chicago's #1 property management service company today to learn how our local expertise 
           and comprehensive property management service can benefit your property in your specific Chicago-area community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Local Quote
            </Link>
            <a href="tel:224-647-5621" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (224) 647-5621
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceAreas