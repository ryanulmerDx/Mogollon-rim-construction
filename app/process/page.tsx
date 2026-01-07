import Link from 'next/link';

export default function Process() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">Our Process</h1>
          <p className="text-xl">
            A clear, transparent approach to bringing your vision to life
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1 */}
          <div className="mb-20 fade-in">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold font-serif">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold font-serif mb-4 text-primary">
                  Initial Consultation
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  We start by getting to know you and your vision. During our initial consultation,
                  we'll discuss your project goals, budget, timeline, and any specific requirements
                  you have in mind.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  This is also where we share our expertise and offer suggestions based on years of
                  experience building in the Rim Country. We'll answer all your questions and ensure
                  you have a clear understanding of what to expect.
                </p>
                <div className="bg-accent p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>One-on-one meeting at your convenience</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Discussion of your vision and requirements</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Preliminary budget and timeline estimates</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Professional recommendations and insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-20 fade-in">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold font-serif">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold font-serif mb-4 text-primary">
                  Design & Planning
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Once we have a clear understanding of your needs, we move into the design and
                  planning phase. We'll work with architects and designers to create detailed plans
                  that match your vision while meeting all building codes and regulations.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  This phase includes finalizing all design details, selecting materials, and
                  obtaining necessary permits. We keep you involved every step of the way, ensuring
                  the plans reflect exactly what you want.
                </p>
                <div className="bg-accent p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Detailed architectural drawings and plans</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Material selection and specification</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Permit acquisition and approval process</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Finalized project timeline and cost breakdown</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-20 fade-in">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold font-serif">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold font-serif mb-4 text-primary">Construction</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  This is where the magic happens. Our skilled team brings your plans to life with
                  expert craftsmanship and attention to detail. We manage every aspect of
                  construction, from site preparation to final finishes.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Throughout construction, we maintain open communication, providing regular updates
                  and being available to answer any questions. We treat your project as if it were
                  our own, ensuring quality work at every stage.
                </p>
                <div className="bg-accent p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Regular progress updates and communication</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Professional, experienced construction crew</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Quality materials and proven building methods</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Clean, organized job site maintained daily</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="fade-in">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold font-serif">4</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold font-serif mb-4 text-primary">
                  Final Walkthrough & Completion
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Before we hand over the keys, we conduct a thorough final walkthrough with you.
                  We'll review every detail to ensure everything meets your expectations and our
                  high standards.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Any final adjustments or touch-ups are handled promptly. We don't consider a job
                  complete until you're completely satisfied. Even after project completion, we
                  remain available to address any questions or concerns.
                </p>
                <div className="bg-accent p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Comprehensive final inspection</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Prompt completion of any final items</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>All warranties and documentation provided</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mr-3 mt-1"></i>
                      <span>Ongoing support and availability after completion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif text-center mb-12 text-primary fade-in">
            Why Our Process Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-comment-dots text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 text-primary">
                Clear Communication
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We keep you informed at every stage, ensuring there are no surprises and you always
                know what's happening with your project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-clipboard-check text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 text-primary">Proven Methods</h3>
              <p className="text-gray-700 leading-relaxed">
                Our four-step process has been refined over years of experience, ensuring efficient
                project delivery without sacrificing quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg fade-in">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-user-check text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 text-primary">
                Client-Centered Approach
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your satisfaction is our top priority. We involve you in key decisions while
                handling all the technical details and challenges.
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
            Let's schedule your consultation and begin the journey to your dream home.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
