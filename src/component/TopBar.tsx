'use client';

import { useState } from 'react';

export default function TopBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="glass-topbar sticky top-0 z-30 px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4 flex items-center justify-between">
      {/* Search - full on desktop, icon toggle on mobile */}
      <div className="flex-1 max-w-xl relative hidden sm:block">
        <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search controls, policies, incidents..."
          className="neu-input pl-10"
        />
      </div>

      {/* Mobile search icon */}
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className="sm:hidden p-2 rounded-lg hover:bg-primary/[0.05] text-txt-secondary tablet:ml-12"
        aria-label="Search"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
        <div className="relative cursor-pointer">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-txt-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-critical rounded-full"></span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-txt-primary">Admin</p>
            <p className="text-xs text-txt-secondary">Admin@admin.com</p>
          </div>
          <svg className="w-4 h-4 text-txt-muted hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Mobile search expanded */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 p-3 bg-white/90 backdrop-blur-glass border-b border-white/40 sm:hidden">
          <div className="relative">
            <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="neu-input pl-10"
              autoFocus
            />
          </div>
        </div>
      )}
    </div>
  );
}
