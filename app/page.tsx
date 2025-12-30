import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col m-0 p-0 -mt-0" style={{ marginTop: 0 }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
              OUR EXPERTISE
            </h2>
            <div className="h-1 w-20 bg-[#03202F] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We are a full-service real estate firm dedicated to unlocking value through strategic investment, extensive development capabilities, and hands-on management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {/* Investment */}
            <div className="flex flex-col items-center text-center p-6 transition-colors duration-300 hover:bg-gray-50 rounded-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#03202F] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light text-gray-900 tracking-wide">INVESTMENT</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We identify and capitalize on high-potential opportunities across the Kingdom, utilizing rigorous market analysis and risk assessment to deliver superior risk-adjusted returns.
              </p>
            </div>

            {/* Development */}
            <div className="flex flex-col items-center text-center p-6 transition-colors duration-300 hover:bg-gray-50 rounded-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#03202F] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4 8 4v14" />
                  <path d="M17 21v-8.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V21" />
                  <path d="M9 10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light text-gray-900 tracking-wide">DEVELOPMENT</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                From concept to completion, we create sustainable, future-ready environments. Our projects are designed to enhance communities and support Vision 2030.
              </p>
            </div>

            {/* Management */}
            <div className="flex flex-col items-center text-center p-6 transition-colors duration-300 hover:bg-gray-50 rounded-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#03202F] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-light text-gray-900 tracking-wide">MANAGEMENT</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                We provide comprehensive asset management and consulting services, ensuring operational excellence and maximizing the long-term value of every property in our portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement / CTA */}
      <section className="py-24 bg-[#03202F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl md:text-5xl font-light tracking-wide leading-tight">
            Building the Future of Saudi Hospitality
          </h2>
          <p className="mb-12 text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Partner with a team that combines global expertise with deep local insight.
          </p>
          <Link href="/contact-us">
            <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-[#03202F] transition-colors rounded-none px-8 py-6 text-lg uppercase tracking-widest">
              Partner With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
