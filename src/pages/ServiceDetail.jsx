import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, DollarSign, Users, TrendingUp, Star } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData.js';
import Button from '../components/Button.jsx';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = getServiceBySlug(serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600 transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-orange-600 transition-colors duration-200">Services</Link>
            <span>/</span>
            <span className="text-gray-900">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link 
                to="/services" 
                className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors duration-200 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-orange-600 mb-6">{service.subtitle}</p>
              <p className="text-lg text-gray-600 mb-8">{service.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={service.heroImage} 
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {service.title}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the key benefits that make our service the perfect choice for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Use</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-orange-50 transition-colors duration-200">
                    <span className="text-gray-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="font-semibold text-gray-900">Timeline</span>
                </div>
                <p className="text-gray-700">Typical project duration: <span className="font-semibold">{service.timeline}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(service.pricing).map(([key, plan], index) => (
              <div key={key} className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${index === 1 ? 'ring-2 ring-orange-500 relative' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-orange-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button 
                    variant={index === 1 ? "primary" : "outline"} 
                    className="w-full"
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how we've helped businesses like yours achieve remarkable results.
              </p>
            </div>

            {service.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <Star className="w-6 h-6 text-orange-200 mr-2" />
                      <span className="text-orange-200 font-medium">Case Study</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{caseStudy.title}</h3>
                    <p className="text-orange-100 text-lg mb-6">{caseStudy.description}</p>
                    <Link to="/contact">
                      <Button variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                        Start Your Success Story
                      </Button>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="w-5 h-5 text-orange-200 mr-2" />
                          <span className="text-orange-200 font-medium">Result</span>
                        </div>
                        <p className="text-white font-semibold">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your {service.title.toLowerCase()} needs and create a solution that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full flex justify-center sm:w-auto">
                <Users className="w-5 h-5 mr-2 mt-1" />
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;