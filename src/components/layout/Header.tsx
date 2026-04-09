"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNavItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/logo-300px-1.png"
              alt="Antplast Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
                  onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all",
                      openDropdown === item.href ? "opacity-100 visible" : "opacity-0 invisible"
                    )}
                    onMouseEnter={() => setOpenDropdown(item.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Menüyü aç"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100">
            {mainNavItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
