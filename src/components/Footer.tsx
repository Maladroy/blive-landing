import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[20px] font-extrabold text-white tracking-tight">
                BLIVE MART
              </span>
            </div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-[13px]">Công Ty Cổ Phần Tập Đoàn Blive</h3>
            <div className="flex gap-2">
              <MapPin size={18} className="shrink-0 text-slate-500 mt-0.5" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span><strong className="text-slate-300">Văn phòng làm việc:</strong> Nhà máy Bell Đức, Thôn Thượng Đồng, Xã Hiển Khánh, Tỉnh Ninh Bình</span>
                </li>
                <li className="flex items-start gap-3">
                  <span><strong className="text-slate-300">Văn phòng Blive Mart Hà Nội:</strong> BT13-21, Phú Lương, Hà Đông, Hà Nội</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-[13px]">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-slate-500" />
                <span className="text-white font-semibold">0394.823.913</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-slate-500" />
                <span>blivegroup@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-[13px]">Thanh Toán</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Ngân hàng: <strong className="text-slate-300">Ngân hàng Việt Nam Thịnh Vượng – VP Bank</strong></li>
              <li>Số tài khoản ngân hàng: <strong className="text-slate-300">286676866</strong></li>
              <li>Mã số thuế: <strong className="text-slate-300">2700898978</strong></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 text-[13px] text-center">
          <p>&copy; 2026 Blive Mart. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
