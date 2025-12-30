import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-12 w-auto flex items-center justify-center">
                <Image
                  src="/numa-logo.png"
                  alt="Numa Logo"
                  width={60}
                  height={47}
                  className="object-contain"
                  style={{
                    height: "48px",
                    width: "auto",
                    imageRendering: "crisp-edges",
                  } as React.CSSProperties}
                />
              </div>
              <div className="flex flex-col leading-none" style={{ lineHeight: '1.1' }}>
                <span
                  className="text-2xl font-bold text-gray-900"
                  style={{
                    fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
                  }}
                >
                  Numa Rivera
                </span>
                <span
                  className="text-[8px] font-normal text-gray-900"
                  style={{
                    fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
                    marginTop: '2px',
                    textAlign: 'right',
                    letterSpacing: '0.5px',
                  }}
                >
                  MENA HOSPITALITY COLLECTIVE
                </span>
              </div>
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
                <Link href="/" className="text-sm text-gray-600 hover:text-[#03202F]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="text-sm text-gray-600 hover:text-[#03202F]">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="/mhc" className="text-sm text-gray-600 hover:text-[#03202F]">
                  MHC
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Investment</li>
              <li className="text-sm text-gray-600">Development</li>
              <li className="text-sm text-gray-600">Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Riyadh, Saudi Arabia</li>
              <li className="text-sm text-gray-600">+966 50 435 7826</li>
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
