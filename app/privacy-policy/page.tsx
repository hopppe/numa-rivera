import React from "react";

export const metadata = {
  title: "Privacy Policy | Numa Rivera",
  description: "Privacy Policy for Numa Rivera",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[300px] w-full overflow-hidden"
        style={{
          marginTop: '-80px',
          paddingTop: '80px',
          background: 'linear-gradient(to right, #03202F, #03202F)',
        }}
      >
        <div className="container relative z-20 mx-auto flex h-full items-center px-4">
          <div className="max-w-3xl text-white">
            <h1 className="mb-4 text-5xl font-bold leading-tight md:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-gray-700">
            <p className="mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Numa Rivera. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p className="mb-4">
              This policy is in compliance with the Saudi Personal Data Protection Law (PDPL) issued by Royal Decree No. M/19 dated 9/2/1443H. An Arabic version of this policy is available upon request.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. The Data We Collect About You</h2>
            <p className="mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, and title.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p className="mb-4">
              We use your personal data solely to respond to inquiries submitted through our contact form and to communicate with you about potential business opportunities. We do not use your data for marketing, profiling, or any automated decision-making.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or transfer your personal data to third parties. Data may only be shared if required by Saudi law or a competent authority.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cross-Border Transfers</h2>
            <p className="mb-4">
              Your data may be processed or stored on servers located outside the Kingdom of Saudi Arabia. In such cases, we ensure appropriate protections are in place in accordance with PDPL requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Security & Retention</h2>
            <p className="mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Legal Rights</h2>
            <p className="mb-4">
              Under the Saudi PDPL, you have the right to access your personal data, request correction of inaccurate data, request deletion of your data, and withdraw any consent previously given. To exercise these rights, contact us at info@numarivera.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <ul className="list-none mb-6 space-y-2">
              <li><strong>Email:</strong> info@numarivera.com</li>
              <li><strong>Phone:</strong> +966 50 435 7826</li>
              <li><strong>Address:</strong> Riyadh, Saudi Arabia</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
