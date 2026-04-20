import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Nhà máy Bell Đức đồng hành chuỗi siêu thị Blive Mart phủ sóng toàn quốc",
    source: "Vietnamnet",
    date: "2026",
    url: "https://vietnamnet.vn/nha-may-bell-duc-dong-hanh-chuoi-sieu-thi-blive-mart-phu-song-toan-quoc-2502128.html"
  },
  {
    id: 2,
    title: "Bell Đức đồng hành triển khai chuỗi siêu thị Blive Mart trên toàn quốc",
    source: "Đời sống Pháp luật",
    date: "2026",
    url: "https://doisongphapluat.com.vn/bell-duc-dong-hanh-trien-khai-chuoi-sieu-thi-blive-mart-tren-toan-quoc-a717519.html"
  },
  {
    id: 3,
    title: "Bell Đức đồng hành triển khai chuỗi siêu thị Blive Mart",
    source: "An ninh Thủ đô",
    date: "2026",
    url: "https://anninhthudo.vn/bell-duc-dong-hanh-trien-khai-chuoi-sieu-thi-blive-mart-post643606.antd"
  },
  {
    id: 4,
    title: "Blive Mart Kick-off 2026: Bell Đức đồng hành chuỗi siêu thị Blive Mart",
    source: "Afamily",
    date: "2026",
    url: "https://afamily.vn/blive-mart-kick-off-2026-bell-duc-dong-hanh-chuoi-sieu-thi-blive-mart-phu-song-toan-quoc-23626033113113744.chn"
  }
];

export default function NewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Using microlink for dynamic website screenshots
  const getScreenshotUrl = (url: string) => {
    return `https://image.thum.io/get/width/600/crop/800/${url}`;
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4"
        >
          <div>
            <h2 className="text-[28px] md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Báo Chí Nói Về Blive Mart</h2>
            <p className="text-slate-500">Những bước tiến chiến lược được truyền thông ghi nhận</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-purple-600 transition-colors shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={scrollRight}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-purple-600 transition-colors shadow-sm"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article, index) => (
            <motion.a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={article.id}
              className="min-w-[280px] md:min-w-[340px] max-w-[340px] flex-shrink-0 snap-start bg-white rounded-[20px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-slate-100">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={getScreenshotUrl(article.url)} 
                  alt={article.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to a placeholder if screenshot generation fails
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1585241936939-f901a1dbfe97?auto=format&fit=crop&w=600&q=80`;
                  }}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  <ExternalLink size={18} className="text-purple-600" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[12px] font-black text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {article.source}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-slate-800 leading-snug line-clamp-3 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <div className="mt-auto pt-4 flex items-center text-[13px] text-slate-400 font-medium">
                  Đọc thêm trên {article.source}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
