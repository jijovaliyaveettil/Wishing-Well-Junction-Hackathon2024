"use client";
import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Clipboard, Handshake, TrendingUp, Star, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const companies = [
    { name: "TechCare Inc", logo: "/api/placeholder/64/64", values: ["Flexible Hours", "Mental Health Support", "Growth-Oriented"] },
    { name: "Balance Labs", logo: "/api/placeholder/64/64", values: ["4-Day Workweek", "Remote-First", "Wellness Programs"] },
    { name: "Mindful Solutions", logo: "/api/placeholder/64/64", values: ["Work-Life Balance", "Health Benefits", "Learning Budget"] }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      image: "/api/placeholder/48/48",
      quote: "Finding a company that values my mental well-being has transformed my career."
    },
    {
      name: "James Wilson",
      role: "Software Engineer",
      image: "/api/placeholder/48/48",
      quote: "The matching process helped me find a workplace where I can truly be myself."
    }
  ];

  const blogPosts = [
    {
      title: "5 Signs of a Healthy Company Culture",
      image: "/api/placeholder/200/120",
      preview: "Learn to identify workplaces that prioritize employee well-being..."
    },
    {
      title: "Building Work-Life Balance in Tech",
      image: "/api/placeholder/200/120",
      preview: "Practical strategies for maintaining balance in fast-paced environments..."
    },
    {
      title: "The Future of Workplace Wellness",
      image: "/api/placeholder/200/120",
      preview: "Emerging trends in corporate well-being programs..."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* <Handshake className="w-6 h-6 text-blue-600" /> */}
                  <img
                src="/images/company_logo.png"
                alt="CompanyLogo"
                className="w-8 h-8 rounded-full bg-black"
              />
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-800">Wishing Well</span>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex space-x-6">
                <a href="/companydashboard" className="text-gray-600 hover:text-blue-600">Company Dashboard</a>
                <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">User Dashboard</Link>
                <a href="#" className="text-gray-600 hover:text-blue-600">About Us</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Blogs</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
              </nav>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-blue-600">Log In</button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700">
                Sign Up
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for companies..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Find a workplace that aligns with your values and supports your well-being
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover companies with cultures that prioritize mental health, growth, and work-life balance. 
              Because thriving at work should be as natural as matching your skills.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-lg hover:from-blue-600 hover:to-blue-700 transform transition hover:scale-105">
              Start Your Journey
            </button>
          </div>
          <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full">
            {/* <img
              src="/api/placeholder/800/600"
              alt="Happy workplace"
              className="w-full h-full object-cover rounded-l-3xl"
            /> */}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Clipboard />, title: "Take the Survey", description: "Tell us about your values and workplace expectations." },
              { icon: <Handshake />, title: "Get Matched", description: "We match you with companies that share your ideals." },
              { icon: <TrendingUp />, title: "Thrive Together", description: "Connect with employers who help you grow and recharge." }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  {React.cloneElement(step.icon, { className: "w-8 h-8 text-blue-600" })}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Companies</h2>
          <div className="relative">
            <button 
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {companies.map((company, index) => (
                  <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-full" />
                          <h3 className="ml-4 text-xl font-semibold">{company.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {company.values.map((value, vIndex) => (
                            <span key={vIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                              {value}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setCurrentSlide(Math.min(companies.length - 1, currentSlide + 1))}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">
              See All Companies
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                      <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.preview}</p>
                    <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Our Mission</a></li>
                <li><a href="#" className="hover:text-blue-300">Team</a></li>
                <li><a href="#" className="hover:text-blue-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Blog</a></li>
                <li><a href="#" className="hover:text-blue-300">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-300"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="hover:text-blue-300"><Facebook className="w-6 h-6" /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>© 2024 WorkMatch. Helping you thrive at work.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;