import React from 'react';
import { motion } from 'motion/react';
import { Store, Smartphone, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex flex-col items-center justify-center">
            <h2 className="text-[32px] md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">Blive Mart <span className="text-brand-600">Là Ai?</span></h2>
            <div className="h-1.5 w-24 bg-brand-500 rounded-full mb-6"></div>
          </div>
          <p className="text-[18px] text-slate-600 leading-relaxed font-medium">
            Blive Mart là hệ sinh thái siêu thị tiêu dùng thông minh theo mô hình O2O (Online-to-Offline) tiên phong tại Việt Nam, mang đến bộ giải pháp phân phối với <strong className="text-brand-700">mức vốn 0 Đồng</strong>. Chúng tôi mang lại bệ phóng an toàn nhất để Nhà cung cấp & Cửa hàng nhượng quyền vươn tới doanh số tiền tỷ.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 border border-slate-200 p-8 rounded-[24px] hover:shadow-xl transition-all"
          >
            <div className="bg-brand-100 text-brand-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Store size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Bảo Chứng Thương Hiệu</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Được bảo chứng bởi <strong className="text-slate-800">Tập đoàn Bell Đức</strong> với lịch sử 20 năm vững mạnh. Hệ sinh thái sở hữu 5 nhà máy lớn cùng dây chuyền sản xuất trên 400 mã sản phẩm sinh học cao cấp.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-600 border border-brand-500 text-white p-8 rounded-[24px] shadow-lg shadow-brand-600/20 transform hover:-translate-y-2 transition-transform"
          >
            <div className="bg-white/20 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur">
              <Smartphone size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Công Nghệ O2O Độc Quyền</h3>
            <p className="text-brand-50 leading-relaxed font-medium">
              Không phải sàn TMĐT ảo, mà là sự đồng bộ hoàn hảo giữa hệ thống ứng dụng tối tân và mạng lưới <strong className="text-white">3.000 điểm chạm vật lý (Showroom)</strong> phủ sóng trên toàn quốc.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-50 border border-slate-200 p-8 rounded-[24px] hover:shadow-xl transition-all"
          >
            <div className="bg-brand-100 text-brand-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Cộng Hưởng Sức Mạnh</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Chúng tôi giải quyết bài toán phân phối bằng mạng lưới <strong className="text-slate-800">3.000 Nhà Phân Phối Độc Quyền</strong> tại khắp các Xã/Phường, giúp đối tác đạt doanh thu tiền tỷ một cách an toàn.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
