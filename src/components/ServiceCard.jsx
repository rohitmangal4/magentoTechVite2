import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button.jsx';

const ServiceCard = ({ service, featured = false }) => {
  const cardClasses = featured 
    ? "bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    : "bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1";

  const titleClasses = featured 
    ? "text-2xl font-bold mb-4 text-white"
    : "text-2xl font-bold mb-4 text-gray-900";

  const descriptionClasses = featured 
    ? "text-orange-100 mb-6"
    : "text-gray-600 mb-6";

  const priceClasses = featured 
    ? "text-xl font-semibold text-orange-200 mb-6"
    : "text-xl font-semibold text-orange-600 mb-6";

  return (
    <div className={cardClasses}>
      <h3 className={titleClasses}>{service.title}</h3>
      <p className={descriptionClasses}>{service.description}</p>
      
      <div className="mb-6">
        <span className={priceClasses}>
          {service.pricing.basic.price}
        </span>
      </div>

      <ul className="space-y-2 mb-8">
        {service.features.slice(0, 4).map((feature, index) => (
          <li key={index} className={`flex items-center ${featured ? 'text-orange-100' : 'text-gray-600'}`}>
            <div className={`w-2 h-2 rounded-full mr-3 ${featured ? 'bg-orange-200' : 'bg-orange-500'}`}></div>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link to={`/services/${service.id}`}>
          <Button 
            variant={featured ? "secondary" : "primary"} 
            className={`w-full flex justify-center ${featured ? 'bg-white text-orange-600 hover:bg-orange-50' : ''}`}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 mt-1" />
          </Button>
        </Link>
        <Link to="/contact">
          <Button 
            variant={featured ? "outline" : "secondary"} 
            className={`${featured ? 'bg-transparent text-white border-white hover:bg-white hover:text-orange-600' : ''}`}
          >
            Get Quote
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;