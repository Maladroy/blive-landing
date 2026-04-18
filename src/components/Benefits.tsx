import React from 'react';
import { motion } from 'motion/react';
import { Package, Store, ShieldCheck, Handshake } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[32px] md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">Đặc Quyền Đối Tác 0 Đồng</h2>
          <p className="text-lg text-slate-500">Khởi nghiệp an toàn, gia tăng thu nhập cùng hệ sinh thái Blive Mart mà không cần phải đầu tư vốn.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 group">
          {[
            { title: 'Nhà Cung Cấp', desc: '0 Đồng Phí lên kệ', icon: <Package size={28} />, bg: 'bg-purple-100', text: 'text-purple-600' },
            { title: 'Cửa Hàng', desc: '0 Đồng Phí nhượng quyền', icon: <Store size={28} />, bg: 'bg-slate-100', text: 'text-slate-700' },
            { title: 'Nhà Phân Phối', desc: '0 Đồng Phí độc quyền', icon: <ShieldCheck size={28} />, bg: 'bg-slate-100', text: 'text-slate-700' },
            { title: 'Đại Lý', desc: '0 Đồng Phí nhập hàng', icon: <Handshake size={28} />, bg: 'bg-slate-100', text: 'text-slate-700' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[24px] p-8 border border-slate-200 transition-all hover:border-purple-200 hover:shadow-sm"
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center ${item.text} mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-[16px] font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
