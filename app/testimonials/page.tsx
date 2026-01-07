import Link from 'next/link';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Mike Johnson',
      location: 'Heber, AZ',
      text: 'Working with Mogollon Rim Construction was an absolute pleasure. They turned our vision into reality and went above and beyond to ensure every detail was perfect. The quality of their work is outstanding, and they communicated with us every step of the way. We couldn\'t be happier with our new home!',
      project: 'Custom Home Build',
      rating: 5,
    },
    {
      name: 'Robert & Linda Martinez',
      location: 'Overgaard, AZ',
      text: 'Professional, reliable, and truly cares about the community. They built our dream home in the pines and the quality is outstanding. The entire team was respectful of our property and timeline. We recommend them to everyone looking to build in the Rim Country.',
      project: 'Custom Home Build',
      rating: 5,
    },
    {
      name: 'Jennifer Thompson',
      location: 'Show Low, AZ',
      text: 'From start to finish, they made the building process easy and stress-free. Their attention to detail and commitment to quality is unmatched. We appreciated their honesty and transparency with pricing and timeline. We\'re so grateful for their work!',
      project: 'Home Addition',
      rating: 5,
    },
    {
      name: 'David & Carol Peterson',
      location: 'Heber, AZ',
      text: 'Our kitchen remodel exceeded all expectations. The team was professional, clean, and incredibly skilled. They listened to our ideas and offered great suggestions that improved the final design. The craftsmanship is top-notch. Highly recommend!',
      project: 'Kitchen Renovation',
      rating: 5,
    },
    {
      name: 'James Wilson',
      location: 'Overgaard, AZ',
      text: 'I\'ve worked with many contractors over the years, and Mogollon Rim Construction stands out for their integrity and quality. They completed our home renovation on time and on budget. Their crew was respectful and professional every single day. Will definitely use them again.',
      project: 'Whole Home Renovation',
      rating: 5,
    },
    {
      name: 'Emily & Mark Davis',
      location: 'Heber, AZ',
      text: 'Building a custom home can be stressful, but this team made it enjoyable. They were patient with all our questions and changes, and the final result is better than we imagined. The attention to detail and quality of materials really shows. Thank you for building our forever home!',
      project: 'Custom Home Build',
      rating: 5,
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">Client Testimonials</h1>
          <p className="text-xl">
            Don't just take our word for it — hear from families who've trusted us with their homes
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Client satisfaction is at the heart of everything we do. Here's what some of our
              clients have to say about their experience working with Mogollon Rim Construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-accent p-8 rounded-lg fade-in">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-500"></i>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <p className="text-gray-500 text-sm mt-1">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials Placeholder */}
          <div className="bg-primary text-white p-12 rounded-lg text-center fade-in">
            <h3 className="text-3xl font-bold font-serif mb-4">Video Testimonials Coming Soon</h3>
            <p className="text-lg mb-6">
              We're currently collecting video testimonials from our happy clients. Check back soon
              to see them share their experiences!
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif text-center mb-12 text-primary fade-in">
            Our Track Record
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-5xl font-bold font-serif text-primary mb-2">98%</div>
              <p className="text-gray-700 text-lg">Client Satisfaction</p>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold font-serif text-primary mb-2">100+</div>
              <p className="text-gray-700 text-lg">Happy Families</p>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold font-serif text-primary mb-2">95%</div>
              <p className="text-gray-700 text-lg">Referral Rate</p>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold font-serif text-primary mb-2">15+</div>
              <p className="text-gray-700 text-lg">Years in Business</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif text-center mb-12 text-primary fade-in">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-accent p-6 rounded-lg fade-in">
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">
                How long does a typical custom home build take?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most custom homes take 8-12 months from groundbreaking to completion, depending on
                size and complexity. We provide a detailed timeline during the planning phase and
                keep you updated throughout the process.
              </p>
            </div>

            <div className="bg-accent p-6 rounded-lg fade-in">
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">
                Do you handle permits and inspections?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we handle all permitting, inspections, and coordinate with local authorities.
                This is included in our service, so you don't need to worry about the paperwork.
              </p>
            </div>

            <div className="bg-accent p-6 rounded-lg fade-in">
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">
                Can I make changes during construction?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                While we encourage finalizing all decisions during the planning phase, we understand
                that changes happen. We'll work with you to accommodate changes when possible and
                provide clear information about any timeline or cost impacts.
              </p>
            </div>

            <div className="bg-accent p-6 rounded-lg fade-in">
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">
                What areas do you serve?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We primarily serve the Rim Country area including Heber, Overgaard, Show Low, and
                surrounding communities. Contact us to discuss your specific location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl mb-8">
            Experience the quality and care that our clients rave about. Let's start your project
            today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
