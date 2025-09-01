import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Shield, LogIn } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "People", path: "/people" },
    { name: "Research Areas", path: "/research" },
    { name: "Publications", path: "/publications" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "News & Events", path: "/news" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Logo.jpg" 
              alt="SESG Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div>
              <span className="font-bold text-lg text-gray-900">SESG Research</span>
              <p className="text-xs text-gray-600 -mt-1">Sustainable Energy & Smart Grid</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Admin Button */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              {isAuthenticated ? (
                <Link
                  to="/admin"
                  className="inline-flex items-center px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-md transition-colors"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Admin Panel
                </Link>
              ) : (
                <Link
                  to="/admin/login"
                  className="inline-flex items-center px-3 py-2 border border-gray-300 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 text-sm font-medium rounded-md transition-colors"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Admin Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Admin Button */}
              <div className="pt-2 border-t border-gray-200">
                {isAuthenticated ? (
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-medium rounded-md transition-colors"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Admin Panel
                  </Link>
                ) : (
                  <Link
                    to="/admin/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-3 py-2 border border-gray-300 hover:border-emerald-300 text-gray-700 hover:text-emerald-700 text-base font-medium rounded-md transition-colors"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Admin Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
