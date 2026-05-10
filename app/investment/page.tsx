import { Card, CardContent } from "@/components/ui/card";

export default function Investment() {
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
              Strategic Real Estate Investment Across the Region
            </h1>
            <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Numa Rivera is actively building its investment portfolio across Saudi Arabia&apos;s key real estate sectors. We take a disciplined, partnership-driven approach to identifying and developing high-potential opportunities aligned with Vision 2030.
            </p>
          </div>
        </div>
      </section>

      {/* Local Investment Focus */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">What We Invest In</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Residential Developments</h3>
                <p className="text-gray-600">
                  Premium housing solutions designed to meet the evolving demands of Saudi Arabia&apos;s growing urban population.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Commercial Real Estate</h3>
                <p className="text-gray-600">
                  Grade-A office and retail spaces that empower businesses and drive the Kingdom&apos;s economic diversification.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Mixed-Use Projects</h3>
                <p className="text-gray-600">
                  Integrated developments that seamlessly blend living, working, and leisure to create vibrant, sustainable communities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Hospitality & Tourism</h3>
                <p className="text-gray-600">
                  World-class hospitality assets supporting Saudi Arabia&apos;s emergence as a premier global tourism destination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>




      {/* Investment Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Global Standards</h3>
                <p className="text-gray-600">
                  We apply institutional-grade analysis and rigorous underwriting to every opportunity we evaluate.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Local Intelligence</h3>
                <p className="text-gray-600">
                  Our deep Saudi roots give us access and insight that no outside firm can replicate.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Partnership First</h3>
                <p className="text-gray-600">
                  We don&apos;t just invest—we build long-term relationships with developers, landowners, and government entities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="bg-[#03202F] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl font-medium leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Numa Rivera is actively building its investment portfolio across Saudi Arabia&apos;s key real estate sectors. We take a disciplined, partnership-driven approach to identifying and developing high-potential opportunities aligned with Vision 2030. We are currently evaluating our inaugural investments across the GCC.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

