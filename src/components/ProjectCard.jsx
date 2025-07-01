import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, DollarSign, Clock } from 'lucide-react';
import Button from './Button.jsx';

const ProjectCard = ({ project, featured = false }) => {
  const cardClasses = featured 
    ? "group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-500"
    : "group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1";

  return (
    <div className={cardClasses}>
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">{project.type}</span>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {project.year}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {project.timeline}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <DollarSign className="w-4 h-4 mr-1" />
            {project.budget.split(' - ')[0]}+
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to={`/projects/${project.id}`} className="flex-1">
            <Button variant="primary" className="w-full flex justify-center">
              View Details
              <ArrowRight className="w-4 h-4 ml-2 mt-1" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="w-full sm:w-auto">
              Similar Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;