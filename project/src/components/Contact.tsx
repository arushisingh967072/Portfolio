// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // You can integrate with a form service like Netlify Forms, Formspree, etc.
//   };

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//             Get In Touch
//           </h2>
//           <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
//             I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!
//           </p>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Information */}
//             <div className="space-y-8">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">
//                 Let's Connect
//               </h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
//                   <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
//                     <Mail className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Email</h4>
//                     <p className="text-gray-600">arushisingh20dec@gmail.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
//                   <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
//                     <Phone className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Phone</h4>
//                     <p className="text-gray-600">(+91) 9555318741</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
//                   <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
//                     <MapPin className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Location</h4>
//                     <p className="text-gray-600">Ghaziabad , U.P</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-8">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-4">
//                   Follow Me
//                 </h4>
//                 <div className="flex space-x-4">
//                   <a
//                     href="https://github.com/arushisingh967072"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
//                   >
//                     <Github className="w-6 h-6" />
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/arushi-singh-77a118352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
//                   >
//                     <Linkedin className="w-6 h-6" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="bg-gray-50 p-8 rounded-xl">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Your Name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Project Discussion"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//                 >
//                   <Send className="w-5 h-5" />
//                   <span>Send Message</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // EmailJS configuration - You'll need to replace these with your actual values
      const serviceId = 'service_6h1x30b';
      const templateId = 'template_3m2jukd';
      const publicKey = 'FbGRZt_IOuThB7_5j';

      const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'kinjalsingh20dec@gmail.com',
      reply_to: formData.email,
};


      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">kinjalsingh20dec@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600"> (+91) 9555318741</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Ghaziabad, India</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/arushisingh967072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arushi-singh-77a118352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status.type === 'loading'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status.type === 'loading'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status.type === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={status.type === 'loading'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Messages */}
                {status.type !== 'idle' && (
                  <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800' 
                      : status.type === 'error'
                      ? 'bg-red-50 text-red-800'
                      : 'bg-blue-50 text-blue-800'
                  }`}>
                    {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                    {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
                    {status.type === 'loading' && (
                      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:bg-blue-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status.type === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{status.type === 'loading' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;