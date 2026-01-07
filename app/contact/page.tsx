'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: 'Custom Home Build',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectType: 'Custom Home Build',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">Get In Touch</h1>
          <p className="text-xl">
            Ready to start your project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold font-serif mb-8 text-primary">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-white text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg mb-1 text-primary">Location</h3>
                    <p className="text-gray-700">Heber-Overgaard, AZ 85923</p>
                    <p className="text-gray-600 text-sm mt-1">
                      Serving the entire Rim Country area
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg mb-1 text-primary">Phone</h3>
                    <p className="text-gray-700">(928) 468-0000</p>
                    <p className="text-gray-600 text-sm mt-1">Monday - Friday, 8AM - 5PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg mb-1 text-primary">Email</h3>
                    <p className="text-gray-700">info@mogollonrimconstruction.com</p>
                    <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-white text-lg"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg mb-1 text-primary">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: By Appointment</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4 text-primary">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-accent p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-primary">Emergency Service</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  For urgent construction emergencies with existing clients, please call our main
                  number and leave a message. We'll return emergency calls as quickly as possible.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in">
              <div className="bg-accent p-8 rounded-lg">
                <h2 className="text-3xl font-bold font-serif mb-6 text-primary">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 outline-none transition"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 outline-none transition"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 outline-none transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 outline-none transition"
                    >
                      <option>Custom Home Build</option>
                      <option>Home Renovation</option>
                      <option>Home Improvement</option>
                      <option>Addition</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 outline-none transition resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-light transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}