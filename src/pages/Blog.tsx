import React from 'react'
import { Link } from 'react-router-dom'
import CanonicalLink from '../components/CanonicalLink'

const Blog = () => {
  // Real blog posts data - only authored content
  const blogPosts = [
    {
      id: 7,
      title: "Choosing the Right Property Management Company in Illinois – A Complete Condo Guide by Manage369",
      excerpt: "Essential guidance for Illinois condo and HOA boards on selecting ethical property management companies, avoiding red flags, and ensuring compliance with state regulations.",
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "12 min read",
      slug: "choosing-right-property-management-company-illinois-guide",
      featured: false
    },
    {
      id: 6,
      title: "Navigating Emotional Support Animals . A Complete Condo Guide from Manage369",
      excerpt: "Comprehensive guide for condominium boards on handling emotional support animal requests, including legal requirements, documentation standards, and best practices for compliance with fair housing laws.",
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "14 min read",
      slug: "emotional-support-animals-condominium-communities-guide",
      featured: false
    },
    {
      id: 5,
      title: "Navigating Service Animals . A Complete Condo Guide from Manage369",
      excerpt: "Essential guidance for Chicago property managers on handling service animals and emotional support animals, including legal requirements, verification procedures, and best practices for compliance.",
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "12 min read",
      slug: "service-animals-emotional-support-chicago-property-management",
      featured: false
    },
    {
      id: 4,
      title: "Updating Condo Bylaws in Illinois: A Complete Guide for Associations",
      excerpt: "Essential guidance for Illinois condominium associations on updating bylaws, including legal requirements, amendment procedures, and best practices for modernizing governance documents.",
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "15 min read",
      slug: "updating-condo-bylaws-illinois-complete-guide",
      featured: false
    },
    {
      id: 3,
      title: "Managing Association Funds in Illinois: Operating vs. Reserve Accounts",
      excerpt: "Essential guidelines for proper financial management of condominium and HOA funds in Illinois, including operating account management, reserve fund planning, and regulatory compliance.",
      date: "January 27, 2025",
      category: "Financial Management",
      readTime: "8 min read",
      slug: "managing-association-funds-illinois-operating-reserve-accounts",
      featured: false
    },
    {
      id: 2,
      title: "Loud Music and Chicago Noise Ordinance: A Property Management Guide",
      excerpt: "Understanding Chicago's noise ordinance, tenant rights, and effective strategies for managing noise complaints in condominiums and multi-unit buildings.",
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "10 min read",
      slug: "loud-music-chicago-noise-ordinance-guide",
      featured: false
    },
    {
      id: 1,
      title: "Secondhand Smoke and Odor in Illinois Condominiums: A Complete Guide by Manage369",
      excerpt: "Learn about the health impacts of secondhand smoke, Illinois laws, HOA authority, and practical solutions for managing smoke and odor in condo buildings.",
      date: "January 27, 2025",
      category: "Legal & Compliance",
      readTime: "12 min read",
      slug: "secondhand-smoke-odor-illinois-condominiums-guide",
      featured: true
    },
  ]

  const categories = [
    "All Posts",
    "Legal & Compliance",
    "Financial Management"
  ]

  const [selectedCategory, setSelectedCategory] = React.useState("All Posts")

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div>
      <CanonicalLink href="https://www.manage369.com/blog" />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-white">
              Property Management{' '}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="body-large mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert insights, tips, and guidance for property owners, HOA boards, 
              and residents in Chicago and surrounding areas. Stay informed with 
              the latest property management trends and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${post.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}>
                {post.featured && (
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2">
                    <span className="text-sm font-semibold">Featured Article</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.featured ? 'bg-yellow-100 text-yellow-700' : 'bg-primary-100 text-primary-700'}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className={`font-bold text-gray-900 mb-3 leading-tight hover:text-primary-600 transition-colors ${post.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className={`text-gray-600 mb-4 leading-relaxed ${post.featured ? 'text-lg' : ''}`}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center transition-colors"
                    >
                      Read More
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-white">Expert Property Management Insights</h2>
              <p className="text-blue-100 mb-6">
                Get exclusive insights from managing 50+ properties with over 2450+ doors in Chicago. 
                Real-world solutions from experienced professionals.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Chicago market trends and analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Legal compliance updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Best practices from 18+ years experience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Why Our Content Matters</h3>
              <p className="text-gray-600 mb-6">
                Unlike generic property management advice, our insights come from 
                real experience managing thousands of Chicago properties.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-sm">Practical solutions tested across 50+ properties, 2450+ units</span>
                  <span className="text-sm">Practical solutions tested across 50+ properties with over 2450+ doors</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-sm">Chicago-specific regulations and requirements</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-sm">Real case studies from neighborhood experts</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Helpful Resources</h2>
            <p className="body-large max-w-3xl mx-auto">
              Explore our comprehensive resources for property owners, board members, and residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/resources" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Property Management Resources</h3>
              <p className="text-gray-600">
                Comprehensive guides and tools for effective property management
              </p>
            </Link>

            <Link to="/services" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Our Services</h3>
              <p className="text-gray-600">
                Learn about our comprehensive property management solutions
              </p>
            </Link>

            <Link to="/contact" className="card text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Expert Consultation</h3>
              <p className="text-gray-600">
                Get personalized advice from our property management experts
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <h2 className="heading-2 mb-4 text-white">Need Professional Property Management?</h2>
          <p className="body-large mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Chicago's #1 property management company for expert guidance 
            and comprehensive management solutions for your property.
          </p>
          <div className="mb-8">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg inline-block">
              <p className="text-white font-semibold">Manage369 - Chicago Property Management Experts</p>
              <p className="text-blue-100">1400 Patriot Boulevard 357, Glenview, IL 60026</p>
              <p className="text-blue-100">(312) 402-7002 | service@manage369.com</p>
              <p className="text-blue-100">(847) 834-4131 | service@manage369.com</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <a href="tel:312-402-7002" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (312) 402-7002
            </a>
            <a href="tel:224-647-5621" className="btn-outline border-white text-white hover:bg-white hover:text-primary-500 text-lg px-8 py-4">
              Call (224) 647-5621
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog