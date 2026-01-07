import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold font-serif mb-4">
              Mogollon Rim Construction
            </h3>
            <p className="text-sm leading-relaxed">
              Building quality homes in the Rim Country with honesty, craftsmanship, and heart.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Custom Home Building</li>
              <li>Home Renovations</li>
              <li>Home Improvements</li>
              <li>Consultations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Heber-Overgaard, AZ 85923</li>
              <li>(928) 468-0000</li>
              <li>info@mogollonrimconstruction.com</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Mogollon Rim Construction. All rights reserved. | ROC #000000</p>
        </div>
      </div>
    </footer>
  );
}
