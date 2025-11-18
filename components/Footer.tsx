import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-amber-500 to-amber-700"></div>
              <span className="ml-3 text-xl font-bold text-gray-900">Numa Rivera</span>
            </div>
            <p className="text-sm text-gray-600">
              Premium real estate services in Saudi Arabia. Your trusted partner in finding the perfect property.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-amber-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-amber-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-amber-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Residential Sales</li>
              <li className="text-sm text-gray-600">Commercial Leasing</li>
              <li className="text-sm text-gray-600">Property Management</li>
              <li className="text-sm text-gray-600">Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Riyadh, Saudi Arabia</li>
              <li className="text-sm text-gray-600">+966 XX XXX XXXX</li>
              <li className="text-sm text-gray-600">info@numarivera.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Numa Rivera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
