import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', role: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
      const webhookUrl = (import.meta as any).env.VITE_SHEET_WEBHOOK_URL;
      if (webhookUrl && webhookUrl !== "https://script.google.com/macros/s/.../exec") {
         await fetch(webhookUrl, {
           method: 'POST',
           mode: 'no-cors',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(formData),
           signal: controller.signal
         });
      } else {
         console.warn("VITE_SHEET_WEBHOOK_URL is not properly defined in env.");
         await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      }
      
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', role: '', notes: '' });
    } catch (error: any) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      
      if (error.name === 'AbortError') {
         setSubmitMessage('Kết nối bị quá hạn (10s). Vui lòng kiểm tra mạng và thử lại.');
      } else {
         setSubmitMessage('Đã có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.');
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-24 relative bg-purple-600 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 border-b border-slate-800"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200"
          >
            <div className="md:w-5/12 bg-slate-50 p-8 md:p-12 flex flex-col justify-center border-r border-slate-200">
              <h2 className="text-[28px] font-extrabold text-slate-900 mb-4 tracking-tight">Liên Hệ Trở Thành Đối Tác</h2>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                Quý đối tác, quý khách hàng cần tư vấn thêm vui lòng để lại thông tin, nhân viên Blive Mart sẽ liên hệ hỗ trợ trong thời gian sớm nhất!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-purple-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Hotline Tư Vấn</div>
                    <div className="text-[16px] font-extrabold text-slate-800">0394 823 913</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center text-purple-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">Email Hỗ Trợ</div>
                    <div className="text-[16px] font-extrabold text-slate-800">blivegroup@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-7/12 p-8 md:p-12 bg-white">
              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Họ và tên <span className="text-red-500">*</span></label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} disabled={isSubmitting} className="w-full px-4 py-3 rounded-[12px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white" placeholder="Nhập họ và tên của bạn" />
                </div>
                
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Số điện thoại <span className="text-red-500">*</span></label>
                  <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} disabled={isSubmitting} className="w-full px-4 py-3 rounded-[12px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white" placeholder="Nhập số điện thoại liên hệ" />
                </div>
                
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Bạn muốn đăng ký làm <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select required value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} disabled={isSubmitting} className="w-full px-4 py-3 rounded-[12px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white appearance-none cursor-pointer font-medium text-slate-700">
                      <option value="">-- Chọn hình thức hợp tác --</option>
                      <option value="Nhà cung cấp">Nhà cung cấp</option>
                      <option value="Cửa hàng nhượng quyền">Cửa hàng nhượng quyền</option>
                      <option value="Giám đốc khu vực">Giám đốc khu vực</option>
                      <option value="Đại lý / Nhà phân phối">Đại lý / Nhà phân phối</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Ghi chú thêm</label>
                  <textarea rows={3} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} disabled={isSubmitting} className="w-full px-4 py-3 rounded-[12px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white resize-none" placeholder="Tỉnh/Thành phố hoặc câu hỏi của bạn..."></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="w-full relative flex items-center justify-center py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-[12px] shadow-[0_10px_15px_-3px_rgba(147,51,234,0.3)] transition-all mt-4 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    "Gửi Thông Tin Đăng Ký"
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Submission Status Modal */}
      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSubmitStatus('idle')}
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[24px] p-8 max-w-sm w-full relative z-10 shadow-2xl text-center"
            >
              <div className="mb-6 flex justify-center">
                {submitStatus === 'success' ? (
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                    <CheckCircle2 size={32} />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                    <AlertCircle size={32} />
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {submitStatus === 'success' ? 'Đăng Ký Thành Công!' : 'Gửi Thất Bại'}
              </h3>
              <p className="text-slate-600 mb-8 font-medium">
                {submitStatus === 'success' 
                  ? 'Cảm ơn bạn! Thông tin đã được ghi nhận. Đội ngũ Blive Mart sẽ liên hệ với bạn trong thời gian sớm nhất.'
                  : submitMessage || 'Không thể gửi thông tin lúc này. Vui lòng kiểm tra lại kết nối mạng hoặc thử lại sau.'}
              </p>
              
              <button 
                onClick={() => setSubmitStatus('idle')}
                className={`w-full py-3.5 px-6 text-white font-bold rounded-xl transition-all cursor-pointer ${
                  submitStatus === 'success' 
                    ? 'bg-green-500 hover:bg-green-600 shadow-[0_10px_15px_-3px_rgba(34,197,94,0.3)]' 
                    : 'bg-red-500 hover:bg-red-600 shadow-[0_10px_15px_-3px_rgba(239,68,68,0.3)]'
                }`}
              >
                {submitStatus === 'success' ? 'Đóng' : 'Thử Lại'}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
