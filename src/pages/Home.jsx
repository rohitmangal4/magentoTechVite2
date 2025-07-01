import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, Code, Zap, Users, Award, CheckCircle } from 'lucide-react';
import Button from '../components/Button.jsx';

const Home = () => {
  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      title: 'eCommerce Expertise',
      description: 'Specialized in Magento and Shopify development with years of experience building successful online stores.'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Custom Development',
      description: 'Tailored solutions including custom extensions, themes, and integrations to meet your unique business needs.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Performance Optimization',
      description: 'Lightning-fast websites with SEO optimization to improve your search rankings and user experience.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Dedicated Support',
      description: '24/7 support and maintenance services to keep your online store running smoothly and efficiently.'
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert <span className="text-orange-500">Magento</span> & <span className="text-orange-500">Shopify</span>
              <br />Development Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our specialized eCommerce development services. 
              We build powerful, scalable online stores that drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full flex justify-center sm:w-auto">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-2 mt-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MagentoTechVite?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business insight to deliver eCommerce solutions 
              that not only look great but drive real results for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From development to optimization, we offer comprehensive eCommerce solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Magento 2 Development</h3>
                    <p className="text-gray-600">Custom Magento 2 stores with advanced features and seamless integrations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Shopify Development</h3>
                    <p className="text-gray-600">Beautiful, high-converting Shopify stores and custom applications.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Adobe Commerce</h3>
                    <p className="text-gray-600">Enterprise-level Adobe Commerce solutions for large-scale businesses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO & Performance</h3>
                    <p className="text-gray-600">Optimization services to improve your search rankings and site speed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <Award className="w-12 h-12 text-orange-200 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Certified Experts</h3>
              <p className="text-orange-100 mb-6">
                Our team consists of certified Magento and Shopify developers with proven track records 
                of delivering successful eCommerce projects.
              </p>
              <Link to="/about">
                <Button variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your eCommerce Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and see how we can help you build a successful online store 
            that drives growth and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="w-full flex justify-center sm:w-auto">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 mt-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;