"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <p className="text-xl" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
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
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+966 XX XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
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

                <Button type="submit" className="w-full hover:opacity-90 transition-opacity" size="lg" style={{backgroundColor: '#03202F'}}>
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Contact Information</h2>
              <div className="space-y-6">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{backgroundColor: 'rgba(3, 32, 47, 0.1)'}}>
                        <svg className="h-6 w-6" style={{color: '#03202F'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">Office Address</h3>
                        <p className="text-gray-600">
                          [Street Name]<br />
                          Riyadh, Saudi Arabia<br />
                          [Postal Code]
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{backgroundColor: 'rgba(3, 32, 47, 0.1)'}}>
                        <svg className="h-6 w-6" style={{color: '#03202F'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">
                          +966 XX XXX XXXX<br />
                          +966 XX XXX XXXX (WhatsApp)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{backgroundColor: 'rgba(3, 32, 47, 0.1)'}}>
                        <svg className="h-6 w-6" style={{color: '#03202F'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">
                          info@numarivera.com<br />
                          sales@numarivera.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{backgroundColor: 'rgba(3, 32, 47, 0.1)'}}>
                        <svg className="h-6 w-6" style={{color: '#03202F'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Saturday - Thursday: 9:00 AM - 6:00 PM<br />
                          Friday: Closed
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

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Find Us</h2>
          <div className="overflow-hidden rounded-lg">
            <div className="h-96 w-full" style={{background: 'linear-gradient(to bottom right, rgba(3, 32, 47, 0.2), rgba(3, 32, 47, 0.2))'}}>
              <div className="flex h-full items-center justify-center">
                <span className="text-gray-400">Map will be integrated here</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
