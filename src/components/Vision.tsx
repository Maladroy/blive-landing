import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronDown, Handshake, Store, ShieldCheck, Package } from 'lucide-react';

export default function Vision() {
  const [activeValueTab, setActiveValueTab] = useState(0);

  return (
    <section id="vision" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-[0.05]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Vision & Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-[32px] md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">TẦM NHÌN <span className="text-purple-400">2028</span></h2>
              <p className="text-lg text-slate-300 leading-relaxed font-medium">
                Trở thành Hệ sinh thái Tiêu dùng thông minh O2O số 1 Việt Nam, kiến tạo mạng lưới <span className="text-white font-black bg-purple-600/30 px-2 py-0.5 rounded">3000 Siêu Thị Blive Mart</span> hiện đại phủ sóng mọi xã/phường trên toàn quốc.
              </p>
            </div>

            {/* Video Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/JfRflf1CrmQ?autoplay=1&mute=1&loop=1&playlist=JfRflf1CrmQ&controls=0&showinfo=0&rel=0"
                title="Blive Mart ecosystem"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Right: Core Values (Accordion) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Giá Trị Cốt Lõi</h3>
            <div className="space-y-3">
              {[
                {
                  title: 'Đại lý',
                  desc: 'Được phép bán hàng trên phạm vi toàn quốc. Được hưởng mức giá chiết khấu cực kỳ hấp dẫn trực tiếp từ nhà máy. Mô hình kinh doanh "Vốn 0 đồng" – Đại lý không cần bỏ vốn để nhập hàng vẫn có thể bắt đầu khởi nghiệp. Được mua và sử dụng các sản phẩm sinh học chất lượng cao với mức giá chiết khấu ưu đãi tận gốc. Trở thành người kinh doanh thực thụ với quyền phân phối hàng nghìn sản phẩm đa dạng trên nền tảng Blive Mart. Có hệ thống công nghệ để bảo vệ quyền lợi của đại lý từ khách hàng của mình trọn đời',
                  icon: <Handshake size={20} />
                },
                {
                  title: 'Cửa hàng',
                  desc: 'Cung cấp giải pháp nâng cấp toàn diện các cửa hàng mẹ và bé, tạp hóa địa phương thành Siêu thị Blive Mart hiện đại. Tài trợ gói setup hạ tầng trị giá 1,7 tỷ đồng (tủ kệ, bảng biển, vận hành, nhân viên Sales) và miễn phí hoàn toàn phí nhượng quyền. Được Tập đoàn đẩy đơn hàng từ hệ thống Online (Livestream, KOLs) về trực tiếp siêu thị.',
                  icon: <Store size={20} />
                },
                {
                  title: 'Người tiêu dùng',
                  desc: 'Tạo ra cuộc cách mạng "Tiêu dùng hoàn tiền thông minh". Cung cấp hệ sinh thái sản phẩm thiết yếu chất lượng cao (công nghệ sinh học Đức) với giá tận gốc nhà máy Bell Đức và hàng nghìn nhà cung cấp khác, giúp hàng triệu gia đình Việt tiết kiệm từ 30 - 50% các chi phí sinh hoạt trong gia đình.',
                  icon: <ShieldCheck size={20} />
                },
                {
                  title: 'Nhà Phân Phối',
                  desc: 'Vị thế: Trở thành chủ quản độc quyền các nhãn hàng tại khu vực xã/phường với mô hình Khởi nghiệp vốn 0 đồng. Được hưởng chiết khấu hấp dẫn và hoa hồng trọn đời từ của nhãn hàng độc quyền xã phường.\n\nHỗ trợ: Được Tập đoàn đào tạo, hướng dẫn bán hàng bài bản và bảo chứng uy tín thương hiệu để dễ dàng triển khai thị trường.',
                  icon: <Package size={20} />
                }
              ].map((val, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveValueTab(activeValueTab === idx ? -1 : idx)}
                  className={`border transition-all duration-300 cursor-pointer rounded-2xl p-5 ${activeValueTab === idx ? 'bg-purple-600/20 border-purple-500/50' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${activeValueTab === idx ? 'bg-purple-500 text-white' : 'bg-purple-500/20 text-purple-400'}`}>
                      {val.icon}
                    </div>
                    <div className="flex-1 w-full overflow-hidden">
                      <div className="flex justify-between items-center w-full mt-1.5">
                        <h4 className="text-lg font-bold text-white leading-none">{val.title}</h4>
                        <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 shrink-0 ${activeValueTab === idx ? 'rotate-180 text-purple-400' : ''}`} />
                      </div>
                      <AnimatePresence initial={false}>
                        {activeValueTab === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="text-slate-300 text-[14px] leading-relaxed pt-4 whitespace-pre-line border-t border-white/10 mt-4">
                              {val.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
