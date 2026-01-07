import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">Our Services</h1>
          <p className="text-xl">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Custom Home Building */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                  alt="Custom home building"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="fade-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-home text-white text-2xl"></i>
                </div>
                <h2 className="text-4xl font-bold font-serif mb-6 text-primary">
                  Custom Home Building
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Turn your dream home into reality with our custom home building services. We work
                  closely with you from initial design to final walkthrough, ensuring every detail
                  reflects your vision and lifestyle.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our experienced team handles everything from site preparation and foundation work
                  to framing, finishing, and final touches. We specialize in homes that blend
                  seamlessly with the natural beauty of the Rim Country.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Complete design and planning assistance</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Quality materials and craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Energy-efficient construction methods</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Transparent communication throughout the process</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Home Renovations */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
                  alt="Home renovation"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="fade-in md:order-1">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-hammer text-white text-2xl"></i>
                </div>
                <h2 className="text-4xl font-bold font-serif mb-6 text-primary">
                  Home Renovations
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Transform your existing space into something extraordinary. Whether you're looking
                  to update a single room or undertake a whole-home renovation, we bring fresh ideas
                  and expert execution to every project.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  From kitchen and bathroom remodels to room additions and whole-home updates, we
                  handle projects of all sizes with the same attention to detail and commitment to
                  quality.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Kitchen and bathroom remodeling</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Room additions and expansions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Basement finishing</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Open floor plan conversions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Home Improvements */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <Image
                  src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800"
                  alt="Home improvements"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="fade-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-tools text-white text-2xl"></i>
                </div>
                <h2 className="text-4xl font-bold font-serif mb-6 text-primary">
                  Home Improvements
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Keep your home in top condition with our professional home improvement services.
                  From repairs to upgrades, we help maintain and enhance your property's value and
                  functionality.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our team has the expertise to handle everything from minor repairs to major
                  upgrades, all with the quality craftsmanship you expect from Mogollon Rim
                  Construction.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Deck and patio construction</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Window and door replacement</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Roofing repairs and replacement</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mr-3 mt-1"></i>
                    <span>Siding and exterior updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif text-center mb-12 text-primary fade-in">
            Why Choose Mogollon Rim Construction?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">Family Owned</h3>
              <p className="text-gray-700">
                Local family business with deep roots in the Heber-Overgaard community
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">Licensed & Insured</h3>
              <p className="text-gray-700">
                Fully licensed contractor with comprehensive insurance coverage
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-star text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">Quality Focus</h3>
              <p className="text-gray-700">
                Commitment to exceptional craftsmanship and attention to detail
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-comments text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">
                Clear Communication
              </h3>
              <p className="text-gray-700">
                Transparent updates and open dialogue throughout your project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss your project and create a plan that brings your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
