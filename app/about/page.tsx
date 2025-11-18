import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="container relative z-20 mx-auto flex h-full items-center px-4">
          <div className="max-w-3xl text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              About Numa Rivera
            </h1>
            <p className="text-xl text-amber-100">
              Your trusted partner in Saudi Arabian real estate excellence since [Year]
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Numa Rivera was founded with a vision to transform the real estate landscape in Saudi Arabia.
                  We recognized the need for a trusted, professional, and client-focused real estate service
                  that could navigate the unique opportunities and challenges of the Saudi market.
                </p>
                <p>
                  Over the years, we have built a reputation for excellence, integrity, and unparalleled
                  market knowledge. Our team of experienced professionals is dedicated to helping clients
                  find their perfect property or make strategic real estate investments.
                </p>
                <p>
                  Today, we are proud to be one of the leading real estate firms in Saudi Arabia, serving
                  both local and international clients with the highest standards of professionalism and care.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-96 w-full rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Company Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Integrity</h3>
                <p className="text-gray-600">
                  We conduct our business with the highest ethical standards, ensuring transparency
                  and honesty in every transaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Client First</h3>
                <p className="text-gray-600">
                  Your goals and satisfaction are our top priority. We work tirelessly to exceed
                  your expectations and deliver exceptional results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">Innovation</h3>
                <p className="text-gray-600">
                  We embrace modern technology and innovative approaches to provide you with
                  the best real estate experience possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Meet the experts behind Numa Rivera
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-64 w-full bg-gradient-to-br from-amber-500/20 to-amber-700/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">Team Member {i}</span>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-1 text-xl font-semibold text-gray-900">Name Here</h3>
                  <p className="mb-3 text-sm text-amber-600">Position Title</p>
                  <p className="text-sm text-gray-600">
                    Brief description of team member&apos;s expertise and role in the company.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">XXX+</div>
              <div className="text-amber-100">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">XXX+</div>
              <div className="text-amber-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">XX+</div>
              <div className="text-amber-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">XX+</div>
              <div className="text-amber-100">Expert Agents</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
