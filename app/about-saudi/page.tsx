import { Card, CardContent } from "@/components/ui/card";

export default function AboutSaudi() {
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
              About Saudi Arabia
            </h1>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-8 text-4xl font-bold text-gray-900">Kingdom of Saudi Arabia</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">GDP (PPP Value)</h3>
                  <p className="text-gray-600">$2.25 Trillion USD</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Capital</h3>
                  <p className="text-gray-600">Riyadh</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Currency</h3>
                  <p className="text-gray-600">Saudi Riyal (SAR)</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Middle East, Arabian Peninsula</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Area</h3>
                  <p className="text-gray-600">2,149,690 sq.km</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">Population</h3>
                  <p className="text-gray-600">36.9 million</p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* About Saudi Arabia Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">About Saudi Arabia</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                The Kingdom of Saudi Arabia is a stable economy which lies strategically on the trading routes of Europe, Asia and the Far East. With a history of political stability coupled with favourable international trade agreements and special economic zones, the Kingdom has ensured strong growth in economic output and exports.
              </p>
              <p>
                Traditionally an oil-based economy producing approximately 10 million barrels per day, there is a sustained effort from the Government to reduce reliance on hydrocarbons revenue through Saudi Vision 2030, a range of initiatives to diversify the economy, including major infrastructure investment and efforts to develop local small and medium-sized enterprises are key focus areas.
              </p>
              <p>
                Saudi Vision 2030, the country&apos;s long-term development plan, emphasizes the expansion of industry, greater private-sector participation in the economy, and the further boosting of Saudi employment rates across all sectors.
              </p>
              <p>
                With a population of over 36 million, Saudi Arabia is a high-income country that has seen strong growth in economic output and exports in recent years. An extensive network of modern highways and infrastructure crisscrosses across the country, forming a robust infrastructure network. Saudi Arabia has major industrial ports in Jeddah, Dammam, and Jubail, which are strategically located forming key trading hubs and investment zones.
              </p>
              <p>
                Given Numa Rivera&apos;s geographical focus on the Kingdom of Saudi Arabia, the country&apos;s economic climate and development plans underscore the opportunities that Numa Rivera tends to target.
              </p>
              <p>
                Planned privatization programs, aimed at divesting government stakes in state-owned companies, may result in increased business opportunities for the private sector in numerous segments including real estate, education and training, health care and public transportation.
              </p>
              <p>
                Non-oil sectors include construction, real estate, electricity and water, tourism, and manufacturing industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">Culture</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Saudi Arabia is where the traditional co-exists with the modern in harmony. The welcoming people, rich cultural heritage, history, shopping and local treasures make Saudi Arabia a wonderful destination. Traditional architecture sits beside stunning modern developments and bustling souqs. It is a warm and peaceful culture that consistently ranks Saudi Arabia highly on the annual Global Peace Index and as one of the safest destinations in the region.
              </p>
              <p>
                The Kingdom is home to the two holiest cities in Islam, Mecca and Medina, making it a center of spiritual significance for Muslims worldwide. The country&apos;s rich history dates back thousands of years, with archaeological sites and cultural landmarks throughout the nation.
              </p>
              <p>
                Modern Saudi Arabia is experiencing rapid transformation under Vision 2030, with new cultural districts, entertainment venues, and tourism projects opening across the country, while maintaining respect for traditional values and customs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">Saudi Vision 2030</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Saudi Vision 2030 is a strategic framework to reduce Saudi Arabia&apos;s dependence on oil, diversify its economy, and develop public service sectors such as health, education, infrastructure, recreation, and tourism. The vision includes three main pillars:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">A Vibrant Society</h3>
                <p className="text-gray-600">
                  Building a strong foundation for economic transformation by developing a vibrant society with strong roots, fulfilling lives, and strong foundations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">A Thriving Economy</h3>
                <p className="text-gray-600">
                  Creating a diversified economy with opportunities for all, reducing unemployment, and increasing the private sector&apos;s contribution to GDP.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">An Ambitious Nation</h3>
                <p className="text-gray-600">
                  Establishing an effective, transparent, accountable, enabling, and high-performing government that serves citizens and residents effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

