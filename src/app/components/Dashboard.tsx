"use client";
import React, { useState } from 'react';
import { 
    Home, 
    Building2, 
    ClipboardList, 
    Bookmark, 
    LineChart, 
    Settings,
    Bell,
    LogOut,
    ChevronDown,
    Edit3,
    Star,
    Trash2,
    Filter,
    LinkedinIcon,
    TwitterIcon,
    Facebook,
    Users,
    Award,
    TrendingUp,
    Lightbulb,
    Target
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const userName = "Sarah Miller";
  
  // Sample data
  const stats = {
    matches: 42,
    savedReviews: 15,
    surveyCompletion: 85
  };

  const matchedCompanies = [
    {
      name: "Wellness Tech",
      industry: "Technology",
      location: "San Francisco, CA",
      keywords: ["Work-life Balance", "Health Benefits", "Remote-friendly"],
      sentiment: 92,
      logo: "/images/wellness-tech-logo.png"
    },
    {
      name: "Balance Corp",
      industry: "Healthcare",
      location: "Boston, MA",
      keywords: ["Flexible Hours", "Professional Growth", "Inclusive Culture"],
      sentiment: 88,
      logo: "/images/balance-corp-logo.png"
    }
  ];

  const savedReviews = [
    {
      companyName: "Wellness Tech",
      logo: "/images/wellness-tech-logo.png",
      excerpt: "Great work-life balance and supportive management...",
      sentiment: "positive",
      keywords: ["Supportive Culture", "Benefits"]
    }
  ];

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', id: 'home' },
    { icon: <Building2 size={20} />, label: 'Matched Companies', id: 'matches' },
    { icon: <ClipboardList size={20} />, label: 'My Surveys', id: 'surveys' },
    { icon: <Bookmark size={20} />, label: 'Saved Reviews', id: 'reviews' },
    { icon: <LineChart size={20} />, label: 'Insights', id: 'insights' },
    { icon: <Settings size={20} />, label: 'Settings', id: 'settings' }
  ];

  // Profile Card Section
  const renderUserProfile = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          User Profile Traits
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Values Priorities</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="h-4 w-4" />
              Work-Life Balance
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <TrendingUp className="h-4 w-4" />
              Career Growth
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Preferred Work Style</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Settings className="h-4 w-4" />
              Flexible Schedule
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-4 w-4" />
              Team-Oriented
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700">Motivators</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Lightbulb className="h-4 w-4" />
              Learning Opportunities
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Target className="h-4 w-4" />
              Recognition
            </div>
          </div>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Edit Profile
        </button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-md"><img
                src="/images/company_logo.png"
                alt="CompanyLogo"
                className="w-8 h-8 rounded-full bg-black"
              /></div>
            <span className="text-xl font-semibold text-gray-800"><a href="/" className="font-bold text-xl text-blue-600">
            Wishing Well
          </a></span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="/images/sarah.jpeg"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">{userName}</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-2">
          <p className="text-gray-600">Welcome back, {userName}!</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 pr-8">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-6">
            {/* User Profile Traits */}
          {renderUserProfile()}
          {/* Progress Section */}
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-800">Survey Completion</span>
                    <span className="text-sm font-medium text-blue-800">{stats.surveyCompletion}%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                      style={{ width: `${stats.surveyCompletion}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-semibold text-green-700">{stats.matches}</div>
                    <div className="text-sm text-green-600">Matches Found</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-semibold text-purple-700">{stats.savedReviews}</div>
                    <div className="text-sm text-purple-600">Reviews Saved</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-semibold text-orange-700">12</div>
                    <div className="text-sm text-orange-600">New Updates</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Matched Companies */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Matched Companies</CardTitle>
                <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {matchedCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-100 transition-colors"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-12 h-12 rounded"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-900">{company.name}</h3>
                        <span className="text-sm text-green-600">{company.sentiment}% match</span>
                      </div>
                      <p className="text-sm text-gray-500">{company.industry} • {company.location}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {company.keywords.map((keyword, kidx) => (
                          <span
                            key={kidx}
                            className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Saved Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Saved Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savedReviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg border border-gray-100"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={review.logo}
                          alt={review.companyName}
                          className="w-8 h-8 rounded"
                        />
                        <h4 className="font-medium text-gray-900">{review.companyName}</h4>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-1 text-gray-400 hover:text-yellow-500">
                          <Star size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{review.excerpt}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {review.keywords.map((keyword, kidx) => (
                        <span
                          key={kidx}
                          className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">
              Helping you find workplaces where you can thrive
            </p>
            <div className="flex items-center space-x-4">
              <LinkedinIcon size={20} className="text-gray-400 hover:text-gray-600" />
              <TwitterIcon size={20} className="text-gray-400 hover:text-gray-600" />
              <Facebook size={20} className="text-gray-400 hover:text-gray-600" />
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;