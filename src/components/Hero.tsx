import React from 'react';
import { motion } from 'motion/react';
import { Handshake, Smartphone, Zap, TrendingUp, Gift } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-purple-600 text-[12px] uppercase tracking-widest font-bold mb-6">
              <Zap size={16} className="text-yellow-500" />
              Hệ Sinh Thái Tiêu Dùng Thông Minh O2O
            </div>
            <h1 className="text-[40px] md:text-[52px] lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Mở rộng mạng lưới <br/>
              <span className="text-purple-600">
                Phân phối 0 Đồng
              </span>
            </h1>
            <p className="text-lg md:text-[18px] text-slate-500 mb-8 max-w-[500px] leading-relaxed">
              Kết nối trực tiếp Nhà cung cấp và Cửa hàng nhượng quyền với hàng triệu khách hàng qua mô hình Siêu thị O2O hiện đại. Bùng nổ doanh số không rủi ro, không chi phí marketing.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact" 
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-[16px] font-semibold rounded-xl shadow-[0_10px_15px_-3px_rgba(147,51,234,0.3)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Handshake size={20} />
                Đăng Ký Đối Tác
              </motion.a>
              <motion.button 
                animate={{ boxShadow: ['0px 0px 0px 0px rgba(147,51,234,0)', '0px 0px 0px 8px rgba(147,51,234,0.2)', '0px 0px 0px 0px rgba(147,51,234,0)'] }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={onOpenModal} 
                className="px-8 py-4 bg-white hover:bg-slate-50 text-purple-600 border border-purple-600 text-[16px] font-semibold rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Smartphone size={20} />
                Khám Phá Ứng Dụng Blive
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-100 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
              <img 
                src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80" 
                alt="Blive Store" 
                className="rounded-2xl w-full h-[400px] object-cover"
              />
              
              {/* Floating Badges */}
              <div className="absolute -left-6 top-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Tỷ lệ giữ chân</div>
                  <div className="text-xl font-extrabold text-slate-800">Tăng vọt 50%</div>
                </div>
              </div>
              
              <div className="absolute -right-6 bottom-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '4s'}}>
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center">
                  <Gift size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase">Chi phí Marketing</div>
                  <div className="text-xl font-extrabold text-slate-800">0 Đồng</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
