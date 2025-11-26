import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col m-0 p-0 -mt-0" style={{ marginTop: 0 }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Why Choose Numa Rivera</h2>
            <p className="text-lg text-gray-600">
              Your trusted partner in real estate excellence
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{backgroundColor: 'rgba(3, 32, 47, 0.1)'}}>
                  <svg className="h-6 w-6" style={{color: '#03202F'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Premium Properties</h3>
                <p className="text-gray-600">
                  Carefully curated selection of luxury residential and commercial properties across Saudi Arabia.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{backgroundColor: 'rgba(3, 32, 47, 0.1)'}}>
                  <svg className="h-6 w-6" style={{color: '#03202F'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Trusted Expertise</h3>
                <p className="text-gray-600">
                  Years of experience in the Saudi real estate market with proven track record of success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{backgroundColor: 'rgba(3, 32, 47, 0.1)'}}>
                  <svg className="h-6 w-6" style={{color: '#03202F'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Fast Process</h3>
                <p className="text-gray-600">
                  Streamlined buying and selling process with dedicated support every step of the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Featured Properties</h2>
            <p className="text-lg text-gray-600">
              Explore our handpicked selection of premium properties
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-64 w-full bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, rgba(3, 32, 47, 0.2), rgba(3, 32, 47, 0.2))'}}>
                    <span className="text-gray-500">Property Image {i}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full px-3 py-1 text-sm font-medium" style={{backgroundColor: 'rgba(3, 32, 47, 0.1)', color: '#03202F'}}>
                      For Sale
                    </span>
                    <span className="text-2xl font-bold text-gray-900">SAR X,XXX,XXX</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">Luxury Villa</h3>
                  <p className="mb-4 text-gray-600">Riyadh, Saudi Arabia</p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>X Beds</span>
                    <span>X Baths</span>
                    <span>XXX sqm</span>
                  </div>
                  <Button className="mt-4 w-full hover:opacity-90 transition-opacity" style={{backgroundColor: '#03202F'}}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{background: 'linear-gradient(to right, #03202F, #03202F)'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Find Your Perfect Property?</h2>
          <p className="mb-8 text-xl" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
            Let our experts guide you through your real estate journey
          </p>
          <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-[#03202F] transition-colors">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
