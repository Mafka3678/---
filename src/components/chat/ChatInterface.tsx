import { Search, MousePointer2, Palette, Bolt, Share2, MoreHorizontal, PlusCircle, Send, Check, CheckCheck, Trash2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

// Mock Component for missing Lucide icon if needed
const Insights = (props: any) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
);

const consultants = [
  { id: 'seo', name: 'Специалист по SEO', icon: <Search className="w-5 h-5" />, active: true },
  { id: 'ppc', name: 'PPC Менеджер', icon: <MousePointer2 className="w-5 h-5" />, active: false },
  { id: 'strategist', name: 'Стратег', icon: <Insights className="w-5 h-5" />, active: false },
  { id: 'creative', name: 'Креативный директор', icon: <Palette className="w-5 h-5" />, active: false },
];

type MessageStatus = 'sent' | 'delivered' | 'read';

interface Message {
  id: number;
  role: 'bot' | 'user';
  content: string;
  time: string;
  hasData?: boolean;
  status?: MessageStatus;
}

const TypingIndicator = () => (
  <div className="flex gap-2 p-3 bg-surface-container-low border border-surface-container rounded-2xl rounded-tl-none w-fit">
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
      className="w-1.5 h-1.5 bg-primary rounded-full"
    />
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      className="w-1.5 h-1.5 bg-primary rounded-full"
    />
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      className="w-1.5 h-1.5 bg-primary rounded-full"
    />
  </div>
);

const ChatInterface = ({ embedded = false }: { embedded?: boolean }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'bot',
      content: 'Здравствуйте! Я ИИ-консультант агентства "Чат Ботаник". Готов рассказать вам, как мы помогаем бизнесу расти через эффективную лидогенерацию.',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: 2,
      role: 'bot',
      content: 'У нас есть три главных фокуса: максимальная конверсия посадочных страниц, умная защита от ботных заявок и системное снижение стоимости привлечения клиента. О чем рассказать подробнее?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isBotTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessageId = Date.now();
    const newMessage: Message = {
      id: userMessageId,
      role: 'user',
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate message pipeline for status updates
    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === userMessageId ? { ...m, status: 'delivered' } : m));
    }, 1000);

    setTimeout(() => {
      setMessages(prev => prev.map(m => m.id === userMessageId ? { ...m, status: 'read' } : m));
      setIsBotTyping(true);
    }, 2000);

    try {
      // Call backend API instead of direct SDK
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from server');
      }

      const data = await response.json();
      const text = data.text;

      setIsBotTyping(false);
      const botMessage: Message = {
        id: Date.now() + 1,
        role: 'bot',
        content: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setIsBotTyping(false);
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: 'bot',
        content: "Извините, произошла техническая ошибка. Пожалуйста, попробуйте написать позже или свяжитесь с нами напрямую.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setShowClearConfirm(false);
  };

  return (
    <div className={`flex flex-col w-full ${embedded ? 'h-[700px]' : 'h-[calc(100vh-64px)]'} bg-surface py-4 md:py-8 px-4 md:px-8`}>
      <div className="w-full max-w-[1200px] mx-auto h-full bg-white rounded-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-surface-container flex overflow-hidden relative">
        
        {/* Clear Confirm Modal */}
        <AnimatePresence>
          {showClearConfirm && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md p-8"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white border border-surface-container rounded-[20px] p-8 shadow-2xl max-w-sm w-full text-center"
              >
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 tracking-tight">Очистить историю?</h3>
                <p className="text-secondary text-sm mb-8 leading-relaxed">
                  Все сообщения будут удалены безвозвратно. Это действие нельзя отменить.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setShowClearConfirm(false)}
                    className="py-3 px-4 bg-surface-container-low text-primary font-bold rounded-xl hover:bg-surface-container transition-colors"
                  >
                    Отмена
                  </button>
                  <button 
                    onClick={clearChat}
                    className="py-3 px-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all"
                  >
                    Удалить
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <aside className="w-64 bg-surface-container-low border-r border-surface-container flex flex-col p-6 hidden lg:flex">
          <div className="mb-10">
            <h2 className="text-lg font-bold tracking-tight text-primary mb-1">Nexus Brain</h2>
            <p className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest opacity-60">ИИ-консультанты</p>
          </div>
          
          <nav className="space-y-1 flex-1">
            {consultants.map((c) => (
              <button 
                key={c.id}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${
                  c.active ? 'bg-white shadow-sm border border-surface-container text-primary' : 'hover:bg-surface-container-high text-secondary'
                }`}
              >
                <span className={c.active ? 'text-primary' : 'text-on-surface-variant'}>{c.icon}</span>
                <span className="text-xs font-bold tracking-tight">{c.name}</span>
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-surface-container">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-dim overflow-hidden grayscale border border-surface-container">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6MTjv6qP5Bo2JwbTviVh25HZ9jRcpcQsunSLPJv795hV3EGDW45h_kA9Nf4nvuy82ft7HE1HPVg2xy5uhYk3dyPjXQwyYr5uJ66IUrIvc37Vw9oETK_yoPhpN5X7LW9ixeq2JcoxrPtMmD9KqRsu3MGKztsyzp-RIsCnF35Zfe8hkaHAPSq1eLTDj7n-8SgeNpeG3Fpg2-5taQvE1uzcjmJdApQQN3E_7CBcpW655H0b10pfodRAMAgth5QSX2q1Zl57nglx0uZs" alt="UserProfile" />
              </div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-primary truncate">Алекс Мерсер</p>
                <p className="text-[9px] uppercase tracking-widest text-emerald-600 font-bold">Pro Active</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Chat Area */}
        <section className="flex-1 flex flex-col relative bg-white min-w-0">
          {/* Header */}
          <header className="px-6 py-4 border-b border-surface-container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="lg:hidden text-primary">
                <Bolt className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-sm text-primary">Консультация с Чат Ботаник</h3>
                <div className="flex items-center gap-1.5 leading-none mt-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${isBotTyping ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-500'}`}></span>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                    {isBotTyping ? 'Печатает...' : 'Онлайн'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setShowClearConfirm(true)}
                className="p-2 hover:bg-red-50 rounded-lg text-on-surface-variant hover:text-red-500 transition-all group"
                title="Очистить чат"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button className="p-2 hover:bg-surface-container-low rounded-lg text-on-surface-variant transition-colors"><Share2 className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-surface-container-low rounded-lg text-on-surface-variant transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
            </div>
          </header>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-[#fafafb]">
            <div className="flex justify-center">
              <span className="px-3 py-1 rounded-full bg-white border border-surface-container text-on-surface-variant text-[10px] font-bold uppercase tracking-widest shadow-sm">Сегодня</span>
            </div>

            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div 
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 max-w-[90%] md:max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse ml-auto' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 overflow-hidden ${
                    message.role === 'bot' ? 'bg-primary text-white' : 'bg-surface-dim border border-surface-container grayscale'
                  }`}>
                    {message.role === 'bot' ? (
                      <Bolt className="w-3.5 h-3.5" />
                    ) : (
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuASgggNLwDwrihElj4c_DuUwHC2699ck-XU2B6SzlRIhZg8haNZVmICdfXQbxrT1MqXFtu7n3h0wj_c38FsHLLXkzDK432C0qd-F56-Zx9vUJuLFeMRMr1B0psCqBA17TIYcsIsRuGKv7n2A9YyPt8bt7rnr_RgjA-5cjE4b_4vX4L0KM4HT02FJvu3A1TQ3UIJZmg39DGsxNNxv72UvWAXWqcUBwDq_-M7r8Bfn1woUI6sgpGSMGfksnOKO_Kfqw4lRf9l8Vp6Rc8" alt="BotAvatar" />
                    )}
                  </div>
                  <div className={`space-y-1 ${message.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`p-4 rounded-2xl ${
                      message.role === 'bot' 
                        ? 'bg-white border border-surface-container shadow-sm rounded-tl-none text-primary' 
                        : 'bg-primary text-white rounded-tr-none text-left shadow-md'
                    }`}>
                      <p className="text-[14px] leading-relaxed font-medium">{message.content}</p>
                    </div>

                    {message.hasData && (
                      <div className="bg-white border border-surface-container rounded-2xl p-5 shadow-sm space-y-4 max-w-sm mt-4 text-left">
                        <div className="flex justify-between items-center">
                          <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest">Траектория роста (Q4)</h4>
                          <span className="text-emerald-600 font-bold text-[10px]">+24%</span>
                        </div>
                        <div className="h-12 w-full flex items-end gap-1 px-1">
                          {[30, 45, 40, 65, 90].map((h, i) => (
                            <div key={i} className={`flex-1 rounded-t-[1px] ${i === 4 ? 'bg-primary' : 'bg-surface-dim'}`} style={{ height: `${h}%` }} />
                          ))}
                        </div>
                        <button className="w-full py-2 bg-surface-container-low hover:bg-surface-container text-primary rounded-lg text-[10px] font-bold transition-colors uppercase tracking-[0.15em]">
                          Полная дорожная карта
                        </button>
                      </div>
                    )}
                    
                    <div className={`flex items-center gap-1 px-1 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <span className="text-[9px] text-on-surface-variant font-bold opacity-40 uppercase">{message.time}</span>
                      {message.role === 'user' && message.status && (
                        <span className="text-on-surface-variant flex items-center">
                          {message.status === 'sent' && <Check className="w-2.5 h-2.5 opacity-30" />}
                          {message.status === 'delivered' && <CheckCheck className="w-2.5 h-2.5 opacity-30" />}
                          {message.status === 'read' && <CheckCheck className="w-2.5 h-2.5 text-emerald-500" />}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isBotTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex gap-3 max-w-[85%]"
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-primary text-white">
                    <Bolt className="w-3.5 h-3.5" />
                  </div>
                  <TypingIndicator />
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <footer className="p-4 md:p-6 bg-white border-t border-surface-container">
            <div className="max-w-[700px] mx-auto relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <PlusCircle className="w-4 h-4" />
                </button>
              </div>
              <input 
                className="w-full bg-surface-container-low border-none rounded-2xl py-3.5 pl-12 pr-14 text-[14px] font-medium focus:ring-1 focus:ring-primary/10 transition-all placeholder:text-secondary/40" 
                placeholder="Напишите ваш вопрос..." 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <button 
                  onClick={handleSend}
                  className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-black/5 active:scale-95 transition-transform"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default ChatInterface;
