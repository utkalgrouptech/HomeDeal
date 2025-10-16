// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 md:py-20 main-container">
      <div className=" mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> About Us</Link></li>
              <li><Link href="/founder-message" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> Founder's Message</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> Success Story</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> Testimonials</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Help</h5>
            <ul className="space-y-2">
              <li><Link href="/career" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> Career</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> Mission & Vision</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> Contact Us</Link></li>
              <li><Link href="/t&c" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors flex items-center gap-2"><i className="bi bi-caret-right-fill text-xs"></i> Disclaimer & Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Address</h5>
            <h6 className="font-medium mb-2">Head Office:</h6>
            <address className="mb-6 not-italic text-gray-300">
              Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur, <br />
              Kalinga Vihar, Patrapada, Bhuabneswar, Dist- Khurda, Odisha, India-751019.<br />
              Call: <a href="tel:+919668848999" className="text-blue-400 hover:underline">+91 9668848999</a>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <p className="mb-2 font-semibold"><a href="tel:+919668848999" className="text-blue-400 hover:underline">+91 9668848999</a></p>
            <p className="mb-6">For Enquiries: <a href="mailto:info@homedeal.co.in" className="text-blue-400 hover:underline">info@homedeal.co.in</a></p>

            <div className="social-grid flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo2.png" alt="HomeDeal" className="h-8" />
            <span className="text-gray-400">Built on Intelligence. Driven by Execution.</span>
          </div>

          <p className="text-gray-400 text-sm">
            © HomeDeal 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}