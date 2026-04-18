import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <span className="text-[24px] font-extrabold text-brand-600 tracking-tight">
              BLIVE MART
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">Quyền Lợi</a>
            <a href="#about" className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors">Về Chúng Tôi</a>
            <a href="#vision" className="text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors">Tầm Nhìn</a>
            <a href="#contact" className="px-5 py-2.5 border border-purple-600 text-purple-600 text-sm font-semibold rounded-[8px] hover:bg-purple-50 transition-colors">
              Đăng Ký Đối Tác
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#benefits" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Quyền Lợi</a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Về Chúng Tôi</a>
            <a href="#vision" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Tầm Nhìn</a>
            <a href="#contact" className="block px-3 py-2 text-base font-bold text-purple-600 rounded-md hover:bg-purple-50" onClick={() => setIsMenuOpen(false)}>Đăng Ký Đối Tác</a>
          </div>
        </div>
      )}
    </nav>
  );
}
