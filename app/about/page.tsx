import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">About Us</h1>
          <p className="text-xl">
            More than builders — neighbors, friends, and proud members of the Heber-Overgaard
            community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                alt="Custom home construction site"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>

            <div className="fade-in">
              <h2 className="text-4xl font-bold font-serif mb-6 text-primary">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Mogollon Rim Construction, we're more than just builders — we're neighbors,
                friends, and proud members of the Heber-Overgaard community. As a family-owned and
                operated business, we've been serving the Rim Country with honesty, craftsmanship,
                and heart since day one.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our roots run deep here, and we're dedicated to helping other families create spaces
                that feel like home. Whether we're building custom homes nestled in the pines or
                handling thoughtful home improvements, every project is guided by the same core
                values: quality work, personalized service, and a commitment to doing right by our
                clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We take pride in treating every job like it's our own — because for us, building is
                personal.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold font-serif text-center mb-12 text-primary fade-in">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center fade-in">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Honesty</h3>
                <p className="text-gray-700 leading-relaxed">
                  Transparent communication and fair pricing. We believe in building trust with
                  every conversation and every project.
                </p>
              </div>

              <div className="text-center fade-in">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Craftsmanship</h3>
                <p className="text-gray-700 leading-relaxed">
                  Quality work that stands the test of time. Every detail matters, and we take pride
                  in doing things right the first time.
                </p>
              </div>

              <div className="text-center fade-in">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-heart text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary">Heart</h3>
                <p className="text-gray-700 leading-relaxed">
                  We genuinely care about our clients and community. Your satisfaction and happiness
                  are what drive us every day.
                </p>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div className="bg-accent p-12 rounded-lg fade-in">
            <h2 className="text-4xl font-bold font-serif mb-6 text-primary text-center">
              Committed to Our Community
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto text-center">
              We're also proud to give back to the community that's supported us over the years.
              From sponsoring local events to working with nearby schools and organizations,
              Mogollon Rim Construction is committed to strengthening the place we all call home.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
              When you work with us, you're not just hiring a contractor — you're partnering with a
              team that truly cares. Let's build something lasting, together.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Let's Start Your Project
          </h2>
          <p className="text-xl mb-8">
            Experience the difference of working with a team that genuinely cares about your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}