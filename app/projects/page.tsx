import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Ponderosa Pine Estate',
      description: 'Custom 3,200 sq ft mountain retreat with timber frame construction',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
      category: 'Custom Home',
    },
    {
      title: 'Modern Ranch Remodel',
      description: 'Complete renovation blending rustic charm with contemporary design',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
      category: 'Renovation',
    },
    {
      title: 'Lakeside Cabin Build',
      description: 'Cozy 1,800 sq ft cabin with lake views and energy-efficient features',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600',
      category: 'Custom Home',
    },
    {
      title: 'Gourmet Kitchen Upgrade',
      description: 'High-end kitchen remodel with custom cabinetry and stone countertops',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600',
      category: 'Renovation',
    },
    {
      title: 'Timber Frame Addition',
      description: '1,000 sq ft addition with vaulted ceilings and panoramic windows',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600',
      category: 'Addition',
    },
    {
      title: 'Contemporary Mountain Home',
      description: 'Stunning 2,800 sq ft home with modern amenities and natural materials',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600',
      category: 'Custom Home',
    },
    {
      title: 'Luxury Master Suite',
      description: 'Complete master bedroom and bathroom renovation with spa features',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
      category: 'Renovation',
    },
    {
      title: 'Rustic Mountain Retreat',
      description: '2,400 sq ft cabin featuring reclaimed wood and stone accents',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600',
      category: 'Custom Home',
    },
    {
      title: 'Open Concept Remodel',
      description: 'Transformed traditional floor plan into modern open living space',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600',
      category: 'Renovation',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">Our Projects</h1>
          <p className="text-xl">
            Explore our portfolio of custom homes and renovations throughout the Rim Country
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each project showcases our commitment to quality craftsmanship, attention to detail,
              and dedication to bringing our clients' visions to life. From custom builds to
              comprehensive renovations, we approach every job with the same level of care and
              professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow fade-in"
              >
                <div className="relative h-64">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold font-serif mb-2 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-5xl font-bold font-serif text-primary mb-2">50+</div>
              <p className="text-gray-700 text-lg">Homes Built</p>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold font-serif text-primary mb-2">100+</div>
              <p className="text-gray-700 text-lg">Projects Completed</p>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold font-serif text-primary mb-2">15+</div>
              <p className="text-gray-700 text-lg">Years Experience</p>
            </div>
            <div className="fade-in">
              <div className="text-5xl font-bold font-serif text-primary mb-2">98%</div>
              <p className="text-gray-700 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl font-bold font-serif mb-6 text-primary">
            Want to Learn About Our Process?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover how we bring projects from concept to completion with our proven four-step
            process.
          </p>
          <Link
            href="/process"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition-colors font-medium"
          >
            View Our Process
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8">
            Let's bring your vision to life with the same care and quality you see in our portfolio.
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
