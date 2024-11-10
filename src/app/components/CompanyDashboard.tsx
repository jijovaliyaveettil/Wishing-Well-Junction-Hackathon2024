"use client";
import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from 'recharts';
  
import { 
  Bell, Settings, Home, MessageSquare, Target, 
  BarChart2, Users, Sliders, ChevronLeft, ChevronRight,
  Linkedin, Twitter, Facebook 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CompanyDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const alignmentData = [
    { value: 'Work-Life Balance', advertised: 85, actual: 70 },
    { value: 'Innovation', advertised: 90, actual: 85 },
    { value: 'Collaboration', advertised: 95, actual: 80 },
    { value: 'Growth', advertised: 88, actual: 75 }
  ];

  const interestData = [
    { month: 'Jan', matches: 45 },
    { month: 'Feb', matches: 52 },
    { month: 'Mar', matches: 58 },
    { month: 'Apr', matches: 65 }
  ];

  interface NavItemProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    isCollapsed?: boolean; // Make isCollapsed optional
  }

  const NavItem: React.FC<NavItemProps>  = ({ icon: Icon, label, isCollapsed = false}) => (
    <div className={`flex items-center p-3 my-1 rounded-lg cursor-pointer
      hover:bg-blue-50 transition-colors duration-200
      ${!isCollapsed ? 'justify-start' : 'justify-center'}`}>
      <Icon className="w-5 h-5 text-blue-600" />
      {!isCollapsed && <span className="ml-3 text-slate-600">{label}</span>}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className={`bg-white shadow-md transition-all duration-300 flex flex-col 
        border-r border-slate-100
        ${isCollapsed ? 'w-16' : 'w-64'}`}>
        <div className="p-4 flex justify-between items-center border-b border-slate-100">
          <img
            src="/images/company_logo.png"
            alt="CompanyLogo"
            className="w-8 h-8 rounded-full bg-black"
          />
          {!isCollapsed && (
            <span className="font-bold text-xl text-blue-600">
              <a href="/" className="font-bold text-xl text-blue-600">
                Wishing Well
              </a>
            </span>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full hover:bg-blue-50 text-blue-600 transition-colors duration-200"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
        
        <div className="flex-1 py-4">
          <NavItem icon={Home} label="Overview" />
          <NavItem icon={MessageSquare} label="Employee Feedback" />
          <NavItem icon={Target} label="Values Alignment" />
          <NavItem icon={BarChart2} label="Survey Insights" />
          <NavItem icon={Users} label="User Matches" />
          <NavItem icon={Sliders} label="Settings" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 border-b border-slate-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/images/wellness-tech-logo.png" alt="Company Logo" className="rounded-lg" />
              <h1 className="text-xl font-semibold text-slate-700">Wellness Tech</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-blue-50 text-slate-600 transition-colors duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-blue-50 text-slate-600 transition-colors duration-200">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
              {/* <div className="flex items-center bg-slate-50 py-1 px-3 rounded-full"> */}
                <img src="/images/john_smith.webp" alt="Profile" className="w-8 h-8 rounded-full" />
                <span className="ml-2 text-slate-600">John Smith</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-slate-700">Adherence Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <p className="text-slate-500">Overall value alignment</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-slate-700">Employee Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">4.2/5</div>
                <p className="text-slate-500">Based on recent reviews</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <CardTitle className="text-slate-700">New Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">24</div>
                <p className="text-slate-500">This month</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-slate-700">Values Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={alignmentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="value" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="advertised" fill="#bfdbfe" name="Advertised" />
                      <Bar dataKey="actual" fill="#60a5fa" name="Actual" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-slate-700">Interest Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={interestData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="matches" 
                        stroke="#60a5fa"
                        strokeWidth={2}
                        dot={{ fill: '#60a5fa' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Feedback Section */}
          <Card className="mb-6 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-700">Recent Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert className="bg-blue-50 border-blue-100">
                  <AlertDescription className="text-slate-600">
                    "Great work environment and strong emphasis on work-life balance. 
                    Would love to see more growth opportunities."
                  </AlertDescription>
                </Alert>
                <Alert className="bg-green-50 border-green-100">
                  <AlertDescription className="text-slate-600">
                    "The company values innovation, but we need more resources to 
                    actually implement new ideas."
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-100 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-slate-500">
              Connecting you with the employees who believe in your mission
            </div>
            <div className="flex space-x-4">
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" />
              <Facebook className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CompanyDashboard;