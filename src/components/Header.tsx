"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b border-white/10 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              İstanbul Mobil Taşıma
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <Link href="/#ilceler" className="text-base font-medium text-white hover:text-blue-400 transition-colors">
              İlçeler
            </Link>
            <Link href="/#hizmetler" className="text-base font-medium text-white hover:text-blue-400 transition-colors">
              Hizmetler
            </Link>
            <div className="flex items-center space-x-4">
              <a href="tel:+905456564020" className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <PhoneIcon className="w-5 h-5 mr-2" />
                0545 656 40 20
              </a>
              <a href="https://wa.me/905456564020" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
                <ChatBubbleLeftIcon className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Ana menüyü aç</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#ilceler" className="text-base font-medium text-white hover:text-blue-400 transition-colors">
                İlçeler
              </Link>
              <Link href="/#hizmetler" className="text-base font-medium text-white hover:text-blue-400 transition-colors">
                Hizmetler
              </Link>
              <div className="flex flex-col space-y-3">
                <a href="tel:+905456564020" className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  0545 656 40 20
                </a>
                <a href="https://wa.me/905456564020" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
                  <ChatBubbleLeftIcon className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 