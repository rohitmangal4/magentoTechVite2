import { Users, Target, Award, Heart, Code, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring transparent communication throughout the process.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Innovation',
      description: 'We stay ahead of industry trends and leverage cutting-edge technologies to build future-proof solutions.'
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and respect for our clients and their goals.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Magento Developer',
      experience: '8+ years',
      expertise: 'Magento 2, Adobe Commerce, PHP'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Shopify Developer',
      experience: '6+ years',
      expertise: 'Shopify Plus, React, Node.js'
    },
    {
      name: 'Emily Rodriguez',
      role: 'eCommerce Consultant',
      experience: '10+ years',
      expertise: 'Strategy, UX/UI, SEO'
    },
    {
      name: 'David Kim',
      role: 'Full-Stack Developer',
      experience: '7+ years',
      expertise: 'JavaScript, Python, Cloud'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">MagentoTechVite</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate team of eCommerce specialists dedicated to helping businesses 
              succeed in the digital marketplace through innovative Magento and Shopify solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses of all sizes with powerful, scalable eCommerce solutions 
                that drive growth, enhance customer experiences, and achieve measurable results.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every business deserves access to world-class eCommerce technology, 
                and we're committed to making that a reality through our expertise in Magento, 
                Shopify, and Adobe Commerce.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <Code className="w-12 h-12 text-orange-200 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-orange-100">
                To be the leading provider of innovative eCommerce solutions, recognized for our 
                technical excellence, client satisfaction, and commitment to helping businesses 
                thrive in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, MagentoTechVite began as a small team of passionate developers 
                who recognized the growing need for specialized eCommerce expertise. What started 
                as a vision to help small businesses establish their online presence has evolved 
                into a comprehensive eCommerce agency serving clients worldwide.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've had the privilege of working with businesses across various 
                industries, from startup retailers to established enterprises. Each project has 
                taught us valuable lessons and reinforced our commitment to delivering exceptional 
                results.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to be trusted partners to over 50 businesses, having completed 
                more than 200 successful projects. Our team has grown, but our core mission remains 
                the same: to provide innovative, reliable, and scalable eCommerce solutions that 
                drive real business results.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <p className="text-lg text-gray-700 italic">
                  "We measure our success not just by the websites we build, but by the growth 
                  and success of the businesses we partner with. Every line of code we write 
                  is an investment in our clients' future."
                </p>
                <p className="text-orange-600 font-semibold mt-4">- MagentoTechVite Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines years of experience with a passion for innovation, 
              ensuring your project is in the best hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.experience} experience</p>
                <p className="text-sm text-gray-500">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise is validated by industry certifications and client recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Magento Certified</h3>
              <p className="text-gray-600">
                Official Magento Developer Certification for our senior developers
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shopify Partner</h3>
              <p className="text-gray-600">
                Recognized Shopify Partner with expertise in Plus development
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">99% Client Satisfaction</h3>
              <p className="text-gray-600">
                Consistently high ratings from our clients across all projects
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;