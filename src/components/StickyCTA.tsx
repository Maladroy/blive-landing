import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Store } from 'lucide-react';

interface StickyCTAProps {
  show: boolean;
  onOpenModal: () => void;
}

export default function StickyCTA({ show, onOpenModal }: StickyCTAProps) {
  return (
    <>
      {/* Desktop Sticky Banner */}
      <AnimatePresence>
        {show && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 inset-x-0 z-40 bg-slate-900 border-t border-slate-800 p-4 hidden md:flex justify-between items-center shadow-[0_-10px_30px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-4 max-w-7xl mx-auto w-full justify-between lg:px-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-600/20">
                  <Store size={24} />
                </div>
                <div>
                  <div className="text-white font-extrabold text-[16px]">Hợp tác 0 đồng cùng Blive Mart</div>
                  <div className="text-slate-400 text-[13px] font-medium">Nhận ngay đặc quyền phân phối với mức vốn 0đ.</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={onOpenModal} 
                  className="px-6 py-3 bg-slate-800 text-white hover:bg-slate-700 font-semibold rounded-[12px] border border-slate-700 transition-colors cursor-pointer"
                >
                  Tải App
                </button>
                <motion.a 
                  animate={{ boxShadow: ['0px 0px 0px 0px rgba(147,51,234,0)', '0px 0px 0px 5px rgba(147,51,234,0.3)', '0px 0px 0px 0px rgba(147,51,234,0)'] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  href="#contact" 
                  className="px-6 py-3 bg-purple-600 text-white hover:bg-purple-700 font-semibold rounded-[12px] transition-colors shadow-lg shadow-purple-600/20 text-center cursor-pointer"
                >
                  Đăng Ký Đối Tác
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Sticky Banner */}
      <AnimatePresence>
        {show && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 p-3 flex md:hidden items-center justify-between gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]"
          >
            <button 
              onClick={onOpenModal} 
              className="flex-1 py-3 bg-slate-100 text-slate-800 font-bold rounded-xl border border-slate-200 transition-colors text-sm cursor-pointer"
            >
              App Khách Hàng
            </button>
            <motion.a 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              href="#contact" 
              className="flex-1 py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg shadow-purple-600/20 text-center text-sm cursor-pointer"
            >
              Đăng Ký Ngay
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
