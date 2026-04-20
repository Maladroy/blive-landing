import React from 'react';
import { motion } from 'motion/react';

interface DisplayAppProductProps {
  onOpenModal: () => void;
}

export default function DisplayAppProduct({ onOpenModal }: DisplayAppProductProps) {
  const products = [
    {
      id: 1,
      name: "Nước giặt xả sinh học Bell Đức 3.5kg",
      price: "165.000 đ",
      image: "prod-1.png"
    },
    {
      id: 2,
      name: "Nước rửa chén sinh học 1L",
      price: "45.000 đ",
      image: "prod-2.png"
    },
    {
      id: 3,
      name: "Nước lau sàn sinh học chiết xuất hoa cúc 1L",
      price: "40.000 đ",
      image: "prod-3.png"
    },
    {
      id: 4,
      name: "Sữa tắm siêu bọt cao cấp 750ml",
      price: "95.000 đ",
      image: "prod-4.png"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-[28px] md:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight mb-3">Sản Phẩm Tiêu Biểu</h2>
          <p className="text-base text-slate-500">Người tiêu dùng có thể mua sắm thông minh, trải nghiệm hàng hiệu với chi phí bình dân trên ứng dụng Blive Mart.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={product.id}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-40 md:h-48 bg-slate-100 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-[13px] md:text-[14px] font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-purple-600 transition-colors">{product.name}</h3>
                <div className="mt-auto pt-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[16px] md:text-[18px] font-black text-purple-600">{product.price}</span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">Giá trên APP</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold rounded-xl transition-colors text-sm cursor-pointer"
          >
            Khám Phá Thêm Sản Phẩm Khác
          </button>
        </div>
      </div>
    </section>
  );
}
