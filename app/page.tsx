import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
            alt="Custom home in the mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
            Building Dreams in the Rim Country
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Family-owned custom home builder serving Heber-Overgaard with honesty, craftsmanship,
            and heart since day one
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white text-3xl"></i>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
                alt="Construction tools and blueprints"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>

            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-primary">
                Building with Heart Since Day One
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Mogollon Rim Construction, we're more than just builders — we're neighbors,
                friends, and proud members of the Heber-Overgaard community. As a family-owned and
                operated business, we've been serving the Rim Country with honesty, craftsmanship,
                and heart since day one.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our roots run deep here, and we're dedicated to helping other families create spaces
                that feel like home.
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition-colors font-medium"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-primary">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From custom homes to renovations, we bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4 text-primary">
                Custom Home Building
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Design and build your dream home from the ground up. We work with you every step of
                the way to create a space that reflects your lifestyle.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-hammer text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Home Renovations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Transform your existing space with thoughtful renovations. From kitchens to full
                home updates, we enhance your home's functionality.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-tools text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4 text-primary">
                Home Improvements
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Professional upgrades and repairs to maintain and improve your home. Quality
                workmanship that stands the test of time.
              </p>
              <Link href="/services" className="text-primary font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-primary">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse of our recent work throughout the Rim Country
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="project-card overflow-hidden rounded-lg shadow-lg fade-in">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600"
                  alt="Custom Mountain Home"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold font-serif mb-2 text-primary">
                  Ponderosa Pine Estate
                </h3>
                <p className="text-gray-600">
                  Custom 3,200 sq ft mountain retreat with timber frame construction
                </p>
              </div>
            </div>

            <div className="project-card overflow-hidden rounded-lg shadow-lg fade-in">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
                  alt="Modern Ranch Home"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold font-serif mb-2 text-primary">
                  Modern Ranch Remodel
                </h3>
                <p className="text-gray-600">
                  Complete renovation blending rustic charm with contemporary design
                </p>
              </div>
            </div>

            <div className="project-card overflow-hidden rounded-lg shadow-lg fade-in">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600"
                  alt="Cabin Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold font-serif mb-2 text-primary">
                  Lakeside Cabin Build
                </h3>
                <p className="text-gray-600">
                  Cozy 1,800 sq ft cabin with lake views and energy-efficient features
                </p>
              </div>
            </div>
          </div>

          <div className="text-center fade-in">
            <Link
              href="/projects"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition-colors font-medium"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss your vision and create something lasting together.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}