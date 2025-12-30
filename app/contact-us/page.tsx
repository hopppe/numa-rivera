"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const PRIORITY_COUNTRIES = [
  { name: "Saudi Arabia", code: "+966", iso: "SA", flag: "🇸🇦" },
  { name: "United States", code: "+1", iso: "US", flag: "🇺🇸" },
  { name: "United Arab Emirates", code: "+971", iso: "AE", flag: "🇦🇪" },
  { name: "Qatar", code: "+974", iso: "QA", flag: "🇶🇦" },
  { name: "Bahrain", code: "+973", iso: "BH", flag: "🇧🇭" },
  { name: "Oman", code: "+968", iso: "OM", flag: "🇴🇲" },
];

const OTHER_COUNTRIES = [
  { name: "Afghanistan", code: "+93", iso: "AF", flag: "🇦🇫" },
  { name: "Albania", code: "+355", iso: "AL", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", iso: "DZ", flag: "🇩🇿" },
  { name: "Argentina", code: "+54", iso: "AR", flag: "🇦🇷" },
  { name: "Australia", code: "+61", iso: "AU", flag: "🇦🇺" },
  { name: "Austria", code: "+43", iso: "AT", flag: "🇦🇹" },
  { name: "Bangladesh", code: "+880", iso: "BD", flag: "🇧🇩" },
  { name: "Belgium", code: "+32", iso: "BE", flag: "🇧🇪" },
  { name: "Brazil", code: "+55", iso: "BR", flag: "🇧🇷" },
  { name: "Canada", code: "+1", iso: "CA", flag: "🇨🇦" },
  { name: "China", code: "+86", iso: "CN", flag: "🇨🇳" },
  { name: "Denmark", code: "+45", iso: "DK", flag: "🇩🇰" },
  { name: "Egypt", code: "+20", iso: "EG", flag: "🇪🇬" },
  { name: "France", code: "+33", iso: "FR", flag: "🇫🇷" },
  { name: "Germany", code: "+49", iso: "DE", flag: "🇩🇪" },
  { name: "Greece", code: "+30", iso: "GR", flag: "🇬🇷" },
  { name: "India", code: "+91", iso: "IN", flag: "🇮🇳" },
  { name: "Indonesia", code: "+62", iso: "ID", flag: "🇮🇩" },
  { name: "Iraq", code: "+964", iso: "IQ", flag: "🇮🇶" },
  { name: "Ireland", code: "+353", iso: "IE", flag: "🇮🇪" },
  { name: "Italy", code: "+39", iso: "IT", flag: "🇮🇹" },
  { name: "Japan", code: "+81", iso: "JP", flag: "🇯🇵" },
  { name: "Jordan", code: "+962", iso: "JO", flag: "🇯🇴" },
  { name: "Kuwait", code: "+965", iso: "KW", flag: "🇰🇼" },
  { name: "Lebanon", code: "+961", iso: "LB", flag: "🇱🇧" },
  { name: "Malaysia", code: "+60", iso: "MY", flag: "🇲🇾" },
  { name: "Mexico", code: "+52", iso: "MX", flag: "🇲🇽" },
  { name: "Morocco", code: "+212", iso: "MA", flag: "🇲🇦" },
  { name: "Netherlands", code: "+31", iso: "NL", flag: "🇳🇱" },
  { name: "New Zealand", code: "+64", iso: "NZ", flag: "🇳🇿" },
  { name: "Nigeria", code: "+234", iso: "NG", flag: "🇳🇬" },
  { name: "Norway", code: "+47", iso: "NO", flag: "🇳🇴" },
  { name: "Pakistan", code: "+92", iso: "PK", flag: "🇵🇰" },
  { name: "Philippines", code: "+63", iso: "PH", flag: "🇵🇭" },
  { name: "Poland", code: "+48", iso: "PL", flag: "🇵🇱" },
  { name: "Portugal", code: "+351", iso: "PT", flag: "🇵🇹" },
  { name: "Russia", code: "+7", iso: "RU", flag: "🇷🇺" },
  { name: "Singapore", code: "+65", iso: "SG", flag: "🇸🇬" },
  { name: "South Africa", code: "+27", iso: "ZA", flag: "🇿🇦" },
  { name: "South Korea", code: "+82", iso: "KR", flag: "🇰🇷" },
  { name: "Spain", code: "+34", iso: "ES", flag: "🇪🇸" },
  { name: "Sweden", code: "+46", iso: "SE", flag: "🇸🇪" },
  { name: "Switzerland", code: "+41", iso: "CH", flag: "🇨🇭" },
  { name: "Thailand", code: "+66", iso: "TH", flag: "🇹🇭" },
  { name: "Turkey", code: "+90", iso: "TR", flag: "🇹🇷" },
  { name: "Ukraine", code: "+380", iso: "UA", flag: "🇺🇦" },
  { name: "United Kingdom", code: "+44", iso: "GB", flag: "🇬🇧" },
  { name: "Vietnam", code: "+84", iso: "VN", flag: "🇻🇳" },
  { name: "Yemen", code: "+967", iso: "YE", flag: "🇾🇪" },
].sort((a, b) => a.name.localeCompare(b.name));

const ALL_COUNTRIES = [...PRIORITY_COUNTRIES, ...OTHER_COUNTRIES];

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+966",
    countryIso: "SA",
    countryFlag: "🇸🇦",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: "" });

  const handleCountrySelect = (country: typeof ALL_COUNTRIES[0]) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: country.code,
      countryIso: country.iso,
      countryFlag: country.flag,
    }));
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: "Thank you! Your message has been sent successfully." });
        setFormData({
          name: "",
          email: "",
          countryCode: "+966",
          countryIso: "SA",
          countryFlag: "🇸🇦",
          phone: "",
          message: "",
        });
      } else {
        setStatus({ type: 'error', message: "Something went wrong. Please try again later." });
      }
    } catch (error) {
      console.error(error); // Log error for debugging
      setStatus({ type: 'error', message: "Failed to send message. Please ensure you are connected to the internet." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Get In Touch
            </h1>
            <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Let&apos;s discuss your real estate needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-10 w-[140px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <span className="truncate mr-2 flex items-center gap-2">
                          <span>{formData.countryFlag}</span>
                          <span>{formData.countryCode}</span>
                        </span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>

                      {isOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                          />
                          <div className="absolute top-full left-0 z-50 mt-1 max-h-[300px] w-[280px] overflow-auto rounded-md border bg-white shadow-md">
                            {ALL_COUNTRIES.map(country => (
                              <div
                                key={`${country.iso}-${country.code}`}
                                className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-sm flex items-center justify-between"
                                onClick={() => handleCountrySelect(country)}
                              >
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.name}</span>
                                </span>
                                <span className="text-gray-500 ml-2">{country.code}</span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="XX XXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your real estate needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover:opacity-90 transition-opacity"
                  size="lg"
                  style={{ backgroundColor: '#03202F' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {status.message && (
                  <div className={`p-4 rounded-md ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(3, 32, 47, 0.1)' }}>
                        <svg className="h-6 w-6" style={{ color: '#03202F' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">
                          +966 50 435 7826
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: 'rgba(3, 32, 47, 0.1)' }}>
                        <svg className="h-6 w-6" style={{ color: '#03202F' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">
                          info@numarivera.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
