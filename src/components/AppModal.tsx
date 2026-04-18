import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Smartphone, Gift } from 'lucide-react';

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppModal({ isOpen, onClose }: AppModalProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!isOpen) return;
    
    const targetDate = new Date('2026-06-20T00:00:00+07:00');
    
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-[24px] shadow-2xl relative w-full max-w-md overflow-hidden"
          >
            <div className="absolute top-4 right-4 z-10">
              <button onClick={onClose} className="w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer">
                <X size={18} />
              </button>
            </div>
            
            <div className="bg-purple-600 p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557821552-17105153ceb7?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <div className="w-16 h-16 bg-white rounded-2xl mx-auto flex items-center justify-center text-purple-600 shadow-xl mb-4 relative z-10">
                <Smartphone size={32} />
              </div>
              <h3 className="text-2xl font-black text-white relative z-10 mb-2">Sắp Ra Mắt!</h3>
              <p className="text-purple-100 font-medium relative z-10 text-sm">Siêu ứng dụng mua sắm dành cho hàng triệu người tiêu dùng sẽ chính thức ra mắt vào ngày 20 Tháng 6 năm 2026.</p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-4 gap-3 text-center mb-8">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="text-2xl font-black text-slate-900">{timeLeft.days}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Ngày</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="text-2xl font-black text-slate-900">{timeLeft.hours}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Giờ</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="text-2xl font-black text-slate-900">{timeLeft.minutes}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Phút</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <div className="text-2xl font-black text-slate-900">{timeLeft.seconds}</div>
                  <div className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">Giây</div>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-100 flex items-start gap-4">
                <Gift className="text-purple-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Cơ hội vàng cho Đối tác tiên phong</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">Đăng ký ngay hôm nay để trở thành nhà cung cấp độc quyền, chuẩn bị đón đầu dòng khách hàng khổng lồ ngay khi App ra mắt.</p>
                </div>
              </div>
              
              <button 
                onClick={onClose} 
                className="w-full mt-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
