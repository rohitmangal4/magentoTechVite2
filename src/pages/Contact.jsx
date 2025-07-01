// import { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
// import Button from '../components/Button.jsx';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     service: '',
//     message: '',
//     budget: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real application, you would send this data to your backend
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);

//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         company: '',
//         service: '',
//         message: '',
//         budget: ''
//       });
//     }, 3000);
//   };

//   const contactInfo = [
//     {
//       icon: <Mail className="w-6 h-6 text-orange-500" />,
//       title: 'Email Us',
//       details: 'info@magentotechvite.com',
//       description: 'Send us an email anytime!'
//     },
//     {
//       icon: <Phone className="w-6 h-6 text-orange-500" />,
//       title: 'Call Us',
//       details: '+1 (555) 123-4567',
//       description: 'Mon-Fri from 8am to 5pm'
//     },
//     {
//       icon: <MapPin className="w-6 h-6 text-orange-500" />,
//       title: 'Visit Us',
//       details: '123 Tech Street, New York, NY 10001',
//       description: 'Come say hello at our office'
//     },
//     {
//       icon: <Clock className="w-6 h-6 text-orange-500" />,
//       title: 'Working Hours',
//       details: 'Monday - Friday: 8:00 AM - 6:00 PM',
//       description: 'Saturday: 9:00 AM - 2:00 PM'
//     }
//   ];

//   const services = [
//     'Magento 2 Development',
//     'Shopify Development',
//     'Adobe Commerce',
//     'SEO & Performance',
//     'Mobile App Development',
//     'Support & Maintenance',
//     'Other'
//   ];

//   const budgetRanges = [
//     'Under $5,000',
//     '$5,000 - $10,000',
//     '$10,000 - $25,000',
//     '$25,000 - $50,000',
//     '$50,000+',
//     'Not sure yet'
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-orange-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Get In <span className="text-orange-500">Touch</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Ready to start your eCommerce project? We'd love to hear from you.
//               Get in touch and let's discuss how we can help your business grow.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Info */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Contact Form */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
//               <p className="text-gray-600 mb-8">
//                 Fill out the form below and we'll get back to you within 24 hours.
//               </p>

//               {isSubmitted ? (
//                 <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
//                   <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
//                   <p className="text-green-600">
//                     Thank you for contacting us. We'll get back to you within 24 hours.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
//                         placeholder="Your full name"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
//                         placeholder="your@email.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                         Phone Number
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
//                         placeholder="+1 (555) 123-4567"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//                         Company Name
//                       </label>
//                       <input
//                         type="text"
//                         id="company"
//                         name="company"
//                         value={formData.company}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
//                         placeholder="Your company name"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
//                         Service Interested In *
//                       </label>
//                       <select
//                         id="service"
//                         name="service"
//                         required
//                         value={formData.service}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
//                       >
//                         <option value="">Select a service</option>
//                         {services.map((service, index) => (
//                           <option key={index} value={service}>{service}</option>
//                         ))}
//                       </select>
//                     </div>
//                     <div>
//                       <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
//                         Project Budget
//                       </label>
//                       <select
//                         id="budget"
//                         name="budget"
//                         value={formData.budget}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
//                       >
//                         <option value="">Select budget range</option>
//                         {budgetRanges.map((range, index) => (
//                           <option key={index} value={range}>{range}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       Project Details *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={6}
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
//                       placeholder="Tell us about your project requirements, timeline, and any specific needs..."
//                     ></textarea>
//                   </div>

//                   <Button type="submit" size="lg" className="w-full flex justify-center">
//                     Send Message
//                     <Send className="w-5 h-5 ml-2 mt-1" />
//                   </Button>
//                 </form>
//               )}
//             </div>

//             {/* Contact Information */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
//               <p className="text-gray-600 mb-8">
//                 We're here to help! Reach out to us through any of the following channels.
//               </p>

//               <div className="space-y-8">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
//                       <p className="text-orange-600 font-medium mb-1">{info.details}</p>
//                       <p className="text-gray-600 text-sm">{info.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* FAQ Section */}
//               <div className="mt-12">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="font-medium text-gray-900 mb-2">How long does a typical project take?</h4>
//                     <p className="text-gray-600 text-sm">
//                       Project timelines vary based on complexity, but most projects take 4-12 weeks from start to finish.
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-900 mb-2">Do you provide ongoing support?</h4>
//                     <p className="text-gray-600 text-sm">
//                       Yes, we offer comprehensive support and maintenance packages to keep your store running smoothly.
//                     </p>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-900 mb-2">Can you work with existing stores?</h4>
//                     <p className="text-gray-600 text-sm">
//                       Absolutely! We can enhance, optimize, or migrate your existing eCommerce store.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
//             <p className="text-xl text-gray-600">
//               Located in the heart of New York City, we welcome clients to visit our office.
//             </p>
//           </div>

//           <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
//             <div className="text-center">
//               <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
//               <p className="text-gray-600">Interactive map would be integrated here</p>
//               <p className="text-sm text-gray-500 mt-2">123 Tech Street, New York, NY 10001</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "382c2154-8588-4d96-8f23-2ec3be9fd29e"); // 🔑 Replace with your actual key
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("company", formData.company);
    form.append("service", formData.service);
    form.append("budget", formData.budget);
    form.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await res.json();

    if (result.success) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          budget: "",
        });
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      title: "Email Us",
      details: "info@magentotechvite.com",
      description: "Send us an email anytime!",
    },
    {
      icon: <Phone className="w-6 h-6 text-orange-500" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "Visit Us",
      details: "123 Tech Street, New York, NY 10001",
      description: "Come say hello at our office",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: "Working Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM",
    },
  ];

  const services = [
    "Magento 2 Development",
    "Shopify Development",
    "Adobe Commerce",
    "SEO & Performance",
    "Mobile App Development",
    "Support & Maintenance",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-orange-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your eCommerce project? We'd love to hear from you.
              Get in touch and let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="hidden"
                    name="access_key"
                    value="382c2154-8588-4d96-8f23-2ec3be9fd29e"
                  />
                  <input type="hidden" name="from_name" value="Contact us" />
                  <input
                    type="hidden"
                    name="subject"
                    value="Mail for Contact as our team"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full flex justify-center"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2 mt-1" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help! Reach out to us through any of the following
                channels.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      <p className="text-orange-600 font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      How long does a typical project take?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Project timelines vary based on complexity, but most
                      projects take 4-12 weeks from start to finish.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Do you provide ongoing support?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes, we offer comprehensive support and maintenance
                      packages to keep your store running smoothly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Can you work with existing stores?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Absolutely! We can enhance, optimize, or migrate your
                      existing eCommerce store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of New York City, we welcome clients to visit
              our office.
            </p>
          </div>

          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">
                Interactive map would be integrated here
              </p>
              <p className="text-sm text-gray-500 mt-2">
                123 Tech Street, New York, NY 10001
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
