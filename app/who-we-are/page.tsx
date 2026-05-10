import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[400px] w-full overflow-hidden"
        style={{
          marginTop: '-80px',
          paddingTop: '80px',
          background: 'linear-gradient(to right, #03202F, #03202F)',
        }}
      >
        <div className="container relative z-20 mx-auto flex h-full items-center px-4">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              American-Saudi Partnership
            </h1>
            <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              We founded Numa Rivera because the most compelling real estate opportunities in Saudi Arabia require both an insider&apos;s access and an outsider&apos;s perspective. By combining deep Saudi roots with American entrepreneurial discipline, we bring a perspective that is rare in this market and increasingly in demand.
            </p>
          </div>
        </div>
      </section>

      {/* A Purpose-Built Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 relative h-[400px] w-full overflow-hidden rounded-xl">
            <Image
              src="/team-photo.jpg"
              alt="Numa Rivera Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">A Purpose-Built Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multi-national team brings creative investment solutions partnered with cultural fluency and local knowledge. Every investment is guided by global standards and local insight.
            </p>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="group border-2 overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-80 w-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">GA</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#03202F]/95 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-white">
                    Ghalib brings deep Saudi market knowledge and an extensive local network built through investments in real estate and hospitality across the Kingdom. His firsthand experience navigating the Saudi market gives Numa Rivera a foundational edge in identifying and executing the right opportunities.
                  </p>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">Ghalib Alenazi</h3>
                <p className="text-sm text-gray-600">Co-Founder</p>
              </CardContent>
            </Card>
            <Card className="group border-2 overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-80 w-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">JM</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#03202F]/95 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-white">
                    Jesse brings American entrepreneurial discipline with a proven track record of building ventures in tourism and real estate across both the United States and Saudi Arabia. His cross-border experience gives Numa Rivera a unique ability to structure opportunities that work for both American and Saudi stakeholders.
                  </p>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">Jesse Martin</h3>
                <p className="text-sm text-gray-600">Co-Founder</p>
              </CardContent>
            </Card>
            <Card className="group border-2 overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative h-80 w-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400">BW</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#03202F]/95 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-white">
                    Buster brings a focused combination of real estate investment expertise, financial analysis, and business development experience to Numa Rivera. He holds a Master&apos;s in Land and Property Development from Texas A&M University and has developed a working knowledge of Arabic, giving him a meaningful ability to engage across both the American and Saudi sides of the firm&apos;s operations.
                  </p>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">Buster Wologo</h3>
                <p className="text-sm text-gray-600">VP of Investments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>





      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Numa Rivera was founded to bridge the gap between American capital and expertise and the extraordinary real estate opportunities emerging across Saudi Arabia and the GCC. We are building a firm defined by integrity, disciplined investment thinking, and genuine commitment to the Kingdom&apos;s long-term growth. We are at the beginning of that journey, and we are building it the right way.
            </p>
          </div>
        </div>
      </section>
    </div >
  );
}

