import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Download, ShieldCheck, Wallet, ShoppingBag, Gift, TrendingUp } from 'lucide-react';

interface AppSectionProps {
  onOpenModal: () => void;
}

export default function AppSection({ onOpenModal }: AppSectionProps) {
  return (
    <section id="app" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557821552-17105153ceb7?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Chính sách siêu hoàn tiền <br/><span className="text-purple-400">giúp đối tác bùng nổ doanh số</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Sự khác biệt của Blive Mart là chính sách hoàn điểm 50% cho người tiêu dùng. Đây là thỏi nam châm khổng lồ giúp hệ thống cửa hàng và nhà cung cấp liên tục đón lượng khách hàng trung thành mà không mất một đồng chi phí quảng cáo.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                'Tạo phễu khách hàng trung thành quay lại mua sắm liên tục.',
                'Gia tăng giá trị vòng đời khách hàng nhờ cơ chế tiêu dùng thông minh.',
                'Chương trình trợ giá từ Blive giúp đối tác dễ dàng chốt sale.',
                'Đảm bảo biên độ lợi nhuận cao và ổn định cho mọi đối tác bán hàng.'
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-400 shrink-0 mt-0.5" size={24} />
                  <span className="text-slate-200 text-[16px] font-medium">{text}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-purple-400 font-bold text-sm mb-1 uppercase tracking-widest">Cách chúng tôi hoạt động</div>
                <div className="text-2xl font-black text-white">Siêu App Mua Sắm</div>
              </div>
              <motion.button 
                animate={{ boxShadow: ['0px 0px 0px 0px rgba(147,51,234,0)', '0px 0px 0px 6px rgba(147,51,234,0.3)', '0px 0px 0px 0px rgba(147,51,234,0)'] }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={onOpenModal} 
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-[12px] hover:bg-purple-700 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Download size={20} />
                Xem App Demo
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-[85%] sm:w-full max-w-[340px] md:max-w-[400px] lg:max-w-[460px]"
          >
            <div className="absolute inset-0 bg-brand-500 rounded-full blur-[80px] opacity-20"></div>
            {/* Mockup of mobile app */}
            <div className="relative border-[8px] sm:border-[10px] md:border-[12px] border-slate-800 rounded-[3rem] bg-white overflow-hidden shadow-2xl aspect-[9/19]">
              <div className="bg-brand-600 px-6 pt-12 pb-6 text-white rounded-b-3xl shadow-md relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="font-bold text-xl md:text-2xl">Blive Mart</div>
                  <div className="flex gap-2">
                     <ShieldCheck size={22} />
                  </div>
                </div>
                <div className="bg-white/20 p-4 sm:p-5 rounded-2xl backdrop-blur-sm">
                  <div className="text-white/80 text-sm md:text-base mb-1 font-medium">Số dư điểm thưởng</div>
                  <div className="text-3xl md:text-4xl font-black">500.000 đ</div>
                </div>
              </div>
              <div className="p-4 sm:p-5 space-y-4 md:space-y-6">
                <div className="flex gap-3 md:gap-4 mb-2">
                   <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 md:p-4 text-center transition-colors hover:bg-slate-100">
                      <Wallet className="mx-auto text-brand-600 mb-1 md:mb-2 w-6 h-6 md:w-8 md:h-8" />
                      <div className="text-xs md:text-sm font-bold text-slate-700">Nạp tiền</div>
                   </div>
                   <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 md:p-4 text-center transition-colors hover:bg-slate-100">
                      <ShoppingBag className="mx-auto text-brand-600 mb-1 md:mb-2 w-6 h-6 md:w-8 md:h-8" />
                      <div className="text-xs md:text-sm font-bold text-slate-700">Mua sắm</div>
                   </div>
                   <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-3 md:p-4 text-center transition-colors hover:bg-slate-100">
                      <Gift className="mx-auto text-brand-600 mb-1 md:mb-2 w-6 h-6 md:w-8 md:h-8" />
                      <div className="text-xs md:text-sm font-bold text-slate-700">Ưu đãi</div>
                   </div>
                </div>
                <div className="h-32 md:h-40 bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 flex flex-col justify-center">
                   <div className="font-extrabold text-brand-600 text-lg md:text-xl mb-1">Flash Sale 50%</div>
                   <div className="text-sm md:text-base text-slate-600 font-medium">Hàng trăm sản phẩm giá tận gốc</div>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                   <div className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm flex flex-col relative">
                      <div className="p-4 md:p-5 text-center">
                         <div className="text-[24px] md:text-[28px] font-black text-brand-600">+8.5k</div>
                         <div className="text-[11px] md:text-[13px] font-bold text-slate-800 line-clamp-1 mb-0.5">Khách hàng mới</div>
                      </div>
                   </div>
                   <div className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm flex flex-col relative">
                      <div className="p-4 md:p-5 text-center">
                         <div className="text-[24px] md:text-[28px] font-black text-brand-600">30%</div>
                         <div className="text-[11px] md:text-[13px] font-bold text-slate-800 line-clamp-1 mb-0.5">Tỷ lệ quay lại</div>
                      </div>
                   </div>
                </div>
                <div>
                  <div className="font-extrabold mb-2 md:mb-3 text-[14px] md:text-[16px] text-slate-800">Hiệu suất tháng</div>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                     <div className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm flex flex-col relative">
                        <div className="p-4 md:p-5 text-center">
                           <div className="text-[18px] md:text-[22px] font-black text-brand-600">12.4k</div>
                           <div className="text-[11px] md:text-[13px] font-bold text-slate-800 line-clamp-1 mb-0.5">Đơn hàng</div>
                        </div>
                     </div>
                     <div className="bg-white rounded-[16px] overflow-hidden border border-slate-200 shadow-sm flex flex-col relative">
                        <div className="p-4 md:p-5 text-center">
                           <div className="text-[18px] md:text-[22px] font-black text-brand-600">Top 1</div>
                           <div className="text-[11px] md:text-[13px] font-bold text-slate-800 line-clamp-1 mb-0.5">Khu vực</div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
