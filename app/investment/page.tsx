import { Card, CardContent } from "@/components/ui/card";

export default function Investment() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container relative z-20 mx-auto flex h-full items-center px-4">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Our Investments
            </h1>
            <p className="text-xl text-amber-100">
              Numa Rivera endeavors to be a leading real estate investor with a commitment to sustainable investments that are shaping the future of Saudi Arabia&apos;s real estate sector while driving the Kingdom&apos;s economic transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Investment Strategy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numa Rivera is developing a portfolio of high-quality real estate investments across Saudi Arabia. Joining forces with top-tier global strategic partners and renowned investment managers, Numa Rivera acts as a leading real estate investment company to deliver a strategy focused on achieving attractive financial returns and long-term value for the Kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Local Investment Focus */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Local Real Estate Investment</h2>
            <p className="text-lg text-gray-600 mb-8">
              Locally, Numa Rivera drives strategic and sustainable diversification in line with Vision 2030 objectives and is supporting key real estate sectors through investment opportunities, unlocking growth potential in the private sector. Numa Rivera remains committed to holding a substantial and diversified portfolio of real estate investments in the Kingdom, including residential, commercial, and mixed-use developments.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Residential Developments</h3>
                <p className="text-gray-600">
                  Investing in premium residential projects including luxury villas, apartments, and gated communities that meet the growing demand for quality housing in Saudi Arabia.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Commercial Real Estate</h3>
                <p className="text-gray-600">
                  Developing and investing in office buildings, retail spaces, and commercial complexes that support the Kingdom&apos;s economic diversification goals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Mixed-Use Projects</h3>
                <p className="text-gray-600">
                  Creating integrated developments that combine residential, commercial, and retail spaces to build vibrant communities aligned with Vision 2030.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Hospitality & Tourism</h3>
                <p className="text-gray-600">
                  Investing in hotels, resorts, and tourism infrastructure to support Saudi Arabia&apos;s growing tourism sector and Vision 2030 objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Sectors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Strategic Real Estate Sectors We Are Investing In</h2>
            <p className="text-lg text-gray-600">
              Numa Rivera has worked to incentivize Saudi Arabia&apos;s private sector by investing in new and promising real estate sectors that can create job opportunities, develop capabilities, and allow the local economy to compete regionally and internationally.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Residential Development",
              "Commercial Real Estate",
              "Mixed-Use Projects",
              "Hospitality & Tourism",
              "Industrial Real Estate",
              "Healthcare Facilities",
              "Educational Infrastructure",
              "Retail & Shopping Centers",
              "Logistics & Warehousing"
            ].map((sector, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{sector}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sources of Funding */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Sources of Funding</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Numa Rivera is required to invest and reinvest available funds in order to achieve its objectives for the benefit of the public welfare, support economic development, and diversify sources of income for Saudi Arabia. Hence, when considering dividends declaration, the Board of Directors shall consider Numa Rivera&apos;s mission, vision, and long-term sustainability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 text-center">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Capital Injections</h3>
                <p className="text-gray-600">From investors and partners</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Asset Transfers</h3>
                <p className="text-gray-600">Real estate assets transferred to Numa Rivera</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Loans & Debt</h3>
                <p className="text-gray-600">Financing instruments and debt facilities</p>
              </CardContent>
            </Card>
            <Card className="border-2 text-center">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Retained Earnings</h3>
                <p className="text-gray-600">Earnings from successful investments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Investment Approach</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Due Diligence</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of market conditions, location viability, and project feasibility before making investment decisions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Strategic Partnerships</h3>
                <p className="text-gray-600">
                  Collaborating with leading developers, contractors, and financial institutions to ensure project success and optimal returns.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Value Creation</h3>
                <p className="text-gray-600">
                  Active management and strategic development to maximize value for investors while contributing to Saudi Arabia&apos;s economic growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

