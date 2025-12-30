import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function MHC() {
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
              MENA Hospitality Collective
            </h1>
            <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              An American investment holding company with years of experience in real estate investments internationally
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">About MHC</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  MENA Hospitality Collective (MHC) is an American investment holding company with years of experience in real estate investments internationally. We are a collective of experienced professionals who specialize in opening doors for American investment in international markets, particularly in the Middle East and North Africa region.
                </p>
                <p>
                  With a proven track record spanning decades, MHC brings together a team of experts with deep knowledge of international real estate markets, cross-border investment strategies, and the complexities of operating in diverse cultural and regulatory environments.
                </p>
                <p>
                  Our collective experience enables us to identify, evaluate, and execute real estate investment opportunities that deliver superior returns while navigating the unique challenges of international markets.
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Image
                  src="/mhc-logo.png"
                  alt="MHC Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MHC leverages decades of combined experience in international real estate investment and development
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">International Expertise</h3>
                <p className="text-gray-600">
                  Years of experience investing in real estate markets across multiple continents, with deep understanding of local market dynamics, regulations, and cultural considerations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">American Investment Gateway</h3>
                <p className="text-gray-600">
                  Specialized in facilitating American investment in international markets, with established networks and relationships that open doors for successful cross-border transactions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">Real Estate Focus</h3>
                <p className="text-gray-600">
                  Concentrated expertise in real estate investments, from residential and commercial developments to hospitality and mixed-use projects, with a proven ability to identify and execute value-creating opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collective Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">A Collective of Experience</h2>
            <div className="space-y-6 text-lg text-gray-600 max-w-4xl">
              <p>
                MHC is built on the foundation of collective expertise. Our team consists of professionals who have spent years opening doors for American investment internationally, each bringing unique perspectives and specialized knowledge to every project.
              </p>
              <p>
                This collective approach allows us to leverage diverse experiences, networks, and insights to navigate complex international markets and create value for our investors and partners.
              </p>

            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

