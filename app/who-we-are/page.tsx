import { Card, CardContent } from "@/components/ui/card";

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
            <p className="text-xl" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              We bridge the best of East and West, uniting American entrepreneurial acumen and creative, data-driven solutions with profound respect for Saudi tradition and enduring local market expertise.
            </p>
          </div>
        </div>
      </section>

      {/* A Purpose-Built Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">A Purpose-Built Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our multi-national team brings institutional investment rigor and creative financial engineering, partnered with invaluable cultural fluency and deep, actionable local knowledge. Every investment is guided by global standards and local insight.
            </p>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Management Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numa Rivera has an experienced management team with strong investment expertise and a successful track record of adding value to the companies in which it invests.
            </p>
            <h3 className="mt-8 text-2xl font-semibold text-gray-700">What Sets us Apart</h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2 overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative h-80 w-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Team Member Photo</span>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">JM</h3>
                <p className="text-sm text-gray-600">Position Title</p>
              </CardContent>
            </Card>
            <Card className="border-2 overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative h-80 w-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Team Member Photo</span>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">GA</h3>
                <p className="text-sm text-gray-600">Position Title</p>
              </CardContent>
            </Card>
            <Card className="border-2 overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative h-80 w-full bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Team Member Photo</span>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">BW</h3>
                <p className="text-sm text-gray-600">Position Title</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Vision</h3>
              <p className="text-gray-600">
                To be a leading regional real estate investment company from a Saudi base.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Mission</h3>
              <p className="text-gray-600">
                To develop highly successful real estate projects and deliver superior risk adjusted returns to our investors.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Values</h3>
              <p className="text-gray-600">
                Numa Rivera has at its core, the intrinsic values of integrity and commitment to society. Our social responsibility reflects our best practices in every investment we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Details */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Investors First</h4>
                <p className="text-gray-600">
                  Numa Rivera is driven by returns for its investors, focusing on partnerships to deliver exceptional results.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Striving for Excellence</h4>
                <p className="text-gray-600">
                  Numa Rivera strives for the highest standards of excellence and will pursue opportunities in line with its strategy, expertise and vision to become a market leader.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Integrity</h4>
                <p className="text-gray-600">
                  Numa Rivera conducts its business with the highest standard of professionalism, ethics, integrity and business conduct.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Commitment to People</h4>
                <p className="text-gray-600">
                  People are our most valuable asset. Numa Rivera will develop people, reward them for commitment and results, and treat them with respect and fairness.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-gray-900">Commitment to Stakeholders</h4>
                <p className="text-gray-600">
                  Numa Rivera strives and commits to add sustainable value to its shareholders, investors, clients and the community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Building Better Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">BUILDING A BETTER SAUDI ARABIA. ONE STEP AT A TIME.</h2>
            <h3 className="mb-8 text-2xl font-semibold" style={{color: '#03202F'}}>CREATING MARKET-LEADING REAL ESTATE PROJECTS</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-gray-600">
                • Working closely with local and international partners to develop new and innovative real estate projects, which in turn creates new growth opportunities in Saudi Arabia and the adjacent regional and emerging markets
              </p>
              <p className="text-gray-600">
                • Developing and investing in the equity of existing and start-up real estate projects that have robust business models
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                • Building real estate businesses towards sustainable growth to provide expanded investment opportunities for Saudi and regional investors
              </p>
              <p className="text-gray-600">
                • Working with partners to create market-leading real estate companies that deliver excellent returns to shareholders
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

